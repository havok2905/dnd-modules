import React, { Fragment } from "react";
import { DmScreen, Footer, Page } from "../../core/index.js";
import { Intro } from "./chapters/intro";
import { TheTempleOfMaren } from "./chapters/the-temple-of-maren";
import { TheTempleOfEnkiem } from "./chapters/the-temple-of-enkiem";
import { ThePalace } from "./chapters/the-palace";
import { Habarashi } from "./chapters/habarashi";
import { BossRush } from "./chapters/boss-rush";
import { FightWithEnkiem } from "./chapters/fight-with-enkiem";
import { NpcsPage } from "./chapters/npcs";
import { CustomCreatures } from "./chapters/custom-creatures";
import { CustomItems } from "./chapters/custom-items";
import { SloanAndBarry } from "./chapters/sloan-and-barry";
import { Epilogue } from "./chapters/epilogue";

export const LightUpTheNight = () => {
    return (
        <Fragment>
            <Page>
                <h1>Light Up The Night</h1>
                <Intro />
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
            </Page>
            <DmScreen contentsList={null} hashReferencesSupported={null} />
            <Footer />
        </Fragment>
    );
};
