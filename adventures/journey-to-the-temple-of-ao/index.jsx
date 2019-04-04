import React, { Fragment } from "react";
import {
    Columns,
    Footer,
    Hero,
    Page,
    TableOfContents,
    Tools
} from "dnd-module";
import { Overview } from "./chapters/overview.jsx";
import { Prologue } from "./chapters/prologue.jsx";
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

import TABLE_OF_CONTENTS from "./constants/table-of-contents.js";

import HeroImage from "./img/hero.png";

const JourneyToTheTempleOfAo = () => {
    return (
        <Fragment>
            <Hero src={HeroImage} alt="adventure cover image" />
            <Page>
                <h1>Journey to the Temple of Ao</h1>
                <Columns>
                    <div>
                        <Overview />
                        <Prologue />
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
                    </div>
                    <div>
                        <h2>Table of Contents</h2>
                        <TableOfContents
                            contentsList={TABLE_OF_CONTENTS}
                            hashReferencesSupported={false}
                        />
                        <h2>Tools</h2>
                        <Tools />
                    </div>
                </Columns>
            </Page>

            <Footer scrollButton={true} rollForm={true} />
        </Fragment>
    );
};

export { JourneyToTheTempleOfAo };
