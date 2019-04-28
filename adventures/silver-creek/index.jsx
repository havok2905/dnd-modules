import React, { Fragment } from "react";
import { Columns, Footer, Hero, Page, Tools } from "dnd-module";

import { Overview } from "./chapters/overview.jsx";
import { Intro } from "./chapters/intro.jsx";
import { Hook } from "./chapters/hook.jsx";
import { Factions } from "./chapters/factions.jsx";
import { TheTownOfSilverCreek } from "./chapters/the-town-of-silver-creek.jsx";
import { TownCentral } from "./chapters/town-central.jsx";
import { RazorbackRidge } from "./chapters/razorback-ridge.jsx";
import { DustStormRail } from "./chapters/dust-storm-rail.jsx";
import { ChurchOfTheDawn } from "./chapters/church-of-the-dawn.jsx";
import { Ranches } from "./chapters/ranches.jsx";
import { GreatTomahawkRiver } from "./chapters/great-tomahawk-river.jsx";
import { RuinsOfAsmodeous } from "./chapters/ruins-of-asmodeous.jsx";
import { Creatures } from "./chapters/creatures.jsx";
import { Characters } from "./chapters/characters.jsx";

import HeroImage from "./img/hero.png";

export const SilverCreek = () => {
    return (
        <Fragment>
            <Hero src={HeroImage} alt="adventure cover image" />
            <Page>
                <h1>Silver Creek</h1>
                <Columns>
                    <div>
                        <Overview />
                        <Intro />
                        <Hook />
                        <Factions />
                        <TheTownOfSilverCreek />
                        <TownCentral />
                        <h2>The Silver Creek Mine</h2>
                        <h3>The Lobby</h3>
                        <h3>The Mines</h3>
                        <RazorbackRidge />
                        <DustStormRail />
                        <ChurchOfTheDawn />
                        <Ranches />
                        <GreatTomahawkRiver />
                        <RuinsOfAsmodeous />
                        <Characters />
                        <Creatures />
                    </div>
                    <div>
                        <h2>Tools</h2>
                        <Tools />
                    </div>
                </Columns>
            </Page>
            <Footer />
        </Fragment>
    );
};
