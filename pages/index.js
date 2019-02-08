import React from "react";

import Head from "next/head";

import "../css/bootstrap.css";
import "../css/fontawesome-all.min.css";
import "../css/style.css";
import { Introduction } from "../components/introduction";
import { News } from "../components/news";
import { Video } from "../components/video";
import { Organisers } from "../components/organisers";
import { Layout } from "../components/layout";
import { Keynotes } from "./../components/keynotes";

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Introduction />

        <div className="content-section">
          {/* <Keynotes /> */}
          <Video />
          <News />
          <Organisers />
        </div>
      </Layout>
    );
  }
}
