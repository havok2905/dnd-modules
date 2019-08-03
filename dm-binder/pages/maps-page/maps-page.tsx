import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import React, { Component, Fragment } from "react";

import { IMapsPageProps } from "./interfaces/i-maps-page-props";
import { IMapsPageState } from "./interfaces/i-maps-page-state";
import { Maps } from "./maps";

const photos = Maps.map(image => {
    return {
        alt: image.name,
        height: 1,
        src: image.src,
        title: image.name,
        width: 1
    };
});

class MapsPage extends Component<IMapsPageProps, IMapsPageState> {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            viewerIsOpen: false
        };
    }

    openLightBox = (event, { photo, index }) => {
        this.setState({ currentImage: index, viewerIsOpen: true });
    };

    closeLightBox = () => {
        this.setState({ currentImage: 0, viewerIsOpen: false });
    };

    render() {
        return (
            <Fragment>
                <Gallery onClick={this.openLightBox} photos={photos} />
                <ModalGateway>
                    {this.state.viewerIsOpen ? (
                        <Modal onClose={this.closeLightBox}>
                            <Carousel
                                currentIndex={this.state.currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </Fragment>
        );
    }
}

export { MapsPage };
