import { makeUrl } from './common';

export const Organisers = () => (
  <>
    <div className="home-page-last-news">
      <div className="container">
        <div className="header">
          <div className="entry-title">
            <p>VRST 2019</p>
            <h2>Organisers</h2>
          </div>
        </div>

        <div className="home-page-last-news-wrap  sponsors">
          <div className="row">
            <div style={{ textAlign: 'center' }}>
              <a href="https://www.westernsydney.edu.au">
                <img
                  alt="WSU"
                  src="http://staff.scem.uws.edu.au/~anton/WSU_Logo.jpg"
                  height="100"
                />
              </a>

              <a href="https://www.mq.edu.au">
                <img
                  alt="Macquarie"
                  src="http://bio.mq.edu.au/files/image/Culum%20Lab/macquarie_university_logo.png"
                  height="100"
                />
              </a>

              <a href="https://www.unsw.edu.au">
                <img src="https://www.unsw.edu.au/sites/default/files/UNSW_0.png" height="100" />
              </a>

              <a href="https://www.westernsydney.edu.au/marcs">
                <img
                  src="https://image.ibb.co/mqSvye/marcs.png"
                  alt="marcs"
                  border="0"
                  height="100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="home-page-last-news">
      <div className="container">
        <div className="header">
          <div className="entry-title">
            <p>VRST 2019</p>
            <h2>Sponsors</h2>
          </div>
        </div>

        <div className="home-page-last-news-wrap sponsors">
          <div className="row">
            <div style={{ textAlign: 'center' }}>
              <a href="https://www.acm.org">
                <img
                  src="https://vrst.acm.org/vrst2017/sites/default/files/inline-images/acm-logo-long.png"
                  alt="ACM"
                  height="100"
                />
              </a>

              <a href="https://sigchi.org">
                <img src={makeUrl('/static/images/sigchi.png')} alt="" height="100" />
              </a>

              <a href="http://sigai.acm.org">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Acmsigai.svg/977px-Acmsigai.svg.png"
                  alt="SIGAI"
                  height="100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
