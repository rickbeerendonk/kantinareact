import React, { Component } from 'react';
//import {Calendar} from 'react-calendar';
//import $ from 'jquery';
//import Moment from 'moment';
import {Grid, Col, Row, Jumbotron, Button, Badge, PageHeader} from 'react-bootstrap';
import '../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import DatePicker from '../Components/DatePicker/DatePicker';
import FullCalendar from 'fullcalendar-reactwrapper';
import './main.css';


class MainPage extends Component {
  constructor(props) {
      super(props);
    
      this.state = {
        hello: 'God day ',
        externalData: null,
        lunch: [],
        events: [],
        /* events:[
           {
            title: 'Lunch',
            start: '2018-10-15',
            end: '2018-10-16'
        } 
      ], */     
    }
  }


    async componentDidMount () {
      const response = await fetch('https://kantinefunctions.azurewebsites.net/api/getHistory', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        body: JSON.stringify({
            "email": "berzi-nawzad.wasfy@capgemini.com",
            "year": 2018,
            "month": 10
        })
     })
     .then(res => {
       return(
         res.json()
       ) 
     });
     console.log('response -- ',response);
  }   
    

 /*    getDaysClicked = (startDate, endDate) => {      
      let newEndDate = endDate;
      newEndDate.subtract(1, 'days').format('YYYY-MM-DD');
      //let data = JSON.stringify(this.state.events.push({title: 'Lunch' , start: startDate.format(), end: endDate.format()}));
      
      let data = { title: 'Lunch', start: startDate.format(), end: endDate.format() };
      axios.post( '/lunch.json', data );
    } 
 */
    /* addLunchHandler = (start, end) => {
      let newEndDate = end;
      newEndDate.subtract(1, 'days').format('YYYY-MM-DD');

      let data = { title: 'Lunch time', start: start.format(), end: end.format() };
      axios.post( '/addLunch/lunch.json', data );
    } */

    addLunchHandler = (startDate, endDate) => {
      let start = startDate.format();
      let newEndDate = endDate;
      newEndDate.subtract(1, 'days').format('YYYY-MM-DD');
      let data = [start, newEndDate.format()];

      const temp = data.map(i => {
        return i;
      })
      console.log(temp)
      fetch('https://kantinefunctions.azurewebsites.net/api/addLunch', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          'email': 'berzi-nawzad.wasfy@capgemini.com',
          'dates': this.temp,
        })
      }).then((response) => {
          console.log(response);
      })
      .catch(error => console.error(error));

    }

  

    render(){
        return(
            <Grid>
            <PageHeader >
              <Button onClick={this.getDateFromServer}>ok</Button>
            {this.state.hello} William
             {/*  Have a great Lunch! <span className="float-right">{this.state.hello} William</span> */}
            </PageHeader>
            <Row className="show-grid">
            <Col xs={12} md={8}>
              <Jumbotron>
              <FullCalendar
                    id = {'calender'}
                    header = {{
                        left: 'prev,next ',
                        center: 'title',
                        right: '' // 'month,agendaWeek,agendaDay'
                    }}
                    defaultDate= { new Date().toLocaleDateString("en-US") }
                    firstDay = {1}
                    hiddenDays = {[0, 6]}
                    navLinks= {false} 
                    editable= {true}
                    eventLimit= {true}
                    weekNumbers = {true}
                    selectable = {true}
                    stick = {true}
                    events = {this.state.events}
                    select = {this.addLunchHandler}       
                /> 


                 <h1>Lunch?</h1>
                <hr />
              </Jumbotron>
            </Col>
            <Col xs={12} md={4}>
              <Jumbotron>
                <h2>So far</h2>
                <hr />
                <p>Lunch <Badge>8 times</Badge></p>
                <p>Total this mounth <Badge>280;-</Badge></p>
                <p>Total this year <Badge>1580;-</Badge></p>
                <p>
                  <Button bsStyle="primary">More information?</Button>
                </p>
              </Jumbotron>
              <Jumbotron>
                <h2>Search history</h2>
                <hr />
                <DatePicker />
                <div className="margin-top">
                  <p> Lunch  <Badge>13 times</Badge></p>
                  <p> The bill was <Badge>480;-</Badge></p>
                </div>
              </Jumbotron>
            </Col>
            </Row>
          </Grid> 
        )
    }
}

export default MainPage;