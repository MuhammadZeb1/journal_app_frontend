import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const JournalProfile = () => {
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
        <Globe size={32} />
        <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">
          II. Profile of the "Asian Journal"
        </h2>
      </div>

      {/* Content */}
      <motion.div variants={fadeIn} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-slate-700 space-y-4">
        <p>
          The journal publishes original (previously unpublished – see below) completed (see below) scientific papers written in the context of current issues in various fields of psychology or border disciplines located at the junction of it, in various genres: theoretical and methodological articles; articles describing empirical research; new methodological techniques; short communications (description of empirical research and new methods); literature reviews (information-analytical and critical-analytical); materials on the history of psychology, as well as commentaries on previously published materials and responses of authors, book reviews, reviews of current scientific literature, communications and reports on past scientific events (congresses, conventions, conferences, symposia), scientific chronicles and information materials dedicated to famous psychologists (including articles for anniversaries and obituaries).
        </p>

        <p>
          The main sections and topics of the journal: theoretical and methodological problems of psychology, social psychology, economic psychology, legal psychology, cognitive psychology, psychology of individual differences, engineering psychology, labor psychology, psychophysiology, clinical psychology, neuropsychology, cross-cultural and ethnic psychology, political psychology, psychology and the Internet, personality psychology, psychology of understanding, developmental psychology, psychology of speech, psycholinguistics, psychology of professional activity, psychology of the subject, psychology of emotions, psychophysics, interdisciplinary research, psychotherapy, methods and techniques, history of psychology, thesaurus of psychological concepts, psychological counseling, comparative psychology, discussions, psychology and society, psychology and practice, pages of a future book, psychological journalism, criticism and bibliography, scientific life, memorable dates, our anniversaries, etc.
        </p>

        <p>
          The final decision on rejection or publication of the manuscript and its assignment to a specific section The "PJ" is accepted exclusively by the Editorial Board. In controversial cases, at the discretion of the Editorial Board, articles are published with reviews and the Author's responses to the reviewers.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default JournalProfile;
