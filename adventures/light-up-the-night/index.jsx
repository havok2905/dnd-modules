import React, { Fragment } from "react";
import { Columns, Footer, Hero, Page, Tools } from "dnd-module";
import { TheTempleOfMaren } from "./chapters/the-temple-of-maren.jsx";
import { TheTempleOfEnkiem } from "./chapters/the-temple-of-enkiem.jsx";
import { ThePalace } from "./chapters/the-palace.jsx";
import { Habarashi } from "./chapters/habarashi.jsx";
import { BossRush } from "./chapters/boss-rush.jsx";
import { FightWithEnkiem } from "./chapters/fight-with-enkiem.jsx";
import { NpcsPage } from "./chapters/npcs.jsx";
import { CustomCreatures } from "./chapters/custom-creatures.jsx";
import { CustomItems } from "./chapters/custom-items.jsx";
import { SloanAndBarry } from "./chapters/sloan-and-barry.jsx";
import { Epilogue } from "./chapters/epilogue.jsx";

import HERO_IMAGE from "./img/hero.png";

const LightUpTheNight = () => {
    return (
        <Fragment>
            <Hero src={HERO_IMAGE} alt="cover image" />
            <Page>
                <h1>Light Up The Night</h1>
                <Columns>
                    <div>
                        <TheTempleOfMaren />
                        <TheTempleOfEnkiem />
                        <Habarashi />
                        <ThePalace />
                        <SloanAndBarry />
                        <BossRush />
                        <FightWithEnkiem />
                        <CustomItems />
                        <CustomCreatures />
                        <NpcsPage />
                        <Epilogue />
                    </div>
                    <div>
                        <Tools />
                    </div>
                </Columns>
            </Page>
            <Footer />
        </Fragment>
    );
};

export { LightUpTheNight };
