import React from 'react';

import Head from 'next/head';

import '../css/bootstrap.css';
import '../css/fontawesome-all.min.css';
import '../css/style.css';
import { Header } from '../components/header';

export const Layout = ({ children }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />
    </Head>
    <Header />

    {children}

    <footer className="site-footer">
      <div className="footer-cover-title flex justify-content-center align-items-center">
        <h2>VRST</h2>
      </div>

      <div className="footer-content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="entry-title">
                <a href="/">VRST 2019</a>
              </div>

              <div className="entry-mail">
                <a href="mailto:t.trescak@westernsydney.edu.au">t.trescak@westernsydney.edu.au</a>
              </div>

              <div className="copyright-info">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved |
                This template is made with <i className="fa fa-heart" aria-hidden="true" /> by{' '}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </div>

              <div className="footer-social">
                <ul className="flex justify-content-center align-items-center">
                  <li>
                    <a href="https://vrst.acm.org/">VRST</a>
                  </li>
                  <li>
                    <a href="https://vrst.acm.org/vrst2018">VRST 2018</a>
                  </li>
                  <li>
                    <a href="http://dl.acm.org/event.cfm?id=RE137">VRST Digital Library</a>
                  </li>
                  <li>
                    <a href="http://fb.me/vrst2019">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/vrst2019">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  {/* <li>
                        <a href="#">
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
