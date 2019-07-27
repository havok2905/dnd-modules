import React, { Fragment } from "react";

import { RollTable, ScrollToMe } from "dnd-module";

import SKY_ROLL_TABLE from "../constants/roll-tables/sky-roll-table";

const SkyEncounters = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="sky-encounters" />
            <h2>Sky Encounters</h2>
            <h3>Random Encounters</h3>
            <RollTable items={SKY_ROLL_TABLE} />
        </Fragment>
    );
};

export { SkyEncounters };
