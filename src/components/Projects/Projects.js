import  React from 'react';

// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import { Carousel } from 'react-responsive-carousel';


import {
    Row,
    Col,
} from "reactstrap";

// import Card from './FlipCard.js'
import Appetize from './Appetize.js';
import Tiny from './Tiny.js';
import VisibilitySensor from 'react-visibility-sensor';
import FadeIn from 'react-fade-in'

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            flipState: false,
            width: window.innerWidth,
            height: window.innerHeight,
            visibleFlag: false,
            hasRendered: false
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        console.log(window.innerWidth);
        
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    // const [cSelected, setCSelected] = useState([]);
    // const [rSelected, setRSelected] = useState(null);

    componentIsVisible(isVisible) {
        if(isVisible && !this.state.hasRendered) {
            this.setState({visibleFlag: true, hasRendered: true})
        }
    }

    nextHandler = () => {
        this.setState({
            flipState: !this.state.flipState
        })
        console.log("From handler:" + this.state.flipState);
    }

    render() {
        console.log("From project:" + this.state.flipState, this.state.width);
        return(
                <>
                
                    { this.state.visibleFlag ?
                        (
                            <>
                                <FadeIn>
                                    <h2 className="title">Our Work</h2>
                                    <p className="description" style={{fontSize: "16px", color: "black"}}>
                                        Hover over or tap a device to see details
                                    </p>
                                </FadeIn>
                                { this.state.width < 1200 ?
                                    (
                                        <Row style={{display: 'flex',  justifyContent:'center', alignSelf:'center'}}>
                                            <Col md='6'>
                                                <FadeIn delay={300}>
                                                    <div style={{paddingTop: '10vh', display: 'flex',  justifyContent:'center', alignSelf:'center'}}>
                                                        <Appetize />
                                                    </div>
                                                </FadeIn>
                                            </Col>
                                            <Col md='6'style={{paddingTop: "12vh", maxWidth:'100vw'}}>
                                                <FadeIn delay={400}>
                                                    <Tiny  />
                                                </FadeIn>
                                            </Col>
                                        </Row>
                                    ):
                                    (
                                        <Row>
                                            <Col md="6" >
                                                <FadeIn delay={300}>
                                                    <Appetize />
                                                </FadeIn>
                                            </Col>
                                            <Col md='6' style={{paddingTop: "12vh"}}>
                                                <FadeIn delay={400}>
                                                    <Tiny  />
                                                </FadeIn>
                                            </Col>
                                        </Row>
                                    )
                                }
                            </>
                        ):
                        (
                            <VisibilitySensor onChange={
                                (v) => this.componentIsVisible(v)
                            }>
                                <div style={{height:'15vh', color:'white'}}>Wake up, Neo...</div>
                            </VisibilitySensor>
                        )
                    }
                    {/* <Card targetId="navi" flip={this.state.flipState}/> */}
                    {/* <Button style={{top: "57vh", right: "7vh", position: "absolute", backgroundColor: "#51BDDA", border: "none"}} onClick={this.nextHandler}><i className="nc-icon nc-button-play"/></Button> */}
                </>
            );
    }
}

export default Projects;