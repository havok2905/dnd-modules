import React from "react";

import { Page, PanZoom, ScrollToMe } from "dnd-module";

import WorldMapImage from "../img/world-map.jpg";

const WorldMap = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="world-map" />
            <h1>World Map</h1>
            <PanZoom>
                <img src={WorldMapImage} alt="World Map" />
            </PanZoom>
        </Page>
    );
};

export { WorldMap };
