import React, { Fragment } from "react";
import { PanZoom, RollTable, ScrollToMe } from "../../../core/index.js";

import { MINES_RANDOM_ENCOUNTERS } from "../constants/roll-tables/mines-random-encounters";

import SilverCreekMinesImage from "../img/silver-creek-mines.png";

export const SilverCreekMine = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="silver-creek-mine" />
            <h2 id="silver-creek-mine">The Silver Creek Mine</h2>
            <h3>The Mines</h3>
            <PanZoom>
                <img src={SilverCreekMinesImage} alt="Silver Creek Mines Map" />
            </PanZoom>
            <h4>Random Encounters</h4>
            <RollTable items={MINES_RANDOM_ENCOUNTERS} />
            <h4>A: Entrance &amp; Store Room</h4>
            <p>
                You are lead into a bustling room, crates being wheeled out of
                the mines, all filled with silver, coal, stone, and other mined
                materials.
            </p>
            <h4>B: Smelting Room</h4>
            <p>
                Liquid silver is being poured into trays, forming glowing bars,
                branded with the Silver Creek Mine Company's brand.
            </p>
            <h4>C: Lobby</h4>
            <p>
                Miners come and go from the deeper tunnels of the mine, arriving
                with full wheelbarrows of silver, coal, and other ore. The drop
                off their collection, pick up an empty wheelbarrow and head back
                to work. The workers all look exhausted, filthy, all with looks
                of fear on their faces.
            </p>
            <h4>E: Entrance to Tunnel to Bull's Head Saloon</h4>
            <p>
                Heavy debris obstructs a long tunnel leading down into the
                mines. This tunnel leads into the basement of the Bull's Head
                Saloon.
            </p>
            <h4>F: Secret Entrance to Ruins of Asmodeous</h4>
            <p>
                This room is filled with crates and supplies, covering a single
                trap door in the floor. It leads to a tunnel that goes directly
                to the temple of Asmodeous.
            </p>
            <h4>H &amp; G: Silver Ore Vein</h4>
            <p>
                Both of these rooms contain veins of silver running through the
                walls. If no miners are present, players can roll 1d100 silver
                pieces worth of metal. This can only be done three times per
                room. This will alert any creatures in adjacent rooms.
            </p>
        </Fragment>
    );
};
