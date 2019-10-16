import * as React from 'react';

import { Layout } from '../components/layout';
import { PageHeader } from '../components/page_header';

const Accessibility = () => (
  <Layout>
    <PageHeader title="Program" cls="submissions" />

    <div className="main-content page">
      <div className="container program">
        <h3>Following is a preliminary list of accepted full and short papers.</h3>
        <h6 style={{ marginBottom: '20px' }}>Full program will follow soon!</h6>
        <table cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <th style={{ minWidth: '300px' }}>Title</th>
              <th style={{ minWidth: '50px' }}>Type</th>
              <th style={{ minWidth: '50px' }}>Authors</th>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                A technique for Mixed Reality Remote Collaboration using 360 Panoramas in 3D
                Reconstructed Scenes
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Theophilus Hua Lid Teo (Emphatic Computing Lab, University of South Australia)
                <br />
                Ashkan F. Hayati (ITMS, University of South Australia)
                <br />
                Gun Lee (ITMS, University of South Australia)
                <br />
                Mark Billinghurst (ITMS, University of South Australia)
                <br />
                Matt Adcock (CSIRO , Canberra, Australia)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                CompRate: Power Efficient Heart Rate and Heart Rate Variability Monitoring on Smart
                Wearables
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Vipula Dissanayake (Augmented Human Lab, Auckland Bioengineering Institute, The
                University of Auckland)
                <br />
                Don Samitha Elvitigala (Augmented Human Lab, Auckland Bioengineering Institute, The
                University of Auckland)
                <br />
                Haimo Zhang (Augmented Human Lab, Auckland Bioengineering Institute, The University
                of Auckland)
                <br />
                Chamod Weerasinghe (Augmented Human Lab, Auckland Bioengineering Institute)
                <br />
                Suranga Nanayakkara (Augmented Human Lab, Auckland Bioengineering Institute, The
                University of Auckland)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Lower body control of a semi-autonomous avatar in Virtual Reality: Balance and
                Locomotion of a 3D Bipedal Model
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Vincent Thomasset (DIASI / LSI, CEA)
                <br />
                Stéphane Caron (CNRS)
                <br />
                Vincent Weistroffer (CEA LIST)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Bilateral Motion Display: Strategy to Provide Multiple Visual Perception Using
                Afterimage Effects for Specific Motion
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Haruka Ikeda (The University of Tokyo)
                <br />
                Tomohiko Hayakawa (The University of Tokyo)
                <br />
                Masatoshi Ishikawa (The University of Tokyo)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Immersive Insights: A Hybrid Analytics System For Collaborative Exploratory Data
                Analysis
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Marco Cavallo (IBM Research, New York)
                <br />
                Mishal Dolakia (IBM Research, New York)
                <br />
                Matous Havlena (IBM Research, New York)
                <br />
                Ken Ocheltree (IBM Research, New York)
                <br />
                Mark Podlaseck (IBM Research, New York)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Out-of-body Locomotion: Vectionless Navigation with a Continuous Avatar
                Representation
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Nathan Navarro Griffin (Computer Science and Engineering, University of Nevada)
                <br />
                Eelke Folmer (Computer Science and Engineering, University of Nevada)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Adventures in Hologram Space: Exploring the Design Space of Eye-to-eye Volumetric
                Telepresence
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Rafael Kuffner dos Anjos (Computational Media Innovation Centre, Victoria University
                of Wellington - Vimmi, Inesc-ID Lisboa)
                <br />
                Maurício Sousa (INESC-ID Lisboa - Universidade de Lisboa)
                <br />
                Daniel Medeiros (Computational Media Innovation Centre, Victoria University of
                Wellington - Vimmi, Inesc-ID Lisboa)
                <br />
                Daniel Mendes (INESC-ID Lisboa)
                <br />
                Mark Billinghurst (ITMS, University of South Australia)
                <br />
                Craig Anslow (School of Engineering and Computer Science, Victoria University of
                Wellington)
                <br />
                Joaquim P Jorge (INESC-ID Lisboa - DEI/IST/U Lisboa)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Depth Perception in Projective Augmented Reality: An Evaluation of Advanced
                Visualization Techniques
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Florian Heinrich (Otto-von-Guericke-University, Magdeburg)
                <br />
                Kai Bornemann (Otto-von-Guericke University, Magdeburg)
                <br />
                Kai Lawonn (University of Koblenz - Landau)
                <br />
                Christian Hansen (University of Magdeburg, Institute for Simulation and Graphics)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Juggling in VR: Advantages of Immersive Virtual Reality in Juggling Learning
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Jindrich Adolf (Czech Technical University in Prague, Czech Institute of
                Informatics, Robotics and Cybernetics)
                <br />
                Peter Kán (Vienna University of Technology)
                <br />
                Benjamin Outram (Keio University Graduate School of Media Design, Yokohama)
                <br />
                Hannes Kaufmann (Vienna University of Technology)
                <br /> Jaromír Doležal (Czech Technical University in Prague, Czech Institute of
                Informatics, Robotics and Cybernetics)
                <br />
                Lenka Lhotská (Czech Technical University in Prague, Czech Institute of Informatics,
                Robotics and Cybernetics)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                The Stroop Room: A Virtual Reality-Enhanced Stroop Test
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Stefan Gradl (Machine Learning and Data Analytics Lab, Friedrich-Alexander
                University of Erlangen-Nürnberg)
                <br />
                Markus Gerhard Wirth (Machine Learning and Data Analytics Lab, Computer Science,
                Erlangen)
                <br />
                Nico Mächtlinger (Friedrich-Alexander University of Erlangen-Nürnberg)
                <br />
                Romina Poguntke (Human-Computer Interaction, University of Stuttgart)
                <br />
                Andrea Wonner (Machine Learning and Data Analytics Lab, Friedrich-Alexander
                University of Erlangen-Nürnberg)
                <br />
                Nicolas Rohleder (Friedrich-Alexander University of Erlangen-Nürnberg)
                <br />
                Bjoern M Eskofier (Machine Learning and Data Analytics Lab, Friedrich-Alexander
                University of Erlangen-Nürnberg)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Investigating the Detection of Bimanual Haptic Retargeting in Virtual Reality
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Eric J Gonzalez (Mechanical Engineering, Stanford University)
                <br />
                Sean Follmer (Mechanical Engineering, Stanford University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Mid-Air Interaction in Virtual Reality for Eye-Hand Coordination in Sports Training
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Anil Ufuk Batmaz (School of Interactive Arts + Technology, Simon Fraser University)
                <br />
                Xintian Sun (School of Interactive Arts + Technology, Simon Fraser University)
                <br />
                Dogu Taskiran (Stambol Studios Inc., Vancouver)
                <br />
                Wolfgang Stuerzlinger (School of Interactive Arts + Technology, Simon Fraser
                University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                ElectroCutscenes: Realistic Haptic Feedback in Cutscenes of Virtual Reality Games
                Using Electric Muscle Stimulation
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Mohamed Khamis (University of Glasgow)
                <br />
                Nora Schuster (LMU Munich)
                <br />
                Ceenu George (LMU Munich)
                <br />
                Max Pfeiffer (Institute for Geoinformatics, University of Munster)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>Extended Sliding in Virtual Reality</td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Junwei Sun (School of Interactive Arts + Technology, Simon Fraser University)
                <br />
                Wolfgang Stuerzlinger (School of Interactive Arts + Technology, Simon Fraser
                University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Single RGB-D Fitting: Total Human Modeling with a RGB-D Shot
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Xianyong Fang (School of Computer Science and Technology, Anhui University -
                University of Houston)
                <br />
                Jikui Yang (School of Computer Science and Technology, Anhui University)
                <br />
                Jie Rao (School of Computer Science and Technology, Anhui University)
                <br />
                Linbo Wang (School of Computer Science and Technology, Anhui University)
                <br />
                Zhigang Deng (Department of Computer Science, University of Houston)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Smart3DGuides: Making Unconstrained Immersive 3D Drawing More Accurate
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Mayra Donaji Barrera Machuca (School of Interactive Arts + Technology, Simon Fraser
                University)
                <br />
                Wolfgang Stuerzlinger (School of Interactive Arts + Technology, Simon Fraser
                University)
                <br />
                Paul Asente (Adobe Research, San Jose, California)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Portable Mid-air Imaging Optical System on Glossy Surface
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Ayaka Sano (The University of Electro-Communications, Tokyo)
                <br />
                Naoya KOIZUMI (The University of Electro-Communications, Department of Informatics,
                Tokyo - PRESTO, JST, TOKYO)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Obstacle detection and alert system for smartphone AR users
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                HyeongYeop Kang (Media Laboratory, Korea University, Seoul)
                <br />
                Geonsun Lee (Media Laboratory, Korea University, Seoul)
                <br />
                JungHyun Han (Media Laboratory, Korea University, Seoul)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Signifier-Based Immersive and Interactive 3D Modeling
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                J. Andreas Bærentzen (Department of Applied Mathematics and Computer Science,
                Technical University of Denmark, Lyngby)
                <br />
                Jeppe Revall Frisvad (Department of Applied Mathematics and Computer Science,
                Technical University of Denmark, Lyngby)
                <br />
                Karan Singh (Department of Computer Science, University of Toronto)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Comparing Region-of-Interest Selection Techniques for Spatial 3D Data
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Bret Jackson (Department of Mathematics, Statistics, and Computer Science,
                Macalester College, Saint Paul, Minnesota)
                <br />
                Kayla Beckham (Department of Mathematics, Statistics, and Computer Science,
                Macalester College, Saint Paul, Minnesota, United States)
                <br />
                Anael Kuperwajs Cohen (Department of Mathematics, Statistics, and Computer Science,
                Macalester College, Saint Paul, Minnesota)
                <br />
                Brianna C Heggeseth (Department of Mathematics, Statistics, and Computer Science,
                Macalester College, Saint Paul, Minnesota)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Investigating a Physical Dial as a Measurement Tool for Cybersickness in Virtual
                Reality
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Natalie McHugh (HIT Lab NZ, University of Canterbury)
                <br />
                Sungchul Jung (HIT Lab NZ, University of Canterbury)
                <br />
                Simon Hoermann (HITLab NZ, University of Canterbury)
                <br />
                Robert W. Lindeman (HIT Lab NZ, Univers
                <br />
                Wolfgang Stuerzlinger (School of Interactive Arts + Technology, Simon Fraser
                University)ity of Canterbury)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Floating-point Precision and Deformation Awareness for Scalable and Robust 3D Face
                Alignment
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Jacob Morton (POSTECH, Pohang)
                <br />
                Seungyong Lee (POSTECH, Pohang)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Virtual Reality Forge: Pattern-Oriented Authoring of Virtual Reality Nuggets
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Robin Horst (Design, Computer Science, Media, RheinMain University of Applied
                Sciences)
                <br />
                Ralf Doerner (Design, Computer Science, Media, RheinMain University of Applied
                Sciences)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                POL360 : A Universal Mobile VR Motion Controller using Polarized Light
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Hyouk JANG (Department of Computer Science and Engineering, Seoul National
                University - SOCAR, inc, SEOUL)
                <br />
                Juheon CHOI (SOCAR, inc, SEOUL)
                <br />
                Gunhee Kim (Department of Computer Science and Engineering, Seoul National
                University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                DexController : Designing a VR Controller with Grasp-Recognition for Enriching
                Natural Game Experience
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                HyeonBeom Yi (Department of Industrial Design, KAIST)
                <br />
                Jiwoo Hong (Department of Industrial Design, KAIST)
                <br />
                Hwan Kim (Department of Industrial Design, KAIST)
                <br />
                Woohun Lee (Department of Industrial Design, KAIST)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Is the Pen Mightier than the Controller? A Comparison of Input Devices for Selection
                in Virtual and Augmented Reality
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Duc-Minh Pham (School of Interactive Arts + Technology, Simon Fraser University)
                <br />
                Wolfgang Stuerzlinger (School of Interactive Arts + Technology, Simon Fraser
                University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                HawKEY: Efficient and Versatile Text Entry for Virtual Reality
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Duc-Minh Pham (School of Interactive Arts + Technology, Simon Fraser University)
                <br />
                Wolfgang Stuerzlinger (School of Interactive Arts + Technology, Simon Fraser
                University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>A Hybrid Method for Powdered Materials Modeling</td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Yang Gao (State Key Laboratory of Virtual Reality Technology and Systems, Beihang
                University)
                <br />
                Yinghao Xu (State Key Laboratory of Virtual Reality Technology and Systems, Beihang
                University)
                <br />
                Shuai Li (Beihang university)
                <br />
                Aimin Hao (School of Computer Science, Beihang University)
                <br />
                Hong Qin (Departement of Computer Science, Stony Brook University)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Exploring the Use of a Robust Depth-sensor-based Avatar Control System and its
                Effects on Communication Behaviors
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Yuanjie Wu (HIT Lab NZ, University of Canterbury)
                <br />
                Yu Wang (Scene Simulation Lab, Beijing Institute of Technology)
                <br />
                Sungchul Jung (HIT Lab NZ, University of Canterbury)
                <br />
                Simon Hoermann (School of Product Design, University of Canterbury)
                <br />
                Robert W. Lindeman (HIT Lab NZ, University of Canterbury)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Being More Focused and Engaged in Firefighting Training: Applying User-Centered
                Design to VR System Development
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Seunggon Jeon (Ajou University, Suwon)
                <br />
                Jaeho Han (HCI, Ajou University, Suwon)
                <br />
                Yonggeol Jo (Ajou University, Suwon)
                <br />
                Kyungsik Han (Ajou University, Suwon)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Technologies for Social Augmentations in User-Embodied Virtual Reality
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Daniel Roth (Department of Computer Science, HCI Group, University of Würzburg)
                <br />
                Gary Bente (Communication, Arts and Sciences, Michigan State University)
                <br />
                Peter Kullmann (Department of Computer Science, HCI Group, University of Würzburg)
                <br />
                David Mal (Department of Computer Science, HCI Group, University of Würzburg)
                <br />
                Christian Felix Purps (Department of Computer Science, HCI Group, University of
                Würzburg)
                <br />
                Kai Vogeley (Psychiatry, University Hospital Cologne)
                <br />
                Marc Erich Latoschik (Department of Computer Science, HCI Group, University of
                Würzburg)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Avatar Type Affects Performance of Cognitive Tasks in Virtual Reality
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Ye Pan (University College London)
                <br />
                Anthony Steed (Department of Computer Science, University College London)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                SlingDrone: System for Navigation and Interaction with the Environment Using a
                Single Drone and VR
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Evgeny Tsykunov (Skolkovo Institute of Science and Technology, Moscow)
                <br />
                Roman Ibrahimov (Skolkovo Institute of Science and Technology (Skoltech), Moscow)
                <br />
                Dzmitry Tsetserukou (SPACE CREI, Skolkovo Institute of Science and Technology,
                Moscow)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Underwater virtual reality system for neutral buoyancy training: development and
                evaluation
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Christian Sinnott (Psychology, University of Nevada)
                <br />
                James Liu (Computer Science and Engineering, University of Nevada)
                <br />
                Courtney Matera (Psychology, University of Nevada)
                <br />
                Savannah Halow (Psychology, University of Nevada)
                <br />
                Ann Jones (Psychology, University of Nevada)
                <br />
                Matthew Moroz (Psychology, University of Nevada)
                <br />
                Jeffrey Mulligan (Human Systems Integration Division, NASA Ames Research Center,
                Mountain View)
                <br />
                Michael Crognale (Psychology, University of Nevada)
                <br />
                Eelke Folmer (Computer Science and Engineering, University of Nevada)
                <br />
                Paul MacNeilage (Psychology, University of Nevada)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>Fearing Disengagement from the Real World</td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Ceenu George (LMU Munich)
                <br />
                Julia Schwuchow (LMU Munich)
                <br />
                Heinrich Hussmann (LMU Munich)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                The Usability of Augmented Reality for Children to Perform a 3D Selection Task
              </td>
              <td style={{ minWidth: '50px' }}>short paper</td>
              <td style={{ minWidth: '50px' }}>
                Brita Munsinger (University of Texas at San Antonio)
                <br />
                John Quarles (Computer Science, University of Texas at San Antonio)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Measurement-based Hyper-elastic Material Identification and Real-time FEM Simulation
                for Haptic Rendering
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Arsen Abdulali (Haptics and Virtual Reality Lab, Kyung Hee University, Yongin-si)
                <br />
                Ibragim Atadjanov (Computer Science and Engineering, KyungHee University, Yongin-si)
                <br />
                Seungkyu Lee (Computer Science and Engineering, KyungHee University, Yongin-si)
                <br />
                Seokhee Jeon (Kyung Hee University, Yongin-si)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Correlating Biosignals with Trust and Cognitive Load in VR
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                unal Gupta (Empathic Computing Laboratory, The University of Auckland)
                <br />
                Ryo Hajika (Empathic Computing Lab, The University of Auckland)
                <br />
                Yun Suen Pai (Empathic Computing Lab, The University of Auckland)
                <br />
                Andreas Duenser (Data61, CSIRO, Hobart)
                <br />
                Martin Lochner (Data61, CSIRO, Hobart)
                <br />
                Mark Billinghurst (Data61, CSIRO, Hobart)
              </td>
            </tr>
            <tr>
              <td style={{ minWidth: '50px' }}>
                Sensitivity to Rate of Change in Gains Applied by Redirected Walking
              </td>
              <td style={{ minWidth: '50px' }}>full paper</td>
              <td style={{ minWidth: '50px' }}>
                Ben J Congdon (University College London)
                <br />
                Anthony Steed (Department of Computer Science, University College London)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
);
export default Accessibility;
