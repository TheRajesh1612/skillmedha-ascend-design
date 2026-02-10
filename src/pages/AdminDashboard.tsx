import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, BookOpen, Briefcase, Calendar,
  BarChart3, Settings, GraduationCap, CheckCircle2, Clock,
  XCircle, TrendingUp, ArrowUpRight, ChevronLeft, ChevronRight, LogOut, Eye
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const adminMenu = [
  { icon: LayoutDashboard, label: "Overview", path: "/admin" },
  { icon: Users, label: "Students", path: "/admin/students" },
  { icon: BookOpen, label: "Enrollments", path: "/admin/enrollments" },
  { icon: Briefcase, label: "Applications", path: "/admin/applications" },
  { icon: Calendar, label: "Workshops", path: "/admin/workshops" },
  { icon: BarChart3, label: "Reports", path: "/admin/reports" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const recentEnrollments = [
  { student: "Priya Sharma", course: "Full-Stack Development", date: "Feb 10", status: "Active" },
  { student: "Rahul Verma", course: "Data Science", date: "Feb 9", status: "Active" },
  { student: "Ananya Patel", course: "UI/UX Design", date: "Feb 8", status: "Pending" },
  { student: "Vikram Singh", course: "Cloud Computing", date: "Feb 7", status: "Active" },
];

const pendingApprovals = [
  { student: "Sneha Rao", type: "Internship", company: "Google", role: "SDE Intern" },
  { student: "Karan Mehta", type: "Workshop", event: "AI Bootcamp" },
  { student: "Divya Jain", type: "Internship", company: "Microsoft", role: "Data Intern" },
];

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`hidden lg:flex flex-col bg-card border-r border-border h-screen sticky top-0 transition-all duration-300 ${collapsed ? "w-16" : "w-60"}`}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <Link to="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-bold text-foreground text-sm">Admin Panel</span>
            </Link>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {adminMenu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border space-y-1">
          <ThemeToggle className={collapsed ? "mx-auto" : ""} />
          <Link to="/" className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1">
        <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">View Site</Link>
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">A</div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Students", value: "12,450", change: "+12%", icon: Users, color: "text-primary bg-primary/10" },
              { label: "Active Enrollments", value: "3,280", change: "+8%", icon: BookOpen, color: "text-accent bg-accent/10" },
              { label: "Applications", value: "856", change: "+23%", icon: Briefcase, color: "text-blue-600 bg-blue-100" },
              { label: "Workshops", value: "24", change: "+5", icon: Calendar, color: "text-green-600 bg-green-100" },
            ].map((s, i) => (
              <motion.div key={i} className="card-base p-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" /> {s.change}</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Recent Enrollments */}
            <div className="lg:col-span-3 card-base p-6">
              <h2 className="font-semibold text-foreground mb-5">Recent Enrollments</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Student</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Course</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Date</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentEnrollments.map((e, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="py-3 font-medium text-foreground">{e.student}</td>
                        <td className="py-3 text-muted-foreground">{e.course}</td>
                        <td className="py-3 text-muted-foreground">{e.date}</td>
                        <td className="py-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${e.status === "Active" ? "text-green-600 bg-green-100" : "text-amber-600 bg-amber-100"}`}>{e.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="lg:col-span-2 card-base p-6">
              <h2 className="font-semibold text-foreground mb-5">Pending Approvals</h2>
              <div className="space-y-4">
                {pendingApprovals.map((p, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.student}</p>
                      <p className="text-xs text-muted-foreground">{p.type === "Internship" ? `${p.company} — ${p.role}` : p.event}</p>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <button className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors">
                        <XCircle className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
