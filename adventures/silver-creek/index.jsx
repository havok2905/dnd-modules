import React, { Fragment } from "react";
import { Columns, Footer, Hero, Page, PanZoom, Tools } from "dnd-module";

import { Overview } from "./chapters/overview.jsx";
import { Intro } from "./chapters/intro.jsx";
import { Factions } from "./chapters/factions.jsx";
import { TheTownOfSilverCreek } from "./chapters/the-town-of-silver-creek.jsx";
import { TownCentral } from "./chapters/town-central.jsx";
import { Creatures } from "./chapters/creatures.jsx";
import { Characters } from "./chapters/characters.jsx";

import HeroImage from "./img/hero.png";

import ChurchOfTheDawn from "./img/church-of-the-dawn.png";
import DustStormRail from "./img/dust-storm-rail.png";
import GreatTomahawkRiver from "./img/great-tomahawk-river.png";
import RazorbackRidgeImage from "./img/razorback-ridge.png";

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
                        <Factions />
                        <TheTownOfSilverCreek />
                        <TownCentral />
                        <h2>The Silver Creek Mine</h2>
                        <h3>The Lobby</h3>
                        <h3>The Mines</h3>
                        <h2>Razorback Ridge</h2>
                        <PanZoom>
                            <img
                                src={RazorbackRidgeImage}
                                alt="Razorback Ridge Map"
                            />
                        </PanZoom>
                        <h2>The Dust Storm Rail</h2>
                        <PanZoom>
                            <img
                                src={DustStormRail}
                                alt="Dust Storm Rail Map"
                            />
                        </PanZoom>
                        <h2>Black Dust Road</h2>
                        <h2>Church of the Dawn</h2>
                        <h3>Temple to Lathander</h3>
                        <PanZoom>
                            <img
                                src={ChurchOfTheDawn}
                                alt="Church of the Dawn Map"
                            />
                        </PanZoom>
                        <h3>The Cemetary</h3>
                        <h2>MacDougel Ranch</h2>
                        <h2>Jackelfort Ranch</h2>
                        <h2>Great Tomahawk River</h2>
                        <PanZoom>
                            <img
                                src={GreatTomahawkRiver}
                                alt="Great Tomahawk River Map"
                            />
                        </PanZoom>
                        <h2>Ruins of Asmodeous</h2>
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
