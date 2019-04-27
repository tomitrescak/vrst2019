import React from 'react';
import { PageSection } from './page_section';

export const Registration = () => (
  <PageSection title="Registration" id="registration">
    Choose the VRST 2018 registration category that best fits your schedule and budget.
    {/* and register now! */}
    <div>
      <strong>Registration Deadlines is 1st November 2019</strong>, 23:55 PST. (For maximum savings,
      be sure to register)
    </div>
    {/* <p><strong><a href="https://www.regonline.com/vrst2018tokyo" target="_blank">REGISTER NOW!</a></strong></p> */}
    <div style={{ marginTop: '30px' }}>
      <table id="registration-fee-table" className="table">
        {/* <caption>Registration Fee</caption> */}
        <tbody>
          <tr>
            <th>Registration Fee</th>
            <th>Early Bird</th>
            <th>Late</th>
          </tr>
          <tr>
            <td>Member</td>
            <td>600USD</td>
            <td>700USD</td>
          </tr>
          <tr>
            <td>Non-member</td>
            <td>700USD</td>
            <td>800USD</td>
          </tr>
          <tr>
            <td>Student</td>
            <td>250USD</td>
            <td>250USD</td>
          </tr>
          <tr>
            <td>Retiree</td>
            <td>400USD</td>
            <td>450USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageSection>
);
