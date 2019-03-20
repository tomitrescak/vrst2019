import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { makeUrl } from '../components/common';
import { Faqs } from '../components/faqs';

const Accessibility = () => (
  <Layout>
    <PageHeader title="Accessibility" cls="venue" />

    <div className="main-content page">
      <Faqs />
    </div>
  </Layout>
);
export default Accessibility;
