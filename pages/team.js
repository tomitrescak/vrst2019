import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { makeUrl } from '../components/common';
import TeamStructure from './../components/teamstructure';

const Team = () => (
  <Layout>
    <PageHeader title="Team" cls="venue" />

    <div className="main-content page">
      <TeamStructure />
    </div>
  </Layout>
);
export default Team;
