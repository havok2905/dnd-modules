import React, { Fragment } from "react";

import { Map, ScrollToMe } from "../../../core/index.js";

import WorldMapImage from "../img/world-map.jpg";

const WorldMap = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="world-map" />
            <h2>World Map</h2>
            <Map src={WorldMapImage} alt="World Map" />
        </Fragment>
    );
};

export { WorldMap };
