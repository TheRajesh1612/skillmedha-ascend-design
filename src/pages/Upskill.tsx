import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, BookOpen, Award, Code, Database, Brain, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const paths = [
  {
    level: "Beginner",
    color: "bg-green-500",
    skills: ["HTML & CSS", "JavaScript Basics", "Python Fundamentals", "Git & GitHub"],
    desc: "Build a strong foundation with core programming and web basics.",
  },
  {
    level: "Intermediate",
    color: "bg-amber-500",
    skills: ["React & Node.js", "Data Structures", "SQL & Databases", "API Design"],
    desc: "Level up with frameworks, databases, and system design principles.",
  },
  {
    level: "Advanced",
    color: "bg-red-500",
    skills: ["System Design", "Cloud Architecture", "Machine Learning", "DevOps & CI/CD"],
    desc: "Master complex systems and cutting-edge technologies.",
  },
];

const trendingSkills = [
  { name: "Generative AI", icon: <Brain className="w-5 h-5" />, growth: "+340%" },
  { name: "Full-Stack Development", icon: <Code className="w-5 h-5" />, growth: "+120%" },
  { name: "Data Engineering", icon: <Database className="w-5 h-5" />, growth: "+95%" },
  { name: "Product Design", icon: <Palette className="w-5 h-5" />, growth: "+78%" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Upskill = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <div className="pt-24 pb-8 section-gradient-bg">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-foreground mb-2">Upskill Your Career</h1>
        <p className="text-muted-foreground">Structured learning paths from beginner to industry-ready</p>
      </div>
    </div>

    {/* Learning Paths */}
    <section className="container-custom py-16">
      <motion.h2 className="text-2xl font-bold text-foreground mb-8" {...fadeIn}>Your Learning Journey</motion.h2>
      <div className="relative">
        {/* Connection line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-8 md:space-y-12">
          {paths.map((path, i) => (
            <motion.div key={i} className={`md:flex items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`} {...fadeIn} transition={{ delay: i * 0.15 }}>
              <div className="flex-1">
                <div className="card-base p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${path.color}`} />
                    <h3 className="font-bold text-lg text-card-foreground">{path.level}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{path.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full bg-card border-2 border-primary items-center justify-center shrink-0 z-10">
                <span className="text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trending Skills */}
    <section className="section-padding section-gradient-bg">
      <div className="container-custom">
        <motion.div className="text-center mb-10" {...fadeIn}>
          <h2 className="text-2xl font-bold text-foreground mb-2">Trending Skills in 2026</h2>
          <p className="text-muted-foreground">Stay ahead with the most in-demand skills</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingSkills.map((skill, i) => (
            <motion.div key={i} className="card-base p-6" {...fadeIn} transition={{ delay: i * 0.1 }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">{skill.icon}</div>
              <h3 className="font-semibold text-card-foreground">{skill.name}</h3>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium">{skill.growth}</span>
                <span className="text-muted-foreground">demand growth</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-custom text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Start Building Your Future Today</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Choose a learning path and take the first step toward your dream career.</p>
          <Link to="/courses" className="btn-accent inline-flex items-center gap-2 text-base px-8 py-3.5 rounded-xl">
            Explore Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Upskill;
