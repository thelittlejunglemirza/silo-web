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

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section landing-section">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            {
                            this.props.emailSent ? (
                                <div>
                                    <h2 className="text-center">Thanks for the Email!</h2>
                                    <br></br>
                                    <p className="text-center">We will get back to you soon.</p>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-center">Keep in touch?</h2>
                                    <Form className="contact-form"
                                        onSubmit={
                                            this.props.handleEmailFormSubmit
                                    }>
                                        <Row>
                                            <Col md="6">
                                                <label>Name</label>
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
                                                <label>Company</label>
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
                                                <label>Email</label>
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
                                        <label>Message</label>
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
        );
    }
}

export default ContactUs;
