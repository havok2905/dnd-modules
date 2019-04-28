import React, { Fragment } from "react";
import { EmphasisBlock, PanZoom } from "dnd-module";

import GreatTomahawkRiverImage from "../img/great-tomahawk-river.png";

export const GreatTomahawkRiver = () => {
    return (
        <Fragment>
            <h2>Great Tomahawk River</h2>
            <PanZoom>
                <img
                    src={GreatTomahawkRiverImage}
                    alt="Great Tomahawk River Map"
                />
            </PanZoom>
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
