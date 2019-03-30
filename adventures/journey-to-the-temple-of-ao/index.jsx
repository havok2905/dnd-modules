import React, { Fragment } from "react";
import { Footer, Page } from "dnd-module";
import { Overview } from "./chapters/overview.jsx";
import { Factions } from "./chapters/factions.jsx";
import { WorldMap } from "./chapters/world-map.jsx";
import { EncounteringProfaneSoulFleet } from "./chapters/encountering-profane-soul-fleet.jsx";
import { SkyEncounters } from "./chapters/sky-encounters.jsx";
import { NewFey } from "./chapters/new-fey.jsx";
import { Krossa } from "./chapters/krossa.jsx";
import { SamsCottage } from "./chapters/sams-cottage.jsx";
import { TempleOfAo } from "./chapters/temple-of-ao.jsx";
import { CustomCreatures } from "./chapters/custom-creatures.jsx";
import { Npcs } from "./chapters/npcs.jsx";

const JourneyToTheTempleOfAo = () => {
    return (
        <Fragment>
            <Page>
                <h1>Journey to the Temple of Ao</h1>
            </Page>
            <Overview />
            <Factions />
            <WorldMap />
            <EncounteringProfaneSoulFleet />
            <SkyEncounters />
            <NewFey />
            <Krossa />
            <SamsCottage />
            <TempleOfAo />
            <CustomCreatures />
            <Npcs />
            <Footer scrollButton={true} quickRefButton={true} rollForm={true} />
        </Fragment>
    );
};

export { JourneyToTheTempleOfAo };
