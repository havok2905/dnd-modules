import React, { Fragment } from "react";
import { DmScreen, Footer, Page } from "../../core/index.js";

import { Overview } from "./chapters/overview.jsx";
import { Intro } from "./chapters/intro.jsx";
import { Hook } from "./chapters/hook.jsx";
import { Factions } from "./chapters/factions.jsx";
import { TheTownOfSilverCreek } from "./chapters/the-town-of-silver-creek.jsx";
import { TownCentral } from "./chapters/town-central.jsx";
import { SilverCreekMine } from "./chapters/silver-creek-mine.jsx";
import { RazorbackRidge } from "./chapters/razorback-ridge.jsx";
import { DustStormRail } from "./chapters/dust-storm-rail.jsx";
import { ChurchOfTheDawn } from "./chapters/church-of-the-dawn.jsx";
import { Ranches } from "./chapters/ranches.jsx";
import { GreatTomahawkRiver } from "./chapters/great-tomahawk-river.jsx";
import { RuinsOfAsmodeous } from "./chapters/ruins-of-asmodeous.jsx";
import { Creatures } from "./chapters/creatures.jsx";
import { Characters } from "./chapters/characters.jsx";

import TABLE_OF_CONTENTS from "./constants/table-of-contents/table-of-contents";

export const SilverCreek = () => {
    return (
        <Fragment>
            <Page>
                <h1>Silver Creek</h1>
                <Overview />
                <Intro />
                <Hook />
                <Factions />
                <TheTownOfSilverCreek />
                <TownCentral />
                <SilverCreekMine />
                <RazorbackRidge />
                <DustStormRail />
                <ChurchOfTheDawn />
                <Ranches />
                <GreatTomahawkRiver />
                <RuinsOfAsmodeous />
                <Characters />
                <Creatures />
            </Page>
            <DmScreen
                contentsList={TABLE_OF_CONTENTS}
                hashReferencesSupported={false}
            />
            <Footer />
        </Fragment>
    );
};
