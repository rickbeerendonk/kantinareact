import React,  { Component } from 'react';
import {Grid, Col, Row, Jumbotron, PageHeader, ToggleButtonGroup, ToggleButton, Table, Glyphicon} from 'react-bootstrap';
import './allergy.css';
 
const allergies = [
    {id: 1, name: 'Lactose intolerance'},
    {id: 2, name: 'Egg'},
    {id: 3, name: 'Fish'},
    {id: 4, name: 'Sea food'},
    {id: 5, name: 'Soya'},
    {id: 6, name: 'Gluten'},
    {id: 7, name: 'Peanuts'},
    {id: 8, name: 'Nuts'},
    {id: 9, name: 'celery'},
    {id: 1, name:  'Mustard'},
    {id: 1, name:  'Sesame'},
    {id: 1, name:  'Lupine'}
];
 
class CheckboxListSecondary extends Component {
  state = {
    checked: [1],
    checkboxStatus:  false
  };

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

 
 
  render() {
      const leftSideList = allergies.slice(0, allergies.length / 2);
      const rightSideList = allergies.slice(allergies.length / 2);
    return (
      
      <Grid>
        <PageHeader className="text-center">
              Add or remove your Allergies.
        </PageHeader>
        <Row>
        <Col xs={12} md={6}>
        <Jumbotron>
            <h4>Type<span className="float-right">Status</span></h4>
            {
                leftSideList.map((index) => {
                    return(
                        <Table>
                            <tbody>
                            <tr>
                                <td><p>{index.name}</p></td>
                            <td>
                                <ToggleButtonGroup className="float-right" type="checkbox" name="options">
                                    <ToggleButton key={index.id} value={0}>
                                        <Glyphicon glyph="glyphicon glyphicon-ok" />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </td> 
                            </tr>
                            </tbody>
                        </Table>
                    )
                })
            }
        </Jumbotron>
        </Col>
        <Col xs={12} md={6}>
        <Jumbotron>
        <h4>Type<span className="float-right">Status</span></h4>
            {
                rightSideList.map((index) => {
                    return(
                        <Table>
                            <tbody>
                                <tr>
                                    <td><p>{index.name}</p></td>
                                <td>
                                    <ToggleButtonGroup className="float-right" type="checkbox" name="options">
                                        <ToggleButton key={index.id} value={0}>
                                            <Glyphicon glyph="glyphicon glyphicon-remove" />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </td> 
                                </tr>
                            </tbody>
                        </Table>
                    )
                })
            }
        </Jumbotron>
        </Col>          
        </Row>
  
        </Grid>
      
    );
  }
}



export default CheckboxListSecondary;
