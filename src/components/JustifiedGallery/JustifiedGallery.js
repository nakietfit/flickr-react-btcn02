import React, { Component, Fragment } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import {callAPI} from './../../utils/callAPI'
import Spinner from './../Spinner/Spinner'
import Lightbox from './../Lightbox/Lightbox'
import './../../stylesheets/HoverEffect/Julia.css'
import './JustifiedGallery.css' 

class JustifiedGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 1,
            hasMore: true,
            isOpenLightbox: false,
            images: [],
            currentImage: 0
        };
    }

    loadItems = async () => {
        if (this.state.page > 25) {
            this.setState({
                hasMore: false
            })
            return
        }
        const images = await callAPI(this.state.page)
        this.setState({
            images: this.state.images.concat(images),
            page: this.state.page + 1
        })
    }

    myCallback = (dataFromChild) => {
        this.setState({
            isOpenLightbox: dataFromChild
        })
    }

    handleClick = (i) => {
        this.setState({
            isOpenLightbox: true, 
            currentImage: i
        })
    }

    render() {
        const loader = <Spinner />

        const photos = this.state.images.map((image, i) => {
            const ratio = image.width / image.height
            const flexBasis = 100 * ratio + image.height * ratio

            // Src: https://codepen.io/anon/pen/JmoOEE?editors=1100
            // Name: Flex Justified Image Grid
            const FlexElement = styled.div`
                flex-grow: ${ratio};
                flex-basis: ${flexBasis}px;
                max-height: ${400}px;
                max-width: ${400 * ratio}px;
                background-image: url(${image.src});
                background-position: center;
                &:before {
                    padding-top: ${100 / ratio}%;
                }
            `
            return (
                <FlexElement 
                    key={i} 
                    className="photo effect-julia" 
                    onClick={() => this.handleClick(i)}
                >
                    <div className="info">
                        <div 
                            className="title" 
                            style={{maxWidth: flexBasis}}
                        >
                            {image.caption}
                        </div>
                        <div 
                            className="owner_name" 
                            style={{maxWidth: flexBasis}}
                        >
                            by {image.ownername}
                        </div>
                        <div className="view">
                            <i className="far fa-eye"></i>
                            {image.views}
                        </div>    
                    </div>
                </FlexElement>
            )
        })

        return (
            <Fragment>
                {this.state.isOpenLightbox && (
                    <Lightbox
                        currentImage={this.state.currentImage}
                        images={this.state.images}
                        callbackFromParent={this.myCallback}
                    />
                )}
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => this.loadItems()}
                    hasMore={this.state.hasMore}
                    loader={loader}
                >
                    <div className="tracks">{photos}</div>
                </InfiniteScroll>
            </Fragment>
        );
    }
}

export default JustifiedGallery;
