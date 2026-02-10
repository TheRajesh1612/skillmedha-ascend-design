import { Star, Clock, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  image?: string;
}

const CourseCard = ({ title, category, level, duration, rating, students }: CourseCardProps) => {
  const levelColor = level === "Beginner" ? "bg-green-100 text-green-700" : level === "Intermediate" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700";

  return (
    <div className="card-base group overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <BarChart3 className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{category}</span>
        <h3 className="mt-1 font-semibold text-card-foreground line-clamp-2 leading-snug">{title}</h3>
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColor}`}>{level}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{duration}</span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-card-foreground">{rating}</span>
            <span className="text-muted-foreground">({students.toLocaleString()})</span>
          </div>
          <Link to="#" className="text-sm font-semibold text-primary hover:underline">Enroll →</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
