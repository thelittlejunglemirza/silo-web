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
import {Button, Container} from "reactstrap";

// core components

class LandingPageHeader extends React.Component {
    constructor(props) {
        super(props);

        this.pageHeader = React.createRef();

        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                this.pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    }

    render() {
        return (
            <>
                <div style={
                        {
                            backgroundImage: "url(" + require("assets/img/silobg.jpg") + ")"
                        }
                    }
                    className="page-header"
                    data-parallax={true}
                    ref={
                        this.LandingPageHeaderpageHeader
                }>
                    <div className="filter"/>
                    <Container>
                        <div className="motto text-center">
                            <h1>This Is 
                                <img alt="..."
                                    src={
                                        require("assets/img/SiloLogo.png")
                                    }
                                    style={
                                        {
                                            height: "6vh",
                                            marginBottom: 25,
                                            marginLeft: 5
                                        }
                                    }/></h1>
                            <h3 style={{marginTop:0}}>Optimizing the World One Constraint at a Time.</h3>
                            <br/> {/* <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
              >
                <i className="fa fa-play" />
                Watch video
              </Button> */}
                            <Button className="btn-round" color="neutral" type="button" outline
                                onClick={
                                    this.props.scrollHandler
                            }>
                                Contact
                            </Button>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default LandingPageHeader;
