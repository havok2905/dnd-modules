import React, { Fragment } from "react";

import { DmScreen, Footer, Page } from "../../core/index.js";

import { Overview } from "./chapters/overview";
import { Prologue } from "./chapters/prologue";
import { Factions } from "./chapters/factions";
import { WorldMap } from "./chapters/world-map";
import { EncounteringProfaneSoulFleet } from "./chapters/encountering-profane-soul-fleet";
import { SkyEncounters } from "./chapters/sky-encounters";
import { TomeOfMaren } from "./chapters/tome-of-maren";
import { NewFey } from "./chapters/new-fey";
import { Krossa } from "./chapters/krossa";
import { SamsCottage } from "./chapters/sams-cottage";
import { TempleOfAo } from "./chapters/temple-of-ao";
import { CustomCreatures } from "./chapters/custom-creatures";
import { NpcsPage } from "./chapters/npcs";

import { TABLE_OF_CONTENTS } from "./constants/table-of-contents";

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
                <NpcsPage />
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
