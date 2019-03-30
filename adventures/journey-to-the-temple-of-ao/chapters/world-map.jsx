import React from "react";

import { Page, PanZoom } from "dnd-module";

import WorldMapImage from "../img/world-map.jpg";

const WorldMap = () => {
    return (
        <Page>
            <h1>World Map</h1>
            <PanZoom>
                <img src={WorldMapImage} alt="World Map" />
            </PanZoom>
        </Page>
    );
};

export { WorldMap };
