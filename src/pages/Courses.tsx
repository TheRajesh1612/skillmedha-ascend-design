import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

const allCourses = [
  { title: "Full-Stack Web Development with React & Node.js", category: "Development", level: "Intermediate" as const, duration: "12 weeks", rating: 4.8, students: 2340 },
  { title: "Data Science & Machine Learning Fundamentals", category: "Data Science", level: "Beginner" as const, duration: "10 weeks", rating: 4.9, students: 3120 },
  { title: "UI/UX Design Masterclass", category: "Design", level: "Beginner" as const, duration: "8 weeks", rating: 4.7, students: 1890 },
  { title: "Cloud Computing with AWS", category: "Cloud", level: "Advanced" as const, duration: "6 weeks", rating: 4.6, students: 1450 },
  { title: "Python for Data Analysis", category: "Data Science", level: "Beginner" as const, duration: "6 weeks", rating: 4.8, students: 2100 },
  { title: "Digital Marketing Essentials", category: "Marketing", level: "Beginner" as const, duration: "4 weeks", rating: 4.5, students: 980 },
  { title: "Mobile App Development with Flutter", category: "Development", level: "Intermediate" as const, duration: "10 weeks", rating: 4.7, students: 1650 },
  { title: "Cybersecurity Fundamentals", category: "Security", level: "Beginner" as const, duration: "8 weeks", rating: 4.6, students: 1200 },
  { title: "Advanced JavaScript & TypeScript", category: "Development", level: "Advanced" as const, duration: "8 weeks", rating: 4.9, students: 2800 },
];

const categories = ["All", "Development", "Data Science", "Design", "Cloud", "Marketing", "Security"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = allCourses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || c.category === category;
    const matchLvl = level === "All" || c.level === level;
    return matchSearch && matchCat && matchLvl;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8 section-gradient-bg">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-foreground mb-2">Explore Courses</h1>
          <p className="text-muted-foreground mb-6">Find the perfect course to advance your career</p>
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="px-4 py-2.5 rounded-xl border border-input bg-card text-sm font-medium flex items-center gap-2 hover:bg-secondary transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 flex flex-wrap gap-6">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${category === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Level</label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((l) => (
                    <button key={l} onClick={() => setLevel(l)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${level === l ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>{l}</button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <div className="container-custom py-10">
        <p className="text-sm text-muted-foreground mb-6">{filtered.length} courses found</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No courses found matching your criteria.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
