import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen, Briefcase, Users, Award, TrendingUp, CheckCircle2,
  Star, ArrowRight, Zap, Target, GraduationCap, Rocket
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import StatCard from "@/components/StatCard";

const featuredCourses = [
  { title: "Full-Stack Web Development with React & Node.js", category: "Development", level: "Intermediate" as const, duration: "12 weeks", rating: 4.8, students: 2340 },
  { title: "Data Science & Machine Learning Fundamentals", category: "Data Science", level: "Beginner" as const, duration: "10 weeks", rating: 4.9, students: 3120 },
  { title: "UI/UX Design Masterclass", category: "Design", level: "Beginner" as const, duration: "8 weeks", rating: 4.7, students: 1890 },
  { title: "Cloud Computing with AWS", category: "Cloud", level: "Advanced" as const, duration: "6 weeks", rating: 4.6, students: 1450 },
];

const testimonials = [
  { name: "Priya Sharma", role: "Software Engineer at Google", text: "SkillMedha's courses gave me the practical skills I needed. The internship program connected me directly with top companies.", rating: 5 },
  { name: "Rahul Verma", role: "Data Analyst at Microsoft", text: "The structured learning paths and mentorship made all the difference. I went from a fresher to landing my dream job in 6 months.", rating: 5 },
  { name: "Ananya Patel", role: "UX Designer at Flipkart", text: "The workshops were incredibly hands-on. I built a portfolio that actually impressed hiring managers.", rating: 5 },
];

const whyUs = [
  { icon: <Target className="w-6 h-6 text-primary" />, title: "Industry-Aligned Curriculum", desc: "Courses designed with input from 200+ hiring partners to match real job requirements." },
  { icon: <Zap className="w-6 h-6 text-primary" />, title: "Hands-On Projects", desc: "Learn by building real projects, not just watching videos. Portfolio-ready from day one." },
  { icon: <Users className="w-6 h-6 text-primary" />, title: "Expert Mentorship", desc: "Get guided by industry professionals with 10+ years of experience in their fields." },
  { icon: <Rocket className="w-6 h-6 text-primary" />, title: "Placement Support", desc: "Dedicated placement cell with 95% placement rate across partner companies." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 section-gradient-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> Trusted by 50,000+ students across India
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Build Skills That{" "}
              <span className="gradient-text">Get You Hired</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Industry-ready courses, real internships, and hands-on workshops designed to bridge the gap between college and career.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/courses" className="btn-accent text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/internships" className="btn-outline text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2">
                View Internships
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container-custom">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" {...fadeIn}>
            <StatCard icon={<GraduationCap className="w-7 h-7 text-primary" />} value="50K+" label="Students Enrolled" />
            <StatCard icon={<BookOpen className="w-7 h-7 text-primary" />} value="200+" label="Expert Courses" />
            <StatCard icon={<Briefcase className="w-7 h-7 text-primary" />} value="500+" label="Hiring Partners" />
            <StatCard icon={<Award className="w-7 h-7 text-primary" />} value="95%" label="Placement Rate" />
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold text-foreground mb-3">Trending Courses</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Curated courses to help you master the most in-demand skills</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Browse All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding section-gradient-bg">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold text-foreground mb-3">Why Choose SkillMedha?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Everything you need to go from learning to earning</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={i} className="card-base p-6" {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="flex flex-col md:flex-row items-center gap-12" {...fadeIn}>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-4">Real Internships, Real Experience</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get placed with top companies and startups. Our internship programs give you real-world experience that sets you apart from the crowd.
              </p>
              <ul className="space-y-3 mb-8">
                {["500+ partner companies", "Remote & onsite options", "Stipend-based internships", "Certificate of completion"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/internships" className="btn-primary inline-flex items-center gap-2 rounded-xl">
                Explore Internships <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { company: "Google", role: "SDE Intern", loc: "Remote" },
                  { company: "Microsoft", role: "Data Intern", loc: "Bangalore" },
                  { company: "Amazon", role: "ML Intern", loc: "Hyderabad" },
                  { company: "Flipkart", role: "PM Intern", loc: "Remote" },
                ].map((item, i) => (
                  <div key={i} className="card-base p-4">
                    <p className="font-semibold text-sm text-card-foreground">{item.role}</p>
                    <p className="text-xs text-muted-foreground">{item.company} · {item.loc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops Preview */}
      <section className="section-padding section-gradient-bg">
        <div className="container-custom text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-foreground mb-3">Upcoming Workshops</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Intensive, hands-on sessions led by industry experts to sharpen your skills
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Build a Full-Stack App in 3 Hours", date: "Mar 15, 2026", mentor: "Amit Kumar" },
                { title: "Introduction to Generative AI", date: "Mar 22, 2026", mentor: "Dr. Sneha Rao" },
                { title: "Resume & Interview Prep", date: "Mar 29, 2026", mentor: "Neha Gupta" },
              ].map((w, i) => (
                <div key={i} className="card-base p-6 text-left">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">Workshop</span>
                  <h3 className="mt-2 font-semibold text-card-foreground">{w.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{w.date} · {w.mentor}</p>
                  <button className="btn-accent w-full mt-4 text-sm py-2.5 rounded-lg">Register</button>
                </div>
              ))}
            </div>
            <Link to="/workshops" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Workshops <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold text-foreground mb-3">What Our Students Say</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Success stories from students who transformed their careers</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="card-base p-6" {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{ background: "var(--hero-gradient)" }}
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Journey?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Join thousands of students building future-ready skills with SkillMedha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-accent text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/courses" className="bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/30 px-8 py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/30 transition-colors">
                Browse Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
