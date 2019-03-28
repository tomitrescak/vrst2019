import * as React from "react";

import { Layout } from "../components/layout";
import { PageHeader } from "../components/page_header";
import { makeUrl } from "../components/common";

const Visa = () => (
  <Layout>
    <PageHeader title="Visa Information" cls="venue" />

    <div className="main-content page">
      <div className="container">
        <p>
          All visitors to Australia must have a valid visa to travel to and
          enter Australia. To explore visa options and get information on visa’s
          appropriate for you, follow the
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/visit">
            <strong> link </strong>
          </a>
          below and answer a few short questions.
          <br />
          <br />
          While tourist visa is normally handled in a matter of week, allow
          yourself up to 6 weeks in case unforeseen circumstances arise, such as
          need for documentation of financing. We can provide official
          invitation letters to all participants.
        </p>
      </div>
    </div>
  </Layout>
);
export default Visa;
