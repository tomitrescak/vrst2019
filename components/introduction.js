import * as React from 'react';
import { CountDown } from './countdown';
import { makeUrl } from './common';

export const Introduction = () => (
  <div className="hero-content">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-12 offset-lg-2 col-lg-10">
              <div className="entry-header">
                <div className="entry-meta-date">November 12-15, 2019</div>
                <img src={makeUrl('/static/images/vrst_logo_black.png')} className="logo" />
                <div className="entry-meta-description">
                  25th ACM Symposium on Virtual Reality Software and Technology
                </div>
              </div>

              {/* <CountDown /> */}
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-4">
          <a
            className="twitter-timeline"
            href="https://twitter.com/vrst2019?ref_src=twsrc%5Etfw"
            data-tweet-limit="2"
          >
            Tweets by vrst2019
          </a>{' '}
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-12 ">
          <div className="entry-footer">
            <a href={makeUrl('/submissions')} className="btn">
              Submission Instructions
            </a>
           
          </div>
        </div>
      </div> */}
    </div>
  </div>
);
