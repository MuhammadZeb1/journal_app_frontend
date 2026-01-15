import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const GeneralRequirements = () => {
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
        <Layers size={32} />
        <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">
          III. General Requirements for the Content and Design of the Manuscript
        </h2>
      </div>

      {/* Content */}
      <motion.div variants={fadeIn} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-slate-700 space-y-4">
        <p>
          The manuscript must be submitted in electronic form (for more details, see Section VII).
        </p>
        <p>
          Originality of the manuscript: "PZ" publishes only original, previously unpublished materials. The text must not contain signs of plagiarism or self-plagiarism. Self-plagiarism also includes submitting the same materials simultaneously to different publishers. Substantive (semantic) inclusion of previously published materials in short communications or small collections (up to 500 copies) is not considered self-plagiarism.
        </p>
        <p>
          Any use of previously published materials must be accompanied by references. Paraphrasing is preferred to exact quotations. Previously published text should substantiate and develop the Author's position, indicated by phrases such as "previously established" or "in previous works it was...".
        </p>
        <p>
          The Author must submit a Cover Letter (see Appendix No. 2) listing publications on similar topics in the past 5 years and manuscripts under consideration elsewhere. Violations or plagiarism/self-plagiarism result in submission restrictions for 2–3 years.
        </p>
        <p>
          Novelty: The manuscript must substantiate new methodological or theoretical approaches, contain new facts, synthesize or critique existing points of view, introduce new goals/hypotheses, and new methodological techniques.
        </p>
        <p>
          Completeness: "PJ" publishes completed works whose conclusions are fully substantiated. Descriptions of pilot studies are not accepted.
        </p>
        <p>
          Presentation style: The manuscript must be logically coherent, clear, concise, conceptually rigorous, and classified according to "PJ" rules (see Sections IV.I–IV.5). Avoid polysemy, long phrases, metaphors, repetitions, allegories, popular-scientific style, everyday vocabulary, neologisms, and jargon. Clarify all new or specialized terms at first use.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default GeneralRequirements;
