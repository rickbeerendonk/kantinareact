import React, { Component} from 'react';
import  {
    Navbar, NavItem, Nav
} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import './navigation.css';
import AllergyPage from '../../Pages/Allergy/Allergy';
import HistoryPage from '../../Pages/History/History';
import MainPage from '../../Pages/Main';

class NavbarMain extends Component {
    
    state = {
        status: false
    }

    checkUserStatus = () => {
        this.setState({
            status: !this.state.status
        })
    }

    render(){
        return(
            <div>
                <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link className="nav-text" to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem><Link className="nav-text" to={{
                        pathname: '/history'
                    }}>History</Link></NavItem>
                    <NavItem><Link className="nav-text" to={{
                        pathname: '/allergy'
                    }}>Allergies</Link></NavItem>

                  {/*   <NavItem eventKey={1} href="/history">History</NavItem>
                    <NavItem eventKey={2} href="/allergy">Allergies</NavItem> */}
                </Nav>
              
                <Nav pullRight>
                {
                    this.checkUserStatus ?
                    <NavItem eventKey={1}><Link className="nav-text" to="/">Log Out?</Link></NavItem>
                    :
                    <NavItem eventKey={1}><Link className="nav-text" to="/">Login</Link></NavItem>
                }
               
                </Nav>
               {/*  <Navbar.Text pullRight>
                Signed in as: <spen className="user">William judi </spen>
                </Navbar.Text> */}
            
                </Navbar>

                <Route path="/" exact component={MainPage} />
                <Route path="/history" exact component={HistoryPage} />
                <Route path="/allergy" exact component={AllergyPage} />
            </div>
        );
    }
}

export default NavbarMain;

