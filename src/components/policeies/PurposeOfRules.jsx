import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const PurposeOfRules = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      className="mb-16"
    >
      {/* Header */}
      <div className="flex items-center gap-3 text-indigo-600 mb-6">
        <Scale size={32} />
        <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">
          I. Purpose of the Rules
        </h2>
      </div>

      {/* Content */}
      <motion.div variants={fadeIn} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-slate-700 space-y-4">
        <p>
          The proposed Rules are introduced in order to facilitate and simplify the preparation of materials for Authors, the scientific examination of manuscripts for Reviewers, the preparation of manuscripts for publication for Editors, and the orientation of Readers in the structure and content of published materials and their use in scientific practice, as well as to bring the form of publications in the Psychological Journal (hereinafter referred to as the “PJ”) into line with international rules.
        </p>
        <p>
          The regulation of the Author–Reviewer–Editor–Publisher–Reader relationship is based on ethical principles common to members of the psychological community, rules for publishing in international and domestic scientific periodicals on psychology and related disciplines, rules for preparing manuscripts for the Nauka publishing house, as well as standards for organizing and conducting research that correspond to the current level of development of psychological science and are included in the educational standard for the specialty “Psychology.”
        </p>
      </motion.div>
    </motion.section>
  );
};

export default PurposeOfRules;
