import React, { Component, Fragment } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import { IMapProps } from "./interfaces/i-map-props";
import { IMapState } from "./interfaces/i-map-state";

export class Map extends Component<IMapProps, IMapState> {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }

    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    };

    render() {
        const { alt, src } = this.props;
        const { modalIsOpen } = this.state;

        return (
            <Fragment>
                <img
                    alt={alt}
                    className="map"
                    onClick={this.toggleModal}
                    src={src}
                    title={alt}
                />
                <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel views={[{ src }]} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </Fragment>
        );
    }
}
