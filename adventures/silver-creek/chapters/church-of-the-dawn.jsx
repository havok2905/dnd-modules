import React, { Fragment } from "react";
import { EmphasisBlock, PanZoom } from "dnd-module";

import ChurchOfTheDawnImage from "../img/church-of-the-dawn.png";

export const ChurchOfTheDawn = () => {
    return (
        <Fragment>
            <h2>Church of the Dawn</h2>
            <h3>Temple to Lathander</h3>
            <PanZoom>
                <img src={ChurchOfTheDawnImage} alt="Church of the Dawn Map" />
            </PanZoom>
            <p>
                The Temple of Lathander is run by Priestess Tracy Melrose. It is
                low on funds and volunteers. It is missing the resources needed
                to repair old homes that have been damaged during a previous
                dragon attack. They have been losing people rapidly over the
                last year for some unknown reason.
            </p>
            <h4>Morning</h4>
            <EmphasisBlock>
                <p>
                    Oh Morning Lord, we honor your arrival this day, as we bask
                    in the glory of your light. May you shine down upon us, so
                    that we may shine down on others, as we all walk through the
                    rays of your sunshine.
                </p>
            </EmphasisBlock>
            <h4>Dusk</h4>
            <EmphasisBlock>
                <p>
                    Oh Morning Lord, we were honored to walk with you once
                    again. For your light has given us the resolve to quell the
                    forces of darkness that claw at our doors. May we shine
                    brightly until the time comes for us to bask in your warmth
                    again.
                </p>
            </EmphasisBlock>
        </Fragment>
    );
};
