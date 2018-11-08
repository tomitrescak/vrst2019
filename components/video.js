import * as React from 'react';

export const Video = () => (
  <div className="home-page-last-news">
    <div className="container">
      <div className="header">
        <div className="entry-title">
          <p>VRST 2019</p>
          <h2>Wecome to Sydney</h2>
        </div>
      </div>
      <div className="home-page-last-news-wrap">
        <div className="row">
          <div className="col-12">
            <iframe
              width="100%"
              height="615"
              src="https://www.youtube.com/embed/cW3DTJHFxpc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div style={{ textAlign: 'right' }}>
              Courtesy of{' '}
              <a href="https://www.youtube.com/watch?v=cW3DTJHFxpc">Filippo Rivetti @ Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
