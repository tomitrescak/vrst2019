import * as React from "react";
import { makeUrl } from "./common";
import { Navbar, Nav } from "react-bootstrap";
var header = {
  background: "grey",
  padding: "10px",
  borderRadius: 15,
  opacity: 0.5
};
var styling = {
  color: "#000"
};

const Desktop = () => (
  <header className="site-header">
    <div className="header-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-lg-2">
            <h1 className="site-branding flex">
              <a href={makeUrl("/")}>VRST 2019</a>
            </h1>
          </div>
          <div className="col-2 col-lg-10">
            <nav className="site-navigation" style={header}>
              <ul>
                <li>
                  <a href={makeUrl("/")}>HOME</a>
                </li>

                <li>
                  <a href={makeUrl("/venue")} style={styling}>
                    >VENUE
                  </a>
                </li>
                <li>
                  <a href={makeUrl("/keynote")} style={styling}>
                    >KEYNOTES
                  </a>
                </li>
                <li>
                  <a href={makeUrl("/scholarships")} style={styling}>
                    >STUDENT SCHOLARSHIPS
                  </a>
                </li>
                <li>
                  <a href={makeUrl("/accessibility")} style={styling}>
                    >ACCESSIBILITY
                  </a>
                </li>
                <li>
                  <a href={makeUrl("/team")} style={styling}>
                    >ORGANISATION TEAM
                  </a>
                </li>
                <li>
                  <a href={makeUrl("/visa")} style={styling}>
                    >VISA
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:t.trescak@westernsydney.edu.au"
                    style={styling}
                  >
                    {" "}
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
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">VRST 2019</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <li>
          <a href={makeUrl("/")}>HOME</a>
        </li>
        <li>
          <a href={makeUrl("/venue")}>VENUE</a>
        </li>
        <li>
          <a href={makeUrl("/keynote")}>KEYNOTES</a>
        </li>
        <li>
          <a href={makeUrl("/scholarships")}>STUDENT SCHOLARSHIPS</a>
        </li>
        <li>
          <a href={makeUrl("/accessibility")}>ACCESSIBILITY</a>
        </li>
        <li>
          <a href={makeUrl("/team")}>ORGANISATION TEAM</a>
        </li>
        <li>
          <a href={makeUrl("/visa")}>VISA</a>
        </li>
        <li>
          <a href="mailto:t.trescak@westernsydney.edu.au">
            {" "}
            <i className="fas fa-envelope" />
            &nbsp;&nbsp;CONTACT
          </a>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 1000
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    let windowWidth = this.state.width;
    if (windowWidth < 1000) {
      return <Mobile />;
    } else {
      return <Desktop />;
    }
  }
}
