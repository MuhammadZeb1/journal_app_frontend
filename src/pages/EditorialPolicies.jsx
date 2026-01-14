import React from "react";
import { motion } from "framer-motion";
import { 
  Scale, 
  ShieldAlert, 
  BookOpen, 
  Globe, 
  Fingerprint, 
  History, 
  Target, 
  Layers, 
  Eye, 
  Calendar, 
  CreditCard, 
  Clock 
} from "lucide-react";

const EditorialPolicies = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-16 px-6">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight uppercase">
            Editorial Policies
          </h1>
          <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 italic text-lg max-w-2xl mx-auto">
            Governing the Author–Reviewer–Editor relationship through ethical principles and academic excellence.
          </p>
        </div>

        {/* Section: Aims and Scope */}
        <motion.section variants={fadeIn} className="mb-16">
          <div className="flex items-center gap-3 mb-6 text-indigo-600">
            <Target size={32} />
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Aims and Scope</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm leading-relaxed text-slate-600">
            <p className="mb-4">
              The journal publishes articles on fundamental problems of psychology, its methodological, theoretical, and experimental foundations, as well as research results related to applied issues in social and scientific life.
            </p>
            <p className="mb-4">
              We publish original, completed scientific papers in various genres, including theoretical and methodological articles, empirical research descriptions, and critical literature reviews.
            </p>
          </div>
        </motion.section>

        {/* Section: Peer Review & Frequency */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.section variants={fadeIn}>
            <div className="flex items-center gap-3 text-indigo-600 mb-6">
              <Eye size={28} />
              <h2 className="text-xl font-serif font-bold uppercase tracking-tight">Peer Review Process</h2>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between border-b pb-2 border-slate-200">
                <span className="text-slate-500">Review Type</span>
                <span className="font-bold text-slate-900">Double-blind</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-slate-200">
                <span className="text-slate-500">Number of Reviewers</span>
                <span className="font-bold text-slate-900">2</span>
              </div>
              <p className="text-xs text-slate-500 italic pt-2">
                Reviewing is carried out by editorial board members or external experts.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeIn}>
            <div className="flex items-center gap-3 text-indigo-600 mb-6">
              <Calendar size={28} />
              <h2 className="text-xl font-serif font-bold uppercase tracking-tight">Publication Frequency</h2>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-center h-[145px]">
              <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2 font-bold">Periodicity</p>
              <h3 className="text-3xl font-serif">6 Issues Per Year</h3>
              <p className="text-slate-400 text-sm mt-2">6 planned issues are regularly published.</p>
            </div>
          </motion.section>
        </div>

        {/* Section: Journal Sections */}
        <motion.section variants={fadeIn} className="mb-16">
          <div className="flex items-center gap-3 mb-6 text-indigo-600">
            <Layers size={32} />
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Journal Sections</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-600">
              <li>• Clinical Psychology</li>
              <li>• Social Psychology</li>
              <li>• Cognitive Psychology</li>
              <li>• Developmental Psychology</li>
              <li>• Psychophysiology</li>
              <li>• Economic Psychology</li>
              <li>• History of Psychology</li>
              <li>• Interdisciplinary Research</li>
              <li>• Psychology and Society</li>
            </ul>
          </div>
        </motion.section>

        {/* Section: Ethical Requirements */}
        <motion.section variants={fadeIn} className="mb-16">
          <div className="flex items-center gap-3 mb-6 text-indigo-600">
            <ShieldAlert size={32} />
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Ethical Requirements</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 bg-white border border-slate-200 p-6 rounded-xl items-start">
              <Fingerprint className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Originality & Anti-Plagiarism</h4>
                <p className="text-sm text-slate-600">
                  Manuscripts must not contain signs of plagiarism or self-plagiarism. Submitting the same materials simultaneously to different publishers is strictly prohibited.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white border border-slate-200 p-6 rounded-xl items-start">
              <BookOpen className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Completeness of Research</h4>
                <p className="text-sm text-slate-600">
                  The journal publishes completed works whose conclusions are fully substantiated. Descriptions of pilot studies will not be accepted.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section: Purchase Access */}
        <motion.section variants={fadeIn} className="mb-16">
          <div className="flex items-center gap-3 text-indigo-600 mb-6">
            <CreditCard size={28} />
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Purchase & Access</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-8 rounded-2xl bg-white hover:border-indigo-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Individual Article</h3>
              <p className="text-3xl font-serif text-indigo-600 mb-4">$16.00 <span className="text-sm text-slate-400 font-sans">USD</span></p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Includes full access to read, download, and print the article in PDF/HTML format for an unlimited time.
              </p>
            </div>
            <div className="border border-slate-200 p-8 rounded-2xl bg-white hover:border-indigo-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Full Issue</h3>
              <p className="text-3xl font-serif text-indigo-600 mb-4">$120.00 <span className="text-sm text-slate-400 font-sans">USD</span></p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Purchase access to all articles published in a single issue for an unlimited time.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-amber-50 border border-amber-100 p-6 rounded-2xl flex gap-4">
            <Clock className="text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>Embargo Period:</strong> Purchased access allows reading and downloading but does not allow distribution or reproduction until 3 years after publication.
            </p>
          </div>
        </motion.section>

        {/* Board Decision Note */}
        <motion.div variants={fadeIn} className="mt-16 p-8 bg-slate-100 rounded-2xl border-l-8 border-indigo-600 italic text-slate-700">
          "The final decision on rejection or publication of the manuscript and its assignment to a specific section is accepted exclusively by the Editorial Board."
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EditorialPolicies;