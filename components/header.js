import * as React from 'react';
import { makeUrl } from './common';
import { Navbar, Nav } from 'react-bootstrap';
var header = {
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '10px',
  borderRadius: 15
};
var styling = {
  color: 'white'
};

const Desktop = () => (
  <header className="site-header desktop">
    <div className="header-bar">
      <div className="container-fluid">
        <div className="topMenuDesktop">
          <div className="logo">
            <h1 className="site-branding flex">
              <a href={makeUrl('/')}>
                <img src={makeUrl('/static/images/vrst_logo.png')} style={{ width: '160px' }} />
              </a>
            </h1>
          </div>
          <div className="menu">
            <nav className="site-navigation" style={header}>
              <ul>
                <li>
                  <a href={makeUrl('/')} style={styling}>
                    <span className="chevron">&gt;</span> HOME
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/submissions')} style={styling}>
                    <span className="chevron">&gt;</span> SUBMISSIONS
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/#registration')}>
                    <span className="chevron">&gt;</span> REGISTRATION
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/program')}>
                    <span className="chevron">&gt;</span> PROGRAM
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/sponsors')}>
                    <span className="chevron">&gt;</span> SPONSORS
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/#venue')} style={styling}>
                    <span className="chevron">&gt;</span> VENUE
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/#keynotes')} style={styling}>
                    <span className="chevron">&gt;</span> KEYNOTES
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/#team')}>
                    <span className="chevron">&gt;</span> TEAM
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/#scholarships')} style={styling}>
                    <span className="chevron">&gt;</span> STUDENT SCHOLARSHIPS
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/showcase')} style={styling}>
                    <span className="chevron">&gt;</span> DEVELOPER SHOWCASE
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/accessibility')} style={styling}>
                    <span className="chevron">&gt;</span> ACCESSIBILITY
                  </a>
                </li>
                <li>
                  <a href={makeUrl('/#visa')} style={styling}>
                    <span className="chevron">&gt;</span> VISA
                  </a>
                </li>
                <li>
                  <a href="mailto:t.trescak@westernsydney.edu.au" style={styling}>
                    {' '}
                    <i className="fas fa-envelope" />
                    &nbsp;&nbsp;CONTACT
                  </a>
                </li>
                {/* <li>
          <a href="#">
            <i className="fas fa-search" />
          </a>
        </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Mobile = () => (
  <Navbar bg="dark" expand="lg" variant="dark" className="mobile">
    <Navbar.Brand href="#home">VRST 2019</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <li>
          <a href={makeUrl('/')}>HOME</a>
        </li>
        <li>
          <a href={makeUrl('/submissions')} style={styling}>
            SUBMISSIONS
          </a>
        </li>
        <li>
          <a href={makeUrl('/#venue')}>VENUE</a>
        </li>
        <li>
          <a href={makeUrl('/#registration')}>REGISTRATION</a>
        </li>
        <li>
          <a href={makeUrl('/program')}>PROGRAM</a>
        </li>
        <li>
          <a href={makeUrl('/sponsors')}>SPONSORS</a>
        </li>
        <li>
          <a href={makeUrl('/#keynotes')}>KEYNOTES</a>
        </li>
        <li>
          <a href={makeUrl('/#scholarships')}>STUDENT SCHOLARSHIPS</a>
        </li>
        <li>
          <a href={makeUrl('/showcase')}>DEVELOPER SHOWCASE</a>
        </li>
        <li>
          <a href={makeUrl('/accessibility')}>ACCESSIBILITY</a>
        </li>
        <li>
          <a href={makeUrl('/#visa')}>VISA</a>
        </li>
        <li>
          <a href="mailto:t.trescak@westernsydney.edu.au">
            {' '}
            <i className="fas fa-envelope" />
            &nbsp;&nbsp;CONTACT
          </a>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export class Header extends React.Component {
  render() {
    return (
      <>
        <Mobile />
        <Desktop />
      </>
    );
  }
}
