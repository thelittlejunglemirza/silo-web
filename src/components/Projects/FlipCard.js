import React from "react";

import Background from '../../assets/img/silobg.jpg'


import Appetize from './Appetize.js';
import Tiny from './Tiny.js'

// Styles
const cardContainerStyles = { // width: 200,
    minHeight: "80vh",
    minWidth: "57vw",
    background: "')",
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
    minHeight: "80vh",
    minWidth: "57vw",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    paddingTop: "20px",
    borderRadius: "35px",
    boxShadow: "1px 1px 35px #444",
    // background: "')",
    // background: '#484E52',
    background: "')",
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
// class CardImg extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={imgContainerStyles}
//                 className="imgContainer">
//                 <img src={
//                         this.props.imgSrc
//                     }
//                     className="img"
//                     style={imgStyles}/>
//             </div>
//         )
//     }
// }

// class CardTitle extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="titleDiv">
//                 <h1 id={
//                         this.props.targetId
//                     }
//                     style={titleStyles}
//                     className="title">
//                     {
//                     this.props.title
//                 }</h1>
//             </div>
//         )
//     }
// }

// class CardBack extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div style={cardBackStyles}
//                 className="cardBack"></div>
//         )
//     }
// }

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flip: this.props.flip
        }
    }
    componentWillMount() {

    }
    render() {
        console.log("From card:" + this.state.flip);
        
        return (
            <div className="flipperContainer">
                <div className="flipper">
                    <div style={cardContainerStyles}
                        className="cardFront cardContainer">
                        <Appetize />
                    </div>
                    <div style={cardBackStyles}
                        className="cardBack">
                        <Tiny />
                    </div>
                </div>
            </div>
        )
    }
}

// example usage
//<CardContainer imgSrc="http://1.bp.blogspot.com/-tso_pF4jEdU/UPC4zDXEY6I/AAAAAAAAAhE/Vb2Cd8nRZEo/s1600/a.jpg" cardBackImgSrc="https://i.pinimg.com/564x/1e/7e/4d/1e7e4d11c01e57f32410ece8c1961646.jpg" targetId="navi"/>

export default Card