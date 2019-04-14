import React from "react";
import { redBright, red } from "ansi-colors";
import { makeUrl } from "./common";

export const CFP = () => (
  <div>
    {/* <div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <p>
            The ACM Symposium on Virtual Reality Software and Technology (VRST) is the premier
            international symposium for the presentation of new research results, systems and
            techniques among researchers and developers concerned with augmented, virtual and mixed
            reality (AR/VR/MR) software and technology.
          </p>
          <p>
            The VRST brings together the main international research groups working on AR/VR/MR,
            along with many of the world&rsquo;s leading companies that provide or consume AR/VR
            systems. The VRST 2019 conference will be held in Sydney, Australia, hosted by Western
            Sydney University, from Tuesday, November 12 to Friday, November 15, 2019. The event is
            sponsored by ACM SIGCHI and SIGGRAPH.
          </p>

          <div
            className="row"
            style={{ background: 'rgb(0,0,0,0.2)', borderRadius: '12px', padding: '12px' }}
          >
            <div className="col-6">
              <p>
                <strong>
                  {' '}
                  <br /> Main Track{' '}
                </strong>
              </p>

              <p>&middot; VR/AR/MR(=XR) technology and devices</p>
              <p>&middot; Advanced display technologies and immersive projection technologies</p>
              <p>&middot; Low-latency and high-performance XR</p>
              <p>&middot; Multi-user and distributed XR</p>
              <p>&middot; XR software infrastructures</p>
              <p>&middot; XR authoring systems</p>
              <p>&middot; Human interaction and collaborative techniques for XR</p>
              <p>&middot; Input devices for XR</p>
              <p>&middot; Tracking and sensing</p>
              <p>&middot; Multisensory and multimodal system for XR</p>
              <p>&middot; Brain-computer interfaces</p>
              <p>&middot; Haptics, smell and taste</p>
              <p>&middot; Audio and music processing for XR</p>
              <p>&middot; Sound synthesis for XR</p>
              <p>&middot; Computer vision and computer graphics techniques for XR</p>
              <p>&middot; Immersive simulations in XR</p>
            </div>
            <div className="col-6">
              <p>&middot; Immersive analytics</p>
              <p>&middot; Modelling and simulation</p>
              <p>&middot; Real-time physics-based modelling</p>
              <p>&middot; Real-time rendering</p>
              <p>&middot; Physically based rendering for XR</p>
              <p>&middot; Avatars and virtual humans in XR</p>
              <p>&middot; Tele-operation and telepresence</p>
              <p>&middot; Performance testing &amp; evaluation</p>
              <p>&middot; Locomotion and navigation in virtual environments</p>
              <p>&middot; Perception, presence, virtual embodiment, and cognition</p>
              <p>&middot; Teleoperation and telepresence</p>
              <p>&middot; Computer animation for XR</p>
              <p>&middot; XR applications (e.g. training systems, medical systems ...)</p>
              <p>&middot; XR for fabrication</p>
              <p>&middot; Innovative HCI approaches in XR</p>
              <p>&middot; Multi-disciplinary research projects involving innovative use of XR</p>
            </div>
          </div>
          <p>
            <strong> Poster and Demo Tracks </strong>
          </p>
          <p>
            <a name="docs-internal-guid-49b684a9-7fff-6772-25" /> &middot; VRST 2019 welcomes
            posters and demos on all topics of the main track
          </p>
          <p>
            <strong> Industry Track </strong>
          </p>
          <p>&middot; XR in industry, challenges, solutions and innovations</p>
        </div>

        <div className="col-12 col-lg-4" style={{ verticalAlign: 'top' }}>
          <h3>
            <strong> Important Dates </strong>
          </h3>
          <p>
            AoE (Anywhere on Earth)
            <br />{' '}
            <strong>
              {' '}
              <em>
                {' '}
                <br /> July 19, 2019 (23:59 AoE)
              </em>{' '}
            </strong>{' '}
            <br /> Papers with all material submission
          </p>
          <p>
            <strong>
              {' '}
              <em> August 15, 2019 (23:59 AoE) </em>{' '}
            </strong>{' '}
            <br /> Posters and demos submission
          </p>
          <p>
            <strong>
              {' '}
              <em> September 15, 2019 (23:59 AoE) </em>{' '}
            </strong>
          </p>
          <p>Author notification for papers, posters and demos</p>
          <p>
            <strong>
              {' '}
              <em> September 22, 2019 (23:59 AoE) </em>{' '}
            </strong>
          </p>
          <p>Camera-ready papers, posters, and demos</p>
          <p>
            <strong>
              {' '}
              <em> November 12-15, 2019 </em>{' '}
            </strong>
          </p>
          <p>Conference in Sydney, Australia</p>
          <h3>
            <strong> Organisers </strong>
          </h3>
          <p>
            <strong> Symposium General Chair: </strong>
            <br />
            Tomas Trescak, Australia
          </p>
          <p>
            <strong>Conference Chairs:</strong> <br /> Simeon Simoff, Australia
            <br /> Deborah Richards, Australia Anton Bogdanovych, Australia
          </p>
          <strong>
            Program Chairs:
            <br />{' '}
          </strong>
          <em> papers2019@vrst.acm.org </em>
          Thierry Duval, France
          <br />
          Torsten Kuhlen, Germany
          <br />
          Yuichi Itoh, Japan
          <br />
          Shigeo Morishima, Japan
          <br />
          Huyen Nguyen, Australia
          <br />
          <p>
            <strong>
              {' '}
              Demo Chair:
              <br />{' '}
            </strong>{' '}
            <em> demos2019@vrst.acm.org </em>
            <br />
            Richard Skarbez, Australia
          </p>
          <p>
            <strong> Poster Chair: </strong>
            <br />
            <em> posters2019@vrst.acm.org </em> <br />
            Martin Masek, Australia
          </p>
        </div>
      </div>
      <div className="row">
        <p>
          <strong>
            {' '}
            <em> Call for Exhibitors and Sponsors </em>{' '}
          </strong>
        </p>
        <p>
          The VRST 2019 offers exhibitors and sponsors an opportunity to showcase their company's
          products, attractive demos and innovative solutions at the symposium. Please refer to the
          conference web-page for information about signing up to become an exhibitor or sponsor at
          VRST 2019.
        </p>
      </div>

      <div className="row">
        <p>
          <strong> Submission Information </strong>
        </p>
        <p>
          The deadline for Research and Industrial Papers submissions is July 19, 2019 (23:59 AOE)
          and the deadline for Posters and Demos submissions is August 15, 2019 (23:59 AOE).
        </p>
        <p>
          Please use the ACM SIGCHI Conferences Submission System to submit your work:{' '}
          <a href="https://new.precisionconference.com/~sigchi">
            https://new.precisionconference.com/~sigchi
          </a>
        </p>
        <p>
          <strong> General Track, Poster Track and Industry Track </strong>
        </p>
        <p>Please select the appropriate track to which you are submitting your publication.</p>
        <p>
          <strong> Publication of the papers </strong>
        </p>
        <p>
          All accepted papers will be published in the ACM digital library in the VRST collection.
        </p>
        <p>
          Selected best papers will be invited to be submitted as an extended version (with at least
          30% more content) to Computers &amp; Graphics journal from Elsevier:{' '}
          <a href="https://www.journals.elsevier.com/computers-and-graphics">
            https://www.journals.elsevier.com/computers-and-graphics
          </a>
        </p>
        <p>
          <img
            align="left"
            src={makeUrl('/static/images/siggraph.png')}
            alt="logo"
            width="145"
            height="58"
            hspace="13"
          />
        </p>
        <p>
          In addition, a selection of excellent papers will get invited for a poster presentation at
          SIGGRAPH Asia 2019. Authors will have to create a shorter version of their work, targeting
          SIGGRAPH audience. SIGGRAPH Asia will be held in Brisbane from November 17 to November 20,
          2019.
        </p>
        <p>
          <strong> Paper Format </strong>
        </p>
        <p>
          Paper submissions should be anonymous and prepared in the "<strong>ACM Standard</strong> "
          format, also known as the "<strong>SigConf</strong> " format. Word and LaTeX templates for
          the "ACM Standard" / "SigConf" format can be found in the official 2017 ACM Master article
          template packages:{' '}
          <a href="http://www.acm.org/publications/proceedings-template">
            www.acm.org/publications/proceedings-template
          </a>
        </p>
        <p>
          <strong> Maximum length </strong>
        </p>
        <p>Full research paper submission: 9 pages + references</p>
        <p>Short paper submission: 4 pages + references</p>
        <p>Poster submission: 2 pages including references</p>
        <p>Industrial paper submission: 8 pages including references</p>
        <p>2-column "teaser" figures on the front page are allowed for all kinds of submissions.</p>
        <p>
          <strong> Anonymity Guidelines </strong>
        </p>
        <p>
          Please remove author and institution information from the author list on the title page,
          remove author information from all paper headers, and remove from the text any clues that
          would directly identify any of the authors. Please anonymize your PDF file. Note that PDF
          creator programs may automatically include author information in the file metadata.
        </p>
        <p>
          Citations of your own published work (including online) must be in the third person, in a
          manner that is not traceable to the identity of the authors. For example, the wording "in
          [3], Mountain and River have proposed..." is acceptable, whereas "in [3], we have
          proposed..." is not. (Where reference [3] is listed explicitly as "Mountain, A. and River,
          A., Detecting Mountains and Rivers, In <em>Proc. UIST '16</em> , 721-741.")
        </p>
        <p>
          Failure to comply with the above requirements will result in an automatic rejection of the
          paper.
        </p>
        <p>
          <strong> Supplementary Materials </strong>
        </p>
        <p>
          Submissions may be (optionally) accompanied by additional materials such as images,
          videos, or electronic documents. These materials do not form a part of the official
          submission. They will be viewed only at the discretion of the reviewers. All content
          should be in a portable format that is unlikely to require the user to download additional
          programs. For example, you may prefer PDF or HTML for documents, PNG or JPEG for images,
          and QuickTime or MPEG for videos. The total file size for supplementary materials should
          not exceed a total of 50MB.
        </p>
        <p>
          To the extent possible, accepted papers should stand on their own, with the additional
          material providing supplementary information or confirmation of results. It is, however,
          appropriate to refer to video footage in the paper.
        </p>
        <p>
          <strong> Attendance </strong>
        </p>
        <p>
          Paper acceptance is always conditional on at least one author registering for the
          conference and presenting their work in person.
        </p>
      </div>
    </div>
  </div> */}

    <div style={{ paddingTop: "0.5em" }}>
      <div style={{ borderBottom: "solid 2px black" }}>
        <span
          class="badge badge-dark "
          style={{ marginBottom: "0.5em", padding: "0.2em" }}
        >
          {" "}
          <h5> Important Dates </h5>
        </span>
      </div>
      <div style={{ paddingTop: "1em" }}>
        <h5>
          {" "}
          <span class="badge badge-danger">July 19, 2019 (23:59 AoE)</span>
        </h5>
        <p> Papers with all material submission</p>
        <h5>
          {" "}
          <span class="badge badge-danger">August 15, 2019 (23:59 AoE)</span>
        </h5>
        <p>Posters and demos submission</p>
        <h5>
          {" "}
          <span class="badge badge-danger">September 15, 2019 (23:59 AoE)</span>
        </h5>
        <p>Author notification for papers, posters and demos</p>

        <h5>
          {" "}
          <span class="badge badge-danger">September 22, 2019 (23:59 AoE)</span>
        </h5>
        <p>Camera-ready papers, posters, and demos</p>

        <h5>
          {" "}
          <span class="badge badge-danger">November 12-15, 2019</span>
        </h5>
        <p>Conference in Sydney, Australia</p>
      </div>
    </div>
    <div
      style={{
        background: "rgb(248, 248, 248)"
      }}
    >
      <div style={{ paddingTop: "0.5em" }}>
        <div style={{ borderBottom: "solid 2px black" }}>
          <span
            class="badge badge-dark "
            style={{ marginBottom: "0.5em", padding: "0.2em" }}
          >
            {" "}
            <h5> Papers </h5>
          </span>
        </div>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Programs Chair{" "}
            </h5>
          </span>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col">
              <span>&gt;</span> Thierry Duval, France
              <br />
              <span>&gt;</span>Torsten Kuhlen, Germany
              <br />
              <span>&gt;</span>Huyen Nguyen, Australia
            </div>
            <div className="col">
              <span>&gt;</span>Yuichi Itoh, Japan
              <br />
              <span>&gt;</span>Shigeo Morishima, Japan
            </div>
          </div>
        </div>

        <a
          href="mailto:papers2019@vrst.acm.org"
          class="badge badge-danger"
          style={{
            width: "100%",
            padding: "1em",
            fontSize: "14px",
            marginTop: "2em",
            marginBottom: "2em"
          }}
        >
          papers2019@vrst.acm.org
        </a>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Call for Papers{" "}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>CFP download here .</h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Presentation Template{" "}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>Template download here</h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Call for Papers{" "}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>Submission Information</h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Submission Information
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          The deadline for long/short paper submissions is August 15, 2018
          (23:59 AoE(Anywhere on Earth)). Use the ACM SIGCHI Conferences
          Submission System to submit your work:
          https://new.precisionconference.com/~sigchi Any documents on arXiv are
          ignored. And it is allowed for authors to submit any documents that
          have been already written in other language than English (even if they
          are journal articles in other language.)
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Paper Format{" "}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Paper submissions should be anonymous and prepared in the "ACM
          Standard" format, also known as the "SigConf" format. Word and LaTeX
          templates for the "ACM Standard" / "SigConf" format can be found
          inside the official 2017 ACM Master article template packages:
          www.acm.org/publications/proceedings-template The maximum length for a
          'full paper' submission is 10 pages. The maximum length for a 'short
          paper' submission is 4 pages. 2-column "teaser" figures on the front
          page are allowed. The maximum length of submissions DOES NOT include
          "Reference."
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Anonymity Guidelines{" "}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Please remove author and institution information from the author list
          on the title page, remove author information from all paper headers,
          and remove from the text any clues that would directly identify any of
          the authors. Please anonymize your PDF file. Note that PDF creator
          programs may automatically include author information in the file
          metadata. Citations of your own published work (including online) must
          be in the third person, in a manner that is not traceable to the
          identity of the authors. For example, the wording "in [3], Mountain
          and River have proposed..." is acceptable, whereas "in [3], we have
          proposed...“ is not. (Where reference [3] is listed explicitly as
          "Mountain, A. and River, A., Detecting Mountains and Rivers, In Proc.
          UIST '16, 721-741.") Failure to comply with the above requirements
          will result in automatic rejection of the paper.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Supplementary Materials
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Submissions may be (optionally) accompanied by additional materials
          such as images, videos, or electronic documents. These materials do
          not form a part of the official submission. They will be viewed only
          at the discretion of the reviewers. All content should be in a
          portable format that is unlikely to require the user to download
          additional programs (for example, you may prefer PDF or HTML for
          documents, PNG or JPEG for images, and QuickTime or MPEG for video).
          The total file size for supplementary materials should not exceed a
          total of 50MB. To the extent possible, accepted papers should stand on
          their own, with the additional material providing supplementary
          information or confirmation of results. It is, however, appropriate to
          refer to video footage in the paper.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Attendance
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Paper acceptance is always conditional on at least one author
          registering for the conference and presenting the work in person.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Invitation to journal
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          TVCG could invite 2 or 3 best papers from VRST 2018, but authors
          should submit their extended version after conference (with 30%+ new
          materials).
        </h6>
      </div>
    </div>
    <div
      style={{
        background: "rgb(248, 248, 248)",
        marginTop: "4em"
      }}
    >
      <div style={{ paddingTop: "0.5em" }}>
        <div style={{ borderBottom: "solid 2px black" }}>
          <span
            class="badge badge-dark "
            style={{ marginBottom: "0.5em", padding: "0.2em" }}
          >
            {" "}
            <h5> Posters </h5>
          </span>
        </div>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Programs Chair{" "}
            </h5>
          </span>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col">
              <span>&gt;</span> Thierry Duval, France
              <br />
              <span>&gt;</span>Torsten Kuhlen, Germany
              <br />
              <span>&gt;</span>Huyen Nguyen, Australia
            </div>
            <div className="col">
              <span>&gt;</span>Yuichi Itoh, Japan
              <br />
              <span>&gt;</span>Shigeo Morishima, Japan
            </div>
          </div>
        </div>

        <a
          href="mailto:papers2019@vrst.acm.org"
          class="badge badge-danger"
          style={{
            width: "100%",
            padding: "1em",
            fontSize: "14px",
            marginTop: "2em",
            marginBottom: "2em"
          }}
        >
          poster2019@vrst.acm.org
        </a>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Call for Posters
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          The 2018 ACM Symposium on Virtual Reality Software invites prospective
          authors to submit poster papers (2 pages). All accepted posters will
          be included in the conference proceedings and in the conference
          program for a presentation in a dedicated session.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Submission Information
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          The deadline for poster submissions is September 01, 2018 (23:59
          AoE(Anywhere on Earth)) September 06, 2018, 23:59 PST (extended). Use
          the ACM SIGCHI Conferences Submission System to submit your work:
          https://new.precisionconference.com/~sigchi
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Poster Format
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Poster submissions should be anonymous and prepared in the "ACM
          Standard" format, also known as the "SigConf" format. Word and LaTeX
          templates for the "ACM Standard" / "SigConf" format can be found
          inside the official 2017 ACM Master article template packages:
          www.acm.org/publications/proceedings-template
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Anonymity Guidelines
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Please remove author and institution information from the author list
          on the title page of your PDF submission, remove author information
          from all paper headers, and remove from the text any clues that would
          directly identify any of the authors. Please anonymize your PDF file.
          Note that PDF creator programs may automatically include author
          information in the file metadata. Citations of your own published work
          (including online) must be in the third person, in a manner that is
          not traceable to the identity of the authors. For example, the wording
          "in [3], Mountain and River have proposed..." is acceptable, whereas
          "in [3], we have proposed...“ is not. (Where reference [3] is listed
          explicitly as "Mountain, A. and River, A., Detecting Mountains and
          Rivers, In Proc. UIST '16, 721-741.") Failure to comply with the above
          requirements will result in automatic rejection of the paper.
        </h6>
      </div>

      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Attendance
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Poster acceptance is always conditional on at least one author
          registering for the conference and presenting the work in person.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Guidelines for Presenters
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Poster sessions We have three poster sessions during the conference,
          29, 30, 31 Nov at Room31 (3F). All full/short paper authors (on the
          day) and poster authors are required to present posters. [Timetable,
          Poster list] All posters are replaced everyday.Please post your poster
          onto the panel before your session (your panel is available from
          morning). Please remove your poster after your session We encourage
          you to bring a portable computer to demo your work. Outlets for power
          may not be available, so ensure your computer is well charged before
          the session. Poster preparation Please prepare your poster in A0 size
          in vertical layout. The design of the poster is up to you. Print and
          bring your poster to the conference.
        </h6>
      </div>
    </div>

    <div
      style={{
        background: "rgb(248, 248, 248)",
        marginTop: "4em"
      }}
    >
      <div style={{ paddingTop: "0.5em" }}>
        <div style={{ borderBottom: "solid 2px black" }}>
          <span
            class="badge badge-dark "
            style={{ marginBottom: "0.5em", padding: "0.2em" }}
          >
            {" "}
            <h5> Demos </h5>
          </span>
        </div>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Demos Chair{" "}
            </h5>
          </span>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col">
              <span>&gt;</span> Thierry Duval, France
              <br />
              <span>&gt;</span>Torsten Kuhlen, Germany
              <br />
              <span>&gt;</span>Huyen Nguyen, Australia
            </div>
            <div className="col">
              <span>&gt;</span>Yuichi Itoh, Japan
              <br />
              <span>&gt;</span>Shigeo Morishima, Japan
            </div>
          </div>
        </div>

        <a
          href="mailto:papers2019@vrst.acm.org"
          class="badge badge-danger"
          style={{
            width: "100%",
            padding: "1em",
            fontSize: "14px",
            marginTop: "2em",
            marginBottom: "2em"
          }}
        >
          Demos2019@vrst.acm.org
        </a>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Call for Demos
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          The 2018 ACM Symposium on Virtual Reality Software and Technology
          seeks hands-on demonstrations sharing novel interactive technologies
          and experiences among the VR community. We encourage demonstrations of
          novel and innovative prototypes, devices, interaction techniques or
          systems from any area of virtual reality that are presentable in a
          conference setting.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Submission Information
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          The deadline for poster submissions is September 01, 2018 (23:59
          AoE(Anywhere on Earth)) September 06, 2018, 23:59 PST (extended). Use
          the ACM SIGCHI Conferences Submission System to submit your work:
          https://new.precisionconference.com/~sigchi
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Demo Format
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Demo submissions should include a two-page extended abstract
          describing the demo, as well as a video of the demo and a requirements
          document. The extended abstract should provide figures showing an
          overview of the demo; as well as a technical description of the demo,
          explaining its novelty, usefulness, applications, and how the audience
          can interact with it. The extended abstracts will be indexed and
          published in the ACM Digital Library. Extended abstracts should be
          anonymous and prepared in the "ACM Standard" format, also known as the
          "SigConf" format. Word and LaTeX templates for the "ACM Standard" /
          "SigConf" format can be found inside the official 2017 ACM Master
          article template packages:
          www.acm.org/publications/proceedings-template Authors should also
          submit a short video (no longer than 5 minutes) showing their demo, in
          MP4 format using the H.264 codec. The requirements document should
          describe the demo’s hardware setup, the size, and space requirements
          in detail. The conference will provide basic infrastructure, like a
          table and power, and space either with daylight or in a dark room.
        </h6>
      </div>

      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Attendance
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Accepted demos must be set up and running during demo sessions at the
          conference. Additionally, authors of accepted demos will present their
          demo at a one-minute fast forward session The demo fast forward is
          canceled. Please present your work only in the demo session. Demo
          acceptance is always conditional on at least one author registering
          for the conference and presenting the work in person.
        </h6>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ borderBottom: "solid 2px lightgray" }}>
          <span style={{ marginBottom: "0.5em" }}>
            {" "}
            <h5>
              <span style={{ fontSize: "1.5rem", color: "red" }}>&bull;</span>{" "}
              Guidelines for Presenters
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: "1em" }}>
          Demo session is scheduled every evening during the conference, 29-31
          Nov at Room33 (3F) and Room41-47 (4F). [Timetable, Demo list] Nov 29,
          17:20-19:00 Nov 30, 16:30-18:10 (19:00- Banquet) Dec 01, 15:30-17:10
          (17:20- Closing remark) Demo presentation will be available for all
          three days. Please present your demo during the sessions. You can also
          present your demo at any other time but it’s not mandatory. Equipment
          transfer Shipping information is provided via email to demo authors.
          If you are going to send equipment for your demo, please check the
          instructions of the mail (destination and arrival data). [Carrying-in]
          (details are provided via email) Transfer date : Nov. 27th. (we can
          accept packages only after this date) Tag : VRST [demo id] (please see
          the demo list to check your own demo id). Demo preparation [Set up]
          Nov 27, 13:00-18:00 Nov 28, 09:00-18:00 [Clean up] Dec 01, 18:00-20:00
          (after closing remark) Dec 02, 09:00-13:00 (optional) The room for
          your demo is available from Nov. 27th (13:00). You can also use Nov.
          28th for your demo setup. Main time to clean up is scheduled on Dec.
          1st after closing remark. If required, you can also useDec. 2nd
          (optional). In the case, your demonstration should be cleaned up by
          Dec. 2nd (13:00).
        </h6>
      </div>
    </div>
    <div
      style={{
        marginTop: "4em"
      }}
    >
      <div style={{ paddingTop: "0.5em" }}>
        <div style={{ borderBottom: "solid 2px black" }}>
          <span
            class="badge badge-dark "
            style={{ marginBottom: "0.5em", padding: "0.2em" }}
          >
            {" "}
            <h5> Support for Student Presentations </h5>
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "1em"
        }}
      >
        <h6>
          The SIGCHI Student Travel Grant (SSTG) program is intended to enable
          students who lack other funding opportunities to attend
          SIGCHI-sponsored or co-sponsored conferences. This travel grant is
          intended to support students whose intention is to present at a
          SIGCHI-sponsored conference, not just attend. The deadline for
          submissions is May 1, 2018 (23:59 PST) Notification of results by May
          15, 2018 Details can be found at:
          sigchi.org/conferences/funding/student-travel-grant.
        </h6>
      </div>
    </div>
  </div>
);
