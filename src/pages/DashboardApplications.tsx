import { Briefcase, CheckCircle2, Clock, XCircle, Search as SearchIcon, Eye } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import EmptyState from "@/components/EmptyState";

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle2 }> = {
  Applied: { color: "text-blue-600 bg-blue-100", icon: Clock },
  Reviewing: { color: "text-amber-600 bg-amber-100", icon: Eye },
  Shortlisted: { color: "text-purple-600 bg-purple-100", icon: SearchIcon },
  Selected: { color: "text-green-600 bg-green-100", icon: CheckCircle2 },
  Rejected: { color: "text-red-600 bg-red-100", icon: XCircle },
};

const applications = [
  { company: "Google", role: "SDE Intern", applied: "Feb 1, 2026", status: "Shortlisted", timeline: ["Applied", "Reviewing", "Shortlisted"] },
  { company: "Microsoft", role: "Data Intern", applied: "Jan 28, 2026", status: "Applied", timeline: ["Applied"] },
  { company: "Flipkart", role: "PM Intern", applied: "Jan 20, 2026", status: "Selected", timeline: ["Applied", "Reviewing", "Shortlisted", "Selected"] },
  { company: "Amazon", role: "ML Intern", applied: "Jan 15, 2026", status: "Rejected", timeline: ["Applied", "Reviewing", "Rejected"] },
];

const allStatuses = ["Applied", "Reviewing", "Shortlisted", "Selected", "Rejected"];

const DashboardApplications = () => (
  <div className="flex min-h-screen bg-background">
    <DashboardSidebar />
    <main className="flex-1 pb-20 lg:pb-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-foreground mb-1">Internship Applications</h1>
        <p className="text-sm text-muted-foreground mb-6">{applications.length} applications</p>

        {applications.length === 0 ? (
          <EmptyState icon={Briefcase} title="No applications yet" description="Apply to internships to track your progress" actionLabel="Browse Internships" actionLink="/internships" />
        ) : (
          <div className="space-y-4">
            {applications.map((a, i) => {
              const cfg = statusConfig[a.status];
              return (
                <div key={i} className="card-base p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{a.role}</h3>
                      <p className="text-sm text-muted-foreground">{a.company} · Applied {a.applied}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${cfg.color}`}>{a.status}</span>
                  </div>
                  {/* Visual Timeline */}
                  <div className="flex items-center gap-0">
                    {allStatuses.filter(s => s !== "Rejected").map((step, si) => {
                      const reached = a.timeline.includes(step);
                      const rejected = step === "Reviewing" && a.status === "Rejected";
                      return (
                        <div key={si} className="flex items-center flex-1">
                          <div className={`w-3 h-3 rounded-full shrink-0 ${rejected ? "bg-destructive" : reached ? "bg-primary" : "bg-muted"}`} />
                          {si < 3 && <div className={`h-0.5 flex-1 ${reached && a.timeline.includes(allStatuses[si + 1]) ? "bg-primary" : "bg-muted"}`} />}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-1">
                    {allStatuses.filter(s => s !== "Rejected").map((step, si) => (
                      <span key={si} className="text-[10px] text-muted-foreground">{step}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
    <MobileBottomNav />
  </div>
);

export default DashboardApplications;
