import React, { Fragment } from "react";
import { EmphasisBlock, Map, ScrollToMe } from "../../../core/index.js";

import GreatTomahawkRiverImage from "../img/great-tomahawk-river.png";

export const GreatTomahawkRiver = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="great-tomahawk-river" />
            <h2 id="great-tomahawk-river">Great Tomahawk River</h2>
            <Map src={GreatTomahawkRiverImage} alt="Great Tomahawk River Map" />
            <EmphasisBlock>
                <p>
                    A pair of horses can be seen, heads lowered to the base of
                    the river, drinking in peace, in the shade of a tall
                    boulder. Beyond that, we see a mountainous ridge, on top
                    sports a singular stone tower, two stories tall, and in
                    disrepair.
                </p>
            </EmphasisBlock>
        </Fragment>
    );
};
