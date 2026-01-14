import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

const EditorialTeam = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-20 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-5xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold mb-4 border border-indigo-100 uppercase tracking-widest"
          >
            <ShieldCheck size={14} /> Academic Excellence
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900 uppercase tracking-tight">Editorial Team</h1>
          <p className="text-slate-500 font-light italic text-lg">International Journal of Psychological Studies</p>
        </div>

        {/* Custom Separator */}
        <div className="h-px bg-slate-200 w-full mb-12" />

        {/* 1. Editor-in-Chief */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 text-[#4F46E5] mb-6">
            <GraduationCap size={28} />
            <h2 className="text-2xl font-serif font-bold tracking-tight uppercase">Editor-in-Chief</h2>
          </div>
          <div className="rounded-xl border-none shadow-sm bg-slate-50/50 p-8 border-l-4 border-l-indigo-500">
            <h3 className="text-2xl font-serif text-slate-900 font-semibold">Anatoliy L. Zhuravlev</h3>
            <p className="text-slate-600 text-base leading-relaxed mt-3">
              Academician of the Russian Academy of Sciences, Doctor of Psychology, Professor, 
              Director of the Institute of Psychology of the Russian Academy of Sciences, Moscow.
            </p>
          </div>
        </motion.section>

        {/* 2. Deputy Editors */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 text-[#4F46E5] mb-6">
            <Users size={28} />
            <h2 className="text-2xl font-serif font-bold tracking-tight uppercase">Deputy Editors-in-Chief</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-100 rounded-xl hover:border-indigo-200 transition-colors shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-2 text-slate-900">Koltsova V.A.</h3>
              <p className="text-sm text-slate-500 italic leading-relaxed">
                Doctor of Psychology, Professor, Deputy Director for Science of the Institute of Psychology of the Russian Academy of Sciences, Moscow.
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-xl hover:border-indigo-200 transition-colors shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-2 text-slate-900">Zhuravleva E.V.</h3>
              <p className="text-sm text-slate-500 italic leading-relaxed">
                Candidate of Psychological Sciences, Nauka Publishing House, Moscow.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. Editorial Board List */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 text-[#4F46E5] mb-6">
            <Users size={28} />
            <h2 className="text-2xl font-serif font-bold tracking-tight uppercase">Editorial Board Members</h2>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-sm text-slate-600 leading-relaxed space-y-4">
            <p><span className="font-bold text-slate-800">Aleksandrov I.O.</span> – Doctor of Psychology, Leading Researcher, Institute of Psychology of the RAS.</p>
            <p><span className="font-bold text-slate-800">Volovikova M.I.</span> – Doctor of Psychological Sciences, Professor, IP RAS.</p>
            <p><span className="font-bold text-slate-800">Wild L.G.</span> – Doctor of Psychology, Professor, Chief Researcher, IP RAS.</p>
            <p><span className="font-bold text-slate-800">Kornilova T.V.</span> – Doctor of Psychology, Professor, Moscow State University named after M.V. Lomonosov.</p>
            <p><span className="font-bold text-slate-800">Leontiev D.A.</span> – Doctor of Psychology, Professor, Moscow State University.</p>
            <p><span className="font-bold text-slate-800">Petrenko V.F.</span> – Corresponding Member of the RAS, Professor, Moscow State University.</p>
            <p><span className="font-bold text-slate-800">Rubtsov V.V.</span> – Rector of the Moscow City Psychological and Pedagogical University.</p>
            <p><span className="font-bold text-slate-800">Yurevich A.V.</span> – Corresponding Member of the RAS, Deputy Director for Science, IP RAS.</p>
          </div>
        </motion.section>

        {/* 4. Contact Information Card */}
        <motion.section variants={itemVariants}>
          <div className="border border-slate-200 p-8 rounded-2xl shadow-xl bg-slate-900 text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Mail size={120} />
             </div>
            <h3 className="font-serif text-2xl mb-8 text-indigo-400 uppercase tracking-widest border-b border-slate-800 pb-4">Principal & Editorial Contacts</h3>
            <div className="grid md:grid-cols-2 gap-12 text-sm relative z-10">
              <div className="space-y-4">
                <p className="text-indigo-400 font-bold uppercase tracking-tighter">Editor-in-Chief</p>
                <div>
                  <p className="font-bold text-xl mb-1">Anatoliy L. Zhuravlev</p>
                  <div className="space-y-3 mt-4 text-slate-300">
                    <p className="flex items-center gap-3 hover:text-white transition-colors">
                      <Phone size={16} className="text-indigo-500"/> +7 (495) 683-58-10
                    </p>
                    <p className="flex items-center gap-3 hover:text-white transition-colors">
                      <Mail size={16} className="text-indigo-500"/> psy.journ@yandex.ru
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-indigo-400 font-bold uppercase tracking-tighter">Head of Editorial</p>
                <div>
                  <p className="font-bold text-xl mb-1">Safonova Marina Andreevna</p>
                  <div className="space-y-3 mt-4 text-slate-300">
                    <p className="flex items-center gap-3 hover:text-white transition-colors">
                      <MapPin size={16} className="text-indigo-500 flex-shrink-0"/> 
                      <span>129366, Moscow, I-366, Yaroslavskaya st., 13</span>
                    </p>
                    <p className="flex items-center gap-3 hover:text-white transition-colors">
                      <Phone size={16} className="text-indigo-500"/> +7 (916) 929-82-71
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default EditorialTeam;