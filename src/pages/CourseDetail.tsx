import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Clock, BarChart3, Users, BookOpen, CheckCircle2,
  Play, Award, ArrowLeft, Loader2, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type EnrollState = "idle" | "confirm" | "loading" | "success" | "error";

const course = {
  title: "Full-Stack Web Development with React & Node.js",
  category: "Development",
  level: "Intermediate",
  duration: "12 weeks",
  rating: 4.8,
  students: 2340,
  description: "Master modern web development by building real-world applications with React, Node.js, Express, and PostgreSQL. From frontend interfaces to backend APIs — become a complete full-stack developer.",
  mentor: "Amit Kumar",
  mentorTitle: "Senior Engineer at Google, 12+ yrs experience",
  modules: [
    { title: "HTML, CSS & JavaScript Foundations", lessons: 8 },
    { title: "React Fundamentals & Hooks", lessons: 10 },
    { title: "State Management & Routing", lessons: 6 },
    { title: "Node.js & Express Backend", lessons: 8 },
    { title: "Database Design with PostgreSQL", lessons: 6 },
    { title: "REST API Development", lessons: 5 },
    { title: "Authentication & Authorization", lessons: 4 },
    { title: "Deployment & DevOps Basics", lessons: 3 },
  ],
  outcomes: [
    "Build full-stack web applications from scratch",
    "Design and implement REST APIs",
    "Work with databases and ORMs",
    "Deploy applications to cloud platforms",
    "Write clean, maintainable, production-ready code",
  ],
};

const CourseDetail = () => {
  const [enrollState, setEnrollState] = useState<EnrollState>("idle");

  const handleEnroll = () => {
    setEnrollState("confirm");
  };

  const confirmEnroll = () => {
    setEnrollState("loading");
    setTimeout(() => {
      // Mock success/error
      setEnrollState(Math.random() > 0.15 ? "success" : "error");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8 section-gradient-bg">
        <div className="container-custom">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{course.category}</span>
              <h1 className="text-3xl font-bold text-foreground mt-2 mb-4">{course.title}</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {course.rating} ({course.students.toLocaleString()} students)</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> {course.level}</span>
              </div>
            </div>

            {/* Sticky Enroll Card */}
            <div className="lg:w-80 shrink-0">
              <div className="card-base p-6 lg:sticky lg:top-24">
                <div className="h-36 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
                  <Play className="w-12 h-12 text-primary/50" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{course.modules.reduce((a, m) => a + m.lessons, 0)} lessons · {course.modules.length} modules</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <Award className="w-4 h-4" /> Certificate on completion
                </div>
                <button onClick={handleEnroll} disabled={enrollState !== "idle"} className="btn-accent w-full py-3 rounded-xl text-base disabled:opacity-50">
                  Enroll Now — Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Mentor */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Instructor</h2>
              <div className="card-base p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">A</div>
                <div>
                  <p className="font-semibold text-foreground">{course.mentor}</p>
                  <p className="text-sm text-muted-foreground">{course.mentorTitle}</p>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Curriculum</h2>
              <div className="space-y-2">
                {course.modules.map((m, i) => (
                  <div key={i} className="card-base p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">{i + 1}</span>
                      <span className="font-medium text-sm text-foreground">{m.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{m.lessons} lessons</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal Overlay */}
      <AnimatePresence>
        {enrollState !== "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4"
            onClick={() => enrollState === "success" || enrollState === "error" ? setEnrollState("idle") : null}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {enrollState === "confirm" && (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Confirm Enrollment</h3>
                  <p className="text-sm text-muted-foreground mb-6">{course.title}</p>
                  <div className="flex gap-3">
                    <button onClick={() => setEnrollState("idle")} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors">Cancel</button>
                    <button onClick={confirmEnroll} className="flex-1 btn-accent py-2.5 rounded-xl text-sm">Confirm</button>
                  </div>
                </div>
              )}
              {enrollState === "loading" && (
                <div className="text-center py-8">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Processing enrollment...</p>
                </div>
              )}
              {enrollState === "success" && (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Enrolled Successfully!</h3>
                  <p className="text-sm text-muted-foreground mb-6">You're all set to start learning.</p>
                  <div className="flex flex-col gap-3">
                    <Link to="/dashboard/courses" className="btn-accent py-2.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">Start Learning <ArrowRight className="w-4 h-4" /></Link>
                    <Link to="/dashboard" className="text-sm text-primary font-medium hover:underline">Go to Dashboard</Link>
                  </div>
                </div>
              )}
              {enrollState === "error" && (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Something Went Wrong</h3>
                  <p className="text-sm text-muted-foreground mb-6">We couldn't process your enrollment. Please try again.</p>
                  <div className="flex gap-3">
                    <button onClick={() => setEnrollState("idle")} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors">Close</button>
                    <button onClick={confirmEnroll} className="flex-1 btn-accent py-2.5 rounded-xl text-sm">Retry</button>
                  </div>
                  <a href="/contact" className="text-xs text-muted-foreground hover:underline mt-4 inline-block">Contact Support</a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CourseDetail;
