import React, { Fragment } from "react";
import { ScrollToMe } from "../../../core/index.js";

export const Overview = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="overview" />
            <h2 id="overview">Overview</h2>
            <p>
                <strong>Suggested Level: 3</strong>
            </p>
            <p>
                Worshipers of Asmodeous have begun to meet in secret,
                sacrificing local cattle stolen from farms for his help. Their
                efforts fruitless, they have turned to local elderly, homeless,
                and children. A family's youngest son has just been kidnapped,
                being prepared for sacrifice.
            </p>
            <p>
                In exactly three days, they will meet again on the night of an
                eclipse, to make their sacrifice.
            </p>
            <ul>
                <li>
                    If they succeed, a Bone Devil is summoned to aid the
                    cultists, proceeding to slaughter the town.
                </li>
                <li>If they are stopped, nothing happens</li>
            </ul>
        </Fragment>
    );
};
