import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  Nav,
  Glyphicon,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import "./navigation.css";
import AllergyPage from "../../Pages/Allergy/Allergy";
import HistoryPage from "../../Pages/History/History";
import MainPage from "../../Pages/Main";

class NavbarMain extends Component {
  state = {
    status: false
  };

  checkUserStatus = () => {
    this.setState({
      status: !this.state.status
    });
  };

  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <strong>LogOut?</strong>
      </Tooltip>
    );
    const tooltipHome = (
      <Tooltip id="tooltip">
        <strong>Main page</strong>
      </Tooltip>
    );
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="nav-text" to="/">
              <OverlayTrigger placement="bottom" overlay={tooltipHome}>
                <Glyphicon glyph="glyphicon glyphicon-home" />
                </OverlayTrigger>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link
                  className="nav-text"
                  to={{
                    pathname: "/history"
                  }}
                >
                  History
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-text"
                  to={{
                    pathname: "/allergy"
                  }}
                >
                  Allergies
                </Link>
              </NavItem>

              {/*   <NavItem eventKey={1} href="/history">History</NavItem>
                    <NavItem eventKey={2} href="/allergy">Allergies</NavItem> */}
            </Nav>

            <Nav pullRight>
              {this.checkUserStatus ? (
                <NavItem eventKey={1}>
                  <Link className="nav-text" to="/">
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                      <Glyphicon glyph="glyphicon glyphicon-log-out" />
                    </OverlayTrigger>
                  </Link>
                </NavItem>
              ) : (
                <NavItem eventKey={1}>
                  <Link className="nav-text" to="/">
                    Login
                  </Link>
                </NavItem>
              )}
            </Nav>
            {/*  <Navbar.Text pullRight>
                Signed in as: <spen className="user">William judi </spen>
                </Navbar.Text> */}
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact component={MainPage} />
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/allergy" exact component={AllergyPage} />
      </div>
    );
  }
}

export default NavbarMain;
