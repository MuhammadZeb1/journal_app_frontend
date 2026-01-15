import React from "react";
import { FileText } from "lucide-react"; // Icon for IV.2 section

const ArticlesNewMethodological = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* Heading with icon */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <FileText size={28} />
        <h3 className="text-xl font-bold">
          IV.2. Articles describing a new methodological technique, test, questionnaire, device, program, etc.
        </h3>
      </div>

      {/* Full text content */}
      <p>
        A distinctive feature of articles of this genre is the justification of the need to develop a new methodological technique (method, test, questionnaire, device, etc.) or modify an existing one, its description, and evidence of its validity and reliability so that this technique can be used by other researchers. For requirements for the development and presentation of psychodiagnostic methods, see: Burlachuk L.F., Morozov S.M. Dictionary and Handbook of Psychodiagnostics. St. Petersburg: Piter Kom, 1999. pp. 410–415.
      </p>

      <p>
        The article should be no more than 40,000 characters long with spaces, including the abstract and keywords, figures and captions, tables and captions, and a list of cited literature. The article structure includes mandatory sections (the preferred size of the corresponding section is given in brackets): Introduction (no special heading; ~10%), Methodology (~35%), Results (~40%), Discussion of Results (~10%), Conclusions (~5%), References.
      </p>

      <p>
        For the rules for formatting and disclosing the contents of sections of a methodological article, see Section IV.1.
      </p>

      <p>
        We would like to draw the authors' attention to the mandatory subsections of articles of this genre. They should contain all the necessary information on the basis of which it can be concluded that the results obtained in the study are a consequence of the use of a new methodological approach (or a modification of an existing one).
      </p>

      <p>
        In cases where the new methodology is intended to influence humans, the results of medical, medical-psychological, etc. examinations should be provided.
      </p>

      <p>
        In the Introduction, special attention should be paid to the justification of the need to develop a new methodological approach, which may be due to the operationalization of new constructs, the inadequacy of existing methodological approaches, etc. The objectives of the study should include points aimed at proving the representativeness, reliability, and validity of the new methodological approach.
      </p>

      <h4 className="font-semibold text-blue-600 mt-6">METHOD</h4>

      <p>
        The METHOD section should contain a description of the essence of the new methodological approach; it should also include the texts of tests and questionnaires, and for devices - a basic diagram, a description of the operating principle, and the necessary technical explanations; a description of the methods for proving the representativeness, reliability, and validity of the new methodological approach; a description of all the necessary forms of control. Concealing important components of the description of the method necessary for its use, such as test keys, is not permitted.
      </p>

      <h4 className="font-semibold text-blue-600 mt-6">RESULTS</h4>

      <p>
        The RESULTS section should contain the results of testing the proposed method, as well as special subsections that provide the data necessary to prove the representativeness, reliability, and validity of the new methodological approach.
      </p>

      <h4 className="font-semibold text-blue-600 mt-6">DISCUSSION OF RESULTS</h4>

      <p>
        In the DISCUSSION OF RESULTS section, special attention should be paid to the comparison of the proposed methodological approach. The test should be compared with existing analogues and their advantages and disadvantages should be discussed, as well as mandatory subsections discussing the representativeness, reliability, and validity of the new test.
      </p>

      <h4 className="font-semibold text-blue-600 mt-6">APPENDIX</h4>

      <p>
        The APPENDIX section should contain the full text of the test or questionnaire, as well as the test keys.
      </p>
    </section>
  );
};

export default ArticlesNewMethodological;
