import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkshopCard from "@/components/WorkshopCard";

const workshops = [
  { title: "Build a Full-Stack App in 3 Hours", date: "Mar 15, 2026", time: "10:00 AM - 1:00 PM", mentor: "Amit Kumar", category: "Development" },
  { title: "Introduction to Generative AI", date: "Mar 22, 2026", time: "2:00 PM - 5:00 PM", mentor: "Dr. Sneha Rao", category: "AI/ML" },
  { title: "Resume & Interview Preparation", date: "Mar 29, 2026", time: "11:00 AM - 1:00 PM", mentor: "Neha Gupta", category: "Career" },
  { title: "Data Visualization with Python", date: "Apr 5, 2026", time: "10:00 AM - 12:30 PM", mentor: "Ravi Shankar", category: "Data Science" },
  { title: "Cloud Deployment with Docker & Kubernetes", date: "Apr 12, 2026", time: "3:00 PM - 6:00 PM", mentor: "Suresh Menon", category: "DevOps" },
  { title: "Figma for Developers", date: "Apr 19, 2026", time: "10:00 AM - 12:00 PM", mentor: "Anita Desai", category: "Design" },
];

const Workshops = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-8 section-gradient-bg">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-foreground mb-2">Workshops</h1>
        <p className="text-muted-foreground">Hands-on sessions led by industry experts</p>
      </div>
    </div>
    <div className="container-custom py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((w, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <WorkshopCard {...w} />
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Workshops;
