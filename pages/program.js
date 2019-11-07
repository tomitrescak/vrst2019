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
      time: ['14:30', '15:00'],
      type: Types.Registration
    },
    {
      name: 'Welcome to VRST, Vice Chancellor Address, Elders Welcome to Country',
      time: ['15:00', '15:30'],
      type: Types.Events
    },
    {
      name: 'Developer Showcase / Welcome Reception',
      time: ['15:30', '18:00'],
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
      name: 'Keynote - Mark Walsh',
      time: ['09:30', '10:30'],
      type: Types.Keynote
    },
    {
      name: 'Coffee & Snacks',
      time: ['10:30', '11:00'],
      type: Types.Food
    },
    {
      time: ['11:00', '12:30'],
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
      name: 'Lunch',
      time: ['12:30', '13:30'],
      type: Types.Food
    },

    {
      time: ['13:30', '15:00'],
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
            [
              '1149',
              'J. Andreas Bærentzen, Jeppe Revall Frisvad, Karan Singh',
              'Signifier-Based Immersive and Interactive 3D Modeling'
            ],
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
            [
              '1201',
              'Hyouk JANG, Juheon CHOI, Gunhee Kim',
              'POL360 : A Universal Mobile VR Motion Controller using Polarized Light'
            ],
            [
              '1210',
              'Duc-Minh Pham, Wolfgang Stuerzlinger',
              'HawKEY: Efficient and Versatile Text Entry for Virtual Reality'
            ],
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
            [
              '1130',
              'Xianyong Fang, Jikui Yang, Jie Rao, Linbo Wang, Zhigang Deng',
              'Single RGB-D Fitting: Total Human Modeling with an RGB-D Shot'
            ],
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
            [
              '1107',
              'Stefan Gradl, Markus Gerhard Wirth, Nico Mächtlinger, Romina Poguntke, Andrea Wonner, Nicolas Rohleder, Bjoern M Eskofier',
              'The Stroop Room: A Virtual Reality-Enhanced Stroop Test'
            ],
            [
              '1270',
              'Christian Sinnott, James Liu, Courtney Matera, Savannah Halow, Ann Jones, Matthew Moroz, Jeffrey Mulligan, Michael Crognale, Eelke Folmer, Paul MacNeilage',
              'Underwater Virtual Reality System for Neutral Buoyancy Training: Development and Evaluation'
            ],
            [
              '1097',
              'Anil Ufuk Batmaz, Xintian Sun, Dogu Taskiran, Wolfgang Stuerzlinger',
              'Mid-Air Interaction in Virtual Reality for Eye-Hand Coordination in Sports Training'
            ]
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
              '1111',
              'Jindrich Adolf, Peter Kán, Benjamin Outram, Hannes Kaufmann, Jaromír Doležal, Lenka Lhotská',
              'Juggling in VR: Advantages of Immersive Virtual Reality in Juggling Learning'
            ],
            [
              '1173',
              'Natalie McHugh, Sungchul Jung, Simon Hoermann, Robert W. Lindeman',
              'Investigating a Physical Dial as a Measurement Tool for Cybersickness in Virtual Reality'
            ],
            [
              '1289',
              'Knal Gupta, Ryo Hajika, Yun Suen Pai, Andreas Duenser, Martin Lochner, Mark Billinghurst',
              'In AI We Trust: Investigating the Relationship between Biosignals, Trust and Cognitive Load in VR'
            ]
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
            [
              '1163',
              'Bret Jackson, Kayla Beckham, Anael Kuperwajs Cohen, Brianna C Heggeseth',
              'Comparing Convex Region-of-Interest Selection Techniques for Surface Geometry'
            ],
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
            [
              '1135',
              'Mayra Donaji Barrera Machuca, Wolfgang Stuerzlinger, Paul Asente',
              'Smart3DGuides: Making Unconstrained Immersive 3D Drawing More Accurate'
            ],
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

function renderPlace(num) {
  return (
    <div style={{ fontSize: 11, color: '#333', fontWeight: 'bold' }}>
      Conference&nbsp;Room&nbsp;{num + 3}
    </div>
  );
}

function renderSession(event) {
  return (event.sessions || [{}]).map((s, i) => (
    <td
      colSpan={!event.sessions || event.sessions.length === 1 ? 2 : 1}
      rowSpan={calculateLength(event.time)}
      style={{ background: event.type, color: 'black', border: 'solid 1px black' }}
    >
      {event.type === Types.Session ? (
        <>
          <i>Papers&nbsp;Session</i>
          {renderPlace(i)}
          <b>{s.name}</b>
        </>
      ) : (
        event.name
      )}
    </td>
  ));
}

function renderDay(day, hour) {
  let event = days[day].find(d => d.time[0] === hour);
  // start event
  if (event) {
    return renderSession(event);
  }
  // in between
  event = days[day].find(d => d.time[0] < hour && d.time[1] > hour);
  if (!event) {
    return <td colSpan={2} />;
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
              <th colSpan={2}>Tuesday</th>
              <th colSpan={2}>Wednesday</th>
              <th colSpan={2}>Thursday</th>
              <th colSpan={2}>Friday</th>
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
                    {(e.sessions || [{}]).map((s, r) => (
                      <td
                        style={{ verticalAlign: 'top' }}
                        colSpan={e.sessions && e.sessions.length > 1 ? 1 : 2}
                      >
                        {e.type === Types.Session ? (
                          <>
                            <h5>
                              Papers&nbsp;Session: {s.name}
                              {renderPlace(r)}
                            </h5>
                            Chair: {s.chair}
                            {s.papers.map((p, q) => (
                              <div key={q} style={{ marginTop: '12px' }}>
                                {p[2]} ({p[0]})<br />
                                <i>{p[1]}</i>
                              </div>
                            ))}
                          </>
                        ) : (
                          e.name
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <h2>Poster Session #1: Wednesday </h2>

        <ul>
          <li>Fast Forward: 16:30 (Prepare 1 slide)</li>
          <li>Session: 17:00</li>
        </ul>

        <table className="program">
          <tr>
            <td>p1000</td>
            <td> Indian Virtual reality affective database with self-report measures and EDA </td>
            <td> Surya Soujanya Kodavalla; Minaxi Jai Bhagwan Goel; Priyanka Srivastava</td>
          </tr>
          <tr>
            <td>p1001</td>
            <td>
              Monocular Viewing Protects Against Cybersickness Produced by Head Movements in the
              Oculus Rift
            </td>
            <td> Stephen Palmisano; Luke Szalla; Juno Kim</td>
          </tr>
          <tr>
            <td>p1002</td>
            <td> Real-time Monitoring Method for Cybersickness using Physiological Signals </td>
            <td> Takurou Magaki; Michael Vallance</td>
          </tr>
          <tr>
            <td>p1003</td>
            <td> Proposing a Hand-Tracking Device using a Tangential Force Mechanical Sensor </td>
            <td> Yuto Kurashige; Michael Vallance</td>
          </tr>
          <tr>
            <td>p1004</td>
            <td> SolarVR for inter-cognitive and intra-cognitive communication </td>
            <td> Michael Vallance; Takurou Magaki; Yuto Kurashige; Luke Johnson</td>
          </tr>
          <tr>
            <td>p1008</td>
            <td>
              {' '}
              Effects of Tactile Perception on Emotion and Immersion to Film Viewing in a Virtual
              Environment{' '}
            </td>
            <td> AELEE KIM; Hayoung Bae; Kyoung-Min Lee</td>
          </tr>
          <tr>
            <td>p1013</td>
            <td>
              {' '}
              BeHere: A VR-SAR Remote Collaboration based on Virtual Replicas Sharing Gesture and
              Avatar{' '}
            </td>
            <td>
              {' '}
              Peng Wang; Xiaoliang Bai; Shusheng Zhang; Sili Wei; Shuo Feng; Hongyu Ji; Jie Zhang;
              Guangyao Xu; Xu Zhang; JinZhao Zhou
            </td>
          </tr>
          <tr>
            <td>p1014</td>
            <td> Can We Predict Susceptibility to Cybersickness? </td>
            <td> Dante Risi; Stephen Palmisano</td>
          </tr>
          <tr>
            <td>p1015</td>
            <td> Action Units: Directing User Attention in 360-degree Video based VR </td>
            <td> Lingwei Tong; Sungchul Jung; Robert W. Lindeman</td>
          </tr>
          <tr>
            <td>p1016</td>
            <td> A virtual reality simulator for training gaze control of wheeled tele-robots </td>
            <td> Guangtao Zhang; John Paulin Hansen</td>
          </tr>
          <tr>
            <td>p1017</td>
            <td>
              {' '}
              Impact of Gamified Interaction with Virtual Nature on Sustained Attention and
              Self-Reported Restoration - A Pilot Study{' '}
            </td>
            <td> Oankar Patil, Heng Yao, Benjamin Lok</td>
          </tr>
          <tr>
            <td>p1018</td>
            <td>
              {' '}
              Predicting the Torso Direction from HMD Movements for Walk-in-Place Navigation through
              Deep Learning{' '}
            </td>
            <td> Juyoung Lee; Andreas Pastor; Jae-In Hwang; Gerard Jounghyun Kim</td>
          </tr>
          <tr>
            <td>p1019</td>
            <td>
              {' '}
              Preliminary Evaluation of the Usability of a Virtual Reality Game for Mudslide
              Education for Children{' '}
            </td>
            <td> Mengping Tsuei; Jen-I Chiu; Tsu-Wei Peng; Yuan-Chen Chang</td>
          </tr>
          <tr>
            <td>p1020</td>
            <td> Effects of Age and Motivation for Visiting on AR Museum Experiences </td>
            <td>
              {' '}
              Narae Park; Yohan HONG; Hyunjeong Pak; Jung Who Nam; Kyoungsu Kim; Kyungwon Gil;
              Junbom Pyo; Kyoobin Lee
            </td>
          </tr>
          <tr>
            <td>p1022</td>
            <td>
              {' '}
              Augmented Reality Approach For Position-based Service using Handheld Smartphone{' '}
            </td>
            <td> JiHoon Park; SangMin Park; Kwang Hee Ko</td>
          </tr>
          <tr>
            <td>p1025</td>
            <td> Exploring Immersive Technologies to Simulate Fear of Crime </td>
            <td>
              {' '}
              Francisco J. Castro-Toledo; Konstantinos Koumaditis; Panagiotis Mitkidis; Juan O.
              Perea-Garcia
            </td>
          </tr>
          <tr>
            <td>p1026</td>
            <td>
              {' '}
              Virtual Immersive Educational Systems - The case of 360 videos, indirect learning and
              co-design{' '}
            </td>
            <td> Konstantinos Koumaditis; Francesco Chinello</td>
          </tr>
          <tr>
            <td>p1027</td>
            <td>
              {' '}
              2D/3D Mixed Interface for Furniture Placement in Smartphone-based Mobile Augmented
              Reality{' '}
            </td>
            <td> Bin Han; Gerard Jounghyun Kim</td>
          </tr>
          <tr>
            <td>p1031</td>
            <td> Soap film flow and thickness for soap bubble rendering </td>
            <td> Sanghyeon Gil; Yunji Seok; Kiyeol Park; Jaeseok You; Seongah Chin</td>
          </tr>
          <tr>
            <td>p1032</td>
            <td> Design of Portable Thermal Sensor Device for VR </td>
            <td> Dongmin Moon; Seongah Chin</td>
          </tr>
          <tr>
            <td>p1034</td>
            <td>
              {' '}
              Learning-based Estimation of 6-DoF Camera Poses from Partial Observation of Large
              Objects for Mobile AR{' '}
            </td>
            <td> LOMALIZA Jean Pierre; Hanhoon Park</td>
          </tr>
          <tr>
            <td>p1036</td>
            <td>
              {' '}
              Design and Realization of Sustainable Rural Housing Using Immersive Virtual Reality
              Platform{' '}
            </td>
            <td> Vishwas G Kini; Shilpa Sunil</td>
          </tr>
          <tr>
            <td>p1037</td>
            <td>
              {' '}
              Mixed Reality Speaker Identification as an Accessibility Tool for Deaf and Hard of
              Hearing Users{' '}
            </td>
            <td> Abraham Glasser; Edward Mason Riley; Kaitlyn Weeks; Raja Kushalnagar</td>
          </tr>
          <tr>
            <td>p1040</td>
            <td>
              {' '}
              An Evaluation of Head-Mounted Virtual Reality for Special Education from the Teachers'
              Perspective{' '}
            </td>
            <td> Sirisilp Kongsilp; Takashi Komuro</td>
          </tr>
          <tr>
            <td>p1041</td>
            <td> Comfortable locomotion in VR: Teleportation is not a complete solution </td>
            <td> Jeremy Clifton; Stephen Palmisano</td>
          </tr>
          <tr>
            <td>p1044</td>
            <td>
              {' '}
              A Content-Aware Approach for Analysing Eye Movement Patterns in Virtual Reality{' '}
            </td>
            <td> Xi Cao; Richard Skarbez; Zhen He; Henry Been-Lirn Duh</td>
          </tr>
          <tr>
            <td>p1052</td>
            <td> Evaluation of Navigation Operations in Immersive Microscopic Visualization </td>
            <td> Tomomi Takashina; Mitsuru Ito; Yuji Kokumai</td>
          </tr>
          <tr>
            <td>p1053</td>
            <td> Interactive Virtual-Reality Fire Extinguisher with Haptic Feedback </td>
            <td> Sang-Woo Seo; SeungJoon Kwon; Waseem Hassan; Aishwari Talhan; Seokhee Jeon</td>
          </tr>
          <tr>
            <td>p1057</td>
            <td>
              {' '}
              Effects of Latency in Visual Feedback on Human Performance of Path-Steering Tasks{' '}
            </td>
            <td> Himari Tochioka; Haruka Ikeda; Tomohiko Hayakawa; Masatoshi Ishikawa</td>
          </tr>
          <tr>
            <td>p1059</td>
            <td> A Framework for Virtual Reality Training to Improve Public Speaking </td>
            <td> Kerry Pellet; Syed Fawad Mustafa Zaidi</td>
          </tr>
          <tr>
            <td>p1064</td>
            <td>
              {' '}
              Enhancement of Pointing Towards Non-Haptic Augmented Reality Interfaces by Increasing
              the Arm Position Sense{' '}
            </td>
            <td> Daniela Markov-Vetter; Oliver Staadt</td>
          </tr>
          <tr>
            <td>p1065</td>
            <td> AHMED: Toolset for Ad-hoc mixed-reality exhibit design </td>
            <td> Krzysztof Pietroszek; Carl Moore</td>
          </tr>
        </table>

        <h2 style={{ marginTop: '48px' }}>Poster Session #2: Thursday </h2>

        <ul>
          <li>Fast Forward: 14:00 (Prepare 1 slide)</li>
          <li>Session: 14:30</li>
        </ul>

        <table className="program">
          <tr>
            <td>p1069</td>
            <td>
              UniVResity: Face-to-Face Class Participation for Remote Students using Virtual Reality
            </td>
            <td> Krzysztof Pietroszek; Chao Cheng Lin</td>
          </tr>
          <tr>
            <td>p1072</td>
            <td>IRIS: Inter-Reality Interactive Surface</td>
            <td> Krzysztof Pietroszek</td>
          </tr>
          <tr>
            <td>p1074</td>
            <td>
              Interactive Visualization of Painting Data with Augmented Reality full strip notes
            </td>
            <td>Kyungjin Yoo</td>
          </tr>
          <tr>
            <td>p1077</td>
            <td>
              Toward Effective Virtual Reality Intervention Development Planning for People with
              Persistent Postural Perceptual Dizziness
            </td>
            <td> Syed Fawad M. Zaidi , Prof. Justin Beilby, Prof. Mick Grimley</td>
          </tr>
          <tr>
            <td>p1079</td>
            <td>
              Scalebridge VR: Immersive Proportional Reasoning Game for Children with Brain-Computer
              Interface for Difficulty Scaling
            </td>
            <td> Krzysztof Pietroszek, Liudmila Tahai</td>
          </tr>
          <tr>
            <td>p1087</td>
            <td>A Glyph-based Multimodal Presentation of Multivariate Data</td>
            <td> Shamima Yasmin</td>
          </tr>
          <tr>
            <td>p1088</td>
            <td>A Haptic-enhanced New Approach to Laryngoscopy</td>
            <td> Shamima Yasmin</td>
          </tr>
          <tr>
            <td>p1095</td>
            <td>
              Analysis of VR Sickness and Gait Parameters During Non-Isometric Virtual Walking with
              Large Translational Gain
            </td>
            <td> Carlos Alfredo Tirado Cortes; Hsiang-Ting Chen; Chin-Teng Lin</td>
          </tr>
          <tr>
            <td>p1099</td>
            <td>
              TTT:Time Synchronization Method by Time Distortion for VR Training including Rapidly
              Moving Objects
            </td>
            <td> Natsuki Hamanishi; Jun Rekimoto</td>
          </tr>
          <tr>
            <td>p1106</td>
            <td>A Mobile Augmented Reality Interface for Teaching Folk Dances</td>
            <td> Iris Kico; Fotis Liarokapis</td>
          </tr>
          <tr>
            <td>p1108</td>
            <td>A Comparison of Human and Machine-Generated Voice</td>
            <td> Amal Abdulrahman; Deborah Richards; Ayse Aysin Bilgin</td>
          </tr>
          <tr>
            <td>p1111</td>
            <td>
              Towards Dynamic Positioning of Text Content on a Windshield Display for Automated
              Driving
            </td>
            <td> Andreas Riegler; Andreas Riener; Clemens Holzmann</td>
          </tr>
          <tr>
            <td>p1112</td>
            <td>Blind Navigation of Web Pages through Vibro-tactile Feedbacks</td>
            <td>
              {' '}
              Waseem Safi, Fabrice Maurel, Jean-Marc Routoure, Pierre Beust, Mich√®le Molina,
              Coralie Sann, Jessica Guilbert
            </td>
          </tr>
          <tr>
            <td>p1113</td>
            <td>
              RecyGlide : A Forearm-worn Multi-modal Haptic Display aimed to Improve User VR
              Immersion
            </td>
            <td>
              {' '}
              Juan Heredia; Jonathan Tirado; Vladislav Panov; Miguel Altamirano Cabrera; Kamal
              Youcef-Toumi; Dzmitry Tsetserukou
            </td>
          </tr>
          <tr>
            <td>p1121</td>
            <td>
              PanoFlex: Adaptive Panoramic Vision to Accommodate 360¬∞ Field-of-View for Humans
            </td>
            <td> Feng Liang; Stevanus Kevin; Kai Kunze; Yun Suen Pai</td>
          </tr>
          <tr>
            <td>p1127</td>
            <td>LINACVR: VR Simulation for Radiation Therapy Education</td>
            <td>
              {' '}
              Haydn Bannister; Ben Selwyn-Smith; Craig Anslow; Brian Robinson; Rafael K dos Anjos
              PhD; Daniel Pires; Paul Kane; Aidan Leong
            </td>
          </tr>
          <tr>
            <td>p1132</td>
            <td>
              Interactive Indirect Illumination Using Mipmap-based Ray Marching and Local Means
              Replaced Denoising
            </td>
            <td> Bo Zhang; Kyoungsu Oh</td>
          </tr>
          <tr>
            <td>p1135</td>
            <td>Drone-Steering: A Novel VR Traveling Technique</td>
            <td>
              {' '}
              Jean-Luc Lugrin; Andreas Juchno; Philipp Schaper; Maximilian Landeck; Marc Erich
              Latoschik
            </td>
          </tr>
          <tr>
            <td>p1137</td>
            <td>Optical-Reflection Type 3D Augmented Reality Mirrors</td>
            <td> Gun Lee; Hye Sun Park; Mark Billinghurst</td>
          </tr>
          <tr>
            <td>p1139</td>
            <td>
              A Scalability Benchmark for a Virtual Audience Perception Model in Virtual Reality
            </td>
            <td>
              {' '}
              Yann Glemarec; Jean-Luc Lugrin; Anne-Gwenn Bosser; Mathieu Chollet; Cedric Buche;
              Maximilian Landeck; Marc Erich Latoschik
            </td>
          </tr>
          <tr>
            <td>p1143</td>
            <td>
              Exploring Experiences of Virtual Reality among Young and Older Adults in a Subway Fire
              Scenario: a Pilot Study
            </td>
            <td>
              {' '}
              Minyeong Seo; Hansu Lee; Seungmi Choi; Suhyun Jo; Heejae Jung; Subin Park; Hyunggu
              Jung
            </td>
          </tr>
          <tr>
            <td>p1144</td>
            <td>
              WiredSwarm: High Resolution Haptic Feedback Provided by a Swarm of Drones to the
              User's Fingers for VR interaction
            </td>
            <td> Evgeny Tsykunov; Dzmitry Tsetserukou</td>
          </tr>
          <tr>
            <td>p1147</td>
            <td>
              Cinvoque: Development of a Passively Responsive Framework for Seamless Evolution of
              Experiences in Immersive Live-Action Movies
            </td>
            <td> Amarnath Murugan; Amal Dev; Jayesh S. Pillai</td>
          </tr>
          <tr>
            <td>p1149</td>
            <td>
              A Web-based Augmented Reality Plat-form using Pictorial QR Code for Educational
              Purposes and Beyond
            </td>
            <td> Minh Nguyen; Minh Phu Lai; Huy Le; Wei Qi Yan</td>
          </tr>
          <tr>
            <td>p1154</td>
            <td>
              Where to Place the Camera: How Viewers React to Different Camera Positions in
              Cinematic Virtual Reality
            </td>
            <td> Sylvia Rothe; Vanessa Sarakiotis; Heinrich Hussmann</td>
          </tr>
          <tr>
            <td>p1156</td>
            <td>Understanding Enjoyment in VR Games with GameFlow</td>
            <td> Penny Sweetser; Zane Rogalewicz; Qingyang Li</td>
          </tr>
          <tr>
            <td>p1163</td>
            <td>Experiencing Waiting Time in Virtual Reality</td>
            <td>
              {' '}
              Jean-Luc Lugrin; Fabian Unruh; Maximilian Landeck; Yoan Lamour; Marc Erich Latoschik;
              Kai Vogeley; Marc Wittmann
            </td>
          </tr>
          <tr>
            <td>p1167</td>
            <td>
              The Impact of Stereo Rendering on the Perception of Normal Mapped Geometry in Virtual
              Reality
            </td>
            <td> Martin Misiak; Niko Wissmann; Arnulph Fuhrmann; Marc Erich Latoschik</td>
          </tr>
          <tr>
            <td>p1170</td>
            <td>
              A Comparative Study of Planar Surface and Spherical Surface for 3D Pointing Using
              Direct Touch
            </td>
            <td> Naoki Yanagihara; Buntarou Shizuki; Shin Takahashi</td>
          </tr>
          <tr>
            <td>p1173</td>
            <td>Visualizing Convolutional Neural Networks with Virtual Reality</td>
            <td> Nadine Meissler; Annika Wohlan; Nico Hochgeschwender</td>
          </tr>
          <tr>
            <td>p1174</td>
            <td>
              Augmented Reality Visualisation Concepts to Support Intraoperative Distance Estimation
            </td>
            <td> Florian Heinrich; Gerd Schmidt; Florian Jungmann; Christian Hansen</td>
          </tr>
        </table>
        <h5 style={{ marginTop: '24px' }}>
          Please note that we reserve rights to change the program.
        </h5>
      </div>
    </div>
  </Layout>
);
export default Program;
