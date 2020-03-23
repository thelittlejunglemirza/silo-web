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
import emailjs from 'emailjs-com';
import {templateId, userId} from '../../env';
import FadeIn from 'react-fade-in';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailSent: false
        };
    }

    handleEmailFormSubmit = (event) => {
        event.preventDefault();
        // emailjs.sendForm('default_service', templateId, event.target, userId).then((result) => {
        // alert('sent');
        this.setState({emailSent: true})
        // }, (error) => {
        //     console.log(error.text);
        // });
    }

    render() {
        return (
            <>
                <div className="section section-dark text-center"
                    style={
                        {paddingBottom: "0px"}
                }>
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
                                        {/* <p className="card-description text-center">
                                            Teamwork is so important that it is virtual.
                                        </p> */} </CardBody>
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
                                        {/* <p className="card-description text-center">
                                            A group becomes a team when each member is sure enough.
                                        </p> */} </CardBody>
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
                                        {/* <p className="card-description text-center">
                                            The strength of the team is the strength of each member is the team.
                                        </p> */} </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section section-dark landing-section"
                    style={
                        {paddingTop: "0"}
                }>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                {
                                this.state.emailSent ? (
                                    <FadeIn transitionDuration={600}>
                                        <div >
                                            <h2 className="description text-center">Thanks for the Email</h2>
                                            <br/>
                                        </div>
                                        <div>
                                            <br/>
                                            <p className="description text-center">We will get back to you soon.</p>
                                        </div>
                                    </FadeIn>
                                ) : (
                                    <div> {/* <h2 className="text-center">Keep in touch?</h2> */}
                                        <Form className="contact-form"
                                            onSubmit={
                                                this.handleEmailFormSubmit
                                        }>
                                            <Row>
                                                <Col md="6">
                                                    <label className="description">Name</label>
                                                    <InputGroup>
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="nc-icon nc-single-02"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Name" type="text" name='from_name'/>
                                                    </InputGroup>
                                                </Col>
                                                <Col md="6">
                                                    <label className="description">Company</label>
                                                    <InputGroup>
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="nc-icon nc-spaceship"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Company" type="text" name='from_company'/>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md='12'>
                                                    <label className="description">Email</label>
                                                    <InputGroup>
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="nc-icon nc-email-85"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Email" type="text" name='from_email'/>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <label className="description">Message</label>
                                            <Input placeholder="Tell us your thoughts and feelings..." type="textarea" rows="4" name='message_html'/>
                                            <Row>
                                                <Col className="ml-auto mr-auto" md="4">
                                                    <Button className="btn-fill" color="danger" size="lg">
                                                        Send Message
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                )
                            } </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default ContactUs;
