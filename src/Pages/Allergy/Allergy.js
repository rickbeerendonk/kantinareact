import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
  PageHeader,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar,
  Glyphicon,
  Button,
  Form,
  FormControl,
  FormGroup,
  ControlLabel
} from "react-bootstrap";
import "./allergy.css";
import axios from "../../Server/Server";

class Allergy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allergies: {},
      temp:[],
      checked: this.props.change
    };
  }

  postDateToServer = {
    email: "berzi-nawzad.wasfy@capgemini.com"
  }

  axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    }
  }

  async componentDidMount() {
     axios.post('/getAllergies', this.postDateToServer, this.axiosConfig)
     .then(res => this.setState({
       allergies: JSON.parse(res.data)
     }))
  }

  sendCheckedAllergies = () => {
    const tempData = this.state.allergies
    fetch("https://kantinefunctions.azurewebsites.net/api/updateAllergies", {
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      body: JSON.stringify({
        email: "berzi-nawzad.wasfy@capgemini.com",
        data: tempData
      })
    }).catch(error => console.error(error.statusText));
  }; 

  getChange = e => {
    // Preserve data before the event returns to the pool 
    const key = e.target.dataset.key;
    const value = e.target.checked;

    this.setState(state => {
      return {
        allergies: {...state.allergies, [key]: value}
      }
    });
  }

  render() {
    const listItems = Object.entries(this.state.allergies).map(([key, value])=>{
      return (
        <div key={key}>
          <label>
            <input type="checkbox" checked={value} data-key={key} onChange={this.getChange} />
            <strong>{key + ' - '+ value}</strong>
          </label>
        </div>
      )
    })

     /* const listItems = Object.entries(this.state.allergies).map(
      ([key, value]) => {
        return (
          <ButtonToolbar className="to-right">
            {this.state.allergies[key] ? (
              <ToggleButtonGroup type="checkbox">
                <ToggleButton
                  bsStyle="success"
                  className="my-btn active"
                  key={key}
                  value={value}
                  defaultValue={value}
                  checked={this.state.checked}
                >
                  {key}
                </ToggleButton>
              </ToggleButtonGroup>
            ) : (
              <ToggleButtonGroup type="checkbox" defaultValue="false">
                <ToggleButton
                  bsStyle="default"
                  className="my-btn"
                  key={key}
                  value={value}
                >
                  {key}
                </ToggleButton>
              </ToggleButtonGroup>
            )}
          </ButtonToolbar>
        );
      }
    );  */

    return (
      <Grid className="wrapper">
        <PageHeader>Allergies</PageHeader>
        <Row>
          <Col sm={12} md={6}>
            Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
            Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd
            boksättare tog att antal bokstäver och blandade dem för att göra ett
            provexemplar av en bok. Lorem ipsum har inte bara överlevt fem
            århundraden, utan även övergången till elektronisk typografi utan
            större förändringar. Det blev allmänt känt på 1960-talet i samband
            med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och
            senare med mjukvaror som Aldus PageMaker.
          </Col>
          <Col md={6}>
            {listItems}
            <Button
              bsStyle="info"
              className="my-btn btn-update to-right"
              onClick={this.sendCheckedAllergies}
            >
              UPDATE
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <PageHeader>Information</PageHeader>
            <Form horizontal>
              <FormGroup controlId="formHorizontalFullname">
                <Col componentClass={ControlLabel} xs={2}>
                  Fullname
                </Col>
                <Col xs={10}>
                  <strong className="emplyeeInfo">William</strong>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmployeeId">
                <Col componentClass={ControlLabel} xs={2}>
                  Employee_nr
                </Col>
                <Col xs={10}>
                  <strong className="emplyeeInfo">23434</strong>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword1">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword2">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="Re-Enter Password"
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="info" type="submit">
                    UPDATE PASSWORD
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Allergy;
