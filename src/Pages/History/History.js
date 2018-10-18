import React, { Component } from 'react';
import {Grid, Row, PageHeader, Col, Jumbotron, Badge,Glyphicon} from 'react-bootstrap';
import {center} from './history.css';

class History extends Component {
    render() {
        return(
            <Grid>
                <PageHeader className="align-center">History</PageHeader>
                <Row>
                <h3 styles={center}>2018</h3>
                    <Col xs={4} md={2}>
                    <Jumbotron className="align-center">
                    <h4>Oktober</h4>
                    <hr />
                    <p>Lunch <Badge>8 times</Badge></p>
                    <p>You paid <Badge>280;-</Badge></p>
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
                    <p>Lunch <Badge>8 times</Badge></p>
                    <p>You paid <Badge>280;-</Badge></p>
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
                    <p>Lunch <Badge>8 times</Badge></p>
                    <p>You paid <Badge>280;-</Badge></p>
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
                    <p>Lunch <Badge>8 times</Badge></p>
                    <p>The Bill <Badge>280;-</Badge></p>
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
                    <p>Lunch <Badge>8 times</Badge></p>
                    <p>The Bill <Badge>280;-</Badge></p>
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
                    <p>Lunch <Badge>8 times</Badge></p>
                    <p>The Bill <Badge>280;-</Badge></p>
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