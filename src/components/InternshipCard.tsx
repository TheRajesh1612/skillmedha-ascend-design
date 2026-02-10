import { MapPin, Clock, Building2 } from "lucide-react";

interface InternshipCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: "Remote" | "Onsite" | "Hybrid";
}

const InternshipCard = ({ company, role, duration, location, type }: InternshipCardProps) => {
  const typeColor = type === "Remote" ? "bg-blue-100 text-blue-700" : type === "Hybrid" ? "bg-violet-100 text-violet-700" : "bg-emerald-100 text-emerald-700";

  return (
    <div className="card-base p-5">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground truncate">{role}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{company}</p>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span className={`px-2 py-0.5 rounded-full font-medium ${typeColor}`}>{type}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{duration}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{location}</span>
          </div>
        </div>
      </div>
      <button className="btn-primary w-full mt-4 text-sm py-2.5">Apply Now</button>
    </div>
  );
};

export default InternshipCard;
