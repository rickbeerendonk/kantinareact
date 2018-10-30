import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
  Jumbotron,
  Button,
  Badge,
  PageHeader
} from "react-bootstrap";
import DatePicker from "../Components/DatePicker/DatePicker";
import Calendar from "../Components/Calender/Calender";
import "./main.css";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: "God day "
    };
  }

  render() {
    return (
      <Grid className="wrapper">
        <PageHeader>
          {this.state.hello} William
          {/*  Have a great Lunch! <span className="float-right">{this.state.hello} William</span> */}
        </PageHeader>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Jumbotron>
              <Calendar />
            </Jumbotron>
          </Col>
          <Col xs={12} md={4}>
            <Jumbotron>
              <h2>So far</h2>
              <hr />
              <p>
                Lunch <Badge>8 times</Badge>
              </p>
              <p>
                Total this mounth <Badge>280;-</Badge>
              </p>
              <p>
                Total this year <Badge>1580;-</Badge>
              </p>
              <p>
                <Button bsStyle="primary">More information?</Button>
              </p>
            </Jumbotron>
            <Jumbotron>
              <h2>Search history</h2>
              <hr />
              <DatePicker />
              <div className="margin-top">
                <p>
                  {" "}
                  Lunch <Badge>13 times</Badge>
                </p>
                <p>
                  {" "}
                  The bill was <Badge>480;-</Badge>
                </p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MainPage;
