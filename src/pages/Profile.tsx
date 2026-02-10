import { useState } from "react";
import { User, GraduationCap, Wrench, FileText, Award, Save, CheckCircle2 } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Progress } from "@/components/ui/progress";

const sections = ["Personal", "Education", "Skills", "Resume", "Certifications"];

const Profile = () => {
  const [activeSection, setActiveSection] = useState("Personal");
  const [saved, setSaved] = useState(false);
  const completionPercent = 72;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 pb-20 lg:pb-0">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-foreground mb-1">My Profile</h1>
              <p className="text-sm text-muted-foreground">Complete your profile to get better opportunities</p>
            </div>
            <button onClick={handleSave} className={`btn-primary text-sm py-2 px-5 rounded-lg inline-flex items-center gap-2 ${saved ? "bg-green-600" : ""}`}>
              {saved ? <><CheckCircle2 className="w-4 h-4" /> Saved</> : <><Save className="w-4 h-4" /> Save</>}
            </button>
          </div>

          {/* Completion Bar */}
          <div className="card-base p-5 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Profile Completion</span>
              <span className="text-sm font-bold text-primary">{completionPercent}%</span>
            </div>
            <Progress value={completionPercent} className="h-2.5" />
            <p className="text-xs text-muted-foreground mt-2">Add your resume and skills to reach 100%</p>
          </div>

          {/* Section Tabs */}
          <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
            {sections.map(s => (
              <button key={s} onClick={() => setActiveSection(s)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeSection === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>
                {s}
              </button>
            ))}
          </div>

          {/* Personal Info */}
          {activeSection === "Personal" && (
            <div className="card-base p-6 space-y-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">P</div>
                <div>
                  <p className="font-semibold text-foreground">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">priya@example.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input defaultValue="Priya Sharma" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input defaultValue="priya@example.com" type="email" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input defaultValue="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
                  <input defaultValue="New Delhi, India" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Bio</label>
                <textarea rows={3} defaultValue="Computer Science student passionate about full-stack development and data science." className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
            </div>
          )}

          {activeSection === "Education" && (
            <div className="card-base p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">College</label>
                  <input defaultValue="Delhi University" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Degree</label>
                  <input defaultValue="B.Tech Computer Science" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Graduation Year</label>
                  <input defaultValue="2027" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">CGPA</label>
                  <input defaultValue="8.5" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
            </div>
          )}

          {activeSection === "Skills" && (
            <div className="card-base p-6">
              <p className="text-sm text-muted-foreground mb-4">Add your technical and soft skills</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Python", "Node.js", "SQL", "Figma", "Git"].map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{s}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <input placeholder="Add a skill..." className="flex-1 px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <button className="btn-primary text-sm py-2.5 px-5 rounded-xl">Add</button>
              </div>
            </div>
          )}

          {activeSection === "Resume" && (
            <div className="card-base p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">Upload your resume (PDF, max 5MB)</p>
              <button className="btn-outline text-sm py-2.5 px-6 rounded-xl">Upload Resume</button>
            </div>
          )}

          {activeSection === "Certifications" && (
            <div className="card-base p-6">
              <div className="space-y-4">
                {[
                  { name: "Google Data Analytics Certificate", date: "Jan 2026" },
                  { name: "AWS Cloud Practitioner", date: "Dec 2025" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
};

export default Profile;
