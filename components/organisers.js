import { makeUrl } from './common';
import { PageSection } from './page_section';

export const Organisers = () => (
  <>
    <PageSection title="Organisers">
      <div className="row">
        <div style={{ textAlign: 'center' }}>
          <a href="https://www.westernsydney.edu.au">
            <img alt="WSU" src="http://staff.scem.uws.edu.au/~anton/WSU_Logo.jpg" height="100" />
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
            <img src="https://image.ibb.co/mqSvye/marcs.png" alt="marcs" border="0" height="100" />
          </a>
        </div>
      </div>
    </PageSection>

    <PageSection title="Sponsors">
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
              src="https://vrst.acm.org/vrst2018/image/sponsors/subsidy_acmsiggraph.png"
              alt="ACM Siggraph"
              height="100"
            />
          </a>
        </div>
      </div>
    </PageSection>

    <PageSection title="Media Partners">
      <div className="row">
        <div style={{ textAlign: 'center' }}>
          <a href="https://vrworldtech.com">
            <img src={makeUrl('/static/images/vrwt.png')} alt="ACM" height="100" />
          </a>

          <a href="https://www.thevrara.com">
            <img
              src={makeUrl('/static/images/vrara.png')}
              alt=""
              height="60"
              style={{ marginLeft: '30px' }}
            />
          </a>
        </div>
      </div>
    </PageSection>
  </>
);
