import React, { Fragment } from "react";
import { Columns, DmScreen, Footer, Page } from "../../core/index.js";
import { Overview } from "./chapters/overview.jsx";
import { Prologue } from "./chapters/prologue.jsx";
import { Factions } from "./chapters/factions.jsx";
import { WorldMap } from "./chapters/world-map.jsx";
import { EncounteringProfaneSoulFleet } from "./chapters/encountering-profane-soul-fleet.jsx";
import { SkyEncounters } from "./chapters/sky-encounters.jsx";
import { TomeOfMaren } from "./chapters/tome-of-maren.jsx";
import { NewFey } from "./chapters/new-fey.jsx";
import { Krossa } from "./chapters/krossa.jsx";
import { SamsCottage } from "./chapters/sams-cottage.jsx";
import { TempleOfAo } from "./chapters/temple-of-ao.jsx";
import { CustomCreatures } from "./chapters/custom-creatures.jsx";
import { Npcs } from "./chapters/npcs.jsx";

import TABLE_OF_CONTENTS from "./constants/table-of-contents.js";

const JourneyToTheTempleOfAo = () => {
    return (
        <Fragment>
            <Page>
                <h1>Journey to the Temple of Ao</h1>
                <Overview />
                <Prologue />
                <Factions />
                <WorldMap />
                <EncounteringProfaneSoulFleet />
                <SkyEncounters />
                <TomeOfMaren />
                <NewFey />
                <Krossa />
                <SamsCottage />
                <TempleOfAo />
                <CustomCreatures />
                <Npcs />
            </Page>
            <DmScreen
                contentsList={TABLE_OF_CONTENTS}
                hashReferencesSupported={false}
            />
            <Footer />
        </Fragment>
    );
};

export { JourneyToTheTempleOfAo };
