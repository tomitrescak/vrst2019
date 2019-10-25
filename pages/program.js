import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';

const Types = {
  Registration: '#d9d9d9',
  Events: '#f8cbad',
  Food: '#b4c6e7',
  Keynote: '#ffe699',
  Session: '#c6e0b4',
  Posters: '#ffc000'
};

const Days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const days = [
  // TUESDAY
  [
    {
      name: 'Early Registration',
      time: ['14:30', '16:00'],
      type: Types.Registration
    },
    {
      name: 'Developer Showcase',
      time: ['16:00', '17:30'],
      type: Types.Events
    },
    {
      name: 'Early Bird Reception',
      time: ['17:30', '18:30'],
      type: Types.Events
    }
  ],
  // WEDNESDAY
  [
    {
      name: 'Registration',
      time: ['08:00', '09:00'],
      type: Types.Registration
    },
    {
      name: 'Welcome Announcements',
      time: ['09:00', '09:30'],
      type: Types.Events
    },
    {
      time: ['09:30', '11:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Navigation & Locomotion',
          chair: 'TBD',
          papers: [
            [
              '1089',
              'Nathan Navarro Griffin, Eelke Folmer',
              'Out-of-body Locomotion: Vectionless Navigation with a Continuous Avatar Representation'
            ],
            [
              '1140',
              'HyeongYeop Kang, Geonsun Lee,  JungHyun Han',
              'Obstacle detection and alert system for smartphone AR users'
            ],
            [
              '1304',
              'Ben J Congdon, Anthony Steed',
              'Sensitivity to Rate of Change in Gains Applied by Redirected Walking'
            ]
          ]
        }
      ]
    },
    {
      name: 'Coffee & Snacks',
      time: ['11:00', '11:30'],
      type: Types.Food
    },
    {
      time: ['11:30', '13:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Avatars',
          chair: 'TBD',
          papers: [
            [
              '1072',
              'Vincent Thomasset, Stéphane Caron, Vincent Weistroffer',
              'Lower body control of a semi-autonomous avatar in Virtual Reality: Balance and  Locomotion of a 3D Bipedal Mode'
            ],
            [
              '1238',
              'Daniel Roth, Gary Bente, Peter Kullmann, David Mal, Christian Felix Purps, Kai Vogeley, Marc Erich Latoschik',
              'Technologies for Social Augmentations in User-Embodied Virtual Reality'
            ],
            [
              '1239',
              'Ye Pan, Anthony Steed',
              'Avatar Type Affects Performance of Cognitive Tasks in Virtual Reality'
            ]
          ]
        },
        {
          name: 'Collaboration',
          chair: 'TBD',
          papers: [
            [
              '1087',
              'Marco Cavallo, Mishal Dolakia, Matous Havlena, Ken Ocheltree, Mark Podlaseck',
              'Immersive Insights: A Hybrid Analytics System For Collaborative Exploratory Data Analysis'
            ],
            [
              '1092',
              'Rafael Kuffner dos Anjos, Maurício Sousa, Daniel Medeiros, Daniel Mendes, Mark Billinghurst, Craig Anslow, Joaquim P Jorge',
              'Adventures in Hologram Space: Exploring the Design Space of Eye-to-eye Volumetric Telepresence'
            ],
            [
              '1223',
              'Yuanjie Wu, Yu Wang, Sungchul Jung, Simon Hoermann, Robert W. Lindeman',
              'Exploring the Use of a Robust Depth-sensor-based Avatar Control System and its Effects on Communication Behaviors'
            ]
          ]
        }
      ]
    },
    {
      name: 'Lunch',
      time: ['13:00', '14:00'],
      type: Types.Food
    },
    {
      name: 'Keynote - Mark Walsh',
      time: ['14:00', '15:00'],
      type: Types.Keynote
    },

    {
      time: ['15:00', '16:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Engagement',
          chair: 'TBD',
          papers: [
            [
              '1236',
              'Seunggon Jeon, Jaeho Han, Yonggeol Jo, Kyungsik Han',
              'Being More Focused and Engaged in Firefighting Training: Applying User-Centered Design to VR System Development'
            ],
            [
              '1272',
              'Ceenu George, Julia Schwuchow, Heinrich Hussmann',
              '"Fearing Disengagement from the Real World"'
            ]
          ]
        },
        {
          name: 'Mid-Air Techniques',
          chair: 'TBD',
          papers: [
            [
              '1097',
              'Florian Heinrich, Kai Bornemann, Kai Lawonn, Christian Hansen',
              'Depth Perception in Projective Augmented Reality: An Evaluation of Advanced Visualization Techniques'
            ],
            [
              '1138',
              'Ayaka Sano, Naoya KOIZUMI',
              'Portable Mid-air Imaging Optical System on Glossy Surface'
            ]
          ]
        }
      ]
    },
    {
      name: 'Coffee & Snacks',
      time: ['16:00', '16:30'],
      type: Types.Food
    },
    {
      name: 'Posters / Demos Fast Forward',
      time: ['16:30', '17:00'],
      type: Types.Posters
    },
    {
      name: 'Posters / Demos #1',
      time: ['17:00', '19:00'],
      type: Types.Posters
    }
  ],
  // THURSDAY
  [
    {
      name: 'Registration',
      time: ['08:30', '09:00'],
      type: Types.Registration
    },

    {
      time: ['09:00', '10:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Haptics',
          chair: 'TBD',
          papers: [
            [
              '1110',
              'Eric J Gonzalez, Sean Follmer',
              'Investigating the Detection of Bimanual Haptic Retargeting in Virtual Reality'
            ],
            [
              '1115',
              'Mohamed Khamis, Nora Schuster, Ceenu George, Max Pfeiffer',
              'ElectroCutscenes: Realistic Haptic Feedback in Cutscenes of Virtual Reality Games Using Electric Muscle Stimulation'
            ]
          ]
        },
        {
          name: 'Simulation & Graphics',
          chair: 'TBD',
          papers: [
            [
              '1213',
              'Yang Gao, Yinghao Xu, Shuai Li, Aimin Hao, Hong Qin',
              'A Hybrid Method for Powdered Materials Modeling'
            ],
            [
              '1282',
              'Arsen Abdulali, Ibragim Atadjanov, Seungkyu Lee, Seokhee Jeon',
              'Measurement-based Hyper-elastic Material Identification and Real-time FEM Simulation for Haptic Rendering'
            ]
          ]
        }
      ]
    },
    {
      time: ['10:00', '11:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Displays & Visual Perception',
          chair: 'TBD',
          papers: [
            [
              '1039',
              'Vipula Dissanayake, Don Samitha Elvitigala, Haimo Zhang, Chamod Weerasinghe, Suranga Nanayakkara',
              'CompRate: Power Efficient Heart Rate and Heart Rate Variability Monitoring on Smart Wearables'
            ],
            [
              '1073',
              'Haruka Ikeda, Tomohiko Hayakawa, Masatoshi Ishikawa',
              'Bilateral Motion Display: Strategy to Provide Multiple Visual Perception Using Afterimage Effects for Specific Motion'
            ]
          ]
        },
        {
          name: '3D Modelling and Authoring',
          chair: 'TBD',
          papers: [
            ['1149', 'J. Andreas Bærentzen, Jeppe Revall Frisvad, Karan Singh', 'Signifier-Based Immersive and Interactive 3D Modeling'],
            [
              '1189',
              'Robin Horst, Ralf Doerner',
              'Virtual Reality Forge: Pattern-Oriented Authoring of Virtual Reality Nuggets'
            ]
          ]
        }
      ]
    },
    {
      name: 'Coffee & Snacks',
      time: ['11:00', '11:30'],
      type: Types.Food
    },
    {
      time: ['11:30', '13:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Devices',
          chair: 'TBD',
          papers: [
            ['1201', 'Hyouk JANG, Juheon CHOI, Gunhee Kim', 'POL360 : A Universal Mobile VR Motion Controller using Polarized Light'],
            ['1210', 'Duc-Minh Pham, Wolfgang Stuerzlinger', 'HawKEY: Efficient and Versatile Text Entry for Virtual Reality'],
            [
              '1207',
              'HyeonBeom Yi, Jiwoo Hong, Hwan Kim, Woohun Lee',
              'DexController : Designing a VR Controller with Grasp-Recognition for Enriching Natural Game Experience'
            ]
          ]
        },
        {
          name: '3D Reconstruction',
          chair: 'TBD',
          papers: [
            [
              '1027',
              'Theophilus Hua Lid Teo, Ashkan F. Hayati, Gun Lee, Mark Billinghurst, Matt Adcock',
              'A technique for Mixed Reality Remote Collaboration using 360 Panoramas in 3D Reconstructed Scenes'
            ],
            ['1130', 'Xianyong Fang, Jikui Yang, Jie Rao, Linbo Wang, Zhigang Deng', 'Single RGB-D Fitting: Total Human Modeling with an RGB-D Shot'],
            [
              '1187',
              'Jacob Morton, Seungyong Lee',
              'Floating-point Precision and Deformation Awareness for Scalable and Robust 3D Face Alignment'
            ]
          ]
        }
      ]
    },
    {
      name: 'Lunch',
      time: ['13:00', '14:00'],
      type: Types.Food
    },
    {
      name: 'Posters Fast Forward',
      time: ['14:00', '14:30'],
      type: Types.Posters
    },
    {
      name: 'Posters / Demos #2',
      time: ['14:30', '15:30'],
      type: Types.Posters
    },
    {
      name: 'Travel to Wharf',
      time: ['15:30', '17:00'],
      type: Types.Events
    },
    {
      name: 'Cruise Start / Snacks',
      time: ['17:00', '17:30'],
      type: Types.Food
    },
    {
      name: 'Keynote - Aleissia Laidacker',
      time: ['17:30', '18:30'],
      type: Types.Keynote
    },
    {
      name: 'Drinks',
      time: ['18:30', '19:00'],
      type: Types.Food
    },
    {
      name: 'Conference Dinner',
      time: ['19:00', '21:00'],
      type: Types.Events
    }
  ],
  // FRIDAY
  [
    {
      name: 'Registration',
      time: ['08:30', '09:00'],
      type: Types.Registration
    },
    {
      name: 'Keynote - Mark Billinghurst',
      time: ['09:00', '10:00'],
      type: Types.Keynote
    },
    {
      time: ['10:00', '11:30'],
      type: Types.Session,
      sessions: [
        {
          name: 'Applications',
          chair: 'TBD',
          papers: [
            ['1107', 'Stefan Gradl, Markus Gerhard Wirth, Nico Mächtlinger, Romina Poguntke, Andrea Wonner, Nicolas Rohleder, Bjoern M Eskofier', 'The Stroop Room: A Virtual Reality-Enhanced Stroop Test'],
            [
              '1270',
              'Christian Sinnott, James Liu, Courtney Matera, Savannah Halow, Ann Jones, Matthew Moroz, Jeffrey Mulligan, Michael Crognale, Eelke Folmer, Paul MacNeilage',
              'Underwater Virtual Reality System for Neutral Buoyancy Training: Development and Evaluation'
            ],
            ['1111', 'Anil Ufuk Batmaz, Xintian Sun, Dogu Taskiran, Wolfgang Stuerzlinger', 'Mid-Air Interaction in Virtual Reality for Eye-Hand Coordination in Sports Training']
          ]
        }
      ]
    },
    {
      name: 'Coffee & Snacks',
      time: ['11:30', '12:00'],
      type: Types.Food
    },
    {
      time: ['12:00', '13:30'],
      type: Types.Session,
      sessions: [
        {
          name: 'Monitoring',
          chair: 'TBD',
          papers: [
            [
              '1101',
              'Vipula Dissanayake, Don Samitha Elvitigala, Haimo Zhang, Chamod Weerasinghe, Suranga Nanayakkara',
              'CompRate: Power Efficient Heart Rate and Heart Rate Variability Monitoring on Smart Wearables'
            ],
            [
              '1173',
              'Natalie McHugh, Sungchul Jung, Simon Hoermann, Robert W. Lindeman, Wolfgang Stuerzlinger, Simon Fraser',
              'Investigating a Physical Dial as a Measurement Tool for Cybersickness in Virtual Reality'
            ],
            ['1289', 'Unal Gupta, Ryo Hajika, Yun Suen Pai, Andreas Duenser, Martin Lochner, Mark Billinghurst', 'Correlating Biosignals with Trust and Cognitive Load in VR']
          ]
        }
      ]
    },
    {
      name: 'Lunch',
      time: ['13:30', '14:30'],
      type: Types.Food
    },
    {
      time: ['14:30', '16:00'],
      type: Types.Session,
      sessions: [
        {
          name: 'Selection',
          chair: 'TBD',
          papers: [
            ['1163', 'Bret Jackson, Kayla Beckham, Anael Kuperwajs Cohen, Brianna C Heggeseth', 'Comparing Region-of-Interest Selection Techniques for Spatial 3D Data'],
            [
              '1209',
              'Duc-Minh Pham, Wolfgang Stuerzlinger',
              'Is the Pen Mightier than the Controller? A Comparison of Input Devices for Selection in Virtual and Augmented Reality'
            ],
            [
              '1279',
              'Brita Munsinger, John Quarles',
              'The Usability of Augmented Reality for Children to Perform a 3D Selection Task'
            ]
          ]
        }
      ]
    },
    {
      time: ['16:00', '17:30'],
      type: Types.Session,
      sessions: [
        {
          name: 'Manipulation',
          chair: 'TBD',
          papers: [
            ['1135', 'Mayra Donaji Barrera Machuca, Wolfgang Stuerzlinger, Paul Asente', 'Smart3DGuides: Making Unconstrained Immersive 3D Drawing More Accurate'],
            ['1117', 'Junwei Sun, Wolfgang Stuerzlinger', 'Extended Sliding in Virtual Reality'],
            [
              '1262',
              'Evgeny Tsykunov, Roman Ibrahimov, Dzmitry Tsetserukou',
              'SlingDrone: System for Navigation and Interaction with the Environment Using a Single Drone and VR'
            ]
          ]
        }
      ]
    },
    {
      name: 'VRST Conclusion / Handover',
      time: ['17:30', '18:00'],
      type: Types.Events
    },
    {
      name: 'Coffee & Snacks',
      time: ['18:00', '18:30'],
      type: Types.Food
    }
  ]
];

function calculateLength(time) {
  const diff = time[1] - time[0];
  return diff / 50;
}

function renderDay(day, hour) {
  let event = days[day].find(d => d.time[0] === hour);
  // start event
  if (event) {
    return (
      <td
        rowSpan={calculateLength(event.time)}
        style={{ background: event.type, color: 'black', border: 'solid 1px black' }}
      >
        {event.type === Types.Session ? (
          <div>
            {event.sessions.map((s, i) => (
              <div style={{ marginBottom: '6px' }} key={i}>
                <i>Papers Session {event.sessions.length > 1 ? ` #${i + 1}` : ''}</i>
                <br />
                <b>{s.name}</b>
              </div>
            ))}
          </div>
        ) : (
          event.name
        )}
      </td>
    );
  }
  // in between
  event = days[day].find(d => d.time[0] < hour && d.time[1] > hour);
  if (!event) {
    return <td />;
  }
}

function renderTable() {
  let start = 8;
  const rows = [];

  // preprocess rows
  for (let day of days) {
    for (let event of day) {
      event.txtTime = [...event.time];

      for (let i = 0; i < event.time.length; i++) {
        const start = event.time[i].split(':');
        event.time[i] = parseInt(start[0]) * 100 + (parseInt(start[1]) % 50 > 0 ? 50 : 0);
      }
    }
  }

  for (let i = 0; i < 28; i++) {
    let hour = Math.floor(i / 2) + start;
    let militaryHour = hour * 100 + (i % 2 === 0 ? 0 : 50);
    rows.push(
      <tr key={i}>
        <td>{`${hour}:${i % 2 === 0 ? '00' : '30'}`}</td>
        {renderDay(0, militaryHour)}
        {renderDay(1, militaryHour)}
        {renderDay(2, militaryHour)}
        {renderDay(3, militaryHour)}
      </tr>
    );
  }
  return rows;
}

const Program = () => (
  <Layout>
    <PageHeader title="Program" cls="submissions" />

    <div className="main-content page">
      <div className="container program">
        <table className="program">
          <tbody>
            <tr>
              <th></th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
            {renderTable()}
          </tbody>
        </table>
      </div>
      <div className="container">
        <table cellPadding="6" border="0" style={{ marginTop: '26px', marginBottom: '26px' }}>
          <tbody>
            {days.map((d, i) => (
              <React.Fragment key={i}>
                <tr>
                  <td colSpan={2} style={{ paddingTop: '20px' }}>
                    <h4>
                      {Days[i]} -{' '}
                      <span style={{ color: '#777', fontSize: '18px' }}>November {12 + i}</span>
                    </h4>
                  </td>
                </tr>
                {d.map((e, j) => (
                  <tr key={j}>
                    <td style={{ verticalAlign: 'top', width: '110px' }}>
                      {e.txtTime[0]} - {e.txtTime[1]}
                    </td>
                    <td>
                      {e.type === Types.Session ? (
                        <div>
                          {e.sessions.map((s, r) => (
                            <div key={r} style={{ marginBottom: '32px' }}>
                              <h5>
                                Papers Session {e.sessions.length > 1 ? `#${r + 1}` : ''}: {s.name}
                              </h5>
                              Chair: {s.chair}
                              {s.papers.map((p, q) => (
                                <div key={q} style={{ marginTop: '12px' }}>
                                  {p[2]} ({p[0]})<br />
                                  <i>{p[1]}</i>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        e.name
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <h5>Please note that we reserve rights to change the program.</h5>
      </div>
    </div>
  </Layout>
);
export default Program;
