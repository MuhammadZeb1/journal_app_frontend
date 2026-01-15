import React from "react";
import { FileText } from "lucide-react"; // Icon for IV.3 section

const BriefMessages = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* Heading with icon */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <FileText size={28} />
        <h3 className="text-xl font-bold">IV.3. Brief messages</h3>
      </div>

      {/* Full text content */}
      <p>
        A distinctive feature of articles in this genre is the description of the results of an empirical study or a new methodological approach that are reasonably expected within the developed paradigm and/or precede a larger series of studies. Therefore, the rationale for the objective and research hypothesis may be abbreviated by citing works that already contain this rationale. As a rule, a short communication contains only one pair of alternative research hypotheses, rather than a more complex system. Results of a pilot study cannot be presented as a short communication; the study must be complete, and the representativeness, reliability, and validity of its results must be proven.
      </p>

      <p>
        Article length is up to 20,000 characters with spaces, including the abstract and keywords, figures and captions, tables and captions (figures and tables along with captions are included in the text of the article), and a list of references. The article structure includes mandatory sections (the preferred size of the corresponding section is given in brackets): Introduction (no special heading; ~10%), Methodology (~30%), Results (~45%), Discussion of Results (~10%), Conclusions (~5%), References.
      </p>

      <p>
        For a short report, it is recommended to use the same order of presentation of the material and the content of the article sections as in articles describing empirical studies (see section IV.1) and methodological developments (see section IV.2). The Introduction section can be shortened due to the possibility of substantiating the purpose and hypotheses of the study through references to review works and data of other authors. In a short report, it is allowed to combine the RESULTS and DISCUSSION OF RESULTS sections. Authors should pay special attention to the fact that in this case, in the RESULTS AND DISCUSSION section, the original data of the author should be given first, and then their explanation; It is not permitted to replace the author's original results with their explanation and comparison with literature data.
      </p>
    </section>
  );
};

export default BriefMessages;
