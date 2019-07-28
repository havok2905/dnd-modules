import React, { Fragment } from "react";
import { DmScreen, Footer, Page } from "../../core/index.js";

import { Overview } from "./chapters/overview";
import { Intro } from "./chapters/intro";
import { Hook } from "./chapters/hook";
import { Factions } from "./chapters/factions";
import { TheTownOfSilverCreek } from "./chapters/the-town-of-silver-creek";
import { TownCentral } from "./chapters/town-central";
import { SilverCreekMine } from "./chapters/silver-creek-mine";
import { RazorbackRidge } from "./chapters/razorback-ridge";
import { DustStormRail } from "./chapters/dust-storm-rail";
import { ChurchOfTheDawn } from "./chapters/church-of-the-dawn";
import { Ranches } from "./chapters/ranches";
import { GreatTomahawkRiver } from "./chapters/great-tomahawk-river";
import { RuinsOfAsmodeous } from "./chapters/ruins-of-asmodeous";
import { Creatures } from "./chapters/creatures";
import { Characters } from "./chapters/characters";

import { TABLE_OF_CONTENTS } from "./constants/table-of-contents/table-of-contents";

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
