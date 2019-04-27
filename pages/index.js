import React from 'react';
import Head from 'next/head';
import '../css/bootstrap.css';
import '../css/fontawesome-all.min.css';
import '../css/style.css';
import 'react-app-polyfill/ie11';
import { Introduction } from '../components/introduction';
import { News } from '../components/news';
import { Video } from '../components/video';
import { Organisers } from '../components/organisers';
import { Layout } from '../components/layout';
import { Venue } from '../components/venue';
import { Keynotes } from './../components/keynotes';
import TeamStructure from './../components/teamstructure';
import { VenueDetail } from '../components/venue_detail';
import { Registration } from '../components/registration';
import { Visa } from '../components/visa';
import { StudentScholarships } from '../components/studentscholarships';

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <script src="https://www.feedgrabbr.com/widget/fgwidget.js" />
        <Introduction />

        <div className="content-section">
          {/* <Keynotes /> */}
          <Video />
          <News />
          <Registration />
          <Keynotes />
          <Visa />
          <StudentScholarships />
          <Venue />
          <TeamStructure />
          <Organisers />
        </div>
      </Layout>
    );
  }
}
