import React, { Fragment } from "react";
import { PanZoom } from "dnd-module";

import SilverCreekMinesImage from "../img/silver-creek-mines.png";

export const SilverCreekMine = () => {
    return (
        <Fragment>
            <h2>The Silver Creek Mine</h2>
            <h3>The Lobby</h3>
            <h3>The Mines</h3>
            <PanZoom>
                <img src={SilverCreekMinesImage} alt="Silver Creek Mines Map" />
            </PanZoom>
            <h4>Random Encounters</h4>
            <h4>A: Entrance & Store Room</h4>
            <h4>B: Smelting Room</h4>
            <h4>C: Lobby</h4>
            <h4>E: Entrance to Tunnel to Bull's Head Saloon</h4>
            <h4>F: Secret Entrance to Ruins of Asmodeous</h4>
            <h4>G: Silver Ore Vein</h4>
            <h4>H: Silver Ore Vein</h4>
        </Fragment>
    );
};
