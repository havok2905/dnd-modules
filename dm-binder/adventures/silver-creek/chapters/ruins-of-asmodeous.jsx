import React, { Fragment } from "react";
import { PanZoom, ScrollToMe } from "dnd-module";

import RuinsOfAsmodeousBasement from "../img/ruins-of-asmodeous-basement.png";
import RuinsOfAsmodeousGroundFloor from "../img/ruins-of-asmodeous-ground-floor.png";
import RuinsOfAsmodeousRoof from "../img/ruins-of-asmodeous-roof.png";

export const RuinsOfAsmodeous = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="ruins-of-asmodeous" />
            <h2 id="ruins-of-asmodeous">Ruins of Asmodeous</h2>
            <p>
                The Ruins of Asmodeous have been abandoned for over two hundred
                years. As of late, the temple has been back under use. Weekly
                sacrifices are held here in Asmodeous' name. This recent
                activity has gone unnoticed to those who tread near the ruins.
            </p>
            <p>
                The basement contains an old door that leads deep into the
                Silver Creek mines, remnants of a forgotten time when miners
                were active worshipers of the devilish god.
            </p>
            <h3>Basement</h3>
            <PanZoom>
                <img
                    src={RuinsOfAsmodeousBasement}
                    alt="Ruins of Asmodeous Basment Map"
                />
            </PanZoom>
            <h3>Ground Floor</h3>
            <h4>Worshipers</h4>
            <p>
                There are always 4 Cultists on the ground floor standing guard.
                They use their time to study the history of the wars between
                devils and demons, Asmodeous, Sigil, and the gods. They will
                become hostile to anyone that walks through the door and has no
                means of joining the cult.
            </p>
            <PanZoom>
                <img
                    src={RuinsOfAsmodeousGroundFloor}
                    alt="Ruins of Asmodeous Ground Floor Map"
                />
            </PanZoom>
            <h3>Roof</h3>
            <PanZoom>
                <img
                    src={RuinsOfAsmodeousRoof}
                    alt="Ruins of Asmodeous Roof Map"
                />
            </PanZoom>
        </Fragment>
    );
};
