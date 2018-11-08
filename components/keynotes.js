import * as React from 'react';

export const Keynotes = () => (
  <>
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
                        Quisque at erat eu libero consequat tempus. Quisque mole stie convallis
                        tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra
                        eleifend fermentum.{' '}
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
                        Quisque at erat eu libero consequat tempus. Quisque mole stie convallis
                        tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra
                        eleifend fermentum.{' '}
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
                        Quisque at erat eu libero consequat tempus. Quisque mole stie convallis
                        tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra
                        eleifend fermentum.{' '}
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
    </div>
  </>
);
