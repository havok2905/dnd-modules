import React, { Fragment } from "react";

import {
    Columns,
    EmphasisBlock,
    Footer,
    Hero,
    Page,
    RollTable,
    PanZoom,
    Tools
} from "dnd-module";

import { Overview } from "./chapters/overview.jsx";
import { Intro } from "./chapters/intro.jsx";
import { Factions } from "./chapters/factions.jsx";
import { TheTownOfSilverCreek } from "./chapters/the-town-of-silver-creek.jsx";
import { Creatures } from "./chapters/creatures.jsx";
import { Characters } from "./chapters/characters.jsx";

import CountryRandomEncounters from "./constants/roll-tables/country-random-encounters";
import TownCentralRandomEncounters from "./constants/roll-tables/town-central-random-encounters";

import HeroImage from "./img/hero.png";

import ChurchOfTheDawn from "./img/church-of-the-dawn.png";
import DustStormRail from "./img/dust-storm-rail.png";
import GreatTomahawkRiver from "./img/great-tomahawk-river.png";
import RazorbackRidgeImage from "./img/razorback-ridge.png";
import SaloonBasementImage from "./img/saloon-basement.png";
import SaloonLevel1Image from "./img/saloon-level-1.png";
import SaloonLevel2Image from "./img/saloon-level-2.png";

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
                        <h2>The Country</h2>
                        <h3>Random Encounters</h3>
                        <RollTable items={CountryRandomEncounters} />
                        <h2>Town Central</h2>
                        <h3>Random Encounters</h3>
                        <RollTable items={TownCentralRandomEncounters} />
                        <h3>Blacksmith</h3>
                        <EmphasisBlock>
                            <p>
                                The heat from outside compounds and the clanging
                                sound of metal striking metal fills your ears. A
                                stout dwarf woman with a long, braided, golden
                                beard hammers away a glowing steel. Without
                                looking up from her work, she shouts with a
                                booming voice...
                            </p>
                            <blockquote>
                                JUST A MOMENT! MAKE YOURSELVES AT HOME BUT DON'T
                                TOUCH ANYTHING!
                            </blockquote>
                        </EmphasisBlock>
                        <p>
                            The blacksmith shop is opperated by Kelly Stumpwood.
                        </p>
                        <h4>Weapons</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pistol</td>
                                    <td>250GP</td>
                                </tr>
                                <tr>
                                    <td>Hunting Rifle</td>
                                    <td>500GP</td>
                                </tr>
                                <tr>
                                    <td>Hand Crossbow</td>
                                    <td>75GP</td>
                                </tr>
                                <tr>
                                    <td>Light Crossbow</td>
                                    <td>25GP</td>
                                </tr>
                                <tr>
                                    <td>Heavy Crossbow</td>
                                    <td>50GP</td>
                                </tr>
                                <tr>
                                    <td>Hand Axe</td>
                                    <td>5GP</td>
                                </tr>
                                <tr>
                                    <td>Dagger</td>
                                    <td>2GP</td>
                                </tr>
                                <tr>
                                    <td>Rapier</td>
                                    <td>25GP</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>Services</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shoeing</td>
                                    <td>1GP</td>
                                </tr>
                                <tr>
                                    <td>Weapon Repair</td>
                                    <td>2GP</td>
                                </tr>
                                <tr>
                                    <td>Custom Item</td>
                                    <td>Up to DM</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Bull's Head Saloon</h3>
                        <h4>Basement</h4>
                        <PanZoom>
                            <img
                                src={SaloonBasementImage}
                                alt="Saloon Basement Map"
                            />
                        </PanZoom>
                        <EmphasisBlock>
                            <p>
                                The smell of ale and stale air fills your
                                nostrils as you are enveloped by the shadows of
                                the basement. Rows or barrels and crates of
                                supplies fill every corner. Along the floor are
                                several rat traps, a few of them already
                                triggered, with a freshly dead rat trapped
                                inside. The sound of the piano, is but a distant
                                blur.
                            </p>
                        </EmphasisBlock>
                        <p>
                            Have the players roll a DC12 perception check. On
                            success, they notice that one of the walls is
                            cracked, letting a draft loose from the other side.
                            Unbeknownst to the barkeep, this connects to the
                            underground silver mines. Breaking through the stone
                            will reveal a tunnel leading deep into the Silver
                            Creek Mines.
                        </p>
                        <h5>Loot</h5>
                        <ul>
                            <li>100 Barrels of Ale</li>
                            <li>50 Wheels of Cheese</li>
                            <li>50 Loaves of Bread</li>
                            <li>25 lbs. Beef Jerky</li>
                            <li>100 lbs. Horse Feed</li>
                            <li>10 Rat Traps</li>
                            <li>Spare Silverware and Glassware</li>
                            <li>50 Copper Pieces</li>
                            <li>12 Silver Pieces</li>
                        </ul>
                        <h4>Ground Floor</h4>
                        <PanZoom>
                            <img
                                src={SaloonLevel1Image}
                                alt="Saloon Level 1 Map"
                            />
                        </PanZoom>
                        <h4>Second Floor</h4>
                        <PanZoom>
                            <img
                                src={SaloonLevel2Image}
                                alt="Saloon Level 2 Map"
                            />
                        </PanZoom>
                        <h3>Dust Storm Rail Station</h3>
                        <h3>General Store and Pharmacy</h3>
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
