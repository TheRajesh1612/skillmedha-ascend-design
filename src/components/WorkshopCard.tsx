import { Calendar, User, Clock } from "lucide-react";

interface WorkshopCardProps {
  title: string;
  date: string;
  time: string;
  mentor: string;
  category: string;
}

const WorkshopCard = ({ title, date, time, mentor, category }: WorkshopCardProps) => {
  return (
    <div className="card-base p-5 flex flex-col">
      <span className="text-xs font-medium text-accent uppercase tracking-wider">{category}</span>
      <h3 className="mt-2 font-semibold text-card-foreground leading-snug">{title}</h3>
      <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />{date}</span>
        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{time}</span>
        <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" />{mentor}</span>
      </div>
      <button className="btn-accent w-full mt-auto pt-4 text-sm py-2.5 rounded-lg">Register Now</button>
    </div>
  );
};

export default WorkshopCard;
