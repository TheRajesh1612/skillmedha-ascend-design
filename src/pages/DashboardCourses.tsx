import { BookOpen } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Progress } from "@/components/ui/progress";
import EmptyState from "@/components/EmptyState";

const courses = [
  { title: "Full-Stack Web Development", progress: 65, lessons: 48, completed: 31, nextLesson: "Building REST APIs" },
  { title: "Data Science Fundamentals", progress: 30, lessons: 36, completed: 11, nextLesson: "Pandas DataFrames" },
  { title: "UI/UX Design Masterclass", progress: 90, lessons: 24, completed: 22, nextLesson: "Final Project Review" },
];

const DashboardCourses = () => (
  <div className="flex min-h-screen bg-background">
    <DashboardSidebar />
    <main className="flex-1 pb-20 lg:pb-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-foreground mb-1">My Courses</h1>
        <p className="text-sm text-muted-foreground mb-6">{courses.length} courses enrolled</p>

        {courses.length === 0 ? (
          <EmptyState icon={BookOpen} title="No courses yet" description="Start learning by enrolling in a course" actionLabel="Browse Courses" actionLink="/courses" />
        ) : (
          <div className="space-y-4">
            {courses.map((c, i) => (
              <div key={i} className="card-base p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Next: {c.nextLesson}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <Progress value={c.progress} className="h-2 flex-1 max-w-xs" />
                      <span className="text-sm font-medium text-muted-foreground">{c.completed}/{c.lessons} lessons</span>
                    </div>
                  </div>
                  <button className="btn-primary text-sm py-2 px-5 rounded-lg shrink-0">Continue</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
    <MobileBottomNav />
  </div>
);

export default DashboardCourses;
