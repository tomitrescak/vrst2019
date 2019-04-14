import { makeUrl } from "./common";
import React, { Component } from "react";

const InitialState = {
  Team: [
    {
      Position: "Symposium General Chair",
      Group: [
        {
          Name: ["Tomas Trescak (Western Sydney University)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Symposium Chairs",
      Group: [
        {
          Name: ["Simeon Simoff (Western Sydney University)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Deborah Richards (Western Sydney University)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Anton Bogdanovych (Western Sydney University)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Program Chairs",
      Group: [
        {
          Name: ["Thierry Duval (Western Sydney University)"],
          Contact: ["papers2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Torsten Kuhlen (RWTH Aachen University)"],
          Contact: ["papers2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Huyen Nguyen (University of New South Wales)"],
          Contact: ["papers2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Shigeo Morishima (University of Waseda)"],
          Contact: ["papers2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Yuichi Itoh (University of Osaka)"],
          Contact: ["papers2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Demo Chairs",
      Group: [
        {
          Name: ["Richard Skarbez (La Trobe)"],
          Contact: ["demos2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Anton Bogdanovych (Western Sydney University)"],
          Contact: ["demos2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Publicity Chairs",
      Group: [
        {
          Name: ["Danielle Aiken (MARCS Institute)"],
          Contact: ["industry.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Accessibility Chairs",
      Group: [
        {
          Name: ["Sara Baker (Western Sydney University"],
          Contact: ["accessibility@vrst.acm.org"],
          Hover: false
        }
      ]
    },

    {
      Position: "Poster Chair",
      Group: [
        {
          Name: ["Martin Masek (Edith Cowan University)"],
          Contact: ["posters2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Sponsorship Chairs",
      Group: [
        {
          Name: ["Kerry Holling (Western Sydney University)"],
          Contact: ["industry.2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Scott Lyall(Western Sydney University)"],
          Contact: ["industry.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Industry Chair",
      Group: [
        {
          Name: ["Chris Stanton (MARCS Institute)"],
          Contact: ["industry.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Web Chair",
      Group: [
        {
          Name: ["Gilbert Zhuo (Western Sydney University)"],
          Contact: ["GilbertZhuo@gmail.com"],
          Hover: false
        }
      ]
    },
    {
      Position: "Student Volunteers Chair",
      Group: [
        {
          Name: ["Sara Baker (Western Sydney University)"],
          Contact: ["industry.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Publications Chair",
      Group: [
        {
          Name: ["Stephen N Spencer (University of Washington)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    },
    {
      Position: "Local Chairs",
      Group: [
        {
          Name: ["Belinda Ruiz (Western Sydney University)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        },
        {
          Name: ["Sara Baker (Western Sydney University)"],
          Contact: ["chairs.2019@vrst.acm.org"],
          Hover: false
        }
      ]
    }
  ]
};

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }

  return tempArray;
}

export default class teamstructure extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  handleOnMouseEnter(teamIndex, groupIndex) {
    this.setState(state => {
      state.Team[teamIndex].Group[groupIndex].Hover = true;
      return state;
    });
  }

  handleOnMouseLeave(teamIndex, groupIndex) {
    this.setState(state => {
      state.Team[teamIndex].Group[groupIndex].Hover = false;
      return state;
    });
  }

  render() {
    var letterStyle = {
      fontFamily: "Times New Roman",
      fontSize: 15,
      display: `block`
    };
    return (
      <div className="home-page-last-news">
        <div className="container">
          <div className="header">
            <div className="entry-title">
              <p>VRST 2019</p>
              <h2>Organisation Team</h2>
              <br />
              <br />
              {chunkArray(InitialState.Team, 2).map((col, i) => (
                <div className="row" key={i}>
                  {col.map(_Team => (
                    <div key={_Team.Position} className="w-50">
                      <h5>
                        <span className="badge badge-dark col-sm-10 ">
                          {_Team.Position}
                        </span>
                      </h5>
                      {_Team.Group.map(_Group => (
                        <h6 key={_Group.Name}>
                          <a
                            href={`mailto:${_Group.Contact}`}
                            style={{ color: "black" }}
                          >
                            {_Group.Name}
                          </a>
                        </h6>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
