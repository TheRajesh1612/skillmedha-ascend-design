import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Briefcase, Calendar, User } from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Home", path: "/dashboard" },
  { icon: BookOpen, label: "Courses", path: "/dashboard/courses" },
  { icon: Briefcase, label: "Jobs", path: "/dashboard/applications" },
  { icon: Calendar, label: "Events", path: "/dashboard/workshops" },
  { icon: User, label: "Profile", path: "/dashboard/profile" },
];

const MobileBottomNav = () => {
  const location = useLocation();
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-0.5 px-3 py-1.5 ${active ? "text-primary" : "text-muted-foreground"}`}>
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
