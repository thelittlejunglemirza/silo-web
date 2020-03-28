import React from "react";

import Background from '../../assets/img/silobg.jpg'

// Styles
const cardContainerStyles = { // width: 200,
    minHeight: "250px",
    // background: "')",
    backgroundImage: `url(${Background})`,
    // background:'#0d181e',
    borderRadius: 35,
    boxShadow: "1px 1px 10px #444"
};
const imgContainerStyles = {
    backgroundColor: "#fff",
    height: "35%",
    margin: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    background: "#444",
    backgroundSize: "cover"
}

const titleStyles = {
    color: "#555",
    fontWeight: "100",
    outline: "none",
    margin: "0px",
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    position: "relative",
    top: "-75px"
};
const subTitleStyles = {
    position: "relative",
    top: "-95px",
    textAlign: "center",
    fontWeight: "100",
    color: "#888"
};

const cardBackStyles = {
    // height: 500,
    // width: 300,
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    paddingTop: "20px",
    borderRadius: "35px",
    boxShadow: "1px 1px 35px #444",
    // background: "')",
    background: '#484E52',
    backgroundSize: "cover",
    backgroundPosition: "right"
}
const madeByStyles = {
    color: "#fff",
    opacity: ".5",
    textAlign: "center",
    padding: "0px"
}

const imgStyles = {
    width: 200,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
}

const cardBackImgStyles = {
    height: "100%",
    width: "100%",
    borderRadius: 35,
    position: "absolute"

}

// Components
class CardImg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={imgContainerStyles}
                className="imgContainer">
                <img src={
                        this.props.imgSrc
                    }
                    className="img"
                    style={imgStyles}/>
            </div>
        )
    }
}

class CardTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="titleDiv">
                <h1 id={
                        this.props.targetId
                    }
                    style={titleStyles}
                    className="title">
                    {
                    this.props.title
                }</h1>
            </div>
        )
    }
}

class CardBack extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={cardBackStyles}
                className="cardBack"></div>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Jake Sully",
            subTitle: "@Na'vi_4_Lyf",
            bio: "Sick of doctors telling me what I couldn't do. I was a marine. A warrior... of the uh... Jarhead Clan. My cup is empty.",
            direction: "forwards"
        }
    }
    componentWillMount() {
        if (this.props.type == "wick") {
            this.setState({title: "John Wick", subTitle: "@HighOctane", bio: "People keep asking if I'm back and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back."});
        } else if (this.props.type == "groot") {
            this.setState({title: "Groot", subTitle: "@iAmGroot", bio: "I am Groot. I am Groot... I am Groot, I am Groot, I am Groot I am Groot. I am Groot. I am Groot. I am Groot."})
        } else if (this.props.type == "hitgirl") {
            this.setState({title: "Mindy Mcready", subTitle: "@HitGirl", bio: "I can't see through walls but I can kick your ass. I think some tasers look gay. Robin wishes he was me."})
        }
    }
    render() {

        return (
            <div className="flipperContainer">
                <div className="flipper">
                    <div style={cardContainerStyles}
                        className="cardFront cardContainer">
                        {/* <CardImg imgSrc={
                            this.props.imgSrc
                        }/> */}
                        {/* <CardTitle targetId={
                                this.props.targetId
                            }
                            title={
                                this.state.title
                            }
                            subTitle={
                                this.state.subTitle
                            }/> */}
                        <div className="icon icon-info">
                            <i className="nc-icon nc-album-2"/>
                        </div>
                        <div className="description">
                            <h4 className="info-title">Access to Experts</h4>
                        </div>
                    </div>
                    <div style={cardBackStyles}
                        className="cardBack">
                        <div className="icon icon-info">
                            <i className="nc-icon nc-album-2"/>
                        </div>
                        <div className="description">
                            {/* <h4 className="info-title">Access to Experts</h4> */}
                            <p className="description">
                                Spend your time generating new ideas. You don't have to think of implementing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// example usage
//<CardContainer imgSrc="http://1.bp.blogspot.com/-tso_pF4jEdU/UPC4zDXEY6I/AAAAAAAAAhE/Vb2Cd8nRZEo/s1600/a.jpg" cardBackImgSrc="https://i.pinimg.com/564x/1e/7e/4d/1e7e4d11c01e57f32410ece8c1961646.jpg" targetId="navi"/>

export default Card
