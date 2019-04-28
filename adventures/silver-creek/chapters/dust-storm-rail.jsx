import React, { Fragment } from "react";
import { PanZoom } from "dnd-module";

import DustStormRailImage from "../img/dust-storm-rail.png";

export const DustStormRail = () => {
    return (
        <Fragment>
            <h2>The Dust Storm Rail</h2>
            <PanZoom>
                <img src={DustStormRailImage} alt="Dust Storm Rail Map" />
            </PanZoom>
            <h3>Dragon Attack</h3>
            <p>
                Along the Dust Storm Rail, the train will, every so often, fall
                under attack by a Red Shadow Dragon. The train is heavily
                armored and unaffected by the attacks, but measures are still
                taken to fend off the creature as to not bring it into town. The
                train will stop and dozens of men will pile out equipped with
                power spear guns, damaging it enough to make it flee.
            </p>
        </Fragment>
    );
};
