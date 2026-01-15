import React from "react";
import { FileText } from "lucide-react"; // Icon for IV.4 section

const LiteratureReviews = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* Heading with icon */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <FileText size={28} />
        <h3 className="text-xl font-bold">
          IV.4. Information-analytical and critical-analytical reviews of literature
        </h3>
      </div>

      {/* Full text content */}
      <p>
        A distinctive feature of this genre is a logical analysis (research) of the state of the art in the subject area of psychology, i.e., an analysis of all (or a portion, as defined in the review objective) of the results obtained by other researchers and the methods used to obtain them, in order to form an opinion on the state of the subject area: classification of key problems, identification of relevant research areas, identification of new areas of research, evaluation of research results, existing methodological techniques, and the interrelations between various areas of research. Based on the analysis, goals and hypotheses for empirical research are formulated.
      </p>

      <p>
        An informational and analytical literature review involves evaluating the results obtained in various studies based on general scientific values, i.e., their representativeness, reliability, and validity.
      </p>

      <p>
        A critical and analytical literature review involves evaluating the results obtained in various studies not only based on general scientific values but also on the theoretical principles of a specific research program or paradigm.
      </p>

      <p>
        When studying the current state of a subject area, it is necessary to analyze monographs, dictionaries, textbooks, and publications in scientific periodicals, including review papers, methodological and theoretical articles, as well as articles describing empirical research and methodological developments, including the most recent ones published both in the Russian Federation and abroad.
      </p>

      <p>
        The completeness of the literature review is determined by identifying the main trends in the development of the subject area, which can only be characterized through the analysis of all types of scientific publications.
      </p>

      <p>
        The article must be up to 40,000 characters long with spaces, including the abstract and keywords, figures and captions, tables and captions, and a list of references. The article structure includes the following mandatory sections (the preferred length of the corresponding section is given in parentheses): Introduction (~15%), Results (~60%), Discussion of Results (~20%) - these sections do not have special headings; Conclusions (~5%), References.
      </p>

      <p>
        The title (no more than 9 words) should accurately reflect the purpose of the study and include the theoretical constructs, variables, and relationships between them used in the work.
      </p>

      <p>
        Author(s): last name, initials, academic degree, position held, place of work of each author, geographical name of place of residence (town) or work, email address.
      </p>

      <p>
        Abstract (no more than 250 words) should reflect the main content of the work and include the required headings in a specific sequence: TOPICAL PROBLEM, OBJECTIVE, Results*, Discussion of Results*, CONCLUSIONS. (* The content of the marked sections is not highlighted with a special heading.) Keywords should be used in the abstract.
      </p>

      <p>
        The abstract should not contain abbreviations (except for generally accepted ones, such as VR, LP) or references to literature.
      </p>

      <p>
        Key words: 5–10 basic general psychological or psychological terms used in the text (but no more than 15–17 words, not counting conjunctions). They should be sorted from the most general, relevant to the problem, to more differentiated ones. Laboratory jargon and neologisms should not be used as key words.
      </p>

      <p>
        The Introduction section (does not have a special heading), which provides a logical justification for the content of all subsequent sections, includes formulations of the specific psychological problem in the context of which the study of the literature data was conducted (with evidence of its relevance), the purpose of the study, the subject and object of the study, the relevance and objectives of the study; it is advisable to justify the limitation of the range of sources considered in connection with the purpose of the study.
      </p>

      <p>
        In the Results section (does not have a special heading), the material is presented in accordance with the objectives of the work. This section may include a description of the current state of the research field, a description of the problem's history, and a definition of key theoretical constructs, research directions, methodological approaches, and the results obtained.
      </p>

      <p>
        The Discussion of Results section (which does not have a specific heading) provides a logical analysis of the current state of the subject area in accordance with the purpose of the work: for information-analytical reviews, it is based on the representativeness, reliability, and validity of the studies; for critical-analytical reviews, it is based on the representativeness, reliability, and validity of the studies and the conceptual provisions of a specific research program or paradigm. The paper then discusses the possible implications of the literature review, which can be formulated as theoretical hypotheses, objectives, and research hypotheses for empirical research.
      In the Conclusions section, the number and content of conclusions should correspond to the number and content of the review objectives.
      </p>
    </section>
  );
};

export default LiteratureReviews;
