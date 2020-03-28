/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/Footer.js";
import emailjs from 'emailjs-com';
import ContactUs from 'components/Forms/ContactUs.js';

import Projects from 'components/Projects/Projects.js';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailSent: false
        };

        // These next three lines might be unessary
        document.documentElement.classList.remove("nav-open");
        document.body.classList.add("profile-page");
        document.body.classList.remove("profile-page");
    }

    handleEmailFormSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('default_service', 'template_1KGjDScA', event.target, 'user_v0igoBzsR3441mcbVQAkx').then((result) => {
            alert('sent');
            this.setState({emailSent: true})
        }, (error) => {
            console.log(error.text);
        });
    }

    render() {
        return (
            <div>
                <ExamplesNavbar/>
                <LandingPageHeader/>
                <div className="main">
                    <div className="section section-dark text-center" style={{minHeight: "100vh"}}>
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title">Let's talk product</h2>
                                    <h5 className="description">
                                        We have developed our expertise in Multiple Technologies, as a Core Development Organisation. We work alongside our customers throughout the entire process, identifying their needs at the outset and defining functionalities until the product is complete. Our aim is to deliver desired results.
                                    </h5>
                                    <br/>
                                    <Button className="btn-round" color="info" href="#pablo"
                                        onClick={
                                            e => e.preventDefault()
                                    }>
                                        See Details
                                    </Button>
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
                                            </Button>xw
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section section-white text-center" style={{minHeight: "100vh"}}>
                    <Container>
                        <h2 className="title">Our Work</h2>
                        {/* <Row> */}
                        
                        <Projects/>
                            {/* <Appetize/> */}
                            {/* <Tiny/> */}
                        {/* </Row> */}
                        {/* <CardContainer targetId="navi"/> */}
                    </Container>
                    </div>
                    <div className="section section-dark text-center" style={{paddingBottom: "0px"}}>
                        <Container>
                            <h2 className="title">Say Hello!</h2>
                            <Row>
                                <Col md="4">
                                    <Card className="card-profile card-plain">
                                        <div className="card-avatar">
                                            <a href="#pablo"
                                                onClick={
                                                    e => e.preventDefault()
                                            }>
                                                <img alt="..."
                                                    src={
                                                        require("assets/img/faces/arya.jpg")
                                                    }/>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo"
                                                onClick={
                                                    e => e.preventDefault()
                                            }>
                                                <div className="author">
                                                    <CardTitle tag="h4">Arya Rashtchian</CardTitle>
                                                    <h6 className="card-category">Product Manager</h6>
                                                </div>
                                            </a>
                                            <p className="card-description text-center">
                                                Teamwork is so important that it is virtual.
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-profile card-plain">
                                        <div className="card-avatar">
                                            <a href="#pablo"
                                                onClick={
                                                    e => e.preventDefault()
                                            }>
                                                <img alt="..."
                                                    src={
                                                        require("assets/img/faces/nader.jpg")
                                                    }/>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo"
                                                onClick={
                                                    e => e.preventDefault()
                                            }>
                                                <div className="author">
                                                    <CardTitle tag="h4">Nader Samadyan</CardTitle>
                                                    <h6 className="card-category">Lead Architect</h6>
                                                </div>
                                            </a>
                                            <p className="card-description text-center">
                                                A group becomes a team when each member is sure enough.
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-profile card-plain">
                                        <div className="card-avatar">
                                            <a href="#pablo"
                                                onClick={
                                                    e => e.preventDefault()
                                            }>
                                                <img alt="..."
                                                    src={
                                                        require("assets/img/faces/kai.jpg")
                                                    }/>
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo"
                                                onClick={
                                                    e => e.preventDefault()
                                            }>
                                                <div className="author">
                                                    <CardTitle tag="h4">Kai Sackville-Hii</CardTitle>
                                                    <h6 className="card-category">Lead Architect</h6>
                                                </div>
                                            </a>
                                            <p className="card-description text-center">
                                                The strength of the team is the strength of each member is the team.
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                      <ContactUs handleEmailFormSubmit={
                          (e) => this.handleEmailFormSubmit(e)
                      }
                      emailSent={
                          this.state.emailSent
                      }/>
                </div>
                <DemoFooter/>
            </div>
        );
    }
}

export default LandingPage;
