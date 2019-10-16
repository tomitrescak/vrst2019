import React from 'react';
import { redBright, red } from 'ansi-colors';
import { makeUrl } from './common';

const Header = ({ children }) => (
  <div style={{ paddingTop: '60px' }}>
    <div style={{ borderBottom: 'solid 2px black' }}>
      <span>
        <h5> {children} </h5>
      </span>
    </div>
  </div>
);

const Section = ({ children, title }) => (
  <div className="cfp-section">
    <div className="cfp-header">
      <h5>
        <span className="cfp-bullet">&bull;</span> {title}
      </h5>
    </div>

    {children}
  </div>
);

const Attendance = () => (
  <Section title="Attendance">
    <p>
      Paper acceptance is always conditional on at least one author registering for the conference
      and presenting the work in person.
    </p>
  </Section>
);

const Anonymity = () => (
  <>
    <Section title="Anonymity Guidelines">
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
        proposed...“ is not. (Where reference [3] is listed explicitly as "Mountain, A. and River,
        A., Detecting Mountains and Rivers, In Proc. UIST '16, 721-741."){' '}
      </p>
      <p>
        Failure to comply with the above requirements will result in automatic rejection of the
        paper.
      </p>
    </Section>
  </>
);

const demosDeadline = 'August 15, 2019 (23:59 AoE)';
const papersDeadline = 'July 19, 2019 (23:59 AoE)';

export const CFP = () => (
  <div>
    <div style={{ paddingTop: '0.5em' }}>
      <div style={{ borderBottom: 'solid 2px #141e21' }}>
        <h5> Important Dates </h5>
      </div>
      <div style={{ paddingTop: '1em' }}>
        <div className="cfp-important">
          <span className="badge-vrst">{papersDeadline}</span>
          Papers with all material submission
        </div>
        <div className="cfp-important">
          <span className="badge-vrst">{demosDeadline}</span>
          Posters and demos submission
        </div>
        <div className="cfp-important">
          <span className="badge-vrst">September 15, 2019 (23:59 AoE)</span>
          Author notification for papers, posters and demos
        </div>
        <div className="cfp-important">
          <span className="badge-vrst">September 22, 2019 (23:59 AoE)</span>
          Camera-ready papers, posters, and demos
        </div>
        <div className="cfp-important">
          <span className="badge-vrst">November 12-15, 2019</span>
          Conference in Sydney, Australia
        </div>
      </div>
    </div>
    <div>
      <Header>Papers</Header>

      <div style={{ paddingTop: '2em' }}>
        <div style={{ borderBottom: 'solid 2px lightgray' }}>
          <span style={{ marginBottom: '0.5em' }}>
            {' '}
            <h5>
              <span style={{ fontSize: '1.5rem', color: '#f9ab1a' }}>&bull;</span> Programs Chair{' '}
            </h5>
          </span>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '1em' }}>
            <div className="col">
              <span>&gt;</span> Thierry Duval, France
              <br />
              <span>&gt;</span> Torsten Kuhlen, Germany
              <br />
              <span>&gt;</span> Huyen Nguyen, Australia
            </div>
            <div className="col">
              <span>&gt;</span> Yuichi Itoh, Japan
              <br />
              <span>&gt;</span> Shigeo Morishima, Japan
            </div>
          </div>
        </div>
      </div>

      <a href="mailto:papers2019@vrst.acm.org" className="mail-vrst">
        ✉️ papers2019@vrst.acm.org
      </a>

      {/* <div style={{ paddingTop: '2em' }}>
        <div style={{ borderBottom: 'solid 2px lightgray' }}>
          <span style={{ marginBottom: '0.5em' }}>
            {' '}
            <h5>
              <span style={{ fontSize: '1.5rem', color: '#f9ab1a' }}>&bull;</span> Call for Papers{' '}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: '1em' }}>CFP download here .</h6>
      </div>
      <div style={{ paddingTop: '2em' }}>
        <div style={{ borderBottom: 'solid 2px lightgray' }}>
          <span style={{ marginBottom: '0.5em' }}>
            {' '}
            <h5>
              <span style={{ fontSize: '1.5rem', color: '#f9ab1a' }}>&bull;</span> Presentation
              Template{' '}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: '1em' }}>Template download here</h6>
      </div>
      <div style={{ paddingTop: '2em' }}>
        <div style={{ borderBottom: 'solid 2px lightgray' }}>
          <span style={{ marginBottom: '0.5em' }}>
            {' '}
            <h5>
              <span style={{ fontSize: '1.5rem', color: '#f9ab1a' }}>&bull;</span> Call for Papers{' '}
            </h5>
          </span>
        </div>

        <h6 style={{ marginTop: '1em' }}>Submission Information</h6>
      </div> */}
      <Section title="Submission Information">
        <p>
          The deadline for long/short paper submissions is {papersDeadline}. Use the ACM SIGCHI
          Conferences Submission System to submit your work:{' '}
          <a href="https://new.precisionconference.com/~sigchi">
            https://new.precisionconference.com/~sigchi
          </a>
        </p>
        <p>
          Any documents on arXiv are ignored. And it is allowed for authors to submit any documents
          that have been already written in other language than English (even if they are journal
          articles in other language.)
        </p>
      </Section>

      <Section title="Paper Format">
        <p>
          Paper submissions should be anonymous and prepared in the "ACM Standard" format, also
          known as the "SigConf" format.
        </p>
        <p>
          Word and LaTeX templates for the "ACM Standard" / "SigConf" format can be found inside the
          official 2017 ACM Master article template packages:{' '}
          <a href="https://www.acm.org/publications/proceedings-template">
            www.acm.org/publications/proceedings-template
          </a>
        </p>
        <p>
          The maximum length for a 'full paper' submission is 10 pages. The maximum length for a
          'short paper' submission is 4 pages. 2-column "teaser" figures on the front page are
          allowed. The maximum length of submissions DOES NOT include "Reference."
        </p>
      </Section>

      <Section title="Supplementary Materials">
        <p>
          Submissions may be (optionally) accompanied by additional materials such as images,
          videos, or electronic documents. These materials do not form a part of the official
          submission. They will be viewed only at the discretion of the reviewers. All content
          should be in a portable format that is unlikely to require the user to download additional
          programs (for example, you may prefer PDF or HTML for documents, PNG or JPEG for images,
          and QuickTime or MPEG for video). The total file size for supplementary materials should
          not exceed a total of 50MB.
        </p>
        <p>
          To the extent possible, accepted papers should stand on their own, with the additional
          material providing supplementary information or confirmation of results. It is, however,
          appropriate to refer to video footage in the paper.
        </p>
      </Section>

      <Anonymity />
      <Attendance />

      <Section title="Invitation to journal / SIGGRAPH">
        <p>
          <a href="https://www.journals.elsevier.com/computers-and-graphics" target="_blank">
            Computers and Graphics (CAG) Journal
          </a>{' '}
          could invite 2 or 3 best papers from VRST 2019, but authors should submit their extended
          version after conference (with 30%+ new materials). Selected best paper will also be
          invited to present as postern in 2019 SIGGRAPH ASIA in Brisbane.
        </p>
      </Section>
    </div>
    <div>
      <Header>Posters</Header>
      <div style={{ paddingTop: '2em' }}>
        <div style={{ borderBottom: 'solid 2px lightgray' }}>
          <span style={{ marginBottom: '0.5em' }}>
            {' '}
            <h5>
              <span style={{ fontSize: '1.5rem', color: '#f9ab1a' }}>&bull;</span> Programs Chair{' '}
            </h5>
          </span>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '1em' }}>
            <div className="col">
              <span>&gt;</span> Martin Masek
            </div>
          </div>
        </div>

        <a href="mailto:posters2019@vrst.acm.org" className="mail-vrst">
          ✉️ posters2019@vrst.acm.org
        </a>
      </div>

      <Section title="Call for Posters">
        <p>
          The 2019 ACM Symposium on Virtual Reality Software invites prospective authors to submit
          poster papers (2 pages). All accepted posters will be included in the conference
          proceedings and in the conference program for a presentation in a dedicated session.
        </p>
      </Section>

      <Section title="Submission Information">
        <p>
          The deadline for poster submissions is {demosDeadline}. Use the ACM SIGCHI Conferences
          Submission System to submit your work:{' '}
          <a href="https://new.precisionconference.com/~sigchi">
            https://new.precisionconference.com/~sigchi
          </a>
        </p>
      </Section>

      <Section title="Poster Format">
        <p>
          Poster submissions should be anonymous and prepared in the "ACM Standard" format, also
          known as the "SigConf" format. Word and LaTeX templates for the "ACM Standard" / "SigConf"
          format can be found inside the official 2017 ACM Master article template packages:
          <a href="https://www.acm.org/publications/proceedings-template">
            https://www.acm.org/publications/proceedings-template
          </a>
        </p>
      </Section>

      <Anonymity />
      <Attendance />

      <Section title="Guidelines for Presenters">
        <p>To be announced ...</p>
      </Section>
    </div>

    <div>
      <Header>Demos</Header>
      <div style={{ paddingTop: '2em' }}>
        <div style={{ borderBottom: 'solid 2px lightgray' }}>
          <span style={{ marginBottom: '0.5em' }}>
            {' '}
            <h5>
              <span style={{ fontSize: '1.5rem', color: '#f9ab1a' }}>&bull;</span> Demos Chairs
            </h5>
          </span>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '1em' }}>
            <div className="col">
              <span>&gt;</span> Richard Skarbez (La Trobe)
              <br />
              <span>&gt;</span> Anton Bogdanovych (Western Sydney University)
            </div>
          </div>
        </div>

        <a href="mailto:demos2019@vrst.acm.org" className="mail-vrst">
          ✉️ demos2019@vrst.acm.org
        </a>
      </div>

      <Section title="Call for Demos">
        <p>
          The 2019 ACM Symposium on Virtual Reality Software and Technology seeks hands-on
          demonstrations sharing novel interactive technologies and experiences among the VR
          community. We encourage demonstrations of novel and innovative prototypes, devices,
          interaction techniques or systems from any area of virtual reality that are presentable in
          a conference setting.
        </p>
      </Section>

      <Section title="Submission Information">
        <p>
          The deadline for poster submissions is {demosDeadline}. Use the ACM SIGCHI Conferences
          Submission System to submit your work:{' '}
          <a href="https://new.precisionconference.com/~sigchi">
            https://new.precisionconference.com/~sigchi
          </a>
        </p>
      </Section>

      <Section title="Demo Format">
        <p>
          Demo submissions should include a two-page extended abstract describing the demo, as well
          as a video of the demo and a requirements document. The extended abstract should provide
          figures showing an overview of the demo; as well as a technical description of the demo,
          explaining its novelty, usefulness, applications, and how the audience can interact with
          it. The extended abstracts will be indexed and published in the ACM Digital Library.
        </p>
        <p>
          Extended abstracts should be anonymous and prepared in the "ACM Standard" format, also
          known as the "SigConf" format. Word and LaTeX templates for the "ACM Standard" / "SigConf"
          format can be found inside the official 2017 ACM Master article template packages:
          <a href="https://www.acm.org/publications/proceedings-template">
            www.acm.org/publications/proceedings-template
          </a>
        </p>
        <p>
          Authors should also submit a short video (no longer than 5 minutes) showing their demo, in
          MP4 format using the H.264 codec.
        </p>
        <p>
          The requirements document should describe the demo’s hardware setup, the size, and space
          requirements in detail. The conference will provide basic infrastructure, like a table and
          power, and space either with daylight or in a dark room.
        </p>
      </Section>

      <Attendance />
      <Section title="Guidelines for Presenters">
        <p>To be announced ...</p>
      </Section>
    </div>
    <div>
      <Header>Support for Student Presentations</Header>

      <div
        style={{
          marginTop: '1em'
        }}
      >
        <p>
          The SIGCHI Student Travel Grant (SSTG) program is intended to enable students who lack
          other funding opportunities to attend SIGCHI-sponsored or co-sponsored conferences. This
          travel grant is intended to support students whose intention is to present at a
          SIGCHI-sponsored conference, not just attend. Details can be found at:{' '}
          <a href="https://sigchi.org/conferences/funding/student-travel-grant">
            sigchi.org/conferences/funding/student-travel-grant
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);
