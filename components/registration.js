import React from 'react';
import { PageSection } from './page_section';

export const Registration = () => (
  <PageSection title="Registration" id="registration">
    Choose the VRST 2019 registration category that best fits your schedule and budget.
    {/* and register now! */}
    <div>
      <strong>Registration Deadlines is 1st November 2019</strong>, 23:55 PST. (For maximum savings,
      be sure to register)
    </div>
    <p style={{ marginTop: '20px' }}>
      <strong>
        The registration in now OPEN!{' '}
        <a href="https://onestop.westernsydney.edu.au/OneStopWeb/SCEM_019" target="_blank">
          Please click on this link to register.
        </a>
      </strong>
    </p>
    <div style={{ marginTop: '30px' }}>
      <table id="registration-fee-table" className="table">
        {/* <caption>Registration Fee</caption> */}
        <tbody>
          <tr>
            <th>Registration Fee</th>
            <th>Early Bird (ends October 1st, 2019)</th>
            <th>Late</th>
          </tr>
          <tr>
            <td>Member</td>
            <td>850 AUD</td>
            <td>990 AUD</td>
          </tr>
          <tr>
            <td>Non-member</td>
            <td>990 AUD</td>
            <td>1100 AUD</td>
          </tr>
          <tr>
            <td>Student</td>
            <td>350 AUD</td>
            <td>450 AUD</td>
          </tr>
          <tr>
            <td>Retiree</td>
            <td>550 AUD</td>
            <td>650 AUD</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageSection>
);
