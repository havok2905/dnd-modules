import React from "react";

import { Page, RollTable, ScrollToMe } from "dnd-module";

import SKY_ROLL_TABLE from "../constants/roll-tables/sky-roll-table";

const SkyEncounters = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="sky-encounters" />
            <h1>Sky Encounters</h1>
            <h2>Random Encounters</h2>
            <RollTable items={SKY_ROLL_TABLE} />
        </Page>
    );
};

export { SkyEncounters };
