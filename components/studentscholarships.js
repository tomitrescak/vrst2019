import * as React from 'react';
import { PageSection } from './page_section';
import { makeUrl } from './common';

const speakers = [
  {
    title: 'SIGCHI Student Travel Grants',
    link: 'https://sigchi.org/conferences/student-travel-grants/',
    image: '/static/images/scholarships/SmartTravelGrant.png',
    text: `The SIGCHI Student Travel Grant is a program that provides assistance for students with accepted contributions to attend SIGCHI (co)sponsored conferences.`
  },
  {
    title: 'Gary Marsden Student Development Fund',
    link: 'https://sigchi.org/2017/01/gary-marsden-student-development-fund/',
    image: '/static/images/scholarships/SmartTravelGrant.png',
    text: `The Gary Marsden Student Development Fund is a special fund to provide assistance for students from the developing world to attend events including, HCI related conferences.`
  }
];

export const StudentScholarships = () => (
  <>
    <PageSection title="Student Scholarships" id="scholarships">
      <div style={{ display: 'flex' }}>
        {speakers.map((_speakers, i) => (
          <div className="card" key={i} style={{ flex: 1, margin: '6px' }}>
            <img src={makeUrl(_speakers.image)} className="card-img-top" alt="image" />
            <div className="card-body">
              <h5 className="card-title">{_speakers.title}</h5>
              <p className="card-text">{_speakers.text}</p>
            </div>
            <div className="card-footer">
              <a className="btn btn-secondary" href={_speakers.link} role="button">
                MORE INFO
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  </>
);
