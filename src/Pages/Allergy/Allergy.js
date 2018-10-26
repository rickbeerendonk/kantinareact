import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
  Jumbotron,
  PageHeader,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar,
  Table,
  Glyphicon
} from "react-bootstrap";
import "./allergy.css";

const allergies = [
  { id: 1, name: "Lactose intolerance", value: true },
  { id: 2, name: "Egg", value: false },
  { id: 3, name: "Fish", value: false },
  { id: 4, name: "Sea food", value: true },
  { id: 5, name: "Soya", value: false },
  { id: 6, name: "Gluten", value: false },
  { id: 7, name: "Peanuts", value: false },
  { id: 8, name: "Nuts", value: false },
  { id: 9, name: "celery", value: false },
  { id: 10, name: "Mustard", value: false },
  { id: 11, name: "Sesame", value: false },
  { id: 12, name: "Lupine", value: false }
];

class Allergy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1],
      allergies: [],
      checkboxClicked: false,
      checkedList: [2, 3]
    };
  }

  /*  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }; */

  componentDidMount() {
    fetch("https://kantinefunctions.azurewebsites.net/api/getAllergies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      body: JSON.stringify({
        email: "berzi-nawzad.wasfy@capgemini.com"
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        // const temp = res.json();

        this.setState({
          allergies: res
        });
      });
  }

  createCheckbox = () => {
    this.state.allergies.map(x => {
      console.log(x);
    });
  };

  getAllergies = () => {
    const tempList = [];
    allergies.map(x => {
      if(x.value === true){
        tempList.push(x.id);
      }
    });
    return tempList;
  }

  test() {
    const listLenght = this.state.allergies.length;
    console.log(this.state.allergies);
    //let value = Object.values(JSON.parse(this.state.allergies));
    //let key = Object.keys(JSON.parse(this.state.allergies));
   /*  for(let i = 0; i <= listLenght; i++){
      console.log(key[i]+' '+value[i])
    } */
  }

  render() {
    /*  const leftSideList = allergies.slice(0, allergies.length / 2);
    const rightSideList = allergies.slice(allergies.length / 2);
 */
   

    /*  for(let i in tempList){
      return(<li>{tempList}</li>)
    } */

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            {this.test()}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <ButtonToolbar>
            <ToggleButtonGroup
                    type="checkbox"
                    defaultValue={this.getAllergies()}
                  >
              {allergies.map(x => {
                return (
                    <ToggleButton  key={x.id} value={x.id}>
                     {x.name}
                    </ToggleButton>
                );
              })}
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
      /*  <Grid>
        <PageHeader className="text-center">
          Add or remove your Allergies.
        </PageHeader>
        <Row>
          <Col xs={12} md={6}>
            <Jumbotron>
              <h4>
                Type
                <span className="float-right">Status</span>
              </h4>
              {leftSideList.map(index => {
                return (
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p>{index.name}</p>
                        </td>
                        <td>
                          <ToggleButtonGroup
                            className="float-right"
                            type="checkbox"
                            name="options"
                          >
                            <ToggleButton key={index.id} value={0} onClick={ this.checkboxClickedHandler }>
                              <Glyphicon glyph="glyphicon glyphicon-ok" />
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </Jumbotron>
          </Col>
          <Col xs={12} md={6}>
            <Jumbotron>
              <h4>
                Type
                <span className="float-right">Status</span>
              </h4>
              {rightSideList.map(index => {
                return (
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p>{index.name}</p>
                        </td>
                        <td>
                          <ToggleButtonGroup
                            className="float-right"
                            type="checkbox"
                            name="options"
                          >
                            <ToggleButton key={index.id} value={0}>
                              <Glyphicon glyph="glyphicon glyphicon-remove" />
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </Jumbotron>
          </Col>
        </Row>
      </Grid> */
    );
  }
}

export default Allergy;
