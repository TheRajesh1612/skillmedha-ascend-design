import { motion } from "framer-motion";
import { Target, Eye, Users, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";

const team = [
  { name: "Dr. Rajesh Kumar", role: "Founder & CEO", bio: "15+ years in education technology" },
  { name: "Priya Mehta", role: "Head of Curriculum", bio: "Ex-Google, Stanford CS" },
  { name: "Vikram Singh", role: "CTO", bio: "Built scalable platforms at Amazon" },
  { name: "Ananya Reddy", role: "Head of Partnerships", bio: "Connected 500+ companies" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <div className="pt-24 pb-8 section-gradient-bg">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-foreground mb-2">About SkillMedha</h1>
        <p className="text-muted-foreground">Bridging the gap between education and employment</p>
      </div>
    </div>

    {/* Mission & Vision */}
    <section className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div className="card-base p-8" {...fadeIn}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-card-foreground mb-3">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To make industry-ready education accessible to every student in India. We believe that talent is universal, but opportunity is not — and we're here to change that.
          </p>
        </motion.div>
        <motion.div className="card-base p-8" {...fadeIn} transition={{ delay: 0.1 }}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-card-foreground mb-3">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To become India's most trusted platform for skill development, connecting 1 million students with meaningful careers by 2030.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Impact */}
    <section className="section-padding section-gradient-bg">
      <div className="container-custom">
        <motion.h2 className="text-2xl font-bold text-foreground text-center mb-10" {...fadeIn}>Our Impact</motion.h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" {...fadeIn}>
          <StatCard icon={<GraduationCap className="w-7 h-7 text-primary" />} value="50,000+" label="Students Trained" />
          <StatCard icon={<BookOpen className="w-7 h-7 text-primary" />} value="200+" label="Courses Offered" />
          <StatCard icon={<Briefcase className="w-7 h-7 text-primary" />} value="500+" label="Partner Companies" />
          <StatCard icon={<Award className="w-7 h-7 text-primary" />} value="95%" label="Placement Rate" />
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="container-custom py-16">
      <motion.div className="max-w-2xl mx-auto text-center" {...fadeIn}>
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          SkillMedha was founded in 2021 with a simple observation: thousands of talented students graduate every year without the practical skills that employers demand.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We started with 5 courses and a handful of students. Today, we serve 50,000+ learners across India through 200+ courses, real internships, and hands-on workshops—all designed with direct input from our 500+ hiring partners.
        </p>
      </motion.div>
    </section>

    {/* Team */}
    <section className="section-padding section-gradient-bg">
      <div className="container-custom">
        <motion.h2 className="text-2xl font-bold text-foreground text-center mb-10" {...fadeIn}>Leadership Team</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div key={i} className="card-base p-6 text-center" {...fadeIn} transition={{ delay: i * 0.1 }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
