import React from 'react';

export const PageSection = ({ title, dark, children, id }) => (
  <div
    id={id}
    className="home-page-last-news"
    style={dark ? { color: 'white!important', backgroundColor: '#141e21' } : {}}
  >
    <div className="container">
      <div className="header">
        <div className="entry-title">
          <p>VRST 2019</p>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </div>
);
