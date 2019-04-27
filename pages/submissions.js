import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { makeUrl } from '../components/common';
import TeamStructure from './../components/teamstructure';
import { CFP } from '../components/cfp';

const Team = () => (
  <Layout>
    <PageHeader title="Submissions" cls="submissions" />

    <div className="main-content page">
      <div className="container">
        <div className="entry-header">
          <div className="entry-title">
            <p>VRST 2019</p>
            <h2>Call for Papers and Sponsors</h2>
          </div>
        </div>

        <CFP />
      </div>
    </div>
  </Layout>
);
export default Team;
