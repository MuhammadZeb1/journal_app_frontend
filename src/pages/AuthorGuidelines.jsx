import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, FileText } from "lucide-react";

export default function AuthorGuidelines() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Call for Papers Badge from your image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-[#EBEBFF] text-[#4F46E5] px-5 py-2 rounded-full text-xs font-bold mb-8 border border-[#DADAFF]"
        >
          <div className="w-2 h-2 bg-[#4F46E5] rounded-full" />
          CALL FOR PAPERS: WINTER 2026 EDITION
        </motion.div>

        <h1 className="text-4xl font-serif mb-10 text-slate-900">Author Guidelines</h1>
        
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-slate-800">Submission Checklist</h2>
            <ul className="grid gap-3">
              {[
                "Manuscripts must be original and not previously published.",
                "Follow APA Style (7th Edition) for all citations and references.",
                "Abstract must be between 200-250 words.",
                "Include 5-7 keywords reflecting the core research area."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                  <CheckCircle2 size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Platform Support Info from your image */}
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <AlertCircle size={24} />
              <h2 className="text-xl font-bold font-serif">Support Contact</h2>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              For technical issues regarding the RCSI Journals' Platform, please contact our technical support team directly.
            </p>
            <div className="p-4 bg-slate-800/50 rounded-xl inline-block">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Email Support</p>
              <p className="text-primary font-medium">journals_support@rcsi.science</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}