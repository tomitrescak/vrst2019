import * as React from 'react';
import { CountDown } from './countdown';
import { makeUrl } from './common';

export const Introduction = () => (
  <div className="hero-content">
    <div className="container">
      <div className="row">
        <div className="col-12 offset-lg-2 col-lg-10">
          <div className="entry-header">
            <h2>VRST</h2>

            <div className="entry-meta-date">November 12, 2019</div>
            <div className="entry-meta-description">
              25th ACM Symposium on Virtual Reality Software and Technology
            </div>
          </div>

          <CountDown />
        </div>
      </div>

      <div className="row">
        <div className="col-12 ">
          <div className="entry-footer">
            <a href={makeUrl('/submissions')} className="btn">
              Submission Instructions
            </a>
            {/* <a href="#" className="btn current">
                    See Lineup
                  </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
