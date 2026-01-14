import React from "react";
import { motion } from "framer-motion";
import { 
  Info, 
  Target, 
  ShieldCheck, 
  Globe, 
  Users, 
  History,
  CheckCircle2
} from "lucide-react";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-20 px-6">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-5xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight uppercase">
            About the Journal
          </h1>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 italic text-lg max-w-3xl mx-auto">
            A leading scientific publication dedicated to the fundamental and applied 
            advancement of psychological science.
          </p>
        </div>

        {/* Mission & Scope */}
        <motion.section variants={fadeIn} className="mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-indigo-600">
              <Target size={32} />
              <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Aims & Scope</h2>
            </div>
            <div className="text-slate-600 space-y-4 leading-relaxed">
              <p>
                The journal publishes articles on fundamental problems of psychology, its methodological, 
                theoretical, and experimental foundations. 
              </p>
              <p>
                We provide a platform for research linked to the applied questions of social and scientific life, 
                publishing original and completed scientific works.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Peer Review & Standards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={fadeIn} className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4 text-indigo-400">
              <ShieldCheck size={28} />
              <h3 className="text-xl font-bold uppercase">Peer Review Process</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To ensure the highest academic quality, the journal employs a <strong>double-blind 
              peer review</strong> process. 
            </p>
            <ul className="text-xs text-indigo-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Evaluated by 2 independent experts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Conducted by editorial board or external specialists
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> High level of publication requirements
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-indigo-50 border border-indigo-100 p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-indigo-700">
              <Globe size={28} />
              <h3 className="text-xl font-bold uppercase">Periodicity</h3>
            </div>
            <p className="text-indigo-900 text-sm leading-relaxed mb-4">
              The journal maintains a regular publication schedule to keep the scientific 
              community updated with the latest research.
            </p>
            <div className="flex items-center gap-2 text-indigo-700 font-bold">
              <span className="text-4xl font-serif">6</span>
              <span className="text-sm uppercase tracking-widest leading-tight">
                Planned Issues<br/>Per Year
              </span>
            </div>
          </motion.div>
        </div>

        {/* Journal Sections */}
        <motion.section variants={fadeIn} className="mb-16">
          <div className="flex items-center gap-3 mb-8 text-indigo-600">
            <Users size={32} />
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Core Sections</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Theoretical Problems",
              "Social Psychology",
              "Cognitive Psychology",
              "Clinical Psychology",
              "Developmental Psychology",
              "Psychophysiology",
              "Professional Activity",
              "Economic Psychology",
              "Interdisciplinary Research"
            ].map((section) => (
              <div key={section} className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3">
                <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full"></div>
                <span className="text-slate-700 text-xs font-semibold uppercase tracking-wide">{section}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Ethics Statement */}
        <motion.div variants={fadeIn} className="p-8 bg-slate-100 rounded-2xl border-l-8 border-indigo-600 italic text-slate-700">
          "The journal aims to maintain a high academic status consistent with international 
          standards to facilitate both independent review and research replication."
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;