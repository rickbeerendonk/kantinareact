import React, { Component } from "react";
import FullCalendar from "fullcalendar-reactwrapper";
import "../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import Moment from "moment";
import axios from "axios";
import "./calender.css";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      tempList: []
    };
  }

  componentDidMount() {
    fetch("https://kantinefunctions.azurewebsites.net/api/getFullHistory/", {
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
        let temp = JSON.parse(res);
        let tempList = [];
        var event = {};
        temp.map(i => {
          let timeFormat = Moment(i).format("YYYY-MM-DD");
          event.title = "Lunch";
          event.start = timeFormat;
          tempList.push({ title: event.title, start: event.start });
        });
        this.setState({
          events: tempList
        });
      });
  }
  /* 
  removeDay = (e) => {
    let t = Moment(e).format("YYYY-MM-DD");
    const copyEvents = [...this.state.events];
    const index = copyEvents.indexOf(t);
    copyEvents.splice(index, 1);

    this.setState({
      events: copyEvents
    })
    console.log(this.state.events);
  } */

  addLunchHandler(startDate, endDate) {
    let end = endDate.format("YYYY-MM-DD");
    let start = startDate.format("YYYY-MM-DD");

    let temp = [];
    for (let i = Moment(start); i < Moment(end); i.add(1, "days")) {
      temp.push(i.format("YYYY-MM-DD"));
      //this.state.events.push({ title: 'Lunch', start: i.format('YYYY-MM-DD') })
    }

    fetch("https://kantinefunctions.azurewebsites.net/api/addLunch", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Authorization: "Bearer",
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      body: JSON.stringify({
        email: "berzi-nawzad.wasfy@capgemini.com",
        dates: temp
      })
    })
  /*   .then(res => {

      console.log(temp);
      const tempEvenets = [...this.state.events];
      //tempEvenets += res;
      //const lunch = res;
      console.log('-------> ', this.state.events);
      //this.setState({ events: {title: 'lunch', start: lunch.format('YYYY-MM-DD')} });
    }) */
    .catch(error => console.error(error.statusText));
  }

 /*  changeCalenderStatus = (event) => {
    this.setState({
      events: event
    })
  } */

 /*  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.events !== nextState.userEvents) {
      return true;
    }
  }
 */
  render() {
    return (
      <div id="example-component">
        <FullCalendar
          id={"calender"}
          header={{
            left: "prev,next ",
            center: "title",
            right: "" // 'month,agendaWeek,agendaDay'
          }}
          defaultDate={new Date().toLocaleDateString("en-US")}
          firstDay={1}
          hiddenDays={[0, 6]}
          navLinks={false}
          editable={true}
          eventLimit={true}
          weekNumbers={true}
          selectable={true}
          stick={true}
          onClick={this.changeCalenderStatus}
          events={this.state.events}
          select={this.addLunchHandler}
        />
      </div>
    );
  }
}

export default Calender;
