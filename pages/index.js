import React from 'react';

import Head from 'next/head';

import '../css/bootstrap.css';
import '../css/fontawesome-all.min.css';
import '../css/style.css';

export class CountDown extends React.Component {
  finalDate = new Date(2019, 10, 12, 9, 0);

  state = { offset: {} };

  countDown = () => {
    const d = new Date();
    let b = this.finalDate.getTime() > d.getTime() ? this.finalDate.getTime() - d.getTime() : 1000;
    b = Math.ceil(b / 1000);

    // debugger;

    const offset = {
      seconds: b % 60,
      minutes: Math.floor(b / 60) % 60,
      hours: Math.floor(b / 60 / 60) % 24,
      days: Math.floor(b / 60 / 60 / 24) % 7,
      weeks: Math.floor(b / 60 / 60 / 24 / 7),
      months: Math.floor(b / 60 / 60 / 24 / 30.4368),
      years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
    };

    offset.days = offset.weeks * 7 + offset.days;

    this.setState({ offset });
  };

  componentDidMount() {
    this.countDown();

    setInterval(this.countDown, 1000);
  }

  render() {
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            rel="stylesheet"
          />
        </Head>
        <div className="countdown flex flex-wrap justify-content-between" data-date="2018/06/06">
          <div className="countdown-holder">
            <div className="dday">{this.state.offset.days}</div>
            <label>Days</label>
          </div>

          <div className="countdown-holder">
            <div className="dhour">{this.state.offset.hours}</div>
            <label>Hours</label>
          </div>

          <div className="countdown-holder">
            <div className="dmin">{this.state.offset.minutes}</div>
            <label>Minutes</label>
          </div>

          <div className="countdown-holder">
            <div className="dsec">{this.state.offset.seconds}</div>
            <label>Seconds</label>
          </div>
        </div>
      </>
    );
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="site-header">
          <div className="header-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-10 col-lg-4">
                  <h1 className="site-branding flex">
                    <a href="#">VRST 2019</a>
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
                        <a href="#">HOME</a>
                      </li>
                      <li>
                        <a href="#">VRST 2018</a>
                      </li>
                      <li>
                        <a href="#">CONTACT</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-search" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

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
                  <a href="" className="btn">
                    Details Coming Soon!
                  </a>
                  {/* <a href="#" className="btn current">
                    See Lineup
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="lineup-artists-headline">
                  <div className="entry-title">
                    <p>JUST THE BEST</p>
                    <h2>The Lineup Artists-Headliners</h2>
                  </div>

                  <div className="lineup-artists">
                    <div className="lineup-artists-wrap flex flex-wrap">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/black-chick.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <div className="lineup-artists-description">
                        <div className="lineup-artists-description-container">
                          <div className="entry-title">Jamila Williams</div>

                          <div className="entry-content">
                            <p>
                              Quisque at erat eu libero consequat tempus. Quisque mole stie
                              convallis tempus. Ut semper purus metus, a euismod sapien sodales ac.
                              Duis viverra eleifend fermentum.{' '}
                            </p>
                          </div>

                          <div className="box-link">
                            <a href="">
                              <img src="/static/images/box.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lineup-artists-wrap flex flex-wrap">
                      <div className="lineup-artists-description">
                        <figure className="featured-image d-md-none">
                          <a href="#">
                            {' '}
                            <img src="/static/images/mathew-kane.jpg" alt="" />{' '}
                          </a>
                        </figure>

                        <div className="lineup-artists-description-container">
                          <div className="entry-title">Sandra Superstar</div>

                          <div className="entry-content">
                            <p>
                              Quisque at erat eu libero consequat tempus. Quisque mole stie
                              convallis tempus. Ut semper purus metus, a euismod sapien sodales ac.
                              Duis viverra eleifend fermentum.{' '}
                            </p>
                          </div>

                          <div className="box-link">
                            <a href="#">
                              <img src="/static/images/box.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <figure className="featured-image d-none d-md-block">
                        <a href="#">
                          {' '}
                          <img src="/static/images/mathew-kane.jpg" alt="" />{' '}
                        </a>
                      </figure>
                    </div>

                    <div className="lineup-artists-wrap flex flex-wrap">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/eric-ward.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <div className="lineup-artists-description">
                        <div className="lineup-artists-description-container">
                          <div className="entry-title">DJ Crazyhead</div>

                          <div className="entry-content">
                            <p>
                              Quisque at erat eu libero consequat tempus. Quisque mole stie
                              convallis tempus. Ut semper purus metus, a euismod sapien sodales ac.
                              Duis viverra eleifend fermentum.{' '}
                            </p>
                          </div>

                          <div className="box-link">
                            <a href="#">
                              {' '}
                              <img src="/static/images/box.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="the-complete-lineup">
                  <div className="entry-title">
                    <p>JUST THE BEST</p>
                    <h2>The Complete Lineup</h2>
                  </div>

                  <div className="row the-complete-lineup-artists">
                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-1.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>Miska Smith</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-2.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>Hayley Down</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-3.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>The Band Song</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-4.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>Pink Machine</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-5.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>Brasil Band</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-6.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>Mickey</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-7.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>DJ Girl</h2>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 artist-single">
                      <figure className="featured-image">
                        <a href="#">
                          {' '}
                          <img src="/static/images/image-8.jpg" alt="" />{' '}
                        </a>
                        <a href="#" className="box-link">
                          {' '}
                          <img src="/static/images/box.jpg" alt="" />{' '}
                        </a>
                      </figure>

                      <h2>Stan Smith</h2>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="see-complete-lineup">
                      <div className="entry-footer">
                        <a href="#" className="btn">
                          See all lineup
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-next-events">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="entry-title">
                    <p>JUST THE BEST</p>
                    <h2>Our Next Events</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="next-event-slider-wrap">
              <div className="swiper-container next-event-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="next-event-content">
                      <figure className="featured-image">
                        <img src="/static/images/next-event-1.jpg" alt="" />

                        <a
                          href="#"
                          className="entry-content flex flex-column justify-content-center align-items-center"
                        >
                          <h3>Welcoming Party 2018</h3>
                          <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                        </a>
                      </figure>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="next-event-content">
                      <figure className="featured-image">
                        <img src="/static/images/next-event-2.jpg" alt="" />

                        <a
                          href="#"
                          className="entry-content flex flex-column justify-content-center align-items-center"
                        >
                          <h3>Welcoming Party 2018</h3>
                          <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                        </a>
                      </figure>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="next-event-content">
                      <figure className="featured-image">
                        <img src="/static/images/next-event-3.jpg" alt="" />

                        <a
                          href="#"
                          className="entry-content flex flex-column justify-content-center align-items-center"
                        >
                          <h3>Welcoming Party 2018</h3>
                          <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                        </a>
                      </figure>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="next-event-content">
                      <figure className="featured-image">
                        <img src="/static/images/next-event-1.jpg" alt="" />

                        <a
                          href="#"
                          className="entry-content flex flex-column justify-content-center align-items-center"
                        >
                          <h3>Welcoming Party 2018</h3>
                          <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                        </a>
                      </figure>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="next-event-content">
                      <figure className="featured-image">
                        <img src="/static/images/next-event-2.jpg" alt="" />

                        <a
                          href="#"
                          className="entry-content flex flex-column justify-content-center align-items-center"
                        >
                          <h3>Welcoming Party 2018</h3>
                          <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                        </a>
                      </figure>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="next-event-content">
                      <figure className="featured-image">
                        <img src="/static/images/next-event-3.jpg" alt="" />

                        <a
                          href="#"
                          className="entry-content flex flex-column justify-content-center align-items-center"
                        >
                          <h3>Welcoming Party 2018</h3>
                          <p>Green Palace, 22 Street, 23-28, Los Angeles California</p>
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-button-next">
                <img src="/static/images/button.png" alt="" />
              </div>
            </div>
          </div>

          <div className="home-page-last-news">
            <div className="container">
              <div className="header">
                <div className="entry-title">
                  <p>JUST THE BEST</p>
                  <h2>Our Last News</h2>
                </div>
              </div>

              <div className="home-page-last-news-wrap">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <figure className="featured-image">
                      <a href="#">
                        {' '}
                        <img src="/static/images/news-image-1.jpg" alt="fesival+celebration" />{' '}
                      </a>
                    </figure>

                    <div className="box-link-date">
                      <a href="#">03.12.18</a>
                    </div>

                    <div className="content-wrapper">
                      <div className="entry-content">
                        <div className="entry-header">
                          <h2>
                            <a href="#">10 Festival Tips</a>
                          </h2>
                        </div>

                        <div className="entry-meta">
                          <span className="author-name">
                            <a href="#"> By James Williams</a>
                          </span>
                          <span className="space">|</span>
                          <span className="comments-count">
                            <a href="#">3 comments</a>
                          </span>
                        </div>

                        <div className="entry-description">
                          <p>
                            Quisque at erat eu libero consequat tempus. Quisque mole stie convallis
                            tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra
                            eleifend fermentum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <figure className="featured-image">
                      <a href="#">
                        {' '}
                        <img src="/static/images/news-image-1.jpg" alt="fesival+celebration" />{' '}
                      </a>
                    </figure>

                    <div className="box-link-date">
                      <a href="">03.12.18</a>
                    </div>

                    <div className="content-wrapper">
                      <div className="entry-content">
                        <div className="entry-header">
                          <h2>
                            <a href="#">New event calendar for this year</a>
                          </h2>
                        </div>

                        <div className="entry-meta">
                          <span className="author-name">
                            <a href="#">By James Williams</a>
                          </span>
                          <span className="space">|</span>
                          <span className="comments-count">
                            <a href="#">3 comments</a>
                          </span>
                        </div>

                        <div className="entry-description">
                          <p>
                            Quisque at erat eu libero consequat tempus. Quisque mole stie convallis
                            tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra
                            eleifend fermentum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-cover-title flex justify-content-center align-items-center">
            <h2>VRST</h2>
          </div>

          <div className="footer-content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="entry-title">
                    <a href="#">VRST 2019</a>
                  </div>

                  <div className="entry-mail">
                    <a href="#">vrst2019@acm.com</a>
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
                        <a href="#">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
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
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
