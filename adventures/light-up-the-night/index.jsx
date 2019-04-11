import React, { Fragment } from "react";
import { Columns, Footer, Hero, Page, Tools } from "dnd-module";
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
                        <h2>The Temple of Maren</h2>
                        <h2>The Temple of Enkiem</h2>
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
