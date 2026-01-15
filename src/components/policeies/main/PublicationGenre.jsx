import React from "react";
import { Layers } from "lucide-react"; // Icon for main heading

const PublicationGenre = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* Heading with icon */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <Layers size={28} />
        <h2 className="text-2xl font-bold">
          IV. Publication Genres. Distinctive Features, Structure, and Content of Sections
        </h2>
      </div>

      {/* Content */}
      <p>
        When preparing a manuscript, the author must clearly understand the subject matter of their manuscript, as well as its genre: theoretical or methodological research, description of an empirical study, methodological development, description of an empirical study or methodological development in the form of a short report, informational or critical-analytical review of the literature (see below for requirements for manuscripts in various genres). In accordance with the requirements of the "PJ", mixing genres should be avoided!
      </p>

      <p>
        Articles of any genre must adhere to the following requirements: a certain volume of text, a strict sequence of mandatory sections with corresponding content and headings.
      </p>

      <p>
        The completeness of the literature review, both for a special publication genre (see Section IV.4) and for a mandatory subsection of articles of other genres (see Sections IV.1, IV.2, IV.3), is determined by the use of primary sources that reveal the content of the problem and subject area. These include publications in scientific periodicals, including the most recent ones (preference should be given to peer-reviewed research-focused publications published within the last 5-7 years, the publication requirements for which allow for an assessment of the representativeness, reliability, and validity of the conclusions, including "PJ"), monographs, collections of articles, encyclopedias, dictionaries, and advanced-level textbooks for universities. References to popular, popular science, and scientific-journalistic publications are permitted only for specific purposes (in the sections on the history of psychology, psychology and society, psychological journalism, scientific life, memorable dates, and our anniversaries); references to such publications are not permitted in other sections. References to online sources should not be made if printed versions of the works are available.
      </p>

      <p>
        The BIBLIOGRAPHY list should not contain more than five works by the Author(s). References may only be to published works. References marked "In Press," "Accepted for Review," "Personal Communication," or to papers are not permitted. Hidden references to sources (such as "obvious" references, "well-known" references, or references to classics) are not permitted in manuscripts of all genres; these references must be explicitly stated and included in the BIBLIOGRAPHY list.
      </p>

      <p>
        To more clearly present the content of the work, articles of all genres should adequately utilize various presentation methods: narrative, tables, figures, and formulas. Duplicating the same content by presenting it in different ways is not permitted.
      </p>
    </section>
  );
};

export default PublicationGenre;
