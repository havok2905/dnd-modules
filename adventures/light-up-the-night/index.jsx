import React, { Fragment } from "react";
import { Footer, Page } from "dnd-module";

const LightUpTheNight = () => {
    return (
        <Fragment>
            <Page>
                <h1>Light Up The Night</h1>
            </Page>
            <Page>
                <h1>The Temple of Maren</h1>
            </Page>
            <Page>
                <h1>The Temple of Enkiem</h1>
            </Page>
            <Page>
                <h1>Habarashi</h1>
                <h2>The City Walls</h2>
                <h2>The Market District</h2>
                <h2>The Artificer District</h2>
                <h2>The Royal District</h2>
                <h2>The University District</h2>
                <h2>The Military District</h2>
            </Page>
            <Page>
                <h1>The Palace</h1>
            </Page>
            <Page>
                <h1>Boss Rush: The League of 7 Disgruntled Villains</h1>
                <h2>Maeter</h2>
                <h2>The Buff Owl Bear</h2>
                <h2>The Red Dragon</h2>
                <h2>Boo Raddley</h2>
                <h2>Felicia</h2>
                <h2>The Aboleth</h2>
                <h2>The President of Devry</h2>
            </Page>
            <Page>
                <h1>Fight With Enkiem</h1>
                <h2>Stage 1</h2>
                <h2>Stage 2</h2>
                <h2>Stage 3</h2>
                <h2>Enkiem's Death</h2>
            </Page>
            <Page>
                <h1>Epilogue</h1>
            </Page>
            <Footer scrollButton={true} quickRefButton={true} rollForm={true} />
        </Fragment>
    );
};

export { LightUpTheNight };
