import React from "react";

const PaperSubmission = () => {
  return (
    <>
      <h2 className="heading">Paper Submission</h2>
      <p className="para">
        <b>Submission Guidelines:</b>
      </p>
      <p className="para">
        Your are invited to submit :
        <ul className="list">
          <li>Full paper (IEEE conf Format) for oral presentation.</li>
          <li>Proposal to organize a technical session and/or workshop.</li>
        </ul>
      </p>
      <p className="para">
        <b>Paper Submission:</b> Papers are submitted by using online submission system. If there is
        any problem in online system then can be sent by email to:
      </p>
      <p className="para">
        <b>robin19@ieee.org</b>
      </p>
      <p className="para">
        All submitted full papers will be peer reviewed by independent referees from the panel of
        international reviewers.
      </p>
      <p className="para">
        The link for online submission &nbsp;
        <a className="link" href="https://edas.info/newPaper.php?c=27474">
          CLICK HERE
        </a>
        &nbsp; and follow the directions for uploading.
      </p>
      <p className="para">
        Submissions are checked by reviewers for <b>plagiarism</b> by using &nbsp;
        <a className="link" href="https://www.edas.info">
          www.edas.info
        </a>
        &nbsp; during submissions.
      </p>
      <p className="para">
        <b>Important to Read: </b>The papers should be submitted in 2 column IEEE standard format in
        word .doc or .pdf format only.
      </p>
      <p className="para">
        The authors are requested not to prefix their credentials i.e.
        <b> Dr., Prof., HOD, Ms, Mrs, Scholar, etc.</b> in authors name.
      </p>
      <p className="para">
        Download template for manuscript &nbsp;
        <a className="link" href="/template.doc">
          template.doc
        </a>
        ,&nbsp;
        <a className="link" href="/template.pdf">
          template.pdf
        </a>
        &nbsp;and&nbsp;
        <a className="link" href="/latex.zip">
          Latex.zip
        </a>
        .
      </p>
      <p className="para">
        Certificate of Participation will be given to those who contributed in the conference.
      </p>
    </>
  );
};

export default PaperSubmission;
