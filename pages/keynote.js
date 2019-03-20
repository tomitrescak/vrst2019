import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { makeUrl } from '../components/common';
import { Keynotes } from './../components/keynotes';

export const Keynote = () => (
  <Layout>
    <PageHeader title="Keynotes" cls="venue" />

    <div className="main-content page">
      <Keynotes />
    </div>
  </Layout>
);
export default Keynote;
