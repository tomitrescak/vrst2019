import * as React from 'react';

export const PageHeader = ({ title, cls }) => (
  <div className={`page-header ${cls}`}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="entry-header">
            <h2 className="entry-title">{title}</h2>

            <ul className="breadcrumbs flex align-items-center">
              <li>
                <a href="/vrst2019">Home</a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
