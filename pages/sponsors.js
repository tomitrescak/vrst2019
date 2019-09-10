import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { Faqs } from '../components/faqs';

const Accessibility = () => (
  <Layout>
    <PageHeader title="Sponsorship Prospectus" cls="submissions" />

    <div className="main-content page">
      <div className="container ">
        <h3>Becoming a Sponsor</h3>
        <p>
          We warmly invite you to sponsor the 25th ACM Symposium on Virtual Reality Software and
          Technology (VRST). As the premier international symposium for Virtual Reality Software and
          Technology, VRST 2019 will showcase the latest research, systems and techniques from
          researchers and developers in augmented, virtual and mixed reality (AR/VR/MR) software and
          technology.
        </p>
        <p>
          For the first time in its history, VRST will be convened in Australia by Western Sydney
          University. The Symposium will be held from 12 November to 15 November 2019, in Western
          Sydney University's Peter Shergold Building, Parramatta.
        </p>
        <p>
          Supported by leading organisations ACM, SIGCHI and SIGGRAPH,the event will attract an
          estimated <b>300 world-leading researchers and industry professionals.</b>
        </p>
        <h3>Keynote Speakers</h3>
        <p>
          <ul>
            <li>
              <b>Timoni West</b>, Director of AR/VR/MR Research at Unity Technologies
            </li>
            <li>
              <b>Mark Walsh</b>, Founder/ CEO Motional Ai and Creative Director with Pixar for 18
              years
            </li>
            <li>
              <b>Professor Mark Billinghurst</b>, Human Computer Interaction at the University of
              South Australia
            </li>
          </ul>
        </p>
        <h3>Benefits of Sponsorship</h3>
        <ul>
          <li>Face-to-face exposure with local and international delegates.</li>
          <li>
            Maintain a high profile with your Australian and international target markets and source
            of employees.
          </li>
          <li>
            Network with academic leaders, delegates and key Australian and international
            decision-makers.
          </li>
          <li>
            Evaluate regional and international trends and issues facing the disciplines to design
            and generate future business opportunities.
          </li>
          <li>
            Demonstrate your involvement, commitment and support of the disciplines underpinning
            industry success.
          </li>
          <li>
            Launch new products and services to an audience empowered with decision-making
            authority.
          </li>
          <li>Exclusive sponsorship of Welcome Reception or Conference Banquet.</li>
          <li>Presentation to delegates and industry.</li>
        </ul>
        <h3>Sponsorship benefits overview</h3>
        <table className="sponsors" cellSpacing={10}>
          <thead>
            <tr>
              <th className="yellow">Benefit</th>
              <th>Platinum AUD 30,000 *</th>
              <th>Gold AUD 20,000 *</th>
              <th>Silver AUD 10,000 *</th>
              <th>Bronze AUD 5,000 *</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="yellow">Banquet Sponsorship</td>
              <td>&#10003;</td>
              <td>&#x2717;</td>
              <td>&#x2717;</td>
              <td>&#x2717;</td>
            </tr>
            <tr>
              <td className="yellow">Welcome Reception Sponsorship</td>
              <td>&#x2717;</td>
              <td>&#10003;</td>
              <td>&#x2717;</td>
              <td>&#x2717;</td>
            </tr>
            <tr>
              <td className="yellow">Advertisement in Conference Program</td>
              <td>Full Page</td>
              <td>Half Page</td>
              <td>&#x2717;</td>
              <td>&#x2717;</td>
            </tr>
            <tr>
              <td className="yellow">Presentation at Industry Networking</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#x2717;</td>
            </tr>
            <tr>
              <td className="yellow">Verbal Acknowledgement throughout conference</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td className="yellow">Social Media Acknowledgement</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td className="yellow">Trade display</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td className="yellow">Acknowledgement of Sponsorship on Website</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td className="yellow">Acknowledgement of Sponsorship on conference program</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td className="yellow">1 x A5 Promotional flyer in Conference bag</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
              <td>&#10003;</td>
            </tr>
            <tr>
              <td className="yellow">Complementary Registrations</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        * - Prices are negotiable
      </div>
    </div>
  </Layout>
);
export default Accessibility;
