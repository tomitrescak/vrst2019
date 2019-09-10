import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { makeUrl } from '../components/common';

const Accessibility = () => (
  <Layout>
    <PageHeader title="Developer Showcase" cls="submissions" />

    <div className="main-content page">
      <div className="container ">
        <p>
          The ACM Virtual Realty Software and Technology (VRST) Conference is an internationally
          renowned flagship event celebrating virtual, augmented, and mixed reality (xR) which
          attracts the brightest researchers, developers, and high quality speakers working on xR
          projects.
        </p>
        <p>
          For the first time in its 25-year history, VRST 2019 will be hosted in Sydney, Australia
          at Western Sydney University’s Parramatta City Campus from 12 to 15 November, where
          everyone from enthusiasts to professionals can learn about this disruptive and exciting
          technology.
        </p>
        <p>
          This year, VRST invites creators and developers working on xR projects to participate in
          our Developer Showcase. This event will take place on Tuesday, 12 November, concurrent
          with the opening of VRST 2019.
        </p>
        <p>
          The Developer Showcase is open to all creators and developers who are using xR technology
          in their projects. It will provide up-and-coming creators with an opportunity to collect
          immediate feedback and advice from xR researchers and industry professionals to
          potentially enhance delivery of their product development and designs.{' '}
        </p>
        <p>
          Prizes will be awarded to the best projects, chosen by the public and a jury panel
          consisting of VRST keynote speakers and VRST Chairs, for the following categories:
        </p>
        <ul>
          <li>Originality and Impact Award</li>
          <li>Innovation and Technical Mastery Award</li>
          <li>People’s Choice Award</li>
        </ul>
        <p>
          Prizes will include a full registration for the VRST conference, as well as VR equipment.
          To register for the Developer Showcase, please email developershowcase@vrst.acm.org with
          the following information:
        </p>
        <ul>
          <li>Name and contact information </li>
          <li>Link to a 3-5 minute online video of your project, and</li>
          <li>
            Any information about your needed hardware setup, size, or space requirements. Please
            note that participants will have to provide their own equipment; VRST will only be able
            to provide basic infrastructure, such as tables and power.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);
export default Accessibility;
