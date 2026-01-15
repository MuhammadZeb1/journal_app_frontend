import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const AuthorGuidelines = () => {
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
        <BookOpen size={32} />
        <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">
          Author Guidelines
        </h2>
      </div>

      {/* Content */}
      <motion.div variants={fadeIn} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-slate-700 space-y-4">
        <p>
          Guidelines for preparing manuscripts for publication in the Psychological Journal
          from the Editors of the Psychological Journal.
        </p>

        <p>
          Dear Authors, Experts, and Readers of the Psychological Journal! The Rules for
          Preparing Manuscripts for Publication in the Psychological Journal (hereinafter
          referred to as the "Rules") presented in this issue reflect the experience of the
          Editorial Board, Experts, and Editorial Team with manuscripts and are consistent
          with the current state of psychology as a scientific discipline, the standards for
          organizing and conducting research, and educational standards in psychological
          specialties. These new Rules amend the Rules published in 2007 (with abridged versions
          published in 2009 and 2010), clarifying and expanding on their provisions. Upon
          publication of the new version, the previous Rules cease to be in effect.
        </p>

        <p>
          A detailed description of the requirements for the content of publication sections
          across various genres is provided to eliminate the most common errors in writing
          and formatting texts. This detailed description of the rules is intended to be
          particularly helpful for those Authors and Experts who may only interact with
          the journal's editorial staff remotely.
        </p>

        <p>
          The new Rules emphasize the academic status of the Psychological Journal and its
          high level of publication requirements, consistent with international standards.
          The Rules establish uniform requirements for the work of Authors and Experts,
          making them open to the psychological community. Thus, a detailed description of
          each section of publications in various genres is intended not only to facilitate
          the writing of the text for Authors but also to serve as a basis for Experts to
          evaluate the content and presentation of the manuscript according to specific
          criteria. The editors hope that this will facilitate both independent review and
          research replication.
        </p>

        <p>
          We encourage Authors, Experts, and Readers to contact the journal's editorial staff
          for clarification on any remaining insufficiently explained provisions of the Rules.
        </p>

        {/* Content List */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Content</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
            <li>I. Purpose of the Rules</li>
            <li>II. Profile of the "Psychological Journal"</li>
            <li>III. General Requirements for the Content and Design of Manuscripts</li>
            <li>IV. Publication Genres. Distinctive Features, Structure, and Content of Sections</li>
            <li>IV.1 Articles Describing Empirical Research</li>
            <li>IV.2 Articles Describing a New Methodological Approach, Test, Questionnaire, Device, Program, etc.</li>
            <li>IV.3 Brief Communications</li>
            <li>IV.4 Information-Analytical and Critical-Analytical Reviews of Literature</li>
            <li>IV.5 Methodological and Theoretical Articles</li>
            <li>IV.6 Publications of Other Genres</li>
            <li>V. Authors' Duties and the Sequence of Work with the Manuscript in the Editorial Office</li>
            <li>VI. Criteria for Manuscript Evaluation by Independent Experts (Reviewers)</li>
            <li>VII. Manuscript Design</li>
            <li>VII.1 Electronic Version</li>
            <li>VII.2 Paper Version</li>
            <li>VIII. Appendices</li>
            <li>Appendix No. 1. License agreement for scientific work</li>
            <li>Appendix No. 2. Cover letter for the manuscript</li>
            <li>Appendix No. 3. Information for submitting a publication to the Abstract Internet Digest</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AuthorGuidelines;
