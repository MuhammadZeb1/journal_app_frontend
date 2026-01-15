import React from "react";
import { FileText } from "lucide-react"; // Icon for IV.6 section

const PublicationsOtherGenres = () => {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md text-slate-700 space-y-6">
      {/* IV.6 Heading */}
      <div className="flex items-center gap-3 mb-4 text-blue-600">
        <FileText size={28} />
        <h3 className="text-xl font-bold">
          IV.6. Publications of other genres
        </h3>
      </div>

      <p>
        Comments on previously published materials and authors' responses (up to 12,500 characters with spaces). Comments on published works must contain substantive, original, and reasoned criticism.
      </p>

      <p>
        If the editors receive several comments with similar content, the comment with the earliest submission date will be accepted for publication.
      </p>

      <p>
        Materials on the history of psychology (40,000 characters with spaces), such as documents, previously unpublished manuscripts by classical scholars; works on the methodology of the history of psychology and the history of methodology.
      </p>

      <p>
        Articles in the "Discussion" section are published by decision of the editorial board. Articles in the "Discussion" section must be prepared according to the rules of the corresponding publication genre, this applies to both the content and the length of the manuscript. This section includes one complete cycle of exchange of opinions between the author and the discussants: the main text (subject of discussion), the discussants' comments, and the author's final response. The Editorial Board is also responsible for deciding whether to distribute the text under discussion to potential discussants prior to its publication and selecting the most complete, informative, and original comments. Discussants' comments and the author's final response must be written in a strict scholarly style and free of value judgments and ad hominem arguments.
      </p>

      <p>
        Book reviews (up to 9,000–12,000 characters long, including spaces) must contain a critical analysis that highlights both the strengths and weaknesses of the work. Required review sections include an informational section, which clearly identifies the content being evaluated, and an evaluative section, which provides a critical analysis of the book's contents. The editors request that authors submit a copy of the work under review along with their review. Book reviews must be received by the editors no later than one year after the book's publication.
      </p>

      <p>
        Announcements and reports on scientific congresses, conventions, conferences, symposia, and scientific chronicles (up to 9,000–12,000 characters, including spaces). These materials must be submitted to the "PZh" editorial board no later than one month after the event.
      </p>

      <p>
        Articles for anniversary dates must be submitted to the editorial board no less than six months before the anniversary and contain a list of the major works of the person celebrating the anniversary and references to them in the text.
      </p>
    </section>
  );
};

export default PublicationsOtherGenres;
