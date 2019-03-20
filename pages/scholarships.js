import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';
import { makeUrl } from '../components/common';
import { StudentScholarships } from '../components/studentscholarships';

const Scholarship = () => (
  <Layout>
    <PageHeader title="Student Scholarships" cls="venue" />

    <div className="main-content page">
      <StudentScholarships />
    </div>
  </Layout>
);
export default Scholarship;
