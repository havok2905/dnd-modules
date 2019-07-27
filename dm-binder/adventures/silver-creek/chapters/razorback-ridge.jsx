import React, { Fragment } from "react";
import { PanZoom, ScrollToMe } from "../../../core/index.js";

import RazorbackRidgeImage from "../img/razorback-ridge.png";

export const RazorbackRidge = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="razorback-ridge" />
            <h2 id="razorback-ridge">Razorback Ridge</h2>
            <PanZoom>
                <img src={RazorbackRidgeImage} alt="Razorback Ridge Map" />
            </PanZoom>
            <h3>Bandit Camp</h3>
            <p>
                The bandit camp is split in two. The side to the north,
                bordering the small pond, house the senior members of the gang.
                Mad Dog's tent is always closest to the pond. The bottom half
                house the remaining members of the camp.
            </p>
            <p>
                There are always at least 3 out of a maximum of 24 Bandits awake
                at all times. 1 is stationed outside Mad Dog's tent and the
                other two patrol the main camp.
            </p>
            <h3>Mad Dog's Tent</h3>
            <h4>Loot</h4>
            <ul>
                <li>150 GP</li>
                <li>25 SP</li>
                <li>18 CP</li>
                <li>3 Pistols</li>
                <li>60 Bullets</li>
                <li>3 Bottles of Scotch</li>
                <li>1 Old Family Photo</li>
            </ul>
        </Fragment>
    );
};
