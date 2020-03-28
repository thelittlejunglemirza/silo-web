import React from "react";

// reactstrap components
import {Container, Row, Col} from "reactstrap";
import FadeIn from 'react-fade-in';
// import CardContainer from 'components/Services/FlipCard.js'
import VisibilitySensor from 'react-visibility-sensor';

const text0 = 'Software Silo has the resources to make your ideas a reality. Our team is comprised of experts in all areas of the development cycle, which allows us to create innovative solutions at an affordable cost.  We work alongside our customers every step of the project, creating strong rapport and an opportunity for long-term partnerships.'
const text1 = 'At Software Silo we have developed our expertise in multiple technologies as a core development organization. We create custom cross-platform mobile and web applications for customer engaging solutions. Our services utilize artificial intelligence and UX design to build tailor-made solutions that fit your industry and audiences.'
// const textAnimationTime = 5000;

class Services extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textNum: -1,
            visibleFlag0: false,
            hasRendered0: false,
            visibleFlag1: false,
            hasRendered1: false
        }

    }

    componentIsVisible(isVisible, num) {
        if ((num === 0) && !this.state.hasRendered0 && isVisible) {
            this.setState({visibleFlag0: true, hasRendered0: true})
        } else if ((num === 1) && !this.state.hasRendered1 && isVisible) {
            this.setState({visibleFlag1: true, hasRendered1: true})
        }
    }

    render() {
        return (<div className="section section-dark text-center"
            style={
                {minHeight: "100vh"}
        }>
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        {/* <h2 className="title">Our Services</h2> */}
                        <br/>
                    </Col>
                </Row>
                <br/><br/> 
                {this.state.visibleFlag0 
                    ? (<>
                        <Row>
                            <Col md='6'>
                                <FadeIn>
                                    <div>
                                        <h2 className="title">Our Model</h2>
                                        <div className="description">
                                            <p>
                                                {text0}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                            <Col md='6'>
                                <Row>
                                    <Col md="6">
                                        <FadeIn delay={300}>
                                            <div className="info">
                                                <div className="icon icon-info">
                                                    <i class="fas fa-users"></i>
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title" style={{marginTop: 0}}>Access to Experts</h4>
                                                    {/* <p className="description">
                                                        Spend your time generating new ideas. You don't have to think of implementing.
                                                    </p> */}
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </Col>
                                    <Col md="6">
                                        <FadeIn delay={400}>
                                            <div className="info">
                                                <div className="icon icon-info">
                                                    <i class="fas fa-piggy-bank"></i>
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title" style={{marginTop: 0}}>Cost Savings</h4>
                                                    {/* <p>
                                                        Larger, yet dramatically thinner. More powerful, but remarkably power efficient.
                                                    </p> */}
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FadeIn delay={300}>
                                            <div className="info" style={{paddingTop: '6vh'}}>
                                                <div className="icon icon-info">
                                                    <i class="fas fa-tree"></i>
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title" style={{marginTop: 0}}>Resources</h4>
                                                    {/* <p>
                                                        Choose from a veriety of many colors resembling sugar paper pastels.
                                                    </p> */}
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </Col>
                                    <Col md="6">
                                        <FadeIn delay={400}>
                                            <div className="info" style={{paddingTop: '6vh'}}>
                                                <div className="icon icon-info">
                                                    <i class="fas fa-building"></i>
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title" style={{marginTop: 0}}>Cooperation Model</h4>
                                                    {/* <p>
                                                        Find unique and handmade delightful designs related items directly from our sellers.
                                                    </p> */}
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        
                        </>
                    )
                    :(<VisibilitySensor onChange={
                            (v) => this.componentIsVisible(v, 0)
                        }>
                            <div style={{height:'15vh'}}></div>
                        </VisibilitySensor>)
                    }             
                    <div style={{minHeight: '18vh'}}></div>
                    {this.state.visibleFlag1 
                        ? (<>
                            <Row>
                                <Col md='6'>
                                    <FadeIn>
                                        <div>
                                            <h2 className="title" style={{marginTop:10}}>Our Expertise</h2>
                                            <div className="description">
                                                <p>
                                                    {text1}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </Col>
                                <Col md='6'>
                                    <Row>
                                        <Col md="6">
                                            <FadeIn delay={300}>
                                                <div className="info">
                                                    <div className="icon icon-info">
                                                        <i class="fas fa-mobile"></i>
                                                    </div>
                                                    <div className="description">
                                                        <h4 className="info-title" style={{marginTop: 0}}>Mobile Apps</h4>
                                                        {/* <p className="description">
                                                            Spend your time generating new ideas. You don't have to think of implementing.
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </Col>
                                        <Col md="6">
                                            <FadeIn delay={400}>
                                                <div className="info">
                                                    <div className="icon icon-info">
                                                        <i class="fas fa-laptop"></i>
                                                    </div>
                                                    <div className="description">
                                                        <h4 className="info-title" style={{marginTop: 0}}>Web Apps</h4>
                                                        {/* <p>
                                                            Larger, yet dramatically thinner. More powerful, but remarkably power efficient.
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <FadeIn delay={300}>
                                                <div className="info" style={{paddingTop: '6vh'}}>
                                                    <div className="icon icon-info">
                                                        <i class="fas fa-paint-brush"></i>
                                                    </div>
                                                    <div className="description">
                                                        <h4 className="info-title" style={{marginTop: 0}}>UX/UI Design</h4>
                                                        {/* <p>
                                                            Choose from a veriety of many colors resembling sugar paper pastels.
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </Col>
                                        <Col md="6">
                                            <FadeIn delay={400}>
                                                <div className="info" style={{paddingTop: '6vh'}}>
                                                    <div className="icon icon-info">
                                                        <i class="fas fa-brain"></i>
                                                    </div>
                                                    <div className="description">
                                                        <h4 className="info-title" style={{marginTop: 0}}>Artificial Intelligence</h4>
                                                        {/* <p>
                                                            Find unique and handmade delightful designs related items directly from our sellers.
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            </>
                        )
                        :(<VisibilitySensor onChange={
                                (v) => this.componentIsVisible(v, 1)
                            }>
                                <div style={{height:'15vh'}}></div>
                            </VisibilitySensor>)
                        }    
                    </Container>
                </div>

                )
            }
        }

        export default Services;


       