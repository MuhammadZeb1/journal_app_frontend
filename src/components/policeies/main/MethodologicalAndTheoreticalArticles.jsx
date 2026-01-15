import React from "react";
import { FileText } from "lucide-react"; // Icon for IV.5 section

const MethodologicalAndTheoreticalArticles = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* IV.5 Heading */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <FileText size={28} />
        <h3 className="text-xl font-bold">
          IV.5. Methodological and theoretical articles
        </h3>
      </div>

      <p>
        The distinctive feature of this genre is the substantiation and harmonization of ideas about the subject and method of research in various research programs or paradigms, the justification of new research directions in a specific research program or paradigm, the analysis of approaches to solving fundamental problems of psychology, a critical analysis of contradictions and the possibility of developing current directions in fundamental research and applied areas of psychology, and the substantiation of the possibility of interdisciplinary approaches and research.
      </p>

      <p>
        The article length is up to 40,000 characters with spaces, including the abstract and keywords, figures and captions to them, tables and captions to them, and a list of references. The article structure includes mandatory sections (the preferred length of the corresponding section is given in brackets): Introduction (~15%), Results (~60%), Discussion of Results (~20%) - these sections do not have special headings; Conclusions (~5%), List of References.
      </p>

      <p>
        The title (no more than 9 words) should precisely correspond to the purpose of the study and contain the theoretical constructs used in the work and the relationships between them.
      </p>

      <p>
        Author(s): last name, initials, academic degree, position held, place of work of each author, geographical name of place of residence (settlement) or work, e-mail address.
      </p>

      <p>
        Abstract (no more than 250 words) should reflect the main content of the work and include mandatory headings in a certain sequence: TOPICAL PROBLEM, GOAL, Results*, Discussion of Results*, CONCLUSIONS. (* The content of the marked sections is not highlighted with a special heading). The abstract should use Key words.
      </p>

      <p>
        The abstract should not use abbreviations (except for generally accepted ones, for example, VR, LP) and references to literature.
      </p>

      <p>
        Key words: 5-10 basic general psychological or psychological terms specific to a certain field of research, which are used in the text (but no more than 15-17 words, not counting conjunctions). They should be ordered - from the most general, corresponding to the problem, to more differentiated. Laboratory jargon and neologisms should not be used as keywords.
      </p>

      <p>
        The Introduction section (which has no specific heading) provides a logical justification for the content of all subsequent sections. It includes a statement of the specific psychological problem in the context of which the study was conducted (with evidence of its relevance), the purpose, subject, object, and objectives of the study, and its relevance.
      </p>

      <p>
        In the main section of the article, the Results section (which has no specific heading), the material is presented in relation to the objectives of the work. This section should be structured according to the objectives of the work, which should be reflected in the subsection headings and their content.
      </p>

      <p>
        The Discussion of Results section (which does not have a specific heading) provides a logical analysis of the current state of the subject area in accordance with the objective. It then discusses the possible implications of the research, which could be formulated, for example, as theoretical hypotheses, objectives, and research hypotheses for empirical studies. In the Conclusions section, the number and content of conclusions should correspond to the number and content of the objectives.
      </p>
    </section>
  );
};

export default MethodologicalAndTheoreticalArticles;
