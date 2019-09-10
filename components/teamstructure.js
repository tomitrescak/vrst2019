import { makeUrl } from './common';
import React, { Component } from 'react';
import { PageSection } from './page_section';

const InitialState = {
  Team: [
    {
      Position: 'Symposium General Chair',
      Group: [
        {
          Name: ['Tomas Trescak (Western Sydney University)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Symposium Chairs',
      Group: [
        {
          Name: ['Simeon Simoff (Western Sydney University)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Deborah Richards (Macquarie University)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Anton Bogdanovych (Western Sydney University)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Program Chairs',
      Group: [
        {
          Name: ['Thierry Duval (Western Sydney University)'],
          Contact: ['papers2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Torsten Kuhlen (RWTH Aachen University)'],
          Contact: ['papers2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Huyen Nguyen (University of New South Wales)'],
          Contact: ['papers2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Shigeo Morishima (University of Waseda)'],
          Contact: ['papers2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Yuichi Itoh (University of Osaka)'],
          Contact: ['papers2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Demo Chairs',
      Group: [
        {
          Name: ['Richard Skarbez (La Trobe)'],
          Contact: ['demos2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Anton Bogdanovych (Western Sydney University)'],
          Contact: ['demos2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Publicity Chairs',
      Group: [
        {
          Name: ['Danielle Aiken (MARCS Institute)'],
          Contact: ['industry.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Accessibility Chairs',
      Group: [
        {
          Name: ['Sara Baker (Western Sydney University'],
          Contact: ['s.baker3@westernsydney.edu.au'],
          Hover: false
        }
      ]
    },

    {
      Position: 'Poster Chair',
      Group: [
        {
          Name: ['Martin Masek (Edith Cowan University)'],
          Contact: ['posters2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Sponsorship Chairs',
      Group: [
        {
          Name: ['Kerry Holling (Western Sydney University)'],
          Contact: ['industry.2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Scott Lyall(Western Sydney University)'],
          Contact: ['industry.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Industry Chair',
      Group: [
        {
          Name: ['Chris Stanton (MARCS Institute)'],
          Contact: ['industry.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Web Chair',
      Group: [
        {
          Name: ['Gilbert Zhuo (Western Sydney University)'],
          Contact: ['GilbertZhuo@gmail.com'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Student Volunteers Chair',
      Group: [
        {
          Name: ['Sara Baker (Western Sydney University)'],
          Contact: ['industry.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Publications Chair',
      Group: [
        {
          Name: ['Stephen N Spencer (University of Washington)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    },
    {
      Position: 'Local Chairs',
      Group: [
        {
          Name: ['Belinda Ruiz (Western Sydney University)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        },
        {
          Name: ['Sara Baker (Western Sydney University)'],
          Contact: ['chairs.2019@vrst.acm.org'],
          Hover: false
        }
      ]
    }
  ]
};

const pcm = [
  'Adcock, Matt',
  'Ammi, Mehdi',
  'Billinghurst, Mark',
  'Boulic, Ronan',
  'Bowman, Doug',
  'Bruckner, Stefan',
  'Bruder, Gerd',
  'Bues, Matthias',
  'Chen, Bing-Yu',
  'Chen, Hsiang-Ting',
  'Chen, Jian',
  'Chi, Ming-Te',
  'Chu, Hung-Kuo',
  'Chuang, Yung-Yu',
  'Coquillart, Sabine',
  'Cui, Zhaopeng',
  'Dey, Arindam',
  'Dodiya, Janki',
  'Doerner, Ralf',
  'Dwyer, Tim',
  'Ens, Barrett',
  'Ferrise, Francesco',
  'Figueroa, Pablo',
  'Fleury, Cedric',
  'Fu, Chi-Wing',
  'Fuhrmann, Arnulph',
  'Fujita, Kazuyuki',
  'Guo, Rongkai',
  'He, Ying',
  'Hoang, Thuong',
  'Hoermann, Simon',
  'Hu, Shi',
  'Igarashi, Yuki',
  'Ijiri, Takashi',
  'Interrante, Victoria',
  'Itoh, Yuta',
  'Jarabo, Adrian',
  'Johnsen, Kyle',
  'Jones, Andrew',
  'Jorge, Joaquim',
  'Jung, Sungchul',
  'Kalkofen, Denis',
  'Keefe, Daniel',
  'Kim, Gerard',
  'Kim, Min H.',
  'Koike, Takafumi',
  'KOIZUMI, Naoya',
  'Lai, Yu-Chi',
  'Latoschik, Marc',
  'Lee, Gun',
  'Lee, Tong',
  'Ljung, Patric',
  'Lourdeaux, Domitile',
  'Ma, Kwan',
  'Mestre, daniel',
  'Mitchell, Kenny',
  'Mousas, Christos',
  'Mukai, Tomohiko',
  'Narumi, Takuji',
  'Nedel, Luciana',
  'Oishi, Takeshi',
  'Olivier, Anne-Hélène',
  'Oshita, Masaki',
  'Ozell, Benoit',
  'Pan, Ye',
  'Piumsomboon, Thammathip',
  'Plopski, Alexander',
  'Querrec, Ronan',
  'Reiners, Dirk',
  'Robb, Andrew',
  'Sadagic, Amela',
  'Saito, Hideo',
  'Sanders, Betsy',
  'Serafin, Stefania',
  'Shum, Hubert',
  'Sigemasu, Hiroaki',
  'Skarbez, Richard',
  'Steinberger, Markus',
  'Steinicke, Frank',
  'Stuerzlinger, Wolfgang',
  'Su, Simon',
  'Sugimoto, Maki',
  'Suma Rosenberg, Evan',
  'Takashima, Kazuki',
  'Takayama, Kenshi',
  'Tatzgern, Markus',
  'Teschner, Matthias',
  'THOUVENIN, Indira',
  'Toyoura, Masahiro',
  'Valkov, Dimitar',
  'Wang, Dangxiao',
  'Weyers, Benjamin',
  'Woźniak, Paweł W.',
  'Yamamoto, Goshiro',
  'Yamamoto, Kazuhiko',
  'Yamasaki, Toshihiko',
  'Yanagida, Yasuyuki',
  'Yang, Xubo',
  'Yu, Lap-Fai',
  'Zhao, Shuang'
];

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
    return (
      <>
        <PageSection title="Organisation Team" id="team">
          {chunkArray(InitialState.Team, 2).map((col, i) => (
            <div className="row" key={i}>
              {col.map(_Team => (
                <div key={_Team.Position} className="w-50">
                  <h5>
                    <span className="badge badge-dark col-sm-10 ">{_Team.Position}</span>
                  </h5>
                  {_Team.Group.map(_Group => (
                    <h6 key={_Group.Name}>
                      <a href={`mailto:${_Group.Contact}`} style={{ color: 'black' }}>
                        {_Group.Name}
                      </a>
                    </h6>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </PageSection>

        <PageSection title="Program Committee Members">
          {chunkArray(pcm, 4).map((col, i) => (
            <div className="row" key={i}>
              {col.map(_Team => (
                <div key={i} className="w-25">
                  {_Team}
                </div>
              ))}
            </div>
          ))}
        </PageSection>
      </>
    );
  }
}
