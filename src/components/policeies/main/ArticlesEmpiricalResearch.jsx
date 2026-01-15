import React from "react";
import { FileText } from "lucide-react"; // Icon for IV.1 section

const ArticlesEmpiricalResearch = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* Heading with icon */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <FileText size={28} />
        <h3 className="text-xl font-bold">
          IV.1. Articles describing empirical research
        </h3>
      </div>

      {/* Full text content */}
      <p>
        A distinctive feature of articles of this genre is the justification of the attitude towards the research hypothesis based on the results of the empirical study.
      </p>

      <p>
        The article should not exceed 40,000 characters with spaces, including the abstract and keywords, figures, tables and captions, and a list of references. The article is structured according to the following mandatory sections with the corresponding content (the preferred length of each section is given in brackets): Introduction (no special heading; ~15%), Methodology (~30%), Results (~40%), Discussion of Results (~10%), Conclusions (~5%), and References. If the presentation of the research requires an Appendix (up to four pages), its length is additional to the main section.
      </p>

      <p>
        The sections of the article should be consistent with each other: the content of the Introduction and Methodology should be truly necessary and sufficient to substantiate the Results. The Introduction should contain theoretical propositions that, on the one hand, are logically deducible from the current state of one of the fields of psychology, and on the other, anticipate the application of specific methodological procedures for obtaining certain results. The propositions of the Introduction should be accessible for empirical evaluation; the Results should be a logical consequence of the Introduction and the Methodology; in the Discussion of Results, the obtained results should be explained based on the theoretical hypothesis and the purpose of the study.
      </p>

      <p>
        The title (no more than 9 words) should precisely correspond to the purpose of the study, which specifies the type of study, and contain the theoretical constructs, variables, and the relationships between them used in the work.
      </p>

      <p>
        Author(s): last name, initials, academic degree, position held, place of work of each of the authors, geographical name of the place of residence (town) or work, e-mail address.
      </p>

      <p>
        The abstract (no more than 250 words) should reflect the main content of the work and include mandatory headings in a specific sequence: TOPICAL PROBLEM, GOAL, HYPOTHESES, METHODOLOGY (description of study participants: number, gender, age; for animals – species, strain, etc.; characteristics of the methods used), RESULTS (indicating the level of significance), DISCUSSION OF RESULTS, CONCLUSIONS. The abstract should use Key words.
      </p>

      <p>
        The abstract should not use abbreviations (except for generally accepted ones, for example, VR, LP) and references to literature.
      </p>

      <p>
        Key words: 5–10 main general scientific or psychological terms used in the text (but no more than 15–17 words, not counting conjunctions). They should be ordered from the most general, corresponding to the problem, to more differentiated, corresponding to the description of the study participants and methods. Laboratory jargon and neologisms should not be used as key words.
      </p>

      <p>
        The logical justification for all subsequent sections of the article is given in the subsections of the Introduction listed below.
      </p>

      <p>
        Definition of a specific psychological problem in the context of which the study was conducted, with mandatory proof of its relevance.
      </p>

      <p>
        A brief literature review, necessary for formulating a theoretical hypothesis, should outline the main approaches to solving the problem, defining important terms, the main methodological procedures, and the results (for more details, see Section IV.4). References to publications in popular science publications (books, journals, newspapers) are permitted only if they contain information necessary for developing the research methodology. Authors should not replace the brief literature review in the Introduction with a critical-analytical review, which is a special publication genre.
      </p>

      <p>
        A theoretical hypothesis that is formulated in terms of theoretical constructs as a specific solution to a current psychological problem from the perspective of a specific research program or paradigm.
      </p>

      <p>
        The purpose of the study, which specifies the type of study, for example, a pre-experiment, a quasi-experiment, a true experiment.
      </p>

      <p>
        Research hypotheses, which are formulated in terms of variables and represent alternative options for the outcomes of the study.
      </p>

      <p>
        Definition of the subject and object of research.
      </p>

      <p>
        The relevance of the research, i.e. the progress in solving a pressing psychological problem that this research allows.
      </p>

      <p>
        Justification of the methods used.
      </p>

      <p>
        Research objectives.
      </p>

      <h4 className="font-semibold text-blue-600 mt-6">METHODS</h4>

      <p>
        The METHODS section must contain all the information necessary for the Reviewer and Reader to understand the work, as well as for independent repetition of the study, and consists of mandatory subsections with headings:
      </p>

      <p>
        <strong>Study participants:</strong> their number, gender, age (range and median are provided to describe distributions), characteristics important for the study (e.g. educational status, normal or corrected vision, right-handedness/left-handedness, etc.), method of recruiting them to participate in the study, method of forming the sample, number of groups (the term “control group” is acceptable to use only for a true experiment; for pre-experimental and quasi-experimental studies, the terms “contrast group” or “comparison group” should be used). This information is necessary to prove the representativeness of the sample.
      </p>

      <p>
        <strong>Research procedure:</strong> description of the study design, which must be consistent with its purpose and hypotheses. Description of the general situation of the study must include the sequence of events in it, the task offered to the study participants; literal citation of the instructions (or an indication of the source of the standard instructions) and a description of the methods of communication between the experimenter and the study participants are mandatory; techniques for controlling for secondary variables. When using expert assessments, the number of experts, their professional status and length of service, their individual characteristics important for the study (e.g., gender, age), instructions for experts, and a scale for expert judgments should be indicated. Ethical standards for conducting research on humans and other animals must be observed.
      </p>

      <p>
        <strong>Methods and equipment:</strong> A description of all methods and devices is mandatory; the specific name of the method version and the most important features should be indicated with reference to sources. When describing the tests used, their name, date, place and author of validation (or adaptation), the main psychometric characteristics with references to sources are indicated. When using modifications of well-known methods, non-standard or original (previously not described in special publications) methods, their detailed description should be provided, placing the text in an APPENDIX. When describing the equipment, its characteristics, manufacturer and country are indicated. Unique equipment is described in more detail (it is possible to provide diagrams and drawings that must comply with GOST).
      </p>

      <p>
        <strong>Registration of indicators:</strong> Specific methods for collecting and recording indicators should be described. When conducting a survey, the Data collection method (face-to-face, group or individual contact, telephone, mail, Internet). When using polygraphic methods for recording parameters, especially in cases where multiple recording devices or multiple study objects are involved, the methods for synchronizing the recordings should be described. Standard methods for signal calibration should be used or described in detail. For analog-to-digital conversions, the sampling frequency during signal sampling should be indicated. For electrophysiological techniques, methods for detecting, eliminating or correcting artifacts should be specified.
      </p>

      <p>
        <strong>Variables:</strong> All variables (independent, dependent, secondary, descriptors) or groups of variables identified in the study should be listed, indicating the limits of variation, gradation of change, frequency of presentation, and the method of their derivation (or formation) from the recorded parameters. The description of the variables should be such as to enable determination of the type of scale on which they are measured, the correctness of the use of parametric statistical procedures, as well as the measurement accuracy and the division value on the devices.
      </p>

      <p>
        <strong>Statistical hypotheses:</strong> To formally assess the plausibility of research hypotheses, corollaries—statistical hypotheses (H0 and H1)—are deduced from each alternative, taking into account the scale on which the variables are measured and the corresponding statistical procedure. Formulating statistical hypotheses enables an assessment of the accuracy of the correspondence between the applied statistical procedures, research hypotheses, and conclusions, i.e., it prevents typical, unavoidable violations of the internal validity of the study.
      </p>

      <p>
        <strong>Statistical criteria:</strong> If statistical processing was performed using standard statistical programs, the name and version of the package must be provided. In the case of using non-standard statistical techniques that are not included in the set of standard packages, a reference to the source and a sufficiently detailed description of the procedure applied are required. It should be precisely indicated for which statistical hypothesis the given statistical criterion was used to assess the plausibility.
      </p>

      <p>
        The significance level at which hypothesis H0 is rejected must be indicated. For special processing techniques, the entire set of statistical decision criteria or the most important ones must be provided. The main conditions and characteristics of the application of statistical procedures must be described. For example, when using factor analysis, it is necessary to specify the matrix factorization method (principal component analysis, maximum likelihood, alpha factorization, or another method), rotation types (varimax, quartimax, direct oblimin, promax, or another type); when using hierarchical cluster analysis, it is necessary to specify the clustering method, the method for estimating distances, and determining the cluster solution. The purpose of statistical procedures should be stated. For example, for factor analysis, this could be factor identification, dimensionality reduction, exploratory or confirmatory analysis.
      </p>

      <p>
        The RESULTS section presents all the information necessary for a substantiated selection of alternatives to the statistical hypotheses and the results of applying statistical procedures. This section should contain only the original data obtained by the author in this study, without explanation or references to the results of other researchers. Several subsections may be distinguished here, corresponding to individual research objectives. This section must include descriptive statistics of the analyzed variables: central tendency and range, which, along with the type of scale on which the variables are measured, determine the adequacy of the application of statistical procedures and also enable the assessment and proof of the external validity of the study. The provided measurements must allow verification of the reliability of the statistical inference. In the case of using parametric statistical procedures, verification of the deviation of the distribution of variables from the normal law is mandatory. Percentage data may be presented only as additional to the measured values ​​for illustrative purposes.
      </p>

      <p>
        Further, in accordance with the research hypotheses and research objectives, information concerning the classification, comparison of variable values, their conjugacy and dynamics must be presented. Each subsection must conclude with a statement of the relationship to the alternatives to the statistical hypothesis.
      </p>

      <p>
  When presenting the results of complex statistical procedures, it is necessary to provide evidence of the adequacy of their application, as specified in the guidelines. For example, for factor analysis - the matrix dimension (the number of rows (objects) and columns (variables)), the values of the matrix determinant, Bartlett's and Kaiser-Melkin-Olkin's tests of sphericity; for analysis of variance - the values of the Levene test; for multivariate regression analysis - the values of the tolerance criterion, and, if necessary, the Durbin-Watson test. 

  For each specific result, the information necessary for understanding the procedures used and the results of their application must be provided: the name of the statistical procedure (test), its meaning, the number of degrees of freedom and the level of reliability, for example: "median test, χ2 = 7.745; df = 1; p = .0053", and not "the difference is significant, p  .01". It should also be indicated for the assessment of the plausibility of which particular statistical hypothesis the given procedure was applied. 

  To assess the effect size, one should not use the raw values of the contingency coefficients of variables, for example, the correlation coefficient, the χ2 criterion, etc., but, for example, the determination coefficient (R2), similar transformations of the χ2 criterion (using the statistical package "R"), etc.
</p>


      <p>
        When describing the results, one should avoid redundancy, for example, in tables, zeros and decimal points in the correlation values ​​are omitted; if there is no special purpose, then only significant correlations are presented, etc.
      </p>

      <p>
        The DISCUSSION OF RESULTS section formulates the relationship to the alternatives of the research hypothesis based on the statistical solution derived in the RESULTS section, and fully formalizes the new fact. This section may include several subsections, the number of which corresponds to the number of tasks (or research hypotheses), with the subsection title corresponding to the content of the tasks (or research hypotheses). The sequence of presentation of material in the DISCUSSION OF RESULTS subsections is as follows:
      </p>

      <p>
        The formulation of the main result is given in the form of a statistical solution. Evidence of the non-artifactuality of the results is provided (the representativeness, reliability, and validity of the measurement procedure are proven). Strict correspondence between statistical hypotheses and conclusions that require statistical justification should be maintained (see details in: Nieuwenhuis S., Forstmann D. U., Wagenmakers E.-J. Erroneous analyses of interactions in neuroscience: a problem of significant probability // Nature neuroscience. V. 14. No. 9. P. 1105–1107). The obtained results are compared with the results of other studies (with similar measurement procedures in key points, which may differ in the purpose and content of the theoretical hypothesis) to identify their consistency and/or contradictions. Based on the obtained results, the attitude towards the research hypothesis is logically substantiated, i.e. it is indicated which of the alternatives is rejected and which remains for further selection based on empirical tests. The correspondence between the unrejected alternative and the research objective (which determines the type of study) is determined, which is necessary to assess the study's internal validity. After this, a new fact is formulated. If necessary, a comparison of the new fact with other possible, including competing, explanations of the obtained results is carried out, and evidence is provided of the greatest likelihood of the explanation that the author adheres to. The following are substantiated: the novelty of the study, which may be associated with the novelty of the goal, research hypotheses, methodological techniques, a more representative sample, and the use of more powerful statistical procedures; theoretical significance, which may be associated with the reformulation and specification of problems, and the introduction of new theoretical constructs; practical significance, which is associated with the possibility of using the obtained results in applied psychological work, in various areas of practice, and in scientific disciplines related to psychology.
      </p>

      <p>
        In the final section of the DISCUSSION OF RESULTS (subsection Conclusion), assumptions are formulated about the possible consequences of the conducted research and possible goals and/or hypotheses for future work are substantiated.
      </p>

      <p>
        CONCLUSIONS section: the number of conclusions should correspond to the number of objectives (or research hypotheses); a conclusion formulating the purpose or hypothesis for subsequent research may be added.
      </p>

      <p>
        Acknowledgments and expressions of gratitude to individuals and organizations that supported the authors in completing the work (including foundations that financed the research) are given in a footnote to the title of the work on the first page.
      </p>

      <p>
        The LIST OF REFERENCES includes all sources referenced in the text. Authors should specifically check this compliance! Sources are presented in alphabetical order, first Russian-language sources, then foreign ones. References to non-scientific sources (excerpts from newspapers, magazines, literary works, etc.) should be given in the text or in a footnote to the text, but not in the List of References.
      </p>

      <p>
        The APPENDIX section may include materials that are necessary for understanding the essence of the work, but are not included in the main text of the article, as they overload the content of the sections. Such materials include: a detailed description of the methodology, if it is new (for example, the full text of the questionnaire); "raw" data, such as protocols, sample drawings of subjects, summary tables, etc. The initial theoretical premises, the obtained results, and the proposed explanations should not be confused. To this end, it is recommended, in particular, to use verbs in the past tense when presenting the material in the METHODOLOGY and RESULTS sections, and in the present tense in the Introduction and Discussion of Results sections. The editors reserve the right to make necessary clarifications and abbreviations, as well as to recommend that authors shorten their manuscripts to a short report.
      </p>

    </section>
  );
};

export default ArticlesEmpiricalResearch;
