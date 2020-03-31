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
    Container,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import ContactUs from 'components/Forms/ContactUs.js';
import Projects from 'components/Projects/Projects.js';
import Services from 'components/Services/Services.js';
import { templateId } from "env";

const imageAssets = [
    require('../assets/img/gifs/loadAni1.gif'),
    // IndexHeader
    require('../assets/img/silobg.jpg'),
    require('../assets/img/SiloLogo.png'),
    // ContactUs
    require("../assets/img/faces/arya.jpg"),
    require("../assets/img/faces/nader.jpg"),
    require("../assets/img/faces/kai.jpg"),
    // Appetize
    require('../assets/img/appetize-logo.png'),
    require('../assets/img/iphone.png' ),
    require('../assets/img/projects/appetize-poster.jpg'),
    // Tiny
    require('../assets/img/ts-logo.png'),
    require('../assets/img/projects/ts_poster.jpg'),
]
// require('../assets/vid/ts.mp4'),
// require('../assets/vid/appetize.mp4'),

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            imgsReady: false,
            loadIconReady: false
        };

        this.contactRef=null //used for scrolling to contact form
        this.projectsRef=null //used for scrolling to projects page
        this.servicesRef=null //used for scrolling to services page

        this.imgLoadCount = 0;
        

        // These next three lines might be unessary
        document.documentElement.classList.remove("nav-open");
        document.body.classList.add("profile-page");
        document.body.classList.remove("profile-page");
    }

    componentDidMount() {
        // let tempImgs = [];

        // var preLoad = new Promise((resolve, reject) => {
        //     imageAssets.forEach((value, index, array) => {      
        //         console.log(value);
                      
        //         const img = new Image();
        //         img.src = value; // by setting an src, you trigger browser download
                
        //         img.onload = () => {
        //             tempImgs.push(img);
        //         }

        //         if (index === array.length -1) resolve();
        //     });
        // });
        
        // preLoad.then(() => {
        //     this.setState({imgsReady: true, imgs: tempImgs});
        // });
    }    

    handleImageLoaded() {
        this.imgLoadCount++;
        console.log(this.imgLoadCount);
        

        if(this.imgLoadCount >= imageAssets.length) {
            this.setState({imgsReady: true})
        }
        // else if(src==='assets/img/gifs/loadAni1.gif' && !this.state.loadIconReady) {
        //     this.setState({loadIconReady: true})
        // }
    }
    
    handleImageErrored() {
        console.log(`failed to load img ${this.imgLoadCount+1}`);
    }

    // scroll handlers
    scrollToServicesRef = () => window.scrollTo(0, this.servicesRef.offsetTop)
    scrollToProjectRef = () => window.scrollTo(0, this.projectsRef.offsetTop)
    scrollToContactRef = () => window.scrollTo(0, this.contactRef.offsetTop)

    render() {
        return (
            <div>
                { this.state.imgsReady ?
                    (   <>
                            <IndexNavbar 
                                scrollHandler0={this.scrollToServicesRef} 
                                scrollHandler1={this.scrollToProjectRef} 
                                scrollHandler2={this.scrollToContactRef}
                            />
                            <IndexHeader 
                                scrollHandler={this.scrollToContactRef}
                            />
                            <div className="main">
                                <div ref={ (ref) => this.servicesRef=ref }></div>
                                <Services/>
                                <div ref={ (ref) => this.projectsRef=ref }></div>
                                <div className="section section-white text-center"
                                    style={
                                        {minHeight: "100vh"}
                                }>
                                    <Container>
                                        <Projects/>
                                    </Container>
                                </div>
                                <div ref={ (ref) => this.contactRef=ref }></div>
                                <ContactUs/>
                            </div>
                            <Footer/>
                        </>
                    ):
                    (
                        <>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                                <img src={require('../assets/img/gifs/loadAni1.gif')}/>
                            </div>
                            <div id='preload'>
                                {
                                    imageAssets.map((url) =>
                                        <img 
                                            src={url} 
                                            onLoad={this.handleImageLoaded.bind(this)}
                                            onError={this.handleImageErrored.bind(this)}
                                        />
                                    )
                                }
                            </div>
                        </>
                    )
                }
            </div>
        );
    }
}

export default LandingPage;
