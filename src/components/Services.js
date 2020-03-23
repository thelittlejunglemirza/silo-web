import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import FadeIn from 'react-fade-in';
// core components

class Services extends React.Component {
    render() {
        return (
            <div className="section section-dark text-center"
                style={
                    {height: "100vh"}
            }>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="title">Our Services</h2>
                            <FadeIn transitionDuration={600}>
                                <h5 className="description">
                                    We have developed our expertise in Multiple Technologies, as a Core Development Organisation. We work alongside our customers throughout the entire process, identifying their needs at the outset and defining functionalities until the product is complete. Our aim is to deliver desired results.
                                </h5>
                                <br/>
                            </FadeIn>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-album-2"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Beautiful Gallery</h4>
                                    <p className="description">
                                        Spend your time generating new ideas. You don't have to
                                                                                                                                                                                                    think of implementing.
                                    </p>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-bulb-63"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">New Ideas</h4>
                                    <p>
                                        Larger, yet dramatically thinner. More powerful, but
                                                                                                                                                                                                    remarkably power efficient.
                                    </p>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-chart-bar-32"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Statistics</h4>
                                    <p>
                                        Choose from a veriety of many colors resembling sugar
                                                                                                                                                                                                    paper pastels.
                                    </p>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-sun-fog-29"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Delightful design</h4>
                                    <p>
                                        Find unique and handmade delightful designs related items
                                                                                                                                                                                                    directly from our sellers.
                                    </p>
                                    <Button className="btn-link" color="info" href="#pablo">
                                        See more
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Services;
