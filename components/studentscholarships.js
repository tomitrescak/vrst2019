import * as React from "react";

const speakers = [
  {
    title: "SIGCHI Student Travel Grants",
    link: "https://sigchi.org/conferences/student-travel-grants/",
    image: "/static/images/scholarships/SmartTravelGrant.png",
    text: `The SIGCHI Student Travel Grant is a program that provides assistance for students with accepted contributions to attend SIGCHI (co)sponsored conferences.`
  },
  {
    title: "Gary Marsden Student Development Fund",
    link: "https://sigchi.org/2017/01/gary-marsden-student-development-fund/",
    image: "/static/images/scholarships/SmartTravelGrant.png",
    text: `The Gary Marsden Student Development Fund is a special fund to provide assistance for students from the developing world to attend events including, HCI related conferences.`
  }
];

export const StudentScholarships = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="lineup-artists-headline">
            <div className="entry-title">
              <p>JUST THE BEST</p>
              <h2>Awards</h2>
            </div>
            <div className="card-deck">
              {speakers.map((_speakers, i) => (
                <div className="card" key={i}>
                  <img src={_speakers.image} class="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">{_speakers.title}</h5>
                    <p className="card-text">{_speakers.text}</p>
                  </div>
                  <div className="card-footer">
                    <a
                      class="btn btn-secondary"
                      href={_speakers.link}
                      role="button"
                    >
                      MORE INFO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
