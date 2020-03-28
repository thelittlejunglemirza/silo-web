import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'reactstrap';
import MobileStoreButton from 'react-mobile-store-button';
import Overlay from 'react-image-overlay'

import appetizeLogo from '../../assets/img/appetize-logo.png'
import appetizeVid from '../../assets/vid/appetize.mp4'
import iphone from '../../assets/img/iphone.png'

import { Player } from 'video-react';
import "video-react/dist/video-react.css";

import './Appetize.css'

import Card from './FlipCard.js'

class Appetize extends Component {
    render() {
        const iOSUrl = 'https://apps.apple.com/ca/app/appetize/id1492938675';
        const droidUrl = 'https://play.google.com/store/apps/details?id=com.appetizevm.menuapp';
        return(
            <>
                <Card 
                    front={
                        <>
                            <Player
                                autoPlay={true}
                                muted={true}
                                playsInLine={true}
                                src={appetizeVid}
                                fluid={false}
                                width={250}
                                className='myPlayer'
                            />
                            <img src={iphone} className='myFrame' width={277} alt='frame'/>
                        </>
                    } 
                    back={
                        <>
                            <Row>
                                <Col>
                                    <img src={appetizeLogo} alt={"appetize logo"} style={{maxHeight:"80px", maxWidth: "260px", paddingLeft: "20px"}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div 
                                        style={{
                                            width:"261px",
                                            height:"320px",
                                            borderRadius: "15px",
                                            paddingLeft: "6px",
                                            textAlign: "justify"
                                            }}
                                        >
                                        <p className="description" style={{padding: "3px", fontSize:"14px", color: 'black'}}>
                                            <strong>
                                            Paper menus do not belong in today's dynamic world, they
                                            are slow to update, limited in the information they convey,
                                            and costly to the environment. Appetize, a digital menu, is
                                            the solution. Our mission is to replace every paper menu
                                            with Appetize, a digital menu. Customers scan a restaurant
                                            specific QR code, located on the table, using Appetize
                                            mobile app and the digitalize menu will appear.
                                            Restaurants can edit their digital menu real-time and see
                                            AI-based analytics on their customer base.
                                            </strong>
                                        </p>
                                    </div>
                                </Col>
                                <Row  className="text-center" style={{paddingLeft:"60px"}}>
                                    <Col style={{marginLeft: "25px", padding:"0px"}}>
                                        <MobileStoreButton
                                            store="ios"
                                            url={iOSUrl}
                                            linkProps={{ title: 'iOS Store Button' }}
                                            height="50px"
                                            />
                                    </Col>
                                    <Col tyle={{margin: "0", padding:"0px"}}>
                                        <MobileStoreButton
                                            store="android"
                                            url={droidUrl}
                                            linkProps={{ title: 'android store button' }}
                                            />
                                    </Col>
                                </Row>
                            </Row>
                        </>
                    } 
                    targetId="navi"
                    name="Appetize"
                    />
                {/* <Row style={{ marginTop: "5vh", marginRight: "5vw", marginLeft: "5vw"}}>
                    <Col>
                        <Player
                            autoPlay={true}
                            muted={true}
                            playsInLine={true}
                            src={appetizeVid}
                            fluid={false}
                            width={220}
                            className='myPlayer'
                        />
                        <img src={iphone} className='myFrame' width={245} alt='frame'/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <img src={appetizeLogo} alt={"appetize logo"} style={{maxHeight:"20vh", maxWidth:"20vw"}}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div 
                                    style={{
                                        width:"30vw",
                                        height:"30vh",
                                        // backgroundColor:"#fccc8d",
                                        borderRadius: "15px",
                                        marginLeft: "14px",
                                        marginTop: "5px",
                                        }}
                                    >
                                    <p className="description" style={{padding: "10px", fontSize:"1.05vw", color: 'black'}}>
                                        Paper menus do not belong in today's dynamic world, they
                                        are slow to update, limited in the information they convey,
                                        and costly to the environment. Appetize, a digital menu, is
                                        the solution. Our mission is to replace every paper menu
                                        with Appetize, a digital menu. Customers scan a restaurant
                                        specific QR code, located on the table, using Appetize
                                        mobile app and the digitalize menu will appear.
                                        Restaurants can edit their digital menu real-time and see
                                        AI-based analytics on their customer base.
                                    </p>
                                </div>
                            </Col>
                            <Row  className="text-center" style={{paddingLeft:"60px"}}>
                                <Col style={{marginLeft: "25px", padding:"0px"}}>
                                    <MobileStoreButton
                                        store="ios"
                                        url={iOSUrl}
                                        linkProps={{ title: 'iOS Store Button' }}
                                        height="50px"
                                        />
                                </Col>
                                <Col tyle={{margin: "0", padding:"0px"}}>
                                    <MobileStoreButton
                                        store="android"
                                        url={droidUrl}
                                        linkProps={{ title: 'android store button' }}
                                        />
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row> */}
            </>
        );
    }
}

export default Appetize;