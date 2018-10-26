import React, { Component } from "react";
import {
  Grid,
  Row,
  PageHeader,
  Col,
  Jumbotron,
  Badge,
  Glyphicon
} from "react-bootstrap";
import Moment from "moment";
import { center } from "./history.css";
import Server from "../../Server/Server";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      counter: 0,
      cost: 0,
      year: 0,
      days: 0
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
          event.title = Moment(i).format("MMMM");
          event.start = timeFormat;
          tempList.push({ title: event.title, start: event.start });
        });

        this.setState({
          history: tempList,
          counter: tempList.length,
          cost: tempList.length * 35
        });
        console.log();
      });
  }

  getLunchDays = () => {};

  render() {
    console.log(this.state.history);
    return (
      <Grid>
        <PageHeader className="align-center">History</PageHeader>
        <Row>
          {/*  this.state.history.map(x => {
              let day = Moment(x.start).format('DD');
              //console.log(day)
              let months = Moment(x.start).format('MM');
              console.log(months)
            })  */}
        </Row>
        <Row>
          <h3 styles={center}>2018</h3>
          <Col xs={4} md={2}>
            <Jumbotron className="align-center">
              <h4>Oktober</h4>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                You paid <Badge>280;-</Badge>
              </p>
              <p className="glyph">
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
              </p>
            </Jumbotron>
          </Col>
          <Col xs={4} md={2}>
            <Jumbotron className="align-center">
              <h4>June</h4>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                You paid <Badge>280;-</Badge>
              </p>
              <p className="glyph, align-center">
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
              </p>
            </Jumbotron>
          </Col>
          <Col xs={4} md={2}>
            <Jumbotron className="align-center">
              <h4>April</h4>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                You paid <Badge>280;-</Badge>
              </p>
              <p className="glyph">
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
              </p>
            </Jumbotron>
          </Col>
          <Col xs={4} md={2}>
            <Jumbotron className="align-center">
              <h4>Mars</h4>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                The Bill <Badge>280;-</Badge>
              </p>
              <p className="glyph">
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
              </p>
            </Jumbotron>
          </Col>
          <Col xs={4} md={2}>
            <Jumbotron className="align-center">
              <h4>Mars</h4>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                The Bill <Badge>280;-</Badge>
              </p>
              <p className="glyph">
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
              </p>
            </Jumbotron>
          </Col>
          <Col xs={4} md={2}>
            <Jumbotron className="align-center">
              <h4>Mars</h4>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                The Bill <Badge>280;-</Badge>
              </p>
              <p className="glyph">
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
                <Glyphicon className="" glyph="glyphicon glyphicon-barcode" />
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default History;
