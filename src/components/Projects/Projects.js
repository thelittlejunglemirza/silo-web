import  React, { useState, Component } from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

// import Carousel from 'react-bootstrap/Carousel'

import appetize from '../../assets/img/projects/appetize.jpeg'
import ts from '../../assets/img/projects/ts.jpeg'

const items = [
    {
    src: appetize,
    altText: 'Slide 1',
    caption: 'Slide 1'
    },
    {
    src: ts,
    altText: 'Slide 2',
    caption: 'Slide 2'
    },
];


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            animating: false,
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    next = () =>  {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndext === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
        console.log(this.state.setActiveIndex);
    }

    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => this.setState({animating: true})}
                onExited={() => this.setState({animating: false})}
                key={item.src}
                >
                <img src={item.src} alt={item.altText}  style={{height: "75vh", width: "70vw", marginLeft: "8.5vw"}}  />
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    render() {
        return(
                <>
                    <Row>
                    <Col className="ml-auto mr-auto" md={{ size: 12, offset: 3 }}>
                    <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                    >
                    <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex.bind(this)} />
                    {this.slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next.bind(this)} />
                    </Carousel>
                    </Col>
                    </Row>
                </>
            );
    }
}

export default Projects;