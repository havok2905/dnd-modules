import React, { Fragment } from "react";

import { PanZoom, ScrollToMe } from "dnd-module";

import WorldMapImage from "../img/world-map.jpg";

const WorldMap = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="world-map" />
            <h2>World Map</h2>
            <PanZoom>
                <img src={WorldMapImage} alt="World Map" />
            </PanZoom>
        </Fragment>
    );
};

export { WorldMap };
