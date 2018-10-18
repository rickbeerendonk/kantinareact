import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './footer.css';

const footer = () => {
    return(
        <div className="footer-container">
            <Grid>
                <Row>
                    <Col xs={12}>
                        <blockquote>
                            <p>mer info kanske? vet ej...</p>
                            <p className="">All rights reserved by Capgemini. Copyright © { new Date().getFullYear()}</p>
                        </blockquote>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default footer;