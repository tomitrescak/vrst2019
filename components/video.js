import * as React from 'react';

export const Video = () => (
  <div className="home-page-last-news">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="header">
            <div className="entry-title">
              <p>VRST 2019</p>
              <h2>Welcome to Sydney</h2>
            </div>
          </div>

          <iframe
            width="100%"
            height="415"
            style={{ marginTop: '60px' }}
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

        <div className="col-12 col-lg-4">
          <div className="header">
            <div className="entry-title">
              <p>VRST 2019</p>
              <h2>Important Dates</h2>
            </div>

            {/* <p>
              AoE (Anywhere on Earth)
              <br />{' '}
              <strong>
                {' '}
                <em>
                  {' '}
                  <br /> July 19, 2019 (23:59 AoE)
                </em>{' '}
              </strong>{' '}
              <br /> Papers with all material submission
            </p>
            <p>
              <strong>
                {' '}
                <em> August 15, 2019 (23:59 AoE) </em>{' '}
              </strong>{' '}
              <br /> Posters and demos submission
            </p>
            <p>
              <strong>
                {' '}
                <em> September 15, 2019 (23:59 AoE) </em>{' '}
              </strong>
            </p>
            <p>Author notification for papers, posters and demos</p>
            <p>
              <strong>
                {' '}
                <em> September 22, 2019 (23:59 AoE) </em>{' '}
              </strong>
            </p>
            <p>Camera-ready papers, posters, and demos</p> */}
            <p>
              AoE (Anywhere on Earth)
              <br />{' '}
              <strong>
                {' '}
                <em> November 1, 2019 </em>{' '}
              </strong>
            </p>
            <p>Submission for Developer Showcase</p>
            <p>
              <strong>
                {' '}
                <em> November 12-15, 2019 </em>{' '}
              </strong>
            </p>
            <p>Conference in Sydney, Australia</p>
            <p>
              <strong> Symposium General Chair: </strong>
              <br />
              Tomas Trescak, Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
