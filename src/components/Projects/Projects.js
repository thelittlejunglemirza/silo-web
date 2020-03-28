import  React, { useState, Component } from 'react';

// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import { Carousel } from 'react-responsive-carousel';


import {
    Row,
    Button
} from "reactstrap";

import Card from './FlipCard.js'


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            flipState: false
        };
    }

    // const [cSelected, setCSelected] = useState([]);
    // const [rSelected, setRSelected] = useState(null);

    nextHandler = () => {
        this.setState({
            flipState: !this.state.flipState
        })
        console.log("From handler:" + this.state.flipState);
    }

    render() {
        console.log("From project:" + this.state.flipState);
        return(
                <>
                    <Card targetId="navi" flip={this.state.flipState}/>
                    <Button style={{top: "57vh", right: "7vh", position: "absolute", backgroundColor: "#51BDDA", border: "none"}} onClick={this.nextHandler}><i className="nc-icon nc-button-play"/></Button>
                </>
            );
    }
}

export default Projects;