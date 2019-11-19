import * as React from "react";

import { Layout } from "../components/layout";
import { PageHeader } from "../components/page_header";
import { makeUrl } from "../components/common";

const Accessibility = () => (
  <Layout>
    <PageHeader title="Proceedings" cls="submissions" />

    <div className="main-content page">
      <div className="container ">
        <div id="DLtoc">
          <div id="DLheader">
            <a
              class="DLcitLink"
              href="https://dl.acm.org/citation.cfm?id=3359996"
              title="Go to the ACM Digital Library for additional information about this proceeding"
            >
              <img
                class="DLlogo"
                src="https://dl.acm.org/img/dllogo.png"
                alt="Digital Library logo"
                height="30"
                width="30"
              ></img>
              Full Citation in the ACM Digital Library
            </a>
          </div>
          <div id="DLcontent" style={{ marginTop: "30px" }}>
            <h2>SESSION: Technical Papers</h2>
            <div class="DLabstract"> </div>
            <h2>SESSION: Navigation &amp; Locomotion</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698906"
                title="Get the Full Text from the ACM Digital Library"
              >
                Out-of-body Locomotion: Vectionless Navigation with a Continuous
                Avatar Representation
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Nathan Navarro Griffin</li>
              <li class="nameList Last">Eelke Folmer</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Teleportation is a popular and low risk means of navigating in
                  VR. Because teleportation discontinuously translates the
                  user&#8217;s viewpoint, no optical flow is generated that
                  could lead to vection-induced VR sickness. However, instant
                  viewpoint translations and resulting discontinuous avatar
                  representation is not only detrimental to presence and spatial
                  awareness but also presents a challenge for gameplay
                  design&#8211;particularly for multiplayer games. We compare
                  out-of-body locomotion, a hybrid viewpoint technique that lets
                  users seamlessly switch between a first-person and
                  third-person avatar view, to traditional pointer-based
                  teleportation. While in third-person, if the user
                  doesn&#8217;t move, the camera remains stationary to avoid any
                  optical flow generation. Third-person also lets users
                  precisely and continuously navigate their avatar without risk
                  of getting VR sick. The viewpoint automatically switches back
                  to first-person as soon the users breaks line of sight with
                  their avatar or the user requests to rejoin the avatar with a
                  button press. A user study compares out-of-body locomotion to
                  teleportation with participants (n=22) traversing an obstacle
                  course. Results show that out-of-body locomotion requires
                  significantly fewer (67&#37;) viewpoint transitions than
                  teleportation while there was no significant difference in
                  performance. In addition to being able to offer a continuous
                  avatar representation, participants also deemed out-of-body
                  locomotion to be faster.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698907"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698906"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698908"
                title="Get the Full Text from the ACM Digital Library"
              >
                Obstacle Detection and Alert System for Smartphone AR Users
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">HyeongYeop Kang</li>
              <li class="nameList">Geonsun Lee</li>
              <li class="nameList Last">JungHyun Han</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper presents an obstacle detection and alert system for
                  the pedestrians who use smartphone AR applications. The system
                  analyzes the input camera image to extract feature points and
                  determines whether the feature points come from obstacles
                  ahead in the path. With the obstacle detector, two experiments
                  were made. The first investigated the obstacle alert
                  interfaces, and the second investigated the orientation guide
                  interfaces that instruct users to hold their smartphones with
                  some angles/orientations appropriate to capture the
                  environment. Then, the best interfaces identified from the
                  experiments were integrated and tested to examine their
                  usability and user experiences.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698909"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698908"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698900"
                title="Get the Full Text from the ACM Digital Library"
              >
                Sensitivity to Rate of Change in Gains Applied by Redirected
                Walking
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Ben J Congdon</li>
              <li class="nameList Last">Anthony Steed</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Redirected walking allows for natural locomotion in virtual
                  environments that are larger than a user&#8217;s physical
                  environment. The mapping between real and virtual motion is
                  modified by scaling some aspect of motion. As a user traverses
                  the virtual environment these modifications (or gains) must be
                  dynamically adjusted to prevent collision with physical
                  obstacles. A significant body of work has established
                  perceptual thresholds on rates of absolute gain, but the
                  effect of changing gain is little understood.{" "}
                </p>{" "}
                <p>
                  We present the results of a user study on the effects of rate
                  of gain change. A psychophysical experiment was conducted with
                  21 participants. Each participant completed a series of
                  two-alternative forced choice tasks in which they determined
                  whether their virtual motion differed from their physical
                  motion while experiencing one of three different methods of
                  gain change: sudden gain change, slow gain change and constant
                  gain. Gain thresholds were determined by 3 interleaved 2-up
                  1-down staircases, one per condition. Our results indicate
                  that slow gain change is significantly harder to detect than
                  sudden gain change.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698901"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698900"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Avatars</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698902"
                title="Get the Full Text from the ACM Digital Library"
              >
                Lower body control of a semi-autonomous avatar in Virtual
                Reality: Balance and Locomotion of a 3D Bipedal Model
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Vincent Thomasset</li>
              <li class="nameList">St&#x00E9;phane Caron</li>
              <li class="nameList Last">Vincent Weistroffer</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Animated virtual humans may rely on full-body tracking system
                  to reproduce user motions. In this paper, we reduce tracking
                  to the upper-body and reconstruct the lower body to follow
                  autonomously its upper counterpart. Doing so reduces the
                  number of sensors required, making the application of virtual
                  humans simpler and cheaper. It also enable deployment in
                  cluttered scenes where the lower body is often hidden. The
                  contribution here is the inversion of the well-known capture
                  problem for bipedal walking. It determines footsteps rather
                  than center-of-mass motions and yet can be solved with an
                  off-the-shelf capture problem solver. The quality of our
                  method is assessed in real-time tracking experiments on a wide
                  variety of movements.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698903"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698902"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698904"
                title="Get the Full Text from the ACM Digital Library"
              >
                Technologies for Social Augmentations in User-Embodied Virtual
                Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Daniel Roth</li>
              <li class="nameList">Gary Bente</li>
              <li class="nameList">Peter Kullmann</li>
              <li class="nameList">David Mal</li>
              <li class="nameList">Chris Felix Purps</li>
              <li class="nameList">Kai Vogeley</li>
              <li class="nameList Last">Marc Erich Latoschik</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Technologies for Virtual, Mixed, and Augmented Reality (VR,
                  MR, and AR) allow to artificially augment social interactions
                  and thus to go beyond what is possible in real life.
                  Motivations for the use of social augmentations are manifold,
                  for example, to synthesize behavior when sensory input is
                  missing, to provide additional affordances in shared
                  environments, or to support inclusion and training of
                  individuals with social communication disorders. We review and
                  categorize augmentation approaches and propose a software
                  architecture based on four data layers. Three components
                  further handle the status analysis, the modification, and the
                  blending of behaviors. We present a prototype (injectX) that
                  supports behavior tracking (body motion, eye gaze, and facial
                  expressions from the lower face), status analysis,
                  decision-making, augmentation, and behavior blending in
                  immersive interactions. Along with a critical reflection, we
                  consider further technical and ethical aspects.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698915"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698904"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698916"
                title="Get the Full Text from the ACM Digital Library"
              >
                Avatar Type Affects Performance of Cognitive Tasks in Virtual
                Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Ye Pan</li>
              <li class="nameList Last">Anthony Steed</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Current consumer virtual reality applications typically
                  represent the user by an avatar comprising a simple head/torso
                  and decoupled hands. In the prior work of Steed et al. it was
                  shown that the presence or absence of an avatar could have a
                  significant impact on the cognitive load of the user. We
                  extend that work in two ways. First they only used a full-body
                  avatar with articulated arms, so we add a condition with
                  hands-only representation similar to the majority of current
                  consumer applications. Second we provide a real-world
                  benchmark so as to start to get at the impact of using any
                  immersive system. We validate the prior results: real and full
                  body avatar performance on a memory task is significantly
                  better than no avatar. However the hands only condition is not
                  significantly different than either these two extremes. We
                  discuss why this might be, in particular we discuss the
                  potential for a individual variation in response to the
                  embodiment level.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698917"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698916"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Engagement</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698918"
                title="Get the Full Text from the ACM Digital Library"
              >
                Being More Focused and Engaged in Firefighting Training:
                Applying User-Centered Design to VR System Development
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Seung-Gon Jeon</li>

              <li class="nameList">Jaeho Han</li>
              <li class="nameList">Yonggeol Jo</li>
              <li class="nameList Last">Kyungsik Han</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Although virtual reality (VR) programs to provide firefighting
                  training continue to be developed and adopted, our
                  investigation with 15 firefighters indicates that a current VR
                  training system tends to convey behavioral tips and does not
                  sufficiently reflect actual firefighters&#8217; needs and
                  realities in the field. It often provides somewhat simplified
                  fire simulations and actually lowers the effectiveness of the
                  training. In this paper, we employ Human-Computer Interaction
                  (HCI) methods to examine and identify core elements in
                  firefighting scenarios and develop a VR system that
                  incorporates such elements. We evaluate our system with
                  respect to presence and three design components of the VR
                  simulation (i.e., reality, meaning, play) through a user study
                  with 22 participants. Our study results demonstrate greater
                  user experience and perception toward the four elements in
                  firefighting training with our VR system compared to the
                  existing one. We discuss design implications (e.g., move
                  control, degree of freedom, sight hindrance by smoke,
                  unexpected events) of our study that are expected to help
                  implement and provide an effective VR training system for
                  firefighters.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698919"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698918"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698910"
                title="Get the Full Text from the ACM Digital Library"
              >
                Fearing Disengagement from the Real World
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Ceenu George</li>
              <li class="nameList">Julia Schwuchow</li>
              <li class="nameList Last">Heinrich Hussmann</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  With the adoption of mobile head mounted displays (HMDs)
                  amongst non-experts outside of lab settings, it becomes
                  increasingly important to understand what factors influence a
                  holistic mobile virtual reality (MVR) user experience. We
                  present the results of a field study (N=34), in which we used
                  three methods - a drawing task, a storytelling exercise, and
                  the technology acceptance questionnaire (TAM) - to explore
                  factors, beyond technical capability, that influence the user
                  experience of HMDs. Our analysis (1) highlights factors that
                  designers and researchers can adopt to create and evaluate
                  socially acceptable MVR systems for non-expert users outside a
                  lab context, and (2) puts these factors in context with
                  existing research from industry and academia.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698911"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698910"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Collaboration</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698912"
                title="Get the Full Text from the ACM Digital Library"
              >
                Immersive Insights: A Hybrid Analytics System forCollaborative
                Exploratory Data Analysis
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Marco Cavallo</li>
              <li class="nameList">Mishal Dolakia</li>
              <li class="nameList">Matous Havlena</li>
              <li class="nameList">Kenneth Ocheltree</li>
              <li class="nameList Last">Mark Podlaseck</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In the past few years, augmented reality (AR) and virtual
                  reality (VR) technologies have experienced terrific
                  improvements in both accessibility and hardware capabilities,
                  encouraging the application of these devices across various
                  domains. While researchers have demonstrated the possible
                  advantages of AR and VR for certain data science tasks, it is
                  still unclear how these technologies would perform in the
                  context of exploratory data analysis (EDA) at large. In
                  particular, we believe it is important to better understand
                  which level of immersion EDA would concretely benefit from,
                  and to quantify the contribution of AR and VR with respect to
                  standard analysis workflows.{" "}
                </p>{" "}
                <p>
                  In this work, we leverage a Dataspace reconfigurable hybrid
                  reality environment to study how data scientists might perform
                  EDA in a co-located, collaborative context. Specifically, we
                  propose the design and implementation of Immersive Insights, a
                  hybrid analytics system combining high-resolution displays,
                  table projections, and augmented reality (AR) visualizations
                  of the data.{" "}
                </p>{" "}
                <p>
                  We conducted a two-part user study with twelve data
                  scientists, in which we evaluated how different levels of data
                  immersion affect the EDA process and compared the performance
                  of Immersive Insights with a state-of-the-art, non-immersive
                  data analysis system.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698913"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698912"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698914"
                title="Get the Full Text from the ACM Digital Library"
              >
                Adventures in Hologram Space: Exploring the Design Space of
                Eye-to-eye Volumetric Telepresence
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Rafael Kuffner dos Anjos</li>
              <li class="nameList">Maur&#x00ED;cio Sousa</li>
              <li class="nameList">Daniel Mendes</li>
              <li class="nameList">Daniel Medeiros</li>
              <li class="nameList">Mark Billinghurst</li>
              <li class="nameList">Craig Anslow</li>
              <li class="nameList Last">Joaquim Jorge</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Modern volumetric projection-based telepresence approaches are
                  capable of providing realistic full-size virtual
                  representations of remote people. Interacting with full-size
                  people may not be desirable due to the spatial constraints of
                  the physical environment, application context, or display
                  technology. However, the miniaturization of remote people is
                  known to create an eye gaze matching problem. Eye-contact is
                  essential to communication as it allows for people to use
                  natural nonverbal cues and improves the sense of &#8220;being
                  there&#8221;. In this paper we discuss the design space for
                  interacting with volumetric representations of people and
                  present an approach for dynamically manipulating scale,
                  orientation and the position of holograms which guarantees
                  eye-contact. We created a working augmented reality-based
                  prototype and validated it with 14 participants.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698925"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698914"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698926"
                title="Get the Full Text from the ACM Digital Library"
              >
                Exploring the Use of a Robust Depth-sensor-based Avatar Control
                System and its Effects on Communication Behaviors
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Yuanjie Wu</li>
              <li class="nameList">Yu Wang</li>
              <li class="nameList">Sungchul Jung</li>
              <li class="nameList">Simon Hoermann</li>
              <li class="nameList Last">Robert W. Lindeman</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  To interact as fully-tracked avatars with rich hand gestures
                  in Virtual Reality (VR), we often need to wear a tracking suit
                  or attach extra sensors on our bodies. User experience and
                  performance may be impacted by the cumbersome devices and low
                  fidelity behavior representations, especially in social
                  scenarios where good communication is required. In this paper,
                  we use multiple depth sensors and focus on increasing the
                  behavioral fidelity of a participant&#8217;s virtual body
                  representation. To investigate the impact of the
                  depth-sensor-based avatar system (full-body tracking with hand
                  gestures), we compared it against a controller-based avatar
                  system (partial-body tracking with limited hand gestures). We
                  designed a VR interview simulation for a single user to
                  measure the effects on presence, virtual body ownership,
                  workload, usability, and perceived self-performance.
                  Specifically, the interview process was recorded in VR,
                  together with all the verbal and non-verbal cues. Subjects
                  then took a third-person view to evaluate their previous
                  performance. Our results show that the depth-sensor-based
                  avatar control system increased virtual body ownership and
                  also improved the user experience. In addition, users rated
                  their non-verbal behavior performance higher in the full-body
                  depth-sensor-based avatar system.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698927"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698926"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Haptics</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698928"
                title="Get the Full Text from the ACM Digital Library"
              >
                Investigating the Detection of Bimanual Haptic Retargeting in
                Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Eric J. Gonzalez</li>
              <li class="nameList Last">Sean Follmer</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Haptic retargeting is a virtual reality (VR) interaction
                  technique enabling virtual objects to be
                  &#8221;remapped&#8221; to different haptic proxies by
                  offsetting the user&#8217;s virtual hand from their physical
                  hand. While researchers have investigated single-hand
                  retargeting, the effects of bimanual interaction in the
                  context of haptic retargeting have been less explored. In this
                  study, we present an evaluation of perceptual detection rates
                  for bimanual haptic retargeting in VR. We tested 64
                  combinations of simultaneous left- and right-hand retargeting
                  ranging from &#8722; 24&#176; to &#43; 24&#176; offsets and
                  found that bimanual retargeting can be more noticeable to
                  users when the hands are redirected in different directions as
                  opposed to the same direction.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698929"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698928"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698920"
                title="Get the Full Text from the ACM Digital Library"
              >
                ElectroCutscenes: Realistic Haptic Feedback in Cutscenes of
                Virtual Reality Games Using Electric Muscle Stimulation
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Mohamed Khamis</li>
              <li class="nameList">Nora Schuster</li>
              <li class="nameList">Ceenu George</li>
              <li class="nameList Last">Max Pfeiffer</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Cutscenes in Virtual Reality (VR) games enhance story telling
                  by delivering output in the form of visual, auditory, or
                  haptic feedback (e.g., using vibrating handheld controllers).
                  Since they lack interaction in the form of user input,
                  cutscenes would significantly benefit from improved feedback.
                  We introduce the concept and implementation of
                  ElectroCutscenes, where Electric Muscle Stimulation (EMS) is
                  leveraged to elicit physical user movements to different body
                  parts to correspond to those of personal avatars in cutscenes
                  of VR games while the user stays passive. Through a user study
                  (N=22) in which users passively received kinesthetic feedback
                  resulting in involuntarily movements, we show that
                  ElectroCutscenes significantly increases perceived presence
                  and realism compared to controller-based vibrotactile and no
                  haptic feedback. Furthermore, we found preliminary evidence
                  that combining visual and EMS feedback can evoke movements
                  that are not actuated by either of them alone. We discuss how
                  to enhance realism and presence of cutscenes in VR games even
                  when EMS can partially rather than completely actuate the
                  desired body movements.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698921"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698920"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Simulation &amp; Graphics</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698922"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Hybrid Method for Powdered Materials Modeling
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Yang Gao</li>
              <li class="nameList">Yinghao Xu</li>
              <li class="nameList">Shuai Li</li>
              <li class="nameList">Aimin Hao</li>
              <li class="nameList Last">Hong Qin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Powdered materials, such as sand and flour, are quite common
                  in nature, whose properties always range from granular
                  particles to smog materials under the air friction while
                  throwing. This paper presents a hybrid method that tightly
                  couples APIC solver with density field to accomplish the
                  transformation of continuous powdered materials varying among
                  granular particles, smog, powders and their natural mixtures.
                  In our method, a part of the granular particles will be
                  transformed to dust smog while interacting with air and
                  represented by density field, then, as velocity decreases the
                  density-based dust will deposit to powder particles. We
                  construct a unified framework to imitate the mutual
                  transformation process for the powdered materials of different
                  scales, which greatly enhance the details of particle-based
                  materials modeling. We have conducted extensive experiments to
                  verify the performance of our model, and get satisfactory
                  results in terms of stability, efficiency and visual
                  authenticity as expected.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698923"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698922"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698924"
                title="Get the Full Text from the ACM Digital Library"
              >
                Measurement-based Hyper-elastic Material Identification and
                Real-time FEM Simulation for Haptic Rendering
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Arsen Abdulali</li>
              <li class="nameList">Ibragim Atadjanov</li>
              <li class="nameList">Seungkyu Lee</li>
              <li class="nameList Last">Seokhee Jeon</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we propose a measurement-based modeling
                  framework for hyper-elastic material identification and
                  real-time haptic rendering. We build a custom data collection
                  setup that captures shape deformation and response forces
                  during compressive deformation of cylindrical material
                  samples. We collected training and testing sets of data from
                  four silicone objects having various material profiles. We
                  design an objective function for material parameter
                  identification by incorporating both shape deformation and
                  reactive forces and utilize a genetic algorithm. We adopted an
                  optimization-based Finite Element Method (FEM) for object
                  deformation rendering. The numerical error of simulated forces
                  was found to be perceptually negligible.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698935"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698924"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Displays &amp; Visual Perception</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698936"
                title="Get the Full Text from the ACM Digital Library"
              >
                CompRate: Power Efficient Heart Rate and Heart Rate Variability
                Monitoring on Smart Wearables
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Vipula Dissanayake</li>
              <li class="nameList">Don Samitha Elvitigala</li>
              <li class="nameList">Haimo Zhang</li>
              <li class="nameList">Chamod Weerasinghe</li>
              <li class="nameList Last">Suranga Nanayakkara</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Currently, smartwatches are equipped with Photoplethysmography
                  (PPG) sensors to measure Heart Rate (HR) and Heart Rate
                  Variability (HRV). However, PPG sensors consume considerably
                  high energy, making it impractical to monitor HR &#38; HRV
                  continuously for an extended period. Utilising low power
                  accelerometers to estimate HR has been broadly discussed in
                  previous decades. Inspired by prior work, we introduce
                  CompRate, an alternative method to measure HR continuously for
                  an extended period in low-intensity physical activities.
                  CompRate model calibrated for individual users only has an
                  average performance of Root Mean Squared Error (RMSE) 1.58
                  Beats Per Minute (BPM). Further, CompRate used 3.75 times less
                  energy compared to the built-in PPG sensor. We also
                  demonstrate that CompRate model can be extended to predict
                  HRV. We will demonstrate CompRate in several application
                  scenarios: self-awareness of fatigue and just-in-time
                  interruption while driving; enabling teachers to be aware of
                  students&#8217; mental effort during a learning activity; and
                  the broadcasting of the location of live victims in a disaster
                  situation.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698937"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698936"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698938"
                title="Get the Full Text from the ACM Digital Library"
              >
                Bilateral Motion Display: Strategy to Provide Multiple Visual
                Perception Using Afterimage Effects for Specific Motion
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Haruka Ikeda</li>
              <li class="nameList">Tomohiko Hayakawa</li>
              <li class="nameList Last">Masatoshi Ishikawa</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We propose a novel displaying method that provides completely
                  different visual perception to multiple observers
                  simultaneously using afterimage effects for specific motion.
                  Initially, the displayed patterns do not reveal any
                  information; however, when seen by a user moving his or her
                  gaze in a certain direction and speed, they are spatially
                  integrated and appear as 2D afterimages. Our method only
                  requires a high-speed display system to produce the
                  user-oriented perception, which expands the range of
                  applications in various situations such as in road signs.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698939"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698938"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: 3D Modelling and Authoring</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698930"
                title="Get the Full Text from the ACM Digital Library"
              >
                Signifier-Based Immersive and Interactive 3D Modeling
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Andreas B&#x000E6;rentzen</li>
              <li class="nameList">Jeppe Revall Frisvad</li>
              <li class="nameList Last">Karan Singh</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Interactive 3D modeling in VR is both aided by immersive 3D
                  input and hampered by model disjunct, tool-based or
                  selection-action user interfaces. We propose a direct,
                  signifier-based approach to the popular interactive technique
                  of creating 3D models through a sequence of extrusion
                  operations. Motivated by handles and signifiers that
                  communicate the affordances of everyday objects, we define a
                  set of design principles for an immersive, signifier-based
                  modeling interface. We then present an interactive 3D modeling
                  system where all modeling affordances are modelessly reachable
                  and signified on the model itself.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698931"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698930"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698932"
                title="Get the Full Text from the ACM Digital Library"
              >
                Virtual Reality Forge: Pattern-Oriented Authoring of Virtual
                Reality Nuggets
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Robin Horst</li>
              <li class="nameList Last">Ralf D&#x00F6;rner</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  A current educational trend is to divide learning content in
                  relatively small and independent learning units, referred to
                  as learning nuggets. These &#8220;bite-sized&#8221; nuggets
                  often rely on patterns in order to reuse these patterns within
                  highly diverse curricular structures like lessons,
                  presentations or demos.{" "}
                </p>{" "}
                <p>
                  In this paper, we explore how virtual reality (VR) can be
                  utilized as a medium for learning purposes similar to learning
                  nuggets. We present a nugget-inspired VR system design and
                  dovetail the pattern-oriented nugget concept in relatively
                  small VR systems. We call this authoring approach with VR
                  nuggets forging. Furthermore, we propose a VR authoring system
                  for these VR nuggets &#8211; the VR forge. The system design
                  for realizing VR nuggets and the authoring system are
                  presented and implemented in Unity. For an example we utilize
                  a set of basic patterns from the educational domain. In an
                  expert user study, we use the resulting bite-sized VR
                  applications to evaluate four critical aspects concerning VR
                  and nugget-like usage and show that the educational experts
                  accepted the VR nuggets. Within an additional study, we
                  indicate that our authoring system which reflects the
                  simplistic pattern-oriented content creation paradigm of
                  learning nuggets has potential for general laymen authoring of
                  VR application.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699600"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698932"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Devices</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698933"
                title="Get the Full Text from the ACM Digital Library"
              >
                POL360: A Universal Mobile VR Motion Controller using Polarized
                Light
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Hyouk JANG</li>
              <li class="nameList">Juheon CHOI</li>
              <li class="nameList Last">Gunhee Kim</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We introduce POL360: the first universal VR motion controller
                  that leverages the principle of light polarization. POL360
                  enables a user who holds it and wears a VR headset to see
                  their hand motion in a virtual world via its accurate 6-DOF
                  position tracking. Compared to other techniques for VR
                  positioning, POL360 has several advantages as follows. (1)
                  Mobile compatibility: Neither additional computing resource
                  like a PC/console nor any complicated pre-installation is
                  required in the environment. Only necessary device is a VR
                  headset with an IR LED module as a light source to which a
                  thin-film linear polarizer is attached. (2) On-device
                  computing: Our POL360&#8217;s computation for positioning is
                  completed on the microprocessor in the device. Thus, it does
                  not require additional computing resource of a VR headset. (3)
                  Competitive accuracy and update rate: In spite of
                  POL360&#8217;s superior mobile compatibility and
                  affordability, POL360 attains competitive performance of
                  accuracy and fast update rates. That is, it achieves the
                  subcentimeter accuracy of positioning and the tracking rate
                  higher than 60 Hz. In this paper, we derive the mathematical
                  formulation of 6-DOF positioning using light polarization for
                  the first time and implement a POL360 prototype that can
                  directly operate with any commercial VR headset systems. In
                  order to demonstrate POL360&#8217;s performance and usability,
                  we carry out thorough quantitative evaluation and a user study
                  and develop three game demos as use cases.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698934"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698933"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698945"
                title="Get the Full Text from the ACM Digital Library"
              >
                HawKEY: Efficient and Versatile Text Entry for Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Duc-Minh Pham</li>
              <li class="nameList Last">Wolfgang Stuerzlinger</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Text entry is still a challenging task in modern Virtual
                  Reality (VR) systems. The lack of efficient text entry methods
                  limits the applications that can be used productively in VR.
                  Previous work has addressed this issue through virtual
                  keyboards or showing the physical keyboard in VR. While
                  physical keyboards afford faster text entry, they usually
                  require a seated user and an instrumented environment. We
                  introduce a new keyboard, worn on a hawker&#8217;s tray in
                  front of the user, which affords a compact, simple, flexible,
                  and efficient text entry solution for VR, without restricting
                  physical movement. In our new video condition, we also show
                  the keyboard only when the user is looking down at it. To
                  evaluate our novel solution and to identify good keyboard
                  visualizations, we ran a user study where we asked
                  participants to enter both lowercase sentences as well as
                  complex text while standing. The results show that text entry
                  rates are affected negatively by simplistic keyboard
                  visualization conditions and that our solution affords desktop
                  text entry rates, even when standing.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698946"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698945"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698947"
                title="Get the Full Text from the ACM Digital Library"
              >
                DexController : Designing a VR Controller with Grasp-Recognition
                for Enriching Natural Game Experience
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">HyeonBeom Yi</li>
              <li class="nameList">Jiwoo Hong</li>
              <li class="nameList">Hwan Kim</li>
              <li class="nameList Last">Woohun Lee</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We present DexController, which is a hand-held controller
                  leveraging grasp as an additional modality for virtual reality
                  (VR) game. The pressure-sensitive surface of DexController was
                  designed to recognize two different grasp-poses (i.e.
                  precision grip and power grip) and detect grasp-force. Based
                  on the results of two feasibility tests, a VR defense game was
                  designed in which players could attack each enemy using the
                  proper weapon with a proper level of force. A within-subject
                  comparative study is conducted with a button-based controller
                  which has the same physical form of DexController. The results
                  indicated that DexController enhanced the perceived
                  naturalness of the controller and game enjoyment, with having
                  acceptable physical demand. This study clarifies the empirical
                  effect of utilizing grasp-recognition on VR game controller to
                  enhance interactivity. Also, we provide insight for the
                  integration of VR game elements with the grasping modality of
                  a controller.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699601"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698947"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: 3D Reconstruction</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698948"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Technique for Mixed Reality Remote Collaboration using 360
                Panoramas in 3D Reconstructed Scenes
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Theophilus Teo</li>
              <li class="nameList">Ashkan F. Hayati</li>
              <li class="nameList">Gun A. Lee</li>
              <li class="nameList">Mark Billinghurst</li>
              <li class="nameList Last">Matt Adcock</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Mixed Reality (MR) remote collaboration provides an enhanced
                  immersive experience where a remote user can provide verbal
                  and nonverbal assistance to a local user to increase the
                  efficiency and performance of the collaboration. This is
                  usually achieved by sharing the local user&#39;s environment
                  through live 360 video or a 3D scene, and using visual cues to
                  gesture or point at real objects allowing for better
                  understanding and collaborative task performance. While most
                  of prior work used one of the methods to capture the
                  surrounding environment, there may be situations where users
                  have to choose between using 360 panoramas or 3D scene
                  reconstruction to collaborate, as each have unique benefits
                  and limitations. In this paper we designed a prototype system
                  that combines 360 panoramas into a 3D scene to introduce a
                  novel way for users to interact and collaborate with each
                  other. We evaluated the prototype through a user study which
                  compared the usability and performance of our proposed
                  approach to live 360 video collaborative system, and we found
                  that participants enjoyed using different ways to access the
                  local user&#39;s environment although it took them longer time
                  to learn to use our system. We also collected subjective
                  feedback for future improvements and provide directions for
                  future research.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698949"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698948"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698940"
                title="Get the Full Text from the ACM Digital Library"
              >
                Single RGB-D Fitting: Total Human Modeling with an RGB-D Shot
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Xianyong Fang</li>
              <li class="nameList">Jikui Yang</li>
              <li class="nameList">Jie Rao</li>
              <li class="nameList">Linbo Wang</li>
              <li class="nameList Last">Zhigang Deng</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Existing single shot based human modeling methods generally
                  cannot model the complete pose details (e.g., head and hand
                  positions) without non-trivial interactions. We explore the
                  merits of both RGB and depth images and propose a new method
                  called Single RGB-D Fitting (SRDF) to generate a realistic 3D
                  human model with a single RGB-D shot from a consumer-grade
                  depth camera. Specifically, the state-of-the-art deep learning
                  techniques for RGB images are incorporated into SRDF, so that:
                  1) A compound skeleton detection method is introduced to
                  obtain accurate 3D skeletons with refined hands based on the
                  combination of depth and RGB images; and 2) an RGB image
                  segmentation assisted point cloud pre-processing method is
                  presented to obtain smooth foreground point clouds. In
                  addition, several novel constraints are also introduced into
                  the energy minimization model, including the shape continuity
                  constraint, the keypoint-guided head pose prior constraint,
                  and the penalty-enforced point cloud prior constraint. The
                  energy model is optimized in a two-pass way so that a
                  realistic shape can be estimated from coarse to fine. Through
                  extensive experiments and comparisons with the state of the
                  art methods, we demonstrate the effectiveness and efficiency
                  of the proposed method.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698941"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698940"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698942"
                title="Get the Full Text from the ACM Digital Library"
              >
                Floating-point Precision and Deformation Awareness for Scalable
                and Robust 3D Face Alignment
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jacob Morton</li>
              <li class="nameList Last">Seungyong Lee</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper improves the accuracy of heatmap-based 3D face
                  alignment neural networks. Many current approaches in face
                  alignment are limited by two major problems, quantization and
                  the lack of regularization of heatmaps. The first limitation
                  is caused by the non-differentiable argmax function, which
                  extracts landmark coordinates from heatmaps as integer
                  indices. Heatmaps are generated at low-resolution to reduce
                  the memory and computational costs, which results in heatmaps
                  far lower than the input image&#8217;s resolution. We propose
                  a heatmap generator network producing floating-point precision
                  heatmaps that are scalable to higher-resolutions. To resolve
                  the second limitation, we propose a novel deformation
                  constraint on heatmaps. The constraint is based on
                  graph-Laplacian and enables a heatmap generator to regularize
                  overall shape of the output face landmarks using the global
                  face structure. By eliminating quantization and including
                  regularization, our method can vastly improve landmark
                  localization accuracy, and achieves the state-of-the-art
                  performance without adding complex network structures.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698943"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698942"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Mid-Air Techniques</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698944"
                title="Get the Full Text from the ACM Digital Library"
              >
                Depth Perception in Projective Augmented Reality: An Evaluation
                of Advanced Visualization Techniques
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Florian Heinrich</li>
              <li class="nameList">Kai Bornemann</li>
              <li class="nameList">Kai Lawonn</li>
              <li class="nameList Last">Christian Hansen</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Augmented reality (AR) is a promising tool to convey useful
                  information at the place where it is needed. However,
                  perceptual issues with augmented reality visualizations affect
                  the estimation of distances and depth and thus can lead to
                  critically wrong assumptions. These issues have been
                  successfully investigated for video see-through modalities.
                  Moreover, advanced visualization methods encoding depth
                  information by displaying additional depth cues were
                  developed. In this work, state-of-the-art visualization
                  concepts were adopted for a projective AR setup. We conducted
                  a user study to assess the concepts&#8217; suitability to
                  convey depth information. Participants were asked to sort
                  virtual cubes by using the provided depth cues. The
                  investigated visualization concepts consisted of conventional
                  Phong shading, a virtual mirror, depth-encoding silhouettes,
                  pseudo-chromadepth rendering and an illustrative visualization
                  using supporting line depth cues. Besides different concepts,
                  we altered between a monoscopic and a stereoscopic display
                  mode to examine the effects of stereopsis. Consistent results
                  across variables show a clear ranking of examined concepts.
                  The supporting lines approach and the pseudo-chromadepth
                  rendering performed best. Stereopsis was shown to provide
                  significant advantages for depth perception, while the current
                  visualization technique had only little effect on investigated
                  measures in this condition. However, similar results were
                  achieved using the supporting lines and the pseudo-chromadepth
                  concepts in a monoscopic setup. Our study showed the
                  suitability of advanced visualization concepts for the
                  rendering of virtual content in projective AR. Specific depth
                  estimation results contribute to the future design and
                  development of applications for these systems.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699602"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698944"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698055"
                title="Get the Full Text from the ACM Digital Library"
              >
                Portable Mid-air Imaging Optical System on Glossy Surface
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Ayaka Sano</li>
              <li class="nameList Last">Naoya Koizumi</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We propose a portable optical system, PortOn, that displays an
                  upright mid-air image when simply placed on a flat and glossy
                  surface such as a desk or floor. Mid-air imaging is promising
                  for glasses-free mixed reality because the user can see images
                  without wearing a special device. However, there is a
                  limitation in terms of where the conventional mid-air imaging
                  optical systems can be installed. Therefore, we propose a
                  mid-air optical system that solves this limitation. Our
                  contribution is a practical optical design that enables the
                  system to be easily installed. The advantage of our method is
                  that it erases unnecessary light that is produced when mid-air
                  images are displayed and shows beautiful mid-air images
                  clearly when view-angle control and polarization are added to
                  the system. We evaluate whether undesired light is erased by
                  measuring luminance. As a result, the luminance of the
                  undesired light is much lower than that of mid-air images.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699603"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698055"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Applications</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698056"
                title="Get the Full Text from the ACM Digital Library"
              >
                The Stroop Room: A Virtual Reality-Enhanced Stroop Test
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Stefan Gradl</li>
              <li class="nameList">Markus Wirth</li>
              <li class="nameList">Nico M?chtlinger</li>
              <li class="nameList">Romina Poguntke</li>
              <li class="nameList">Andrea Wonner</li>
              <li class="nameList">Nicolas Rohleder</li>
              <li class="nameList Last">Bjoern M. Eskofier</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The Stroop Test is a well known and regularly employed
                  stressor in laboratory research. In contrast to other methods,
                  it is not based on fear of physical harm or social shame.
                  Consequently, it is more likely accepted by a wide population.
                  In our always-on, technology-driven, social-media centered
                  world, large-scale in-field stress research will need adequate
                  experimental tools to explore the increasing prevalence of
                  stress-related diseases without bringing subjects into
                  laboratories. This is why we designed the Stroop Room: A
                  virtual reality-based adaptation of the Stroop Test using
                  elements of the virtual world to extend the demands of the
                  original test and at the same time make it easily accessible.
                  It is open source and can be used and improved by anyone as an
                  in-the-wild, repeatable, laboratory-quality stressor. In this
                  work, the method is presented and an evaluation study
                  described, to demonstrate its effectiveness in provoking
                  cognitive stress.{" "}
                </p>{" "}
                <p>
                  16 male and 16 female subjects were tested in the Stroop Room
                  while recording the electrocardiogram, electrodermal activity,
                  saliva based cortisol and alpha-amylase, performance metrics
                  and an array of questionnaire-based assessments regarding
                  psychological confounders, stress state and likability of the
                  simulation.{" "}
                </p>{" "}
                <p>
                  Our results show that the Stroop Room increases heart rate on
                  average by 19&#37;, other heart rate variability time-domain
                  parameters (RMSSD, pNN50) decrease by 24&#37;-47&#37;, and its
                  most stress-correlated frequency-parameter (LF/HF) increases
                  by 107&#37;. Skin conductance (SC) level increases by 63&#37;
                  and non-specific SC responses by 135&#37; on average. Salivary
                  cortisol and alpha-amylase concentrations increase
                  significantly in some specific conditions.{" "}
                </p>{" "}
                <p>
                  Compared to related work using the Stroop Test, this is an
                  improvement for some metrics by around 30&#37;-40&#37;.
                  Questionnaire evaluation show a strong engagement of users
                  with the simulation and some aspects of a flow-induction.{" "}
                </p>{" "}
                <p>
                  These findings support the effectiveness of a Stroop Test
                  involving 3-dimensional interactivity and thus the Stroop Room
                  demonstrates how this can be applied in a playful interaction
                  that could be used pervasively.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698057"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698056"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698058"
                title="Get the Full Text from the ACM Digital Library"
              >
                Underwater Virtual Reality System for Neutral Buoyancy Training:
                Development and Evaluation
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Christian Sinnott</li>
              <li class="nameList">James Liu</li>
              <li class="nameList">Courtney Matera</li>
              <li class="nameList">Savannah Halow</li>
              <li class="nameList">Ann Jones</li>
              <li class="nameList">Matthew Moroz</li>
              <li class="nameList">Jeffrey Mulligan</li>
              <li class="nameList">Michael Crognale</li>
              <li class="nameList">Eelke Folmer</li>
              <li class="nameList Last">Paul MacNeilage</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  During terrestrial activities, sensation of pressure on the
                  skin and tension in muscles and joints provides information
                  about how the body is oriented relative to gravity and how the
                  body is moving relative to the surrounding environment. In
                  contrast, in aquatic environments when suspended in a state of
                  neutral buoyancy, the weight of the body and limbs is
                  offloaded, rendering these cues uninformative. It is not yet
                  known how this altered sensory environment impacts virtual
                  reality experiences. To investigate this question, we
                  converted a full-face SCUBA mask into an underwater
                  head-mounted display and developed software to simulate
                  jetpack locomotion outside the International Space Station.
                  Our goal was to emulate conditions experienced by astronauts
                  during training at NASA's Neutral Buoyancy Lab. A user study
                  was conducted to evaluate both sickness and presence when
                  using virtual reality in this altered sensory environment. We
                  observed an increase in nausea related symptoms underwater,
                  but we cannot conclude that this is due to VR use. Other
                  measures of sickness and presence underwater were comparable
                  to measures taken above water. We conclude with suggestions
                  for improved underwater VR systems and improved methods for
                  evaluation of these systems based on our experience.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698059"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698058"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698050"
                title="Get the Full Text from the ACM Digital Library"
              >
                Hitting the Wall: Mid-Air Interaction for Eye-Hand Coordination
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Anil Ufuk Batmaz</li>
              <li class="nameList">Xintian Sun</li>
              <li class="nameList">Dogu Taskiran</li>
              <li class="nameList Last">Wolfgang Stuerzlinger</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Reaction time training systems are used to improve user
                  performance. Until now, such setups use physical 2D flat
                  surfaces, e.g., a 2D touch screen or buttons mounted on a
                  wall. We designed and investigated a mid-air reaction time
                  training system with an immersive virtual reality (VR)
                  headset. 12 participants performed an eye-hand coordination
                  reaction test in three conditions: both in mid-air with or
                  without VR controller as well as with passive haptic feedback
                  through hitting a soft-surface wall. We also altered target
                  and cursor sizes and used a Fitts&#8217; law task to analyze
                  user performance. According to the results, subjects were
                  slower and their throughput was lower when they hit a solid
                  surface to interact with virtual targets. Our results show
                  that Fitts&#8217;s model can be applied to these systems to
                  measure and assess participant training.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699604"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698050"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Monitoring</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698051"
                title="Get the Full Text from the ACM Digital Library"
              >
                Juggling in VR: Advantages of Immersive Virtual Reality in
                Juggling Learning
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jind&#x0159;ich Adolf</li>
              <li class="nameList">Peter K&#x00E1;n</li>
              <li class="nameList">Benjamin Outram</li>
              <li class="nameList">Hannes Kaufmann</li>
              <li class="nameList">Jarom&#x00ED;r Dole&#x017E;al</li>
              <li class="nameList Last">Lenka Lhotsk&#x00E1;</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we follow up on research dealing with motion
                  learning in Virtual Reality (VR). We investigate the impact of
                  VR motion learning on motion performance, motivation for
                  motion learning and willingness to continue with the motion
                  learning. In our research, we used three ball juggling as a
                  subject of learning. We performed a user study with 30
                  participants. A VR application was used in our study which
                  allows setting up lower gravity and thus slowing down the
                  motion for learning purposes. The results were statistically
                  evaluated and we comment on the positive influence of virtual
                  reality on motivation and possibilities of using VR in the
                  motion learning process.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699615"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698051"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698052"
                title="Get the Full Text from the ACM Digital Library"
              >
                Investigating a Physical Dial as a Measurement Tool for
                Cybersickness in Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Natalie McHugh</li>
              <li class="nameList">Sungchul Jung</li>
              <li class="nameList">Simon Hoermann</li>
              <li class="nameList Last">Robert W. Lindeman</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This study explores ways to increase comfort in Virtual
                  Reality by minimizing cybersickness. Cybersickness is related
                  to classical motion sickness and causes unwanted symptoms when
                  using immersive technologies. We developed a dial interface to
                  accurately capture momentary user cybersickness and feed this
                  information back to the user. Using a seated VR roller coaster
                  environment, we found that the dial is significantly
                  positively correlated with post-immersion questionnaires and
                  is a valid tool compared to verbal rating approaches.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699616"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698052"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698053"
                title="Get the Full Text from the ACM Digital Library"
              >
                In AI We Trust: Investigating the Relationship between
                Biosignals, Trust and Cognitive Load in VR
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kunal Gupta</li>
              <li class="nameList">Ryo Hajika</li>
              <li class="nameList">Yun Suen Pai</li>
              <li class="nameList">Andreas Duenser</li>
              <li class="nameList">Martin Lochner</li>
              <li class="nameList Last">Mark Billinghurst</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Human trust is a psycho-physiological state that is difficult
                  to measure, yet is becoming increasingly important for the
                  design of human-computer interactions. This paper explores if
                  human trust can be measured using physiological measures when
                  interacting with a computer interface, and how it correlates
                  with cognitive load. In this work, we present a pilot study in
                  Virtual Reality (VR) that uses a multi-sensory approach of
                  Electroencephalography (EEG), galvanic skin response (GSR),
                  and Heart Rate Variability (HRV) to measure trust with a
                  virtual agent and explore the correlation between trust and
                  cognitive load. The goal of this study is twofold; 1) to
                  determine the relationship between biosignals, or
                  physiological signals with trust and cognitive load, and 2) to
                  introduce a pilot study in VR based on cognitive load level to
                  evaluate trust. Even though we could not report any
                  significant main effect or interaction of cognitive load and
                  trust from the physiological signal, we found that in low
                  cognitive load tasks, EEG alpha band power reflects
                  trustworthiness on the agent. Moreover, cognitive load of the
                  user decreases when the agent is accurate regardless of
                  task&#8217;s cognitive load. This could be possible because of
                  small sample size, tasks not stressful enough to induce high
                  cognitive load due to lab study and comfortable environment or
                  timestamp synchronisation error due to fusing data from
                  various physiological sensors with different sample rate.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699617"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698053"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Selection</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N699618"
                title="Get the Full Text from the ACM Digital Library"
              >
                Comparing Convex Region-of-Interest Selection Techniques for
                Surface Geometry
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Bret Jackson</li>
              <li class="nameList">Kayla Beckham</li>
              <li class="nameList">Anael Kuperwajs Cohen</li>
              <li class="nameList Last">Brianna C. Heggeseth</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Selecting 3D regions-of-interest (ROI) in surface geometry is
                  essential for 3D modeling, but few 3D user interfaces using
                  fully manual input for ROI selection exist. Furthermore, their
                  relative performance is not well studied. We present an
                  evaluation comparing three ROI techniques: Volume Cube
                  [Ulinski et al. 2007], Slice-n- Swipe [Bacim et al. 2014], and
                  Yea Big Yea High Selection [Jackson et al. 2018]. Results show
                  that Yea Big Yea High is best for tasks requiring high
                  accuracy and speed, but modifications may be needed for use in
                  dense geometry or with non-convex ROI.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699619"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699618"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698065"
                title="Get the Full Text from the ACM Digital Library"
              >
                Is the Pen Mightier than the Controller? A Comparison of Input
                Devices for Selection in Virtual and Augmented Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Duc-Minh Pham</li>
              <li class="nameList Last">Wolfgang Stuerzlinger</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Controllers are currently the typical input device for
                  commercial Virtual Reality (VR) systems. Yet, such controllers
                  are not as efficient as other devices, including the mouse.
                  This motivates us to investigate devices that substantially
                  exceed the controller&#8217;s performance, for both VR and
                  Augmented Reality (AR) systems. We performed a user study to
                  compare several input devices, including a mouse, controller,
                  and a 3D pen-like device on a VR and AR pointing task. Our
                  results show that the 3D pen significantly outperforms modern
                  VR controllers in all evaluated measures and that it is
                  comparable to the mouse. Participants also liked the 3D pen
                  more than the controller. Finally, we show how 3D pen devices
                  could be integrated into today&#8217;s VR and AR systems.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699610"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698065"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698066"
                title="Get the Full Text from the ACM Digital Library"
              >
                Augmented Reality for Children in a Confirmation Task: Time,
                Fatigue, and Usability
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Brita Munsinger</li>
              <li class="nameList Last">John Quarles</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The objective of this paper is to explore three different
                  interaction methods in a confirmation task on a head-mounted
                  Augmented Reality (AR) device with a population of children
                  aged 9-11 years. The three interaction methods we look at are
                  voice recognition, gesture recognition, and controller. We
                  conducted a within-subjects study using a Fitts&#8217; Law
                  confirmation task performed by children with a Microsoft
                  HoloLens. We measured elapsed time during the completion of
                  the tasks. Also, we collected usability and fatigue measures
                  using the System Usability Scale and the OMNI RPE (Ratings of
                  Perceived Exertion) scale. We found significant differences
                  between voice and controller for time, fatigue and usability.
                  We also found significant differences between gesture and
                  controller for time, fatigue and usability. We hope to apply
                  the results of this study to improve augmented reality
                  educational tools for children in the future.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699611"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698066"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Manipulation</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698067"
                title="Get the Full Text from the ACM Digital Library"
              >
                Smart3DGuides: Making Unconstrained Immersive 3D Drawing More
                Accurate
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Mayra D. Barrera Machuca</li>
              <li class="nameList">Wolfgang Stuerzlinger</li>
              <li class="nameList Last">Paul Asente</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Most current commercial Virtual Reality (VR) drawing
                  applications for creativity rely on freehand 3D drawing as
                  their main interaction paradigm. However, the presence of the
                  additional third dimension makes accurate freehand drawing
                  challenging. Some systems address this problem by constraining
                  or beautifying user strokes, which can be intrusive and can
                  limit the expressivity of freehand drawing. In this paper, we
                  evaluate the effectiveness of relying solely on visual
                  guidance to increase overall drawing shape-likeness. We
                  identified a set of common mistakes that users make while
                  creating freehand strokes in VR and then designed a set of
                  visual guides, the Smart3DGuides, which help users avoid these
                  mistakes. We evaluated Smart3DGuides in two user studies, and
                  our results show that non-constraining visual guides help
                  users draw more accurately.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699612"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698067"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698068"
                title="Get the Full Text from the ACM Digital Library"
              >
                Extended Sliding in Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Junwei Sun</li>
              <li class="nameList Last">Wolfgang Stuerzlinger</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Although precise 3D positioning is not always necessary in
                  virtual environments, it is still an important task for
                  current and future applications of Virtual Reality (VR),
                  including 3D modelling, engineering, and scientific
                  applications. We focus on 3D positioning techniques in
                  immersive environments that use a 6DOF controller as input
                  device and present a new technique that improves 3D
                  positioning performance in VR, in both speed and accuracy.
                  Towards this goal, we adapted an extended sliding technique to
                  VR systems with a controller as input device and compared it
                  with previously presented 3DOF positioning techniques. The
                  results showed that our new Extended VR Sliding technique
                  significantly improved the accuracy for 3D positioning tasks,
                  especially for targets in contact with the scene.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699613"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698068"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698069"
                title="Get the Full Text from the ACM Digital Library"
              >
                SlingDrone: Mixed Reality System for Pointing and Interaction
                Using a Single Drone
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Evgeny Tsykunov</li>
              <li class="nameList">Roman Ibrahimov</li>
              <li class="nameList">Derek Vasquez</li>
              <li class="nameList Last">Dzmitry Tsetserukou</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We propose SlingDrone, a novel Mixed Reality interaction
                  paradigm that utilizes a micro-quadrotor as both pointing
                  controller and interactive robot with a slingshot motion type.
                  The drone attempts to hover at a given position while the
                  human pulls it in desired direction using a hand grip and a
                  leash. Based on the displacement, a virtual trajectory is
                  defined. To allow for intuitive and simple control, we use
                  virtual reality (VR) technology to trace the path of the drone
                  based on the displacement input. The user receives force
                  feedback propagated through the leash. Force feedback from
                  SlingDrone coupled with visualized trajectory in VR creates an
                  intuitive and user friendly pointing device. When the drone is
                  released, it follows the trajectory that was shown in VR.
                  Onboard payload (e.g. magnetic gripper) can perform various
                  scenarios for real interaction with the surroundings, e.g.
                  manipulation or sensing. Unlike HTC Vive controller,
                  SlingDrone does not require handheld devices, thus it can be
                  used as a standalone pointing technology in VR.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699614"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698069"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Poster Abstracts</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698060"
                title="Get the Full Text from the ACM Digital Library"
              >
                2D/3D Mixed Interface for Furniture Placement in
                Smartphone-based Mobile Augmented Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Bin Han</li>
              <li class="nameList Last">Gerard J. Kim</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this work, we propose to use an approximate 2D map of the
                  environment generated from the latest environment modeling
                  technology and enhance the object manipulation performance for
                  the touch based mobile augmented reality. We validated the
                  advantage of the proposed interface through a pilot experiment
                  and confirmed that the use of the 2D map helps reduce the task
                  completion time almost 2 times and improve the usability as
                  well.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699625"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698060"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698061"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Comparison of Human and Machine-Generated Voice
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Amal Abdulrahman</li>
              <li class="nameList">Deborah Richards</li>
              <li class="nameList Last">Ayse Aysin Bilgin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This study investigates the influence of a virtual human (VH)
                  with recorded human voice vs VH with a machine-generated voice
                  (text-to-speech) on building trust and working alliance. We
                  measured the co-presence perception to understand the impact
                  of VH&#39;s perception on building the human-VH relationship.
                  The results revealed no differences between the two types of
                  voices on co-presence perception, trust or working alliance.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699626"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698061"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698062"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Comparative Study of Planar Surface and Spherical Surface for
                3D Pointing Using Direct Touch
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Naoki Yanagihara</li>
              <li class="nameList">Buntarou Shizuki</li>
              <li class="nameList Last">Shin Takahashi</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We investigated the performance of 3D pointing using direct
                  touch in a planar surface condition (PC) and a spherical
                  surface condition (SC). In addition, we examined the
                  performance in terms of Fitts&#8217; law. Although the results
                  showed that the performance in SC was slightly worse than PC,
                  SC was higher conformed to Fitts&#8217; law than PC without
                  the conditions involving head rotation (PC&#8217;s and
                  SC&#8217;s R2 is 0.945 and 0.971, respectively).{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699627"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698062"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698063"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Content-Aware Approach for Analysing Eye Movement Patterns in
                Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Xi Cao</li>
              <li class="nameList">Richard Skarbez</li>
              <li class="nameList">Zhen He</li>
              <li class="nameList Last">Henry Been-Lirn Duh</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Observing eye movement is a direct way to analyse
                  human&#8217;s attention. Eye movement patterns in normal
                  environment have been widely investigated. In virtual reality
                  (VR) environment, previous studies of eye movement patterns
                  are mainly based on content-unrelated influential factors.
                  Considering this issue, in this paper, a novel content-related
                  factor is studied. One crucial kind of region of interest
                  (ROI), namely vision-penetrable entrance, is chosen to analyse
                  eye movement pattern differences. The results suggest that
                  users show more interest in vision-penetrable entrances than
                  in other regions. Furthermore, this kind of difference is
                  identified as higher average density of fixation. As far as we
                  know, this paper is the first attempt to study specific types
                  of ROI in virtual reality environments. The method utilised in
                  this paper can be applied in other ROI analysis.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699628"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698063"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698064"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Framework for Virtual Reality Training to Improve Public
                Speaking
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kerry Pellet</li>
              <li class="nameList Last">Syed Fawad Mustafa Zaidi</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper presents the logic and construction of a prototype
                  virtual reality (VR) tool for public speech training. It
                  reflects upon previous endeavours in this area, using them to
                  make informed design decisions. A dictation recognizer is
                  implemented to perform speech to text conversions. With this
                  training simulator, users are be able to step into a virtual
                  environment resembling a podium in an auditorium, with their
                  speech appearing on a virtual cue card. Also, users are
                  presented with a performance metric at the end of their speech
                  to grade their overall performance. We suggest that the VR
                  immersive prototype using speech-to-text recognition has a
                  potential to be engaging and to serve as a tool for public
                  speaking training.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699629"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698064"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698075"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Glyph-based Multimodal Presentation of Multivariate Data
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList Last">Shamima Yasmin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper describes the feasibility of glyph-based
                  presentations of multivariate data in a multimodal virtual
                  environment (VE). In a multimodal VE, variables are
                  represented as haptic glyphs of different shapes and sizes;
                  data becomes tangible along with its visual representation.
                  Audio feedback helps further exploration of the data. This
                  glyph-based multimodal presentation makes information
                  available to the blind and visually impaired (VI) in a
                  semantic-aware environment. A multimodal VE also enriches the
                  experience of the sighted users.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699620"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698075"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698076"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Haptic-enhanced New Approach to Laryngoscopy
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList Last">Shamima Yasmin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Laryngoscopy or endotracheal intubation is a common medical
                  procedure where a tube is passed into the lungs of patients
                  for providing oxygen or other anesthetic gas. Improper
                  intubation can be life threatening; hence, emphasis is laid on
                  proper hand-eye coordination and an understanding of proper
                  exertion of pressure on the patient&#8217;s body. This paper
                  proposes a haptic-based implementation of endotracheal
                  intubation to address shortcomings in existing approaches.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699621"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698076"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698077"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Mobile Augmented Reality Interface for Teaching Folk Dances
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Iris Kico</li>
              <li class="nameList Last">Fotis Liarokapis</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper presents a prototype mobile augmented reality
                  interface for assisting the process of learning folk dances.
                  As a case study, a folk dance was digitized based on
                  recordings from professional dancers. To assess the
                  effectiveness of the technology, it was comparatively
                  evaluated with a large back-projection system in laboratory
                  conditions. Sixteen participants took part in the study, and
                  their movements were captured using motion capture system and
                  then compared with the recordings from the professional
                  dancers. Experimental results indicate that augmented reality
                  has the potential to be used for learning folk dances.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699622"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698077"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698078"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Scalability Benchmark for a Virtual Audience Perception Model
                in Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Yann Glemarec</li>
              <li class="nameList">Anne-Gwenn Bosser</li>
              <li class="nameList">Cedric Buche</li>
              <li class="nameList">Jean-Luc Lugrin</li>
              <li class="nameList">Maximilian Landeck</li>
              <li class="nameList">Marc Erich Latoschik</li>
              <li class="nameList Last">Mathieu Chollet</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we describe the implementation and performance
                  of a Virtual Audience perception model for Virtual Reality
                  (VR). The model is a VR adaptation of an existing desktop
                  model. The system allows a user in VR to easily build and
                  experience a wide variety of atmospheres with small or large
                  groups of virtual agents.The paper describes results of early
                  evaluations for this model in VR. Our first scalability
                  benchmark results demonstrated the ability to simultaneously
                  handle one hundred virtual agents without significantly
                  affecting there commended frame rate for VR applications.This
                  research is conducted in the context of a classroom simulation
                  software for teachers&#8217; training.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699623"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698078"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698079"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Virtual Reality Simulator for Training Gaze Control of Wheeled
                Tele-Robots
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Guangtao Zhang</li>
              <li class="nameList Last">John Paulin Hansen</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  People who cannot use their hands may use eye-gaze to interact
                  with robots. Emerging virtual reality head-mounted displays
                  (HMD) have built-in eye-tracking sensors. Previous studies
                  suggest that users need substantial practice for gaze steering
                  of wheeled robots with an HMD. In this paper, we propose to
                  apply a VR-based simulator for training of gaze-controlled
                  robot steering. The simulator and preliminary test results are
                  presented.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699624"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698079"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698070"
                title="Get the Full Text from the ACM Digital Library"
              >
                A Web-based Augmented Reality Plat-form using Pictorial QR Code
                for Educational Purposes and Beyond
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Minh Nguyen</li>
              <li class="nameList">Minh Phu Lai</li>
              <li class="nameList">Huy Le</li>
              <li class="nameList Last">Wei Qi Yan</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Augmented Reality (AR) provides the capability to overlay
                  virtual 3D information onto a 2D printed flat surface; for
                  example, displaying a 3D model on a single flat card that
                  accompanies with the diagram shown in a learning text-book.
                  The student can zoom in and out, rotate, and perceive the
                  animation of the figure in real-time. This will make the
                  educational theory more attractive; hence, motivates students
                  to learn. AR is a great tool; however, the setup and display
                  are not straight-forward (there are many different AR markers
                  with different encryption, decryption methods, and displaying
                  flat-forms). In this paper, we proposed a portable
                  browser-based platform which uses the advantages of AR along
                  with scan-able QR Code on mobile phones to enhance instant 3D
                  visualisation. The user only needs a smart-phone (Apple iPhone
                  or Android) with Internet-enabled; no specific Apps are needed
                  to install. The user scans the QR Code embedded in a colour
                  image, the code will link to a public website, and the website
                  will produce AR Experience right on top of the browser. As a
                  result, it provides a stress-free, low-cost, portable, and
                  promising solution for not only educational purposes but also
                  many other fields such as gaming, property selling,
                  e-commerce, reporting. The set up is convenient: the user
                  uploads a picture (e.g. a racing car), and what actions to be
                  related to it (a 3D model to display, or a movie to play). The
                  system will add on the picture one small colour QR code (to
                  redirect to an online URL) and a thin black border. The user
                  also uploads the 3D model (GLTF files) that he wants to
                  display on top of the card to finish the set-up. At the
                  display, the user can print the AR card, point their
                  smart-phone towards the card, and pre-setup AR models or
                  actions will appear on it. To students, these 3D graphics or
                  animations will allow them to learn and understand the lessons
                  in a much more intuitive way.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699635"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698070"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698071"
                title="Get the Full Text from the ACM Digital Library"
              >
                An Evaluation of Head-Mounted Virtual Reality for Special
                Education from the Teachers&#8217; Perspective
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Sirisilp Kongsilp</li>
              <li class="nameList Last">Takashi Komuro</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this research, we explore the use of head-mounted virtual
                  reality for special education from the teachers&#8217;
                  perspective. We asked a group of special educators to assess
                  the use of VR headset while students with mental disabilities
                  played a VR game. The teachers concluded that head-mounted VR
                  can be used for teaching students to follow instruction and
                  training for work.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699636"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698071"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698072"
                title="Get the Full Text from the ACM Digital Library"
              >
                Action Units: Directing User Attention in 360-degree Video based
                VR
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Lingwei Tong</li>
              <li class="nameList">Sungchul Jung</li>
              <li class="nameList Last">Robert W. Lindeman</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  A key challenge to effective storytelling using Virtual
                  Reality (VR), such as with 360-degree videos, is how to direct
                  user attention to important content without taking away user
                  agency for free exploration. In this paper, we introduce the
                  notion of an Action Unit system, composed of social cues such
                  as head and arm movements, as a way of directing users to
                  focus on content important for the given narrative. We applied
                  this idea to a 360-degree VR tour, and evaluated its effects
                  on memory, engagement, enjoyment, and cyber-sickness. The
                  results indicate that the levels of engagement and enjoyment
                  increased when these Action Units were applied. Users also
                  preferred the Action Units for their diegetic aspects.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699637"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698072"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698073"
                title="Get the Full Text from the ACM Digital Library"
              >
                AHMED: Toolset for Ad-Hoc Mixed-reality Exhibition Design
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Krzysztof Pietroszek</li>
              <li class="nameList Last">Carl Moore</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We present &#8220;AHMED&#8221;, a mixed-reality toolset that
                  allows visitors to experience mixed-reality museum or art
                  exhibitions created ad-hoc at locations such as event venues,
                  private parties,or a living room. The system democratizes
                  access to exhibitions for populations that cannot visit these
                  exhibitions in person for reasons of disability,
                  time-constraints, travel restrictions, or socio-economic
                  status.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699638"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698073"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698074"
                title="Get the Full Text from the ACM Digital Library"
              >
                Analysis of VR Sickness and Gait Parameters During Non-Isometric
                Virtual Walking with Large Translational Gain
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Carlos Alfredo Tirado Cortes</li>
              <li class="nameList">Hsiang-Ting Chen</li>
              <li class="nameList Last">Chin-Teng Lin</li>
            </ul>
            <div class="DLabstract"> </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699639"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698074"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698085"
                title="Get the Full Text from the ACM Digital Library"
              >
                Augmented Reality Approach For Position-based Service using
                Handheld Smartphone
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jihoon Park</li>
              <li class="nameList">Sangmin Park</li>
              <li class="nameList Last">Kwanghee Ko</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this work, we present an augmented reality (AR) approach
                  for position based service using a smartphone in an indoor
                  environment. The AR method, combined with position estimation,
                  provides a user with a smartphone with a service that is
                  specific to a particular position without using a marker or
                  any other hardware device. The position in an indoor
                  environment is estimated using an IMU sensor only in the
                  smartphone. The accuracy of the position and heading direction
                  of the user is improved by integrating the values from the
                  accelerometer and the gyro using Principal Component
                  Analysis(PCA) and Extended Kalman Filter(EKF). Then, a drift
                  noise of the estimated position is reduced by a registration
                  step performed at a specific position. The estimated position
                  is given to the position based service, which is provided to
                  the user on the smartphone screen through AR. The concept of
                  the proposed method is demonstrated with some examples.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699630"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698085"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698086"
                title="Get the Full Text from the ACM Digital Library"
              >
                Augmented Reality Visualisation Concepts to Support
                Intraoperative Distance Estimation
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Florian Heinrich</li>
              <li class="nameList">Gerd Schmidt</li>
              <li class="nameList">Florian Jungmann</li>
              <li class="nameList Last">Christian Hansen</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The estimation of distances and spatial relations between
                  surgical instruments and surrounding anatomical structures is
                  a challenging task for clinicians in image-guided surgery.
                  Using augmented reality (AR), navigation aids can be displayed
                  directly at the intervention site to support the assessment of
                  distances and reduce the risk of damage to healthy tissue. To
                  this end, four distance-encoding visualisation concepts were
                  developed using a head-mounted optical see-through AR setup
                  and evaluated by conducting a comparison study. Results
                  suggest the general advantage of the proposed methods compared
                  to a blank visualisation providing no additional information.
                  Using a Distance Sensor concept signalising the proximity of
                  nearby structures resulted in the least time the instrument
                  was located below 5mm to surrounding risk structures and
                  yielded the least amount of collisions with them.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699631"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698086"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698087"
                title="Get the Full Text from the ACM Digital Library"
              >
                Blind Navigation of Web Pages through Vibro-tactile Feedbacks
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Waseem Safi</li>
              <li class="nameList">Fabrice Maurel</li>
              <li class="nameList">Jean-Marc Routoure</li>
              <li class="nameList">Pierre Beust</li>
              <li class="nameList">Mich&#x000E8;le Molina</li>
              <li class="nameList">Coralie Sann</li>
              <li class="nameList Last">Jessica Guilbert</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We present results of an empirical study for examining the
                  performance of sighted and blind individuals in discriminating
                  structures of web pages through vibro-tactile feedbacks.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699632"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698087"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698088"
                title="Get the Full Text from the ACM Digital Library"
              >
                Can We Predict Susceptibility to Cybersickness&#63;
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Dante Risi</li>
              <li class="nameList Last">Stephen Palmisano</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This study investigated whether individual differences in
                  postural stability/activity can be used to predict who will
                  become sick when exposed to head-mounted display (HMD) based
                  virtual reality (VR). We found that participants who reported
                  feeling sick after at least one exposure to VR displayed
                  different postural activity than those who remained well.
                  Importantly these differences were present in their sway data
                  before they even donned the HMD. These results are inline with
                  the postural instability theory of motion sickness and suggest
                  that we can identify individuals who are more susceptible
                  HMD-based cybersickness based on their spontaneous postural
                  sway.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699633"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698088"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698089"
                title="Get the Full Text from the ACM Digital Library"
              >
                Cin&#233;voqu&#233;: Development of a Passively Responsive
                Framework for Seamless Evolution of Experiences in Immersive
                Live-Action Movies
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Amarnath Murugan</li>
              <li class="nameList">Jayesh S. Pillai</li>
              <li class="nameList Last">Amal Dev</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Cinematic Virtual Reality&#8217;s (CVR) inherent feature of
                  allowing the user to choose their Point of View (POV) within a
                  360&#176; space brings forth new challenges to storytelling.
                  The approaches used in traditional films do not translate
                  directly to this medium, as it is uncertain if the user would
                  follow all the Points of Interest (POIs) consistently. Our
                  framework, Cin&#233;voqu&#233;, aims to address this issue by
                  using the real-time data generated during a VR film to
                  passively alter the narrative and parts of the experience to
                  suit the user&#8217;s viewing behavior. In this poster, we
                  discuss the technical approaches used to implement this
                  framework and create responsive live-action CVR.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699634"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698089"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698080"
                title="Get the Full Text from the ACM Digital Library"
              >
                Comfortable Locomotion in VR: Teleportation is Not a Complete
                Solution
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jeremy Clifton</li>
              <li class="nameList Last">Stephen Palmisano</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We compared two common techniques of controller-based
                  locomotion (teleportation and steering locomotion) in virtual
                  reality (VR) in terms of the cybersickness they produce.
                  Participants had to continuously navigate a commercial VR
                  application for 16 minutes using each technique, while
                  standing and seated. While teleportation produced less
                  cybersickness than steering locomotion on average, a number of
                  participants reported teleportation to be more sickening.
                  These &#8216;telesick&#8217; participants were found to have
                  greater medio/lateral positional variability in their
                  spontaneous postural sway than &#8216;steersick&#8217;
                  participants prior to VR exposure. We conclude that different
                  individuals may require unique techniques to comfortably
                  locomote in VR.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699645"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698080"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698081"
                title="Get the Full Text from the ACM Digital Library"
              >
                Design and Realization of Sustainable Rural Housing Using
                Immersive Virtual Reality Platform
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Vishwas G. Kini</li>
              <li class="nameList Last">Shilpa Sunil</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Rapid urbanization in developing countries has paved way to
                  spontaneous settlements, which are overcrowded. The aim of
                  this work is to assess the impact of Virtual Reality (VR) on
                  different types of sustainable construction techniques that
                  are proposed for rural slum communities. The work mainly
                  focuses on a walkthrough and interactions on a prototype of a
                  sustainable housing unit in a rural slum community built with
                  eco-friendly building materials, natural light source and
                  ventilation.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699646"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698081"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698082"
                title="Get the Full Text from the ACM Digital Library"
              >
                Design of Portable Thermal Sensor Device for VR
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Dongmin Moon</li>
              <li class="nameList Last">Seongah Chin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This study proposes a thermal sensibility haptic system that
                  can be used in the VR environment to stimulate multiple
                  sensory receptors. In addition, the object can be
                  distinguished through the touch if it is reproduced by
                  adjusting the intensity of the stimulus based on the intrinsic
                  thermal energy and surface curvature of the object.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699647"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698082"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698083"
                title="Get the Full Text from the ACM Digital Library"
              >
                Drone-Steering: A Novel VR Traveling Technique
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jean-Luc Lugrin</li>
              <li class="nameList">Andreas Juchno</li>
              <li class="nameList">Philipp Schaper</li>
              <li class="nameList">Maximilian Landeck</li>
              <li class="nameList Last">Marc Erich Latoschik</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper presents a novel technique of navigation in Virtual
                  Reality (VR) called Drone-Steering. This technique has been
                  designed to facilitate path learning and traveling in VR by
                  reducing both cybersickness and disorientation. We compared
                  this technique to traditional Hand-Steering in a landmark-free
                  environment. Our first experiment confirmed a significantly
                  lower level of cybersickness during traveling and
                  significantly better path learning. We believe that our
                  technique constitutes a promising alternative to current VR
                  navigation techniques, and will especially interest
                  researchers and developers targeting large VR environments.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699648"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698083"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698084"
                title="Get the Full Text from the ACM Digital Library"
              >
                Effects of Age and Motivation for Visiting on AR Museum
                Experiences
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Narae Park</li>
              <li class="nameList">Yohan HONG</li>
              <li class="nameList">Hyunjeong Pak</li>
              <li class="nameList">Jung Who Nam</li>
              <li class="nameList">Kyoungsu Kim</li>
              <li class="nameList">Junbom Pyo</li>
              <li class="nameList">Kyungwon Gil</li>
              <li class="nameList Last">Kyoobin Lee</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Augmented reality(AR) provides a unique viewing experience at
                  museums where people understand abstract history through
                  physical artifacts. Although AR usage in museum settings has
                  been increasing, it is not well understood how AR viewing
                  experience differs in different groups of visitors, which can
                  be problematic considering that museums are places visited by
                  diverse groups of people. In this study, we evaluate the
                  differences in AR experiences according to the characteristics
                  of the visitors. The results show the effect of AR usage in
                  museum settings with visitors&#8217; different age groups and
                  motivations for visiting.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699649"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698084"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698095"
                title="Get the Full Text from the ACM Digital Library"
              >
                Effects of Latency in Visual Feedback on Human Performance of
                Path-Steering Tasks
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Himari Tochioka</li>
              <li class="nameList">Haruka Ikeda</li>
              <li class="nameList">Tomohiko Hayakawa</li>

              <li class="nameList Last">Masatoshi Ishikawa</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Effects of latency in a visual feedback system during
                  path-steering tasks were examined. Input movements were
                  recorded in high speed and projected with controlled latency,
                  while a user was required to drag an object through a tunnel
                  path. We tested the system with 10 people and analyzed the
                  duration based on the steering law and revealed that the
                  latency of visual feedback beyond 64.3 ms was associated with
                  reductions in user performance, which provides suggestions in
                  developing user-oriented interface designs.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699640"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698095"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698096"
                title="Get the Full Text from the ACM Digital Library"
              >
                Effects of Tactile Perception on Emotion and Immersion to Film
                Viewing in a Virtual Environment
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Aelee Kim</li>
              <li class="nameList">Hayoung Bae</li>
              <li class="nameList Last">Kyoungmin Lee</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this research, we compared three tactile conditions (No vs.
                  Soft vs. Spiky) in both positive and negative scenes to
                  explore whether tactile perception could influence emotional
                  responses and immersive experience in a virtual environment
                  (VE). The results showed that, when viewing positive scenes
                  with soft stimuli, participants experienced an increase in
                  both positive emotions and their level of immersion compared
                  to those in the No and Spiky tactile conditions. We also found
                  that participants in the No and Spiky tactile conditions
                  reported no significant differences in either emotion or
                  immersion when viewing positive scenes. During the viewing of
                  negative scenes, spiky stimuli did not intensify negative
                  feelings, while soft stimuli decreased negative emotions. In
                  terms of immersion, there was no meaningful difference between
                  the three tactile conditions for negative scenes. Overall,
                  this study has demonstrated the important association between
                  tactile perception, emotion, and immersion in a VE.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699641"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698096"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698097"
                title="Get the Full Text from the ACM Digital Library"
              >
                Enhancement of Pointing Towards Non-Haptic Augmented Reality
                Interfaces by Increasing the Arm Position Sense
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Daniela Markov-Vetter</li>
              <li class="nameList Last">Oliver Staadt</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Interactive user interfaces in head-mounted Augmented Reality
                  environments are not always projected onto a physical surface.
                  However, operating such free-floating interfaces by touch
                  gestures is challenging because they do not provide haptic
                  feedback. Considering a pointing gesture, in this work we
                  present a user study evaluating the benefits of increasing the
                  arm position sense for operating non-haptic interface. Our
                  findings confirm that haptic feedback is required and show
                  that an increased arm sense compensates for the lack of haptic
                  feedback. The results suggest that applying 0.3 times of the
                  pointing arm&#8217;s weight significantly speeds up direct
                  object selection for free-floating interfaces. We also show
                  that the correction phase of the underlying pointing movement
                  is affected by boosting the arm sense.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699642"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698097"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698098"
                title="Get the Full Text from the ACM Digital Library"
              >
                Evaluation of Navigation Operations in Immersive Microscopic
                Visualization
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Tomomi Takashina</li>
              <li class="nameList">Mitsuru Ito</li>
              <li class="nameList Last">Yuji Kokumai</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this study, we evaluated the quantitative effectiveness of
                  navigation operation in a virtual reality (VR) volumetric
                  viewer, in order to confirm the effectiveness of VR in life
                  sciences. The analytical work for biological data is a
                  promising application of VR because users can manipulate 3D
                  data intuitively in VR. However, few studies have focused on
                  the quantitative evaluations of such applications. Therefore,
                  we conducted an experiment to evaluate the speedup of
                  navigation operation (sequences of translation, rotation, and
                  scaling) in VR applications for 3D microscopy. We compared the
                  task completion time between a non-VR visualization tool and a
                  VR visualization tool. The speedup by the VR immersive
                  visualizer was found to be 203&#37; in the most effective
                  case. The result showed that the VR immersive visualizer
                  enables more efficient navigation than the conventional
                  volumetric viewer.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699643"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698098"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698099"
                title="Get the Full Text from the ACM Digital Library"
              >
                Experiencing Waiting Time in Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jean-Luc Lugrin</li>
              <li class="nameList">Fabian Unruh</li>
              <li class="nameList">Maximilian Landeck</li>
              <li class="nameList">yoan Lamour</li>
              <li class="nameList">Marc Erich Latoschik</li>
              <li class="nameList">Kai Vogeley</li>
              <li class="nameList Last">Marc Wittmann</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This article investigates the impact of waiting in Virtual
                  Reality (VR) on the perception of time. We manipulated the
                  visual quality of a virtual room replicating a real one
                  (360-picture vs. 3D-model) with and without avatar embodiment
                  (no-avatar vs. avatar). We only observed a significant
                  difference in the estimated time duration between the real and
                  the virtual worlds when using no avatar within a 3D model of
                  the room. Our early results suggest that a VR environment with
                  an avatar and a simple 3D model or 360 picture room is not
                  significantly perturbing time perception and thus could be
                  used for diagnosis and therapy of psychiatric conditions
                  related to altered time perception.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699644"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698099"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698090"
                title="Get the Full Text from the ACM Digital Library"
              >
                Exploring Experiences of Virtual Reality among Young and Older
                Adults in a Subway Fire Scenario: a Pilot Study
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Minyeong Seo</li>
              <li class="nameList">Hansu Lee</li>
              <li class="nameList">Seungmi Choi</li>
              <li class="nameList">Suhyun Jo</li>
              <li class="nameList">Heejae Jung</li>
              <li class="nameList">Subin Park</li>
              <li class="nameList Last">Hyunggu Jung</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We report a pilot study investigating experiences of virtual
                  reality (VR) among young and older adults in a subway fire
                  scenario. We created VR environments in subway fire scenarios
                  and ran an experiment by asking 5 young and 5 older adults to
                  explore VR environments. After the experiment, participants
                  were asked to fill out a survey questionnaire to report their
                  feelings. Additionally, we conducted semi-structured
                  interviews with participants to understand challenges they
                  faced while exploring VR environments. We found that compared
                  with young adults, older adults tended to be different during
                  the process of evacuating a subway station in virtual reality.
                  We suggest design opportunities for creating VR environments
                  for more effective training of older adults.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699755"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>

              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698090"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698091"
                title="Get the Full Text from the ACM Digital Library"
              >
                Exploring Immersive Technologies to Simulate Fear of Crime
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Francisco J. Castro-Toledo</li>
              <li class="nameList">Konstantinos Koumaditis</li>
              <li class="nameList">Panagiotis Mitkidis</li>
              <li class="nameList Last">Juan O. Perea-Garcia</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The implementation of Virtual Reality (VR) tools in
                  criminological research is very scarce, and almost
                  non-existent in the fear of crime (FoC) field. Our objective
                  is to assess the feasibility of Immersive Technologies for
                  research on FoC. To do so, a simulation (360&#176; video)
                  grounded on the manipulation of environmental variables
                  (street lighting) was conducted. Our preliminary results
                  suggest that: (a) virtual simulation of absence of urban
                  lighting elicits experiences of FoC, and (b) that simulation
                  of experiences of FoC in virtual reality is an adequate
                  strategy for analysis of this phenomenon.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699756"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698091"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698092"
                title="Get the Full Text from the ACM Digital Library"
              >
                Impact of Gamified Interaction with Virtual Nature on Sustained
                Attention and Self-Reported Restoration &#160;&#8212;&#160; A
                Pilot Study
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Oankar Patil</li>
              <li class="nameList">Heng Yao</li>
              <li class="nameList Last">Benjamin Lok</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Interaction with nature in virtual reality has been shown to
                  induce similar restorative benefits as interaction with
                  real-life nature. Drawing from Attention restoration theory,
                  restorative benefits from being in virtual nature are likely
                  to be improved through greater active engagement techniques
                  with specific virtual natural features. Gamification is the
                  process of adding game design elements in non-game scenarios
                  in order to improve engagement and motivation. In the present
                  pilot study, six participants completed either a gamified
                  interaction with virtual nature, one where game design
                  elements had been added in order to improve engagement with
                  specific virtual nature features and thus possibly further
                  facilitating sustained attention and self-reported
                  restoration, having them pick plants and gain rewards such as
                  a higher level in return, or a non-gamified task, one where
                  they explored the virtual nature environment and looked at
                  plants at their own pace without any game design elements.
                  Gamified interaction improved sustained attention restoration
                  more than non-gamified interaction. Additionally, gamified
                  interaction was also shown to have reduced negative effect in
                  self-reported restoration more than non-gamified interaction.
                  While there are still several limitations, gamified
                  interaction with virtual nature seems to offer vast potential
                  as an engagement technique in improving sustained attention
                  and self-reported restoration.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699757"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698092"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698093"
                title="Get the Full Text from the ACM Digital Library"
              >
                Indian Virtual reality affective database with self-report
                measures and EDA
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Surya Soujanya Kodavalla</li>
              <li class="nameList">Minaxi Jai Bhagwan Goel</li>
              <li class="nameList Last">Priyanka Srivastava</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The current work assesses the physiological and psychological
                  responses to the 360&#176; emotional videos selected from
                  Stanford virtual reality (VR) affective database [Li et al.,
                  2017], presented using VR head-mounted display (HMD).
                  Participants were asked to report valence and arousal level
                  after watching each video. The electro-dermal activity (EDA)
                  was recorded while watching the videos. The current pilot
                  study shows no significant difference in skin-conductance
                  response (SCR) between the high and low arousal experience.
                  Similar trends were observed during high and low valence. The
                  self-report pilot data on valence and arousal shows no
                  statistically significant difference between Stanford VR
                  affective responses and the corresponding Indian population
                  psychological responses. Despite positive result of
                  no-significant difference in self-report across cultures, we
                  are limited to generalize the result because of small sample
                  size.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699758"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698093"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698094"
                title="Get the Full Text from the ACM Digital Library"
              >
                Interactive Indirect Illumination Using Mipmap-based Ray
                Marching and Local Means Replaced Denoising
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Bo Zhang</li>
              <li class="nameList Last">Kyoungsu Oh</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  An interactive, one-bounce, and indirect illumination
                  algorithm, which considers indirect visibility, is introduced.
                  First, a ray marching algorithm (MRM), which is based on a 3D
                  mipmap hierarchy structure generated by voxelizing the scene
                  to accelerate the ray-voxel intersection, is used. Second, the
                  indirect images are denoised by iterating an improved,
                  edge-avoiding filtering with a local means replacement (LMR)
                  method. The implementation demonstrates that our solutions can
                  efficiently generate high-quality global illumination images
                  even in a fully dynamic scene.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699759"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698094"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698005"
                title="Get the Full Text from the ACM Digital Library"
              >
                Interactive Virtual-Reality Fire Extinguisher with Haptic
                Feedback
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Sang-Woo Seo</li>
              <li class="nameList">SeungJoon Kwon</li>
              <li class="nameList">Waseem Hassan</li>

              <li class="nameList">Aishwari Talhan</li>
              <li class="nameList Last">Seokhee Jeon</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We present an interactive virtual-reality (VR) fire
                  extinguisher that provides both realistic viewing using a
                  head-mounted display (HMD) and kinesthetic experiences using a
                  pneumatic muscle and vibrotactile transducer. The VR fire
                  extinguisher is designed to train people to use a fire
                  extinguisher skillfully in real fire situations. We seamlessly
                  integrate three technologies: VR, object motion tracking, and
                  haptic feedback. A fire scene is immersed in the HMD, and a
                  motion tracker is used to replicate a real designed object
                  into the virtual environment to realize augmented reality. In
                  addition, when the handle of the fire extinguisher is squeezed
                  to release the extinguishing agent, the haptic device
                  generates both vibrotactile and air flow tactile feedback
                  signals, providing the same experience as that obtained while
                  using a real fire extinguisher.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699750"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698005"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698006"
                title="Get the Full Text from the ACM Digital Library"
              >
                Interactive Visualization of Painting Data with Augmented
                Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kyungjin Yoo</li>
              <li class="nameList Last">Dean Foster</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Exploration of Augmented Reality technologies has increased
                  substantially and the increase in both popularity and
                  technological maturity has also led to several applications
                  being developed for educational and museum environments.
                  Specifically, a greater focus has been placed upon creating
                  memorable experiences that both attract and educate museum
                  patrons. Attempts to do this involve creating both Virtual
                  Reality and Augmented Reality experiences, such as having
                  users enter into immersive worlds that demonstrate the history
                  of a certain time period, or applications that overlay
                  life-like models of those animals in the very room the user is
                  standing in. Many of these experiences are quite exceptional
                  but begin to lack in variety when moving towards the art
                  gallery, and mainly focus on making painting information more
                  accessible. In an attempt to address this, this project
                  outlines the design and evaluation of a proof-of-concept meant
                  to study if adding interaction through Augmented Reality to
                  paintings themselves would be both technologically feasible
                  and desirable.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699751"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698006"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698007"
                title="Get the Full Text from the ACM Digital Library"
              >
                IRIS: Inter-Reality Interactive Surface
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList Last">Krzysztof Pietroszek</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  While many metaphors were developed for interactions from a
                  specific point at the reality-virtuality continuum, much less
                  attention has been paid to designing metaphors that allow the
                  users to cross the boundaries between the virtual, the
                  augmented, and the real. We propose a use of an Inter-Reality
                  Interactive Surface (IRIS) that enables users to collaborate
                  across the reality-virtuality continuum within the same
                  application. While we examine IRIS in the context of an
                  immersive educational platform, UniVResity, the metaphor can
                  be generalized to many other application domains.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699752"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698007"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698008"
                title="Get the Full Text from the ACM Digital Library"
              >
                Learning-based Estimation of 6-DoF Camera Poses from Partial
                Observation of Large Objects for Mobile AR*
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jean-Pierre Lomaliza</li>
              <li class="nameList Last">Hanhoon Park</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We propose a method that estimates 6-DoF camera pose from a
                  partially visible large object, by exploiting information of
                  its subparts that are detected using a state-of-the-art
                  convolutional neural network (CNN). The trained CNN outputs
                  two-dimensional bounding boxes around subparts and associated
                  classes. Information from detection is then fed to a deep
                  neural network that regresses to camera&#39;s 6-DoF poses.
                  Experimental results show that the proposed method is more
                  robust to occlusions than conventional learning-based methods.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699753"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698008"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698009"
                title="Get the Full Text from the ACM Digital Library"
              >
                LINACVR: VR Simulation for Radiation Therapy Education
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Haydn Bannister</li>
              <li class="nameList">Ben Selwyn-Smith</li>
              <li class="nameList">Craig Anslow</li>
              <li class="nameList">Brian Robinson</li>
              <li class="nameList">Rafael K dos Anjos PhD</li>
              <li class="nameList">Daniel Pires</li>
              <li class="nameList">Paul Kane</li>
              <li class="nameList Last">Aidan Leong</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  A clear and well-documented LaTeX document is presented as an
                  article formatted for publication by ACM in a conference
                  proceedings or journal publication. Based on the
                  &#8220;acmart&#8221; document class, this article presents and
                  explains many of the common variations, as well as many of the
                  formatting elements an author may use in the preparation of
                  the documentation of their work.
                </p>
              </div>{" "}
            </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698000"
                title="Get the Full Text from the ACM Digital Library"
              >
                Mixed Reality Speaker Identification as an Accessibility Tool
                for Deaf and Hard of Hearing Users
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Abraham Glasser</li>
              <li class="nameList">Edward Mason Riley</li>
              <li class="nameList">Kaitlyn Weeks</li>
              <li class="nameList Last">Raja Kushalnagar</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  People who are Deaf or Hard of Hearing (DHH) benefit from text
                  captioning to understand audio, yet captions alone are often
                  insufficient for the complex environment of a panel
                  presentation, with rapid and unpredictable turn-taking among
                  multiple speakers. It is challenging and tiring for DHH
                  individuals to view captioned panel presentations, leading to
                  feelings of misunderstanding and exclusion. In this work, we
                  investigate the potential of Mixed Reality (MR) head-mounted
                  displays for providing captioning with visual cues to indicate
                  which person on the panel is speaking. For consistency in our
                  experimental study, we simulate a panel presentation in
                  virtual reality (VR) with various types of MR visual cues; in
                  a study with 18 DHH participants, visual cues made it easier
                  to identify speakers.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699754"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698000"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698001"
                title="Get the Full Text from the ACM Digital Library"
              >
                Monocular Viewing Protects Against Cybersickness Produced by
                Head Movements in the Oculus Rift
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Stephen Palmisano</li>
              <li class="nameList">Luke Szalla</li>
              <li class="nameList Last">Juno Kim</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We compared the cybersickness produced when a virtual
                  environment (VE) was viewed binocularly and monocularly
                  through an Oculus Rift CV1 head-mounted display (HMD). During
                  each exposure to the VE participants made continuous yaw head
                  movements in time with a computer-generated metronome. Across
                  trials we also varied their head movement frequency (0.5 or
                  1.0 Hz) and motion-to-photon delays (from &#8764;5 -
                  &#8764;212 ms). We found that: 1) cybersickness severity
                  increased with added display lag; and 2) monocular viewing
                  appeared to protect against these increases in cybersickness.
                  We conclude that active binocular viewing with this HMD
                  introduced artifacts that increased the likelihood of more
                  severe sickness.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699765"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698001"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698002"
                title="Get the Full Text from the ACM Digital Library"
              >
                Optical-Reflection Type 3D Augmented Reality Mirrors
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Gun A. Lee</li>
              <li class="nameList">Hye Sun Park</li>
              <li class="nameList Last">Mark Billinghurst</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Augmented Reality (AR) mirrors can show virtual objects
                  overlaid onto the physical world reflected in the mirror.
                  Optical-reflection type AR mirror displays use half-silvered
                  mirrors attached in front of a digital display. However, prior
                  work suffered from visual depth mismatch between the optical
                  reflection of the 3D physical space and 2D images displayed on
                  the surface of the mirror. In this research, we use 3D
                  visualisation to overcome this problem and improve the user
                  experience by providing better depth perception for watching
                  and interacting with the content displayed on an AR mirror. As
                  a proof of concept, we developed two prototype
                  optical-reflection type 3D AR mirror displays, one using
                  glasses-free multi-view 3D display and another using a head
                  tracked 3D stereoscopic display that supports hand gesture
                  interaction.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699766"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698002"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698003"
                title="Get the Full Text from the ACM Digital Library"
              >
                PanoFlex: Adaptive Panoramic Vision to Accommodate 360&#176;
                Field-of-View for Humans
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Feng Liang</li>
              <li class="nameList">Stevanus Kevin</li>
              <li class="nameList">Kai Kunze</li>
              <li class="nameList Last">Yun Suen Pai</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We propose PanoFlex, an adaptive method for projecting
                  panoramic vision using a dynamic distortion method based on
                  eye gaze. We stream real-time video from a 360&#176; camera
                  and project the view on a plane to the user. The user controls
                  the distortion of this equirectangular projection using eye
                  gaze. For our first user study, we compare our method with
                  conventional equirectangular projection considering the impact
                  on spatial perception. For our second study, we perform a
                  simulator sickness evaluation when the user performs regular
                  daily activities. We found that PanoFlex did not carry any
                  significant negative impact towards the user&#8217;s spatial
                  perception, perceived task load, and simulator sickness
                  compared to the more conventional equirectangular view.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699767"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698003"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698004"
                title="Get the Full Text from the ACM Digital Library"
              >
                Predicting the Torso Direction from HMD Movements for
                Walk-in-Place Navigation through Deep Learning
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Juyoung Lee</li>
              <li class="nameList">Andreas Pastor</li>
              <li class="nameList">Jae-In Hwang</li>
              <li class="nameList Last">Gerard Jounghyun Kim</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we propose to use the deep learning technique
                  to estimate and predict the torso direction from the head
                  movements alone. The prediction allows to implement the
                  walk-in-place navigation interface without additional sensing
                  of the torso direction, and thereby improves the convenience
                  and usability. We created a small dataset and tested our idea
                  by training an LSTM model and obtained a 3-class prediction
                  rate of about 90&#37;, a figure higher than using other
                  conventional machine learning techniques. While preliminary,
                  the results show the possible inter-dependence between the
                  viewing and torso directions, and with richer dataset and more
                  parameters, a more accurate level of prediction seems
                  possible.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699768"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698004"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698015"
                title="Get the Full Text from the ACM Digital Library"
              >
                Preliminary Evaluation of the Usability of a Virtual Reality
                Game for Mudslide Education for Children
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Mengping Tsuei</li>
              <li class="nameList">Jen-I Chiu</li>
              <li class="nameList">Tsu-Wei Peng</li>
              <li class="nameList Last">Yuan-Chen Chang</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Mudslide education is important for children. In this study, a
                  design-based research approach was used to develop an
                  educational VR mudslide game for children. Eleven children
                  participated in the usability evaluations. The results
                  indicated the importance of intuitive, easy-to-learn controls.
                  Six major refinements of the VR mudslide game were made to
                  increase usabilities. Feedback from the participants will
                  guide future game refinements to increase users&#8217;
                  engagement and interaction.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699769"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698015"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698016"
                title="Get the Full Text from the ACM Digital Library"
              >
                Proposing a Hand-Tracking Device using a Tangential Force
                Mechanical Sensor
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Yuto Kurashige</li>
              <li class="nameList Last">Michael Vallance</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Conventional hand-tracking devices are constructed with
                  inertial measurement units, bending sensors, and optical
                  technologies. However, these are limited by their high-cost
                  and environmental factors. In this research, a hand-tracking
                  device using a tangential force mechanical sensor for use in
                  Immersive Virtual Environments is proposed.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699760"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698016"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698017"
                title="Get the Full Text from the ACM Digital Library"
              >
                Real-time Monitoring Method for Cybersickness using
                Physiological Signals
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Takurou Magaki</li>
              <li class="nameList Last">Michael Vallance</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The potential for cybersickness remains a critical problem
                  when engaged in Virtual Reality experiences. Cybersickness is
                  difficult to resolve because, although there are commonly
                  accepted symptoms and theories, there is still no consensus on
                  how to overcome the problem. In this study, a method of
                  real-time monitoring of physiological signals is proposed as
                  an approach to measure the potential onset of cybersickness.
                  An application called Cybatica which displays physiological
                  data and a unique metric termed Onset of Cybersickness (OCS)
                  has been developed.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699761"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698017"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>

            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698018"
                title="Get the Full Text from the ACM Digital Library"
              >
                RecyGlide : A Forearm-worn Multi-modal Haptic Display aimed to
                Improve User VR Immersion Submission
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Juan Heredia</li>
              <li class="nameList">Jonathan Tirado</li>
              <li class="nameList">Vladislav Panov</li>
              <li class="nameList">Miguel Altamirano Cabrera</li>
              <li class="nameList">Kamal Youcef-Toumi</li>
              <li class="nameList Last">Dzmitry Tsetserukou</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Haptic devices have been employed to immerse users in VR
                  environments. In particular, hand and finger haptic devices
                  have been deeply developed. However, this type of devices
                  occludes hand detection for some tracking systems, or, for
                  some other tracking systems, it is uncomfortable for the users
                  to wear two different devices (haptic and tracking device) on
                  both hands. We introduce RecyGlide, a novel wearable
                  multimodal display located at the forearm. The RecyGlide is
                  composed of inverted five-bar linkages with 2 degrees of
                  freedom (DoF) and vibration motors (see Fig. 1.(a). The device
                  provides multimodal tactile feedback such as slippage, force
                  vector, pressure, and vibration. We tested the discrimination
                  ability of monomodal and multimodal stimuli patterns on the
                  forearm and confirmed that the multimodal patterns have higher
                  recognition rate. This haptic device was used in VR
                  applications, and we proved that it enhances VR experience and
                  makes it more interactive.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699762"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698018"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698019"
                title="Get the Full Text from the ACM Digital Library"
              >
                Scalebridge VR: Immersive Proportional Reasoning Game for
                Children with Brain-Computer Interface for Difficulty Scaling
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Krzysztof Pietroszek</li>
              <li class="nameList Last">Liudmila Tahai</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We present the design and evaluation of Scalebridge VR, an
                  immersive educational game that teaches children the
                  mathematical skill of proportional reasoning. The game uses
                  brain-computer-interface-based adaptive level difficulty to
                  modulate difficulty of the game based on the player&#8217;s
                  attention and meditation state. The game is an adaptation of
                  previously introduced Scalebridge game that did not use
                  virtual reality, but was shown to be an effective tool for
                  learning proportional reasoning.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699763"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698019"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698010"
                title="Get the Full Text from the ACM Digital Library"
              >
                Soap film flow and thickness for soap bubble rendering
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Sanghyeon Gil</li>
              <li class="nameList">Yunji Seok</li>
              <li class="nameList">Kiyeol Park</li>
              <li class="nameList">Jaeseok Yoo</li>
              <li class="nameList Last">Seongah Chin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In practice, it is not easy to find a study of soap bubbles
                  rendering by measuring the speed and thickness of soap bubbles
                  flow. In this study, we have carried out to measure the change
                  in the flow and thickness of a soap film to realistically
                  render soap bubbles.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699764"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698010"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698011"
                title="Get the Full Text from the ACM Digital Library"
              >
                SolarVR for inter-cognitive and intra-cognitive communication
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Michael Vallance</li>
              <li class="nameList">Takurou Magaki</li>
              <li class="nameList">Yuto Kurashige</li>
              <li class="nameList Last">Luke Johnson</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The aim of this research is to design and implement a Solar
                  Virtual Reality environment (SolarVR) for inter-cognitive and
                  intra-cognitive communication by connecting users and sensors
                  to a real-world solar panel plant for remote monitoring,
                  maintenance and collaboration. The paper outlines the
                  development of a VR solution which can be utilized for remote
                  monitoring and communication, skills training and science
                  education.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699775"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698011"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698012"
                title="Get the Full Text from the ACM Digital Library"
              >
                The Impact of Stereo Rendering on the Perception of Normal
                Mapped Geometry in Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Martin Misiak</li>
              <li class="nameList">Niko Wissmann</li>
              <li class="nameList">Arnulph Fuhrmann</li>
              <li class="nameList Last">Marc Erich Latoschik</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper investigates the effects of normal mapping on the
                  perception of geometric depth between stereoscopic and
                  non-stereoscopic views. Results show, that in a head-tracked
                  environment, the addition of binocular disparity has no impact
                  on the error rate in the detection of normal-mapped geometry.
                  It does however significantly shorten the detection time.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699776"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698012"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698013"
                title="Get the Full Text from the ACM Digital Library"
              >
                Toward Effective Virtual Reality Intervention Development
                Planning for People with Persistent Postural-Perceptual
                Dizziness
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Syed Fawad M. Zaidi</li>
              <li class="nameList">Prof. Justin Beilby</li>
              <li class="nameList Last">Prof. Mick Grimley</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Persistent Postural-Perceptual Dizziness (PPPD) is defined by
                  World Health organization as &#8221;Persistent non-vertiginous
                  dizziness, unsteadiness, or both lasting three months or
                  more&#8221;. With the most common provocations are situations
                  like up-right position, self-motions, looking at fast moving
                  objects or disruptions in a crowded environment. Besides
                  conventional treatments, scientists are looking at the
                  possibility of using creative technology including virtual
                  reality (VR) to assist improving symptoms. Here, we have
                  proposed a strategy that would strengthen the initial phase of
                  discussion between VR technologists and PPPD experts on
                  developing an effective VR based intervention tool.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699777"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698013"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698014"
                title="Get the Full Text from the ACM Digital Library"
              >
                Towards Dynamic Positioning of Text Content on a Windshield
                Display for Automated Driving
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Andreas Riegler</li>
              <li class="nameList">Andreas Riener</li>
              <li class="nameList Last">Clemens Holzmann</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Windshield displays (WSDs) are a promising new technology to
                  augment the entire windscreen with additional information
                  about vehicle state, highlight critical objects in the
                  surrounding, or serve as replacement for conventional
                  displays. Typically, augmentation is provided in a
                  screen-fixed manner as overlay on the windscreen. However, it
                  is unclear to date if this is optimal in terms of
                  usability/UX. In this work, we propose &#8221;StickyWSD&#8221;
                  &#8211; a world-fixed positioning strategy &#8211; and
                  evaluate its impact on quantitative measures compared to
                  screen-fixed positioning. Results from a user study conducted
                  in a virtual reality driving simulator (N &#61; 23) suggest
                  that the dynamic world-fixed positioning technique shows
                  increased performance and lowered error rates as well as
                  take-over times. We conclude that the &#8221;StickyWSD&#8221;
                  approach offers lot of potential for WSDs that should be
                  researched further.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699778"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698014"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698025"
                title="Get the Full Text from the ACM Digital Library"
              >
                TTT: Time Synchronization Method by Time Distortion for VR
                Training including Rapidly Moving Objects
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Natsuki Hamanishi</li>
              <li class="nameList Last">Jun Rekimoto</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Providing an experience that includes high-speed objects, such
                  as tennis balls, with a virtual reality (VR) training
                  environment might provide efficient training for trainers but
                  is challenging to achieve. Because of the drawing performance
                  of the display, high-speed objects are perceived as poor
                  visual information more than in reality, such as images in a
                  stroboscope. The faster the object, the more noticeable it
                  becomes, and the harder it is to perceive it correctly.
                  Therefore, if the training is performed at the actual speed,
                  the perception becomes more difficult than real space training
                  due to the low reproduction accuracy. To solve this problem,
                  we propose the computational time-space that controls
                  high-speed objects in VR space, based on the user&#8217;s body
                  movement. The method facilitates the perception of fast-moving
                  objects by synchronizing the time of the ball with the
                  movement of the body.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699779"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698025"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698026"
                title="Get the Full Text from the ACM Digital Library"
              >
                Understanding Enjoyment in VR Games with GameFlow
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Penny Sweetser</li>
              <li class="nameList">Zane Rogalewicz</li>

              <li class="nameList Last">Qingyang Li</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we report on a work in progress project that
                  aims to understand affordances and inhibiters of enjoyment in
                  virtual reality (VR) video games. We apply the GameFlow model
                  to review and analyse VR and non-VR versions of the same games
                  to identify differences in enjoyment. Our approach includes
                  conducting expert reviews using the GameFlow model, as well as
                  conducting qualitative analysis on video game reviews, using
                  GameFlow as a conceptual foundation. In this paper, we report
                  our initial findings for the game Superhot. Our ongoing work
                  evaluates a selection of games to map opportunities and
                  pitfalls when designing games for VR.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699770"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698026"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698027"
                title="Get the Full Text from the ACM Digital Library"
              >
                UniVResity: Face-to-Face Class Participation for Remote Students
                using Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Krzysztof Pietroszek</li>
              <li class="nameList Last">Chao Cheng Lin</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We describe a prototype of the virtual reality remote
                  classroom participation system called UniVResity. UniVResity
                  mirrors in virtual reality the ongoing face-to-face classroom
                  activities, taking into account potentially low bandwidth data
                  connection and lack of VR equipment in class. Our system
                  attempts to combine the benefits of online education and
                  face-to-face education, and makes face-to-face learning more
                  accessible.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699771"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698027"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698028"
                title="Get the Full Text from the ACM Digital Library"
              >
                Vertical Locomotion in VR Using Full Body Gestures
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Vineet Kamboj</li>
              <li class="nameList">Tuhin Bhuyan</li>
              <li class="nameList Last">Jayesh S. Pillai</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Virtual Reality experiences today are majorly based on
                  horizontal locomotion. In these experiences, movement in the
                  virtual space is accomplished using teleportation, gaze input
                  or tracking in physical space which is limited to a certain
                  extent. Our work focuses on intuitive interactions for
                  vertical locomotion involving both hands and feet. Such an
                  instance of vertical locomotion is - ladder climbing. In this
                  paper, we present an interaction technique for climbing a
                  ladder in Virtual Reality (VR). This technique is derived from
                  the natural motions of the limbs while climbing a ladder in
                  reality, adhering to safe climbing practices. The developed
                  interaction can be used in training experiences as well as
                  gaming experiences. Preliminary evaluation of our interaction
                  technique showed positive results across dimensions like -
                  learnability, natural mapping, and intuitiveness.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699772"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698028"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698029"
                title="Get the Full Text from the ACM Digital Library"
              >
                Virtual Immersive Educational Systems:The case of 360&#176;
                video and co-learning design.
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Konstantinos Koumaditis</li>
              <li class="nameList Last">Francesco Chinello</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The focus of this research is to depict the design process of
                  a cost-effective, robust but user-friendly Virtual Immersive
                  Educational (VIE) system. Thus, assist researchers,
                  instructors and designers in identifying an effective method
                  to design VIE systems. In this report, we describe our initial
                  steps to design such a system in order to educate engineering
                  students on the basic health and safety guidelines of safe
                  interaction with a robotic arm. To do so, a set of 360&#176;
                  videos have been designed, developed and tested.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699773"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698029"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698020"
                title="Get the Full Text from the ACM Digital Library"
              >
                Visualizing Convolutional Neural Networks with Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Annika Wohlan</li>
              <li class="nameList">Nico Hochgeschwender</li>
              <li class="nameList Last">Nadine Meissler</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Software systems and components are increasingly based on
                  machine learning methods, such as Convolutional Neural
                  Networks (CNNs). Thus, there is a growing need for common
                  programmers and machine learning newcomers to understand the
                  general functioning of these algorithms. However, as neural
                  networks are complex in nature, novel presentation means are
                  required to enable rapid access to the functionality. For that
                  purpose, this paper examines how CNNs can be visualized in
                  Virtual Reality. A first exploratory study has confirmed that
                  our visualization approach is both intuitive to use and
                  conductive to learning.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698021"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698020"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698022"
                title="Get the Full Text from the ACM Digital Library"
              >
                Where to Place the Camera
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Sylvia Rothe</li>
              <li class="nameList">Vanessa Sarakiotis</li>
              <li class="nameList Last">Heinrich Hussmann</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper describes aspects which are important for camera
                  positioning in cinematic virtual reality. For our findings, we
                  took a closer look at proxemics, the study on how humans
                  behave in regard to space and distances. We explored
                  well-known shot sizes used in traditional filmmaking and put
                  them in relation to proxemics distances. The results were
                  adapted to camera distances in cinematic virtual reality.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699774"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698022"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698023"
                title="Get the Full Text from the ACM Digital Library"
              >
                WiredSwarm: High Resolution Haptic Feedback Provided by a Swarm
                of Drones to the User&#8217;s Fingers for VR interaction
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Evgeny Tsykunov</li>
              <li class="nameList Last">Dzmitry Tsetserukou</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We propose a concept of a novel interaction strategy for
                  providing rich haptic feedback in Virtual Reality (VR), when
                  each user&#8217;s finger is connected to micro-quadrotor with
                  a wire. Described technology represents the first flying
                  wearable haptic interface. The solution potentially is able to
                  deliver high resolution force feedback to each finger during
                  fine motor interaction in VR. The tips of tethers are
                  connected to the centers of quadcopters under their bottom.
                  Therefore, flight stability is increasing and the interaction
                  forces are becoming stronger which allows to use smaller
                  drones.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699785"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698023"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h2>SESSION: Demo Abstracts</h2>
            <div class="DLabstract"> </div>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698024"
                title="Get the Full Text from the ACM Digital Library"
              >
                ALS-SimVR: Advanced Life Support Virtual Reality Training
                Application
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Nathan Moore</li>
              <li class="nameList">Soojeong Yoo</li>
              <li class="nameList">Naseem Ahmadpour</li>
              <li class="nameList">Russel Tommy</li>
              <li class="nameList">Martin Brown</li>
              <li class="nameList Last">Philip Poronnik</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  The delivery of ongoing training and support to Advanced Life
                  Support (ALS) teams poses significant resourcing and
                  logistical challenges. A reduced exposure to cardiac arrests
                  and mandated re-accreditation pose further challenges for
                  educators to overcome. This work presents the ALS-SimVR
                  (Advanced Life Support Simulation in VR) application. The
                  application is intended for use as a supplementary training
                  and refresher asset for ALS team leaders. The purpose of the
                  application is to allow critical care clinicians to rehearse
                  the role of ALS Team leader in their own time and location of
                  choice. The application was developed for the Oculus-Go and
                  ported to the Oculus-Quest. The application is also supported
                  for a desktop and server based streaming release.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698035"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698024"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698036"
                title="Get the Full Text from the ACM Digital Library"
              >
                AssessAR: An Augmented Reality Based Environmental Impact
                Assessment Framework
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Rohit Mehra</li>
              <li class="nameList">Vibhu Saujanya Sharma</li>
              <li class="nameList">Vikrant Kaulgud</li>
              <li class="nameList Last">Sanjay Podder</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  {" "}
                  Human activities can have a lasting impact on the environment
                  and society. Environmental impact assessment (EIA) which
                  focusses on evaluating the impact of proposed developmental
                  projects on the environment, helps in transparent
                  decision-making and involves multiple stakeholders. However,
                  EIA is data and effort-intensive and often becomes complex and
                  long-drawn. Moreover, EIA is currently performed using
                  primarily two-dimensional traditional mediums which could be
                  vastly restrictive and difficult to navigate and comprehend.
                  Here, we present an immersive approach which can create 3D
                  interactive elements, modelling the real-world using
                  augmented/mixed reality. Because of the inherent benefits of
                  using three-dimensional representations and associated
                  real-world interactions, we posit that our approach will
                  facilitate better and faster, collaboration-enabled analysis
                  of a developmental project proposal, thereon reducing
                  processing time and promoting high fidelity.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698037"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698036"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698038"
                title="Get the Full Text from the ACM Digital Library"
              >
                Development of MirrorShape: High Fidelity Large-Scale Shape
                Rendering Framework for Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Aleksey Fedoseev</li>
              <li class="nameList">Nikita Chernyadev</li>
              <li class="nameList Last">Dzmitry Tsetserukou</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Today there is a high variety of haptic devices capable of
                  providing tactile feedback. Although most of existing designs
                  are aimed at realistic simulation of the surface properties,
                  their capabilities are limited in attempts of displaying shape
                  and position of virtual objects.{" "}
                </p>{" "}
                <p>
                  This paper suggests a new concept of distributed haptic
                  display for realistic interaction with virtual object of
                  complex shape by a collaborative robot with shape display
                  end-effector. MirrorShape renders the 3D object in virtual
                  reality (VR) system by contacting the user hands with the
                  robot end-effector at the calculated point in real-time. Our
                  proposed system makes it possible to synchronously merge the
                  position of contact point in VR and end-effector in real
                  world. This feature provides presentation of different shapes,
                  and at the same time expands the working area comparing to
                  desktop solutions.{" "}
                </p>{" "}
                <p>
                  The preliminary user study revealed that MirrorShape was
                  effective at reducing positional error in VR interactions.
                  Potentially this approach can be used in the virtual systems
                  for rendering versatile VR objects with wide range of sizes
                  with high fidelity large-scale shape experience.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699786"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698038"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698039"
                title="Get the Full Text from the ACM Digital Library"
              >
                DexController : Hand-Held Controller Recognizing Grasp-Pose and
                Grasp-Force in Virtual Reality Defense Game
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">HyeonBeom Yi</li>
              <li class="nameList">Jiwoo Hong</li>
              <li class="nameList Last">Woohun Lee</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We developed a hand-held controller named DexController,
                  leveraging grasp as an additional input modality for virtual
                  reality(VR) game. The pressure-sensitive surface of
                  DexController could recognize two different grasp-poses (i.e.
                  precision grip and power grip) and detect grasp-force. For
                  demonstration, we designed a VR defense game in which players
                  should attack different virtual enemies using the proper
                  weapon with a proper level of force. User study confirmed that
                  utilizing meaningful information of grasping facilitates
                  natural mapping with game contents, which led VR game users to
                  experience enhanced presence and enjoyment.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>

              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699787"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698039"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698030"
                title="Get the Full Text from the ACM Digital Library"
              >
                Dynamic Virtual Proteins: Visualization, Interaction and
                Collaboration in Virtual Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jean-Marc Gauthier</li>
              <li class="nameList">Ian McGrath</li>
              <li class="nameList Last">Jagdish Suresh Patel</li>
            </ul>
            <div class="DLabstract"> </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699788"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698030"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698031"
                title="Get the Full Text from the ACM Digital Library"
              >
                Emotion Evoking Art Exhibition in VR
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kyungjin Yoo</li>
              <li class="nameList Last">Nick Gold</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Many museums today lack an aspect of technology that will
                  attract younger visitors to visit the art. By implementing
                  Virtual Reality into art museum solves this problem. Virtual
                  Reality is a popular phenomenon that attracts many viewers and
                  is growing every day. Art museums want to express emotion
                  through their art and Virtual Reality can evoke that emotion
                  more. By creating a virtual museum that not only has all the
                  art on display but also is set an outdoor environment such as
                  a garden or a dark forest will further enhance the emotion. If
                  a piece of art is supposed to show warmth or positive
                  feelings, why not place it in a garden? If the art is supposed
                  to show darkness or cold why not place it in a dead forest?
                  Using Virtual Reality allows us to place art in these
                  environments so further museum goal of expressing emotion.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699789"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698031"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698032"
                title="Get the Full Text from the ACM Digital Library"
              >
                Extended Reality for Chronic Pain Relief
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Jiaheng Wang</li>
              <li class="nameList Last">Craig Anslow</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Chronic pain is ongoing pain lasting for long periods of time
                  after the initial injury or disease has healed. Chronic pain
                  is difficult to treat and can affect the daily lives of
                  patients. Distraction therapy is a proven way of relieving
                  pain by redirecting the focus of patients&#8217; attention.
                  Virtual reality is an effective platform for distraction
                  therapy as it immerses the user visually, aurally, and even
                  somewhat physically in a virtual world detached from reality.
                  There is little research done on the effects that physical
                  interactions have on pain management. This project aims to
                  evaluate different types of extended reality (XR)
                  interactions, including full body movement, for chronic pain
                  patients to determine which is the best for pain relief. We
                  are building a prototype for participants to interact both
                  mentally and physically and measuring the reduction in
                  subjective pain ratings at various points of the XR
                  experience.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699780"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698032"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698033"
                title="Get the Full Text from the ACM Digital Library"
              >
                Interactive Visualization of Painting Data with Augmented
                Reality
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kyungjin Yoo</li>
              <li class="nameList Last">Dean Foster</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Exploration of Augmented Reality technologies has increased
                  substantially and the increase in both popularity and
                  technological maturity has also led to several applications
                  being developed for educational and museum environments.
                  Specifically, a greater focus has been placed upon creating
                  memorable experiences that both attract and educate museum
                  patrons. Attempts to do this involve creating both Virtual
                  Reality and Augmented Reality experiences, such as having
                  users enter into immersive worlds that demonstrate the history
                  of a certain time period, or applications that overlay
                  life-like models of those animals in the very room the user is
                  standing in. Many of these experiences are quite exceptional
                  but begin to lack in variety when moving towards the art
                  gallery, and mainly focus on making painting information more
                  accessible. In an attempt to address this, this project
                  outlines the design and evaluation of a proof-of-concept meant
                  to study if adding interaction through Augmented Reality to
                  paintings themselves would be both technologically feasible
                  and desirable.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699781"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698033"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698034"
                title="Get the Full Text from the ACM Digital Library"
              >
                Layered Horizons: a Geospatial Humanities Research Platform
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Andrew Burrell</li>
              <li class="nameList Last">Rachel Hendery</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this demo we showcase Layered Horizons, a Virtual Reality
                  (VR) experience we have developed for use in an ARC-funded
                  research project, Waves of Words: Mapping and Modelling
                  Australia&#8217;s Pacific Past. This platform allows users to
                  connect different geospatial datasets (for our purposes, from
                  the humanities and social sciences) into layers that can then
                  be explored by the use of natural gesture and body movement.
                  This kind of interaction design in VR takes full advantage of
                  the media&#8217;s affordances, without relying on metaphors
                  from other interactive media, yet being familiar enough as to
                  engender intuitive and meaningful use. We demonstrate how the
                  platform is currently being used to connect linguistic data
                  (word lists) with archaeological data (e.g. on the spread of
                  bananas through the Asia-Pacific region, or canoe styles found
                  in different locations) and anthropological data (e.g. shared
                  cultural features like chieftainship systems or kinship
                  systems). Taking into account what we also know about Pacific
                  navigation and simulated canoe travel, we can therefore build
                  a complex layered map of the region over time that allows us
                  to better discover probable human migration and contact
                  patterns.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699782"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698034"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698045"
                title="Get the Full Text from the ACM Digital Library"
              >
                OORT: An Air-flow based Cooling System for Long-term Virtual
                Reality Sessions
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Hubert Kloskowski</li>
              <li class="nameList">Daniel Medeiros</li>
              <li class="nameList Last">Johannes Schoning</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we present OORT, a cooling system for
                  head-mounted displays (HMDs) that improves wearing comfort by
                  decreasing skin temperatures of the facial areas covered by
                  the headset. The integrated cooling system consists of an
                  electronically controlled fan blower. The fan compartment is
                  integrated into an hmd padding element with custom-designed
                  air flow channels that provide cool air circulation around the
                  covered facial regions. We report on the design and
                  implementation of OORT as a viable way to provide thermal
                  comfort during long-term virtual reality experiences.{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699783"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698045"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698046"
                title="Get the Full Text from the ACM Digital Library"
              >
                PillowVR: Virtual Reality in Bed
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Doil Kwon</li>
              <li class="nameList">Hyeonah Choi</li>
              <li class="nameList">Hyung Jun Cho</li>
              <li class="nameList">Juyoung Lee</li>
              <li class="nameList Last">Gerard Kim</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We demonstrate PillowVR, virtual reality framework that
                  integrates the smartphone, magnifier and sensors into a
                  pillow/cushion for immersive VR experience in bed. PillowVR is
                  applied for presenting immersive bed time stories to children
                  to help them go to sleep and therefore its interaction was
                  designed to minimize excessive bodily movements &#8211; only
                  simple back-of-the head pressure events are used to browse the
                  content. PillowVR illustrates shows how VR can be more woven
                  into our daily lives inexpensively and naturally by
                  customizing the set up and interaction for the specific task
                  and experience.
                </p>{" "}
                <p>
                  The actual demonstration of PillowVR would be very simple (as
                  intended). In this paper, we can watch 360&#176; video because
                  viewpoint can be switching in &#8220;Non Ready&#8221; state.
                  Our team will place an exercise pad or long picnic chair
                  (instead of an actual bed) in the demo area. The user will
                  enact the whole process as if being at home from the very
                  start &#8211; sit/lie on the chair, insert the smartphone,
                  wear the PillowVR, browse the content, pretend as if fallen to
                  sleep, and assess the experience from the beginning to the
                  very end (when one wakes up in the morning).
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699784"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698046"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698047"
                title="Get the Full Text from the ACM Digital Library"
              >
                Real Time Point Cloud Self-Avatar With A Single RGB-D Camera
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Hela Ridha-Mahfoudhi</li>
              <li class="nameList Last">Nguyen-Thong Dang</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  This paper presents a method for generating in real-time a
                  self-avatar using a single RGB-D Camera. The self-avatar was
                  presented under the form of a point cloud, retrieved thanks to
                  a Kinect V2. The method included smoothing, filtering,
                  segmenting and remapping point data presenting the user&#39;s
                  body in real-time. The point cloud avatar in the third and the
                  first person view can be generated.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699795"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698047"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698048"
                title="Get the Full Text from the ACM Digital Library"
              >
                Spatially Accurate Generative Music with AR Drawing
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kyungjin Yoo</li>
              <li class="nameList Last">Eli Schwelling</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Recent experiments in semi-automatically generating ambient
                  music have yielded emotionally affecting results, leading
                  scientists and musicians alike to develop and experiment with
                  computational systems for creating audible art with varying
                  degrees of success. Most of these systems are based either in
                  analogue technology such as classic tape-reel recording
                  systems or digital systems like virtual synthesizers triggered
                  by a combination of developer-defined values and random number
                  generation. In this paper, I outline the conceptual reasoning
                  behind and development of one such generative music system
                  which uses a simple but versatile virtual synthesizer to
                  generate sound and sequences of repeating randomly generated
                  notes drawn by the user in augmented reality to formulate the
                  patterns and spatial origin of each sound contributing to the
                  entire generative piece.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699796"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698048"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698049"
                title="Get the Full Text from the ACM Digital Library"
              >
                Text Entry Method for Immersive Virtual Environments Using
                Curved Keyboard
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Naoki Yanagihara</li>
              <li class="nameList">Buntarou Shizuki</li>
              <li class="nameList Last">Shin Takahashi</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  In this paper, we introduce a curved QWERTY keyboard, bent
                  spherically in front of the user, to facilitate 3D
                  word-gesture text entry in immersive virtual environments.
                  Using the curved keyboard, the number of candidate words in
                  the 3D word-gesture text entry is reduced compared with that
                  using a planar keyboard. In the pilot study, the text entry
                  performance of the first author was 21.0&#160;WPM (SD = 5.06),
                  with a total error rate of 26.0&#37; (SD = 15.2).{" "}
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699797"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698049"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698040"
                title="Get the Full Text from the ACM Digital Library"
              >
                Virtual environment for processing medial axis representations
                of 3D nanoscale reconstructions of brain cellular structures
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Daniya Boges</li>
              <li class="nameList">Corrado Cali'</li>
              <li class="nameList">Pierre J. Magistretti</li>
              <li class="nameList">Markus Hadwiger</li>
              <li class="nameList">Ronell Sicat</li>
              <li class="nameList Last">Marco Agus</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  We present a novel immersive environment for the interactive
                  analysis of nanoscale cellular reconstructions of rodent brain
                  samples acquired through electron microscopy. The system is
                  focused on medial axis representations (skeletons) of branched
                  and tubular structures of brain cells, and it is specifically
                  designed for: i) effective semi-automatic creation of
                  skeletons from surface-based representations of cells and
                  structures ii) fast proofreading, i.e., correcting and editing
                  of semi-automatically constructed skeleton representations,
                  and iii) useful exploration, i.e., measuring, comparing, and
                  analyzing geometric features related to cellular structures
                  based on medial axis representations. The application runs in
                  a standard PC-tethered virtual reality (VR) setup with a head
                  mounted display (HMD), controllers, and tracking sensors. The
                  system is currently used by neuroscientists for performing
                  morphology studies on sparse reconstructions of glial cells
                  and neurons extracted from a sample of the somatosensory
                  cortex of a juvenile rat.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699798"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698040"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
            <h3>
              <a
                class="DLtitleLink"
                href="https://dl.acm.org/authorize?N698041"
                title="Get the Full Text from the ACM Digital Library"
              >
                VR Minecraft for Art
              </a>
            </h3>
            <ul class="DLauthors">
              <li class="nameList First">Kyungjin Yoo</li>
              <li class="nameList">Ryan Havel</li>
              <li class="nameList Last">Nikhil Patel</li>
            </ul>
            <div class="DLabstract">
              <div style={{ display: "inline" }}>
                <p>
                  Art museums are becoming very boring to many people especially
                  to the younger generation. The purpose of this project is to
                  try to make a new type of art museum, one that is engaging and
                  interactive. This project aims to answer the research
                  question: Can a VR Minecraft museum enhance the user
                  experience by giving them something that a typical art museum
                  can&#8217;t? To answer this question, we&#8217;ve create a VR
                  art museum within Minecraft and added features to make it more
                  interactive and interesting. A more engaging environment is a
                  great atmosphere to want to learn more. A scavenger hunt was
                  added to the art museum to give the player a reason to walk
                  around the entire museum. The player can build a sculpture
                  after he/she completes the scavenger hunt which allows the
                  player to be creative and imaginative. The user is then
                  provided with different colored blocks to create a painting of
                  his/her own. In order to answer the research question, we
                  demoed the museum to a few people and then interviewed them.
                  Their answers were very positive towards the VR Minecraft
                  museum which leads me to believe that a VR Minecraft museum
                  can indeed enhance the user experience.
                </p>
              </div>{" "}
            </div>
            <ul class="DLformats">
              <strong>Additional formats:</strong>
              <li class="formatList">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N699799"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  Html
                </a>
              </li>
              <li class="formatList Last">
                {" "}
                <a
                  class="DLotherLink"
                  href="https://dl.acm.org/authorize?N698041"
                  title="Get the Full Text from the ACM Digital Library"
                >
                  PDF
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Accessibility;
