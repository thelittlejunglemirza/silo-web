import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import FadeIn from 'react-fade-in';
import CardContainer from 'components/Services/FlipCard.js'
import VisibilitySensor from 'react-visibility-sensor';

const text0 = 'At Software Silo we have developed our expertise in multiple technologies, as a core development organization. We work alongside our customers throughout the entire process, identifying their needs at the outset and defining functionalities until the product is complete. Our aim is to deliver desired results.'
const text1 = 'We develop native, web, and cross-platform custom applications for customer engaging solutions, enterprise & business workflow optimizations, useful & precise utilities, captivating educational platforms, lifestyle & entertainment access plus much more. Whatever the customer desires, we deliver.';
const text2 = "An efficient and well-managed IT implementation can bring a competitive advantage. Intelligent workflows can help modernize your legacy systems and make your business run efficiently. Our services utilize artificial intelligence, automation and the Internet of Things (IoT) to co-create custom workflows and build tailor-made solutions that fit your industry and audiences."
const textAnimationTime = 5000;

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
            this.conductor();
            this.setState({visibleFlag0: true, hasRendered0: true})
        } else if ((num === 1) && !this.state.hasRendered1 && isVisible) {
            this.setState({visibleFlag1: true, hasRendered1: true})
        }
    }

    conductor() {
        var tempTextNum = this.state.textNum + 1;
        this.setState({textNum: tempTextNum})

        setTimeout(() => this.conductor(), textAnimationTime); // timeout in msec
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
                        {
                        !this.state.visibleFlag0 ? (
                            <VisibilitySensor onChange={
                                (v) => this.componentIsVisible(v, 0)
                            }>
                                <div className="potters-cloke"></div>
                            </VisibilitySensor>
                        ) : (
                            <span></span>
                        )
                    }
                        {/* {
                        (() => {
                            switch (this.state.textNum % 3) {
                                case 0:
                                    return (
                                        <h5 className="description animate-flicker potters-cloke">
                                            {text0}</h5>
                                    )
                                case 1:
                                    return (
                                        <h5 className="description animate-flicker potters-cloke">
                                            {text1}</h5>
                                    )
                                case 2:
                                    return (
                                        <h5 className="description animate-flicker potters-cloke">
                                            {text2}</h5>
                                    )
                                default:
                                    return(null)
                            }
                        })()
                    } */}
                        <br/>
                    </Col>
                </Row>
                <br/><br/> 
                {this.state.visibleFlag1 
                            ? ( <><Row>
                                <Col md="3">
                                    <FadeIn delay={80}>
                                        <div className="info">
                                            <div className="icon icon-info">
                                                <i className="nc-icon nc-album-2"/>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Access to Experts</h4>
                                                <p className="description">
                                                    Spend your time generating new ideas. You don't have to think of implementing.
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </Col>
                                <Col md="3">
                                    <FadeIn delay={350}>
                                        <div className="info">
                                            <div className="icon icon-info">
                                                <i className="nc-icon nc-bulb-63"/>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Cost Savings</h4>
                                                <p>
                                                    Larger, yet dramatically thinner. More powerful, but remarkably power efficient.
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </Col>
                                <Col md="3">
                                    <FadeIn delay={450}>
                                        <div className="info">
                                            <div className="icon icon-info">
                                                <i className="nc-icon nc-chart-bar-32"/>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Resources</h4>
                                                <p>
                                                    Choose from a veriety of many colors resembling sugar paper pastels.
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </Col>
                                <Col md="3">
                                    <FadeIn delay={650}>
                                        <div className="info">
                                            <div className="icon icon-info">
                                                <i className="nc-icon nc-sun-fog-29"/>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Cooperation Model</h4>
                                                <p>
                                                    Find unique and handmade delightful designs related items directly from our sellers.
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </Col>
                            </Row>
                            <Row>
                            <Col md="3">
                                <FadeIn delay={80}>
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-album-2"/>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Access to Experts</h4>
                                            <p className="description">
                                                Spend your time generating new ideas. You don't have to think of implementing.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                            <Col md="3">
                                <FadeIn delay={350}>
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-bulb-63"/>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Cost Savings</h4>
                                            <p>
                                                Larger, yet dramatically thinner. More powerful, but remarkably power efficient.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                            <Col md="3">
                                <FadeIn delay={450}>
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-chart-bar-32"/>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Resources</h4>
                                            <p>
                                                Choose from a veriety of many colors resembling sugar paper pastels.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                            <Col md="3">
                                <FadeIn delay={650}>
                                    <div className="info">
                                        <div className="icon icon-info">
                                            <i className="nc-icon nc-sun-fog-29"/>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Cooperation Model</h4>
                                            <p>
                                                Find unique and handmade delightful designs related items directly from our sellers.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                        </Row></>):(                    <VisibilitySensor onChange={
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
