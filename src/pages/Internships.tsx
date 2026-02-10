import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";

const allInternships = [
  { company: "Google", role: "Software Development Intern", duration: "6 months", location: "Bangalore", type: "Hybrid" as const },
  { company: "Microsoft", role: "Data Science Intern", duration: "3 months", location: "Hyderabad", type: "Remote" as const },
  { company: "Amazon", role: "ML Engineering Intern", duration: "6 months", location: "Bangalore", type: "Onsite" as const },
  { company: "Flipkart", role: "Product Management Intern", duration: "4 months", location: "Bangalore", type: "Remote" as const },
  { company: "Razorpay", role: "Frontend Developer Intern", duration: "3 months", location: "Bangalore", type: "Hybrid" as const },
  { company: "Zomato", role: "UI/UX Design Intern", duration: "3 months", location: "Gurugram", type: "Onsite" as const },
  { company: "PhonePe", role: "Backend Developer Intern", duration: "6 months", location: "Pune", type: "Remote" as const },
  { company: "Swiggy", role: "Business Analyst Intern", duration: "4 months", location: "Bangalore", type: "Hybrid" as const },
];

const Internships = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const types = ["All", "Remote", "Onsite", "Hybrid"];

  const filtered = allInternships.filter((i) => {
    const matchSearch = i.role.toLowerCase().includes(search.toLowerCase()) || i.company.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "All" || i.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8 section-gradient-bg">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-foreground mb-2">Internship Opportunities</h1>
          <p className="text-muted-foreground mb-6">Real-world experience at top companies</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by role or company..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex gap-2">
              {types.map((t) => (
                <button key={t} onClick={() => setTypeFilter(t)} className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${typeFilter === t ? "bg-primary text-primary-foreground" : "bg-card border border-input text-foreground hover:bg-secondary"}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((internship, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <InternshipCard {...internship} />
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-20 text-muted-foreground">No internships found matching your criteria.</div>}
      </div>
      <Footer />
    </div>
  );
};

export default Internships;
