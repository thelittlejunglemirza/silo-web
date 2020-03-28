import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Overlay from 'react-image-overlay';

import { Player } from 'video-react';
import "video-react/dist/video-react.css";

import tsVid from '../../assets/vid/ts.mp4'
import tsPoster from '../../assets/img/projects/ts.png'
import tsLogo from '../../assets/img/ts-logo.png'
import iphone from '../../assets/img/iphone.png'

import './Tiny.css'

class Tiny extends Component {
    render() {
        return (
            <>
                <Row style={{ marginTop: "2.5vh", marginRight: "2vw"}}>
                    <Col>
                        <img src={tsLogo} width={300} alt='frame'/>
                        <img src={tsPoster} width={300} height={380} alt='frame'/>
                    </Col>
                    <Col>
                    {/* <Row> */}
                        {/* </Row>
                        <Row> */}
                        <Player
                            autoPlay={true}
                            muted={true}
                            playsInLine={true}
                            src={tsVid}
                            fluid={false}
                            width={500}
                            className='myPlayer2'
                        />
                        <img src={iphone} className='myFrame2' width={295} height={530} alt='frame'/>
                        {/* </Row> */}
                    <div 
                        style={{
                            width:"30vw",
                            height:"30vh",
                            // backgroundColor:"#fccc8d",
                            borderRadius: "15px",
                            // marginLeft: "-10px",
                            marginTop: "5px",
                            marginBottom: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            verticalAlign: "middle",
                            lineHeight: "90px"
                            }}
                        >
                        <p className="description" style={{paddingLeft: "37px", fontSize:"1.05vw", color: 'black', marginLeft: "40px"}}>
                            A mobile game taking a place in a post-apocalyptic world destroyed by a tragic nuclear incident. 
                            The protagonist and the last remaining human on the planet, shrunk by his own invention, 
                            Professor King, now Tiny Scientist will take advantage of multitude of gameplays, i
                            ncluding construction-management, action RPG, and online-battlefield to fight the inevitable 
                            narrative of the world’s ending. Tiny Scientist is a partnership project with Navabi Media 
                            and it is set out to conquer the mobile gaming sometime in late 2021.
                        </p>
                    </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Tiny;