import React from "react";

const ManuscriptGuidelines = () => {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6", fontFamily: "Times New Roman" }}>

      <h2>VII.1. Electronic version</h2>

      <p>
        The electronic version is submitted by the author to the editors by email to journ@ipras.ru and psy.journ@yandex.ru.
        Large volumes of material should be archived using ZIP or RAR.
      </p>

      <p>
        The electronic version of the article should include: a file containing the text of the article and file(s) containing
        illustrations (in WORD format, see below for details). Illustrations should be included in the text of the article; in addition,
        all illustrations should be presented in separate files.
      </p>

      <p>
        Graphic files should be named in a way that makes it clear which article they belong to and what figure in the article they belong to.
        Each file should contain one figure.
      </p>

      <p>
        The cover email should include a list of attached files or archive contents.
      </p>

      <h3>Recommendations for using a text editor</h3>

      <ul>
        <li>You should use the latest versions of Microsoft Word for Windows.</li>
        <li>You should use the Microsoft Word *.rtf, *.doc or *.docx formats.</li>
        <li>
          The number of article files should be kept to a minimum – ideally, a single file containing the abstract,
          keywords, text, references, and figures. Macros should not be used.
        </li>
      </ul>

      <h3>Text formatting</h3>

      <p>
        Standard A4 page format, 2 cm margins on all sides; 1.5 line spacing; Times New Roman font, 12 pt, 35 lines of 70–73 characters,
        i.e. 2540 characters with spaces per page. All manuscript pages should be numbered at the top right.
      </p>

      <ul>
        <li>You should not use more than one space.</li>
        <li>To create tables, use Microsoft Word. Manually typing tables is not permitted.</li>
        <li>
          Lines within a paragraph should not be broken by a carriage return character (usually the Enter key).
        </li>
        <li>
          You should use the features provided by your text editor – automatic creation of footnotes, creation of lists,
          automatic indentation, etc. The use of automatic hyphenation is not allowed.
        </li>
      </ul>

      <p>
        Illustrations included in the text, including halftone photographs and line drawings, must be created in digital graphics.
        Only black-and-white illustrations in TIFF or BMP formats with a resolution of at least 600 dpi (dots per inch) are accepted.
      </p>

      <h3>Typesetting recommendations</h3>

      <p>Decimal digits are entered only with a period, not a comma (0.25, not 0.25).</p>

      <p>
        In the text, use quotation marks. If words in quotation marks contain other words enclosed in quotation marks,
        use "herringbones" as the outer quotation marks, and "paws" as the inner quotation marks.
      </p>

      <p>
        The letter “ё” is replaced by “е” everywhere, except for surnames and special cases.
      </p>

      <p>
        A space is always placed between the initials and the last name: A.A. Ivanov (except when listing authors in the article title,
        where spaces are also placed between the initials – A.A. Ivanov).
      </p>

      <p>
        All dates in the format “day.month.year” (hh.mm.yyyy) are entered as follows:
        02.05.1991, 26.12.1874, etc.
      </p>

      <p>
        A period is not placed after the title of the article, the names of the authors, addresses, headings and subheadings,
        table names, dimensions (s – second, g – gram, min – minute, d – day, deg – degree).
      </p>

      <h3>VII.2. Paper version</h3>

      <p>
        The paper version of the manuscript must be submitted in two copies on standard A4 paper (210 × 297 mm).
        The paper version must be completely identical to the electronic version, both for the first draft of the manuscript
        and for the submitted versions revised in accordance with the recommendations of the Reviewers and Editors,
        including the final version.
      </p>

      <h2>VIII. Appendices</h2>

      <h3>Appendix No. 1</h3>

      <p>
        License agreement for the right to use a scientific work in scientific journals founded by the Russian Academy of Sciences (in the RAS Journals)
      </p>

      <h3>Appendix No. 2</h3>

      <p>
        Cover letter for the manuscript of an article sent to the editors of the Psychological Journal.
      </p>

      <h3>Appendix No. 3</h3>

      <p>
        Information for submitting a publication to the Abstract Internet Digest of Psychological Sciences
        (http://psycdigest.ru/)
      </p>

    </div>
  );
};

export default ManuscriptGuidelines;
