import * as React from 'react';
import { makeUrl } from './common';

export const Header = () => (
  <header className="site-header">
    <div className="header-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-10 col-lg-4">
            <h1 className="site-branding flex">
              <a href={makeUrl('/')}>VRST 2019</a>
            </h1>
          </div>

          <div className="col-2 col-lg-8">
            <nav className="site-navigation">
              <div className="hamburger-menu d-lg-none">
                <span />
                <span />
                <span />
                <span />
              </div>

              <ul>
                <li>
                  <a href={makeUrl('/')}>HOME</a>
                </li>
                <li>
                  <a href={makeUrl('/venue')}>VENUE</a>
                </li>
                <li>
                  <a href="mailto:t.trescak@westernsydney.edu.au">
                    {' '}
                    <i className="fas fa-envelope" />
                    &nbsp;&nbsp;CONTACT
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fas fa-search" />
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);
