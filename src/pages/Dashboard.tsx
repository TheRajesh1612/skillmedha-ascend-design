import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen, Briefcase, Calendar, Award, TrendingUp,
  Clock, ArrowRight, Bell, CheckCircle2
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Progress } from "@/components/ui/progress";

const enrolledCourses = [
  { title: "Full-Stack Web Development", progress: 65, nextLesson: "Building REST APIs" },
  { title: "Data Science Fundamentals", progress: 30, nextLesson: "Pandas DataFrames" },
  { title: "UI/UX Design Masterclass", progress: 90, nextLesson: "Final Project Review" },
];

const applications = [
  { company: "Google", role: "SDE Intern", status: "Shortlisted", color: "text-amber-600 bg-amber-100" },
  { company: "Microsoft", role: "Data Intern", status: "Applied", color: "text-blue-600 bg-blue-100" },
  { company: "Flipkart", role: "PM Intern", status: "Selected", color: "text-green-600 bg-green-100" },
];

const notifications = [
  { text: "Your application to Google was shortlisted!", time: "2h ago", read: false },
  { text: "New workshop: AI with Python — Register now", time: "5h ago", read: false },
  { text: "Certificate ready for UI/UX Design", time: "1d ago", read: true },
];

const Dashboard = () => (
  <div className="flex min-h-screen bg-background">
    <DashboardSidebar />
    <main className="flex-1 pb-20 lg:pb-0">
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Welcome back, Priya 👋</h1>
          <p className="text-sm text-muted-foreground">Here's your learning overview</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </button>
          <Link to="/dashboard/profile" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">P</Link>
        </div>
      </header>

      <div className="p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, label: "Enrolled Courses", value: "3", color: "text-primary bg-primary/10" },
            { icon: Briefcase, label: "Applications", value: "5", color: "text-accent bg-accent/10" },
            { icon: Calendar, label: "Workshops", value: "2", color: "text-blue-600 bg-blue-100" },
            { icon: Award, label: "Certificates", value: "4", color: "text-green-600 bg-green-100" },
          ].map((s, i) => (
            <motion.div key={i} className="card-base p-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Courses */}
          <div className="lg:col-span-2 card-base p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-foreground flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> My Courses</h2>
              <Link to="/dashboard/courses" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
            </div>
            <div className="space-y-5">
              {enrolledCourses.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{c.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> Next: {c.nextLesson}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <Progress value={c.progress} className="h-2 flex-1" />
                      <span className="text-xs font-medium text-muted-foreground">{c.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="card-base p-6">
            <h2 className="font-semibold text-foreground flex items-center gap-2 mb-5"><Bell className="w-5 h-5 text-primary" /> Notifications</h2>
            <div className="space-y-4">
              {notifications.map((n, i) => (
                <div key={i} className={`flex items-start gap-3 ${n.read ? "opacity-60" : ""}`}>
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.read ? "bg-muted" : "bg-accent"}`} />
                  <div>
                    <p className="text-sm text-foreground leading-snug">{n.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Status */}
        <div className="card-base p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-foreground flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Internship Applications</h2>
            <Link to="/dashboard/applications" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-muted-foreground font-medium">Company</th>
                  <th className="text-left py-3 text-muted-foreground font-medium">Role</th>
                  <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-right py-3 text-muted-foreground font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{a.company}</td>
                    <td className="py-3 text-muted-foreground">{a.role}</td>
                    <td className="py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-medium ${a.color}`}>{a.status}</span></td>
                    <td className="py-3 text-right"><Link to="/dashboard/applications" className="text-primary text-xs font-medium hover:underline">View →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    <MobileBottomNav />
  </div>
);

export default Dashboard;
