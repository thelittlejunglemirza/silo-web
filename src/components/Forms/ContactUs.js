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
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import emailjs from 'emailjs-com';
import {templateId, userId} from '../../env';
import FadeIn from 'react-fade-in';
import VisibilitySensor from 'react-visibility-sensor';
import validator from 'email-validator';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailSent: false,
            emailFailed: true,
            emailValid: true,
            nameValid: true,
            companyValid: true,
            messageValid: true,
            visibleFlag0: false,
            hasRendered0: false
        };
    }

    handleEmailFormSubmit = (event) => {
        event.preventDefault();

        // get inputted vars
        var submitted_email = event.target.childNodes[1].childNodes[0].childNodes[1].childNodes[1].value;
        var submitted_name = (event.target.childNodes[0].childNodes[0].childNodes[1].childNodes[1].value).trim();
        var submitted_company = (event.target.childNodes[0].childNodes[1].childNodes[1].childNodes[1].value).trim();
        var submitted_message = (event.target.childNodes[3].value).trim();

        // validate inputs
        var email_valid = validator.validate(submitted_email);
        var name_valid = ((submitted_name === '') ? false : true);
        var company_valid = ((submitted_company === '') ? false : true);
        var message_valid = ((submitted_message === '') ? false : true);

        // if everything is good send message
        if(email_valid && name_valid && company_valid && message_valid) {
            emailjs.sendForm('default_service', templateId, event.target, userId).then((result) => {
            this.setState({emailSent: true})
            }, (error) => {
                console.log(error.text);
            });
        }
        else {
            this.setState({
               emailValid: email_valid, 
               nameValid: name_valid,
               companyValid: company_valid,
               messageValid: message_valid
            })
        }
    }

    componentIsVisible(isVisible, num) {
        if ((num === 0) && !this.state.hasRendered0 && isVisible) {
            this.setState({visibleFlag0: true, hasRendered0: true})
        }
    }

    render() {
        return (
            <>
                <div className="section section-dark text-center"
                    style={
                        {paddingBottom: "0px"}
                }>
                    <Container> {
                        this.state.visibleFlag0 ? (
                            <>
                                <FadeIn>
                                    <h2 className="title">Say Hello!</h2>
                                </FadeIn>
                                <Row>
                                    <Col md="4">
                                        <FadeIn delay={300}>
                                            <Card className="card-profile card-plain">
                                                <div className="card-avatar">
                                                    <a 
                                                        href="https://www.linkedin.com/in/arya-rashtchian-442426a1/"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                    >
                                                        <img alt="..."
                                                            src={
                                                                require("assets/img/faces/arya.jpg")
                                                            }/>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a 
                                                        href="https://www.linkedin.com/in/arya-rashtchian-442426a1/"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                    >
                                                        <div className="author">
                                                            <CardTitle tag="h4">Arya Rashtchian</CardTitle>
                                                            <h6 className="card-category">Product Manager</h6>
                                                        </div>
                                                    </a>
                                                    {/* <p className="card-description text-center">
                                                Teamwork is so important that it is virtual.
                                            </p> */} </CardBody>
                                            </Card>
                                        </FadeIn>
                                    </Col>
                                    <Col md="4">
                                        <FadeIn delay={400}>
                                            <Card className="card-profile card-plain">
                                                <div className="card-avatar">
                                                    <a 
                                                        href="https://www.linkedin.com/in/nader-samadyan-b33922126/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img alt="..."
                                                            src={
                                                                require("assets/img/faces/nader.jpg")
                                                            }/>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a 
                                                        href="https://www.linkedin.com/in/nader-samadyan-b33922126/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <div className="author">
                                                            <CardTitle tag="h4">Nader Samadyan</CardTitle>
                                                            <h6 className="card-category">Lead Architect</h6>
                                                        </div>
                                                    </a>
                                                    {/* <p className="card-description text-center">
                                                A group becomes a team when each member is sure enough.
                                            </p> */} </CardBody>
                                            </Card>
                                        </FadeIn>
                                    </Col>
                                    <Col md="4">
                                        <FadeIn delay={500}>
                                            <Card className="card-profile card-plain">
                                                <div className="card-avatar">
                                                    <a 
                                                        href="https://www.linkedin.com/in/ksackvil/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <img alt="..."
                                                            src={
                                                                require("assets/img/faces/kai.jpg")
                                                            }/>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a 
                                                        href="https://www.linkedin.com/in/ksackvil/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <div className="author">
                                                            <CardTitle tag="h4">Kai Sackville-Hii</CardTitle>
                                                            <h6 className="card-category">Lead Architect</h6>
                                                        </div>
                                                    </a>
                                                    {/* <p className="card-description text-center">
                                                The strength of the team is the strength of each member is the team.
                                            </p> */} </CardBody>
                                            </Card>
                                        </FadeIn>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <VisibilitySensor onChange={
                                (v) => this.componentIsVisible(v, 0)
                            }>
                                <div style={{height:'17vh'}}></div>
                            </VisibilitySensor>
                        )
                    } </Container>
                </div>
                <div className="section section-dark landing-section"
                    style={
                        {paddingTop: "0"}
                }>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                {
                                    this.state.visibleFlag0
                                    ? (
                                        <>
                                          {
                                            this.state.emailSent ? (
                                                <>
                                                    {
                                                        this.state.emailFailed ?
                                                        (
                                                            <FadeIn transitionDuration={600}>
                                                                <div>
                                                                    <h2 className="description text-center">Oops something went wrong</h2>
                                                                    <br/>
                                                                </div>
                                                                <div>
                                                                    <br/>
                                                                    <p className="description text-center">Our email service is down at the moment, please message us directly at <b style={{fontWeight: 'bold',color: '#51BCDA'}}>contact@softwaresilo.org</b></p>
                                                                </div>
                                                            </FadeIn>
                                                        ):
                                                        (
                                                            <FadeIn transitionDuration={600}>
                                                                <div>
                                                                    <h2 className="description text-center">Thanks for the Email</h2>
                                                                    <br/>
                                                                </div>
                                                                <div>
                                                                    <br/>
                                                                    <p className="description text-center">We will get back to you soon.</p>
                                                                </div>
                                                            </FadeIn>
                                                        )
                                                    }
                                                </>
                                            ) : (
                                                <FadeIn delay={600}>

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
                                                                    {
                                                                        !this.state.nameValid
                                                                        ? (
                                                                            <span style={{fontSize: '0.8em', textAlign: 'center', color:'#F33816', fontWeight:'bold'}}>
                                                                                <i class="fas fa-asterisk"></i> Required
                                                                            </span>
                                                                        ):
                                                                        (null)
                                                                    }
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
                                                                    {
                                                                        !this.state.companyValid
                                                                        ? (
                                                                            <span style={{fontSize: '0.8em', textAlign: 'center', color:'#F33816', fontWeight:'bold'}}>
                                                                                <i class="fas fa-asterisk"></i> Required
                                                                            </span>
                                                                        ):
                                                                        (null)
                                                                    }
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
                                                                    {
                                                                        !this.state.emailValid 
                                                                        ? (
                                                                            <span style={{fontSize: '0.8em', textAlign: 'center', color:'#F33816', fontWeight:'bold'}}>
                                                                                <i class="fas fa-asterisk"></i> Email invalid
                                                                            </span>
                                                                        ):
                                                                        (null)
                                                                    }
                                                                </Col>
                                                            </Row>
                                                            <label className="description">Message</label>
                                                            <Input placeholder="Tell us your thoughts and feelings..." type="textarea" rows="4" name='message_html'/>
                                                            {
                                                                !this.state.messageValid
                                                                ? (
                                                                    <span style={{fontSize: '0.8em', textAlign: 'center', color:'#F33816', fontWeight:'bold'}}>
                                                                        <i class="fas fa-asterisk"></i> Required
                                                                    </span>
                                                                ):
                                                                (null)
                                                            }
                                                            <Row>
                                                                <Col className="ml-auto mr-auto" md="4">
                                                                    <Button className="btn-fill" color="danger" size="lg">
                                                                        Send Message
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </FadeIn>
                                            )
                                        }
                                        </>
                                    )
                                    :(<div style={{height:'80vh'}}></div>)
                                }
                               </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default ContactUs;
