import React, { Fragment } from "react";
import {
    EmphasisBlock,
    PanZoom,
    RollTable,
    ScrollToMe
} from "../../../core/index.js";

import { TOWN_CENTRAL_RANDOM_ENCOUNTERS } from "../constants/roll-tables/town-central-random-encounters";

import GeneralStore from "../img/general-store.png";
import SaloonBasementImage from "../img/saloon-basement.png";
import SaloonLevel1Image from "../img/saloon-level-1.png";
import SaloonLevel2Image from "../img/saloon-level-2.png";

export const TownCentral = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="town-central" />
            <h2 id="town-central">Town Central</h2>
            <h3>Random Encounters</h3>
            <RollTable items={TOWN_CENTRAL_RANDOM_ENCOUNTERS} />
            <h3>Fortune Teller Baba</h3>
            <p>
                At some point, while walking through the streets, the players
                will come across Fortune Teller Baba. She will flag the players
                down, offering to read them their futures for a copper. She will
                lay out tarot cards and give shockingly personal fortunes for
                the players.
            </p>
            <h3>Blacksmith</h3>
            <EmphasisBlock>
                <p>
                    The heat from outside compounds and the clanging sound of
                    metal striking metal fills your ears. A stout dwarf woman
                    with a long, braided, golden beard hammers away a glowing
                    steel. Without looking up from her work, she shouts with a
                    booming voice...
                </p>
                <blockquote>
                    JUST A MOMENT! MAKE YOURSELVES AT HOME BUT DON'T TOUCH
                    ANYTHING!
                </blockquote>
            </EmphasisBlock>
            <p>The blacksmith shop is opperated by Kelly Stumpwood.</p>
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
            <p>
                The Bull's Head Saloon is the life of the town. This is where
                travelers come and go, people fight and then drink to make up
                after the blows have been exchanged. It is a house of music,
                gambling, spirits, and the only brothel in hundreds of miles.
            </p>
            <h4>Basement</h4>
            <PanZoom>
                <img src={SaloonBasementImage} alt="Saloon Basement Map" />
            </PanZoom>
            <EmphasisBlock>
                <p>
                    The smell of ale and stale air fills your nostrils as you
                    are enveloped by the shadows of the basement. Rows or
                    barrels and crates of supplies fill every corner. Along the
                    floor are several rat traps, a few of them already
                    triggered, with a freshly dead rat trapped inside. The sound
                    of the piano, is but a distant blur.
                </p>
            </EmphasisBlock>
            <p>
                Have the players roll a DC12 perception check. On success, they
                notice that one of the walls is cracked, letting a draft loose
                from the other side. Unbeknownst to the barkeep, this connects
                to the underground silver mines. Breaking through the stone will
                reveal a tunnel leading deep into the Silver Creek Mines.
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
                <img src={SaloonLevel1Image} alt="Saloon Level 1 Map" />
            </PanZoom>
            <EmphasisBlock>
                <p>
                    The bright tune of the piano bounces off the walls, mingling
                    with the cheers, jeers, and belches of the patrons.
                    Wandering between the tables are scantily clad men and
                    women, occasionally leaving the floor with a partner,
                    walking up the creaky stairwell to the second floor. At the
                    table furthest from the bar, a group of dusty travelers can
                    be seen rolling dice, tossing coppers to the center of the
                    table. Mugs of frothy beer slide down the bar top, happily
                    received. As a bell jingles over your head, the bar raises
                    their glasses in cheers, welcoming you.
                </p>
            </EmphasisBlock>
            <h5>Menu</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Room For 1 Night</td>
                        <td>5 SP</td>
                    </tr>
                    <tr>
                        <td>Mug of Ale</td>
                        <td>4 CP</td>
                    </tr>
                    <tr>
                        <td>Gallon of Ale</td>
                        <td>2 SP</td>
                    </tr>
                    <tr>
                        <td>Common Wine</td>
                        <td>1 SP</td>
                    </tr>
                    <tr>
                        <td>Fine Wine</td>
                        <td>10 GP</td>
                    </tr>
                    <tr>
                        <td>Mug of Sarsaparilla</td>
                        <td>2 CP</td>
                    </tr>
                    <tr>
                        <td>Bourbon</td>
                        <td>1 SP</td>
                    </tr>
                    <tr>
                        <td>Scotch</td>
                        <td>5 GP</td>
                    </tr>
                    <tr>
                        <td>Hunk of Cheese</td>
                        <td>1 SP</td>
                    </tr>
                    <tr>
                        <td>Bread Loaf</td>
                        <td>2 CP</td>
                    </tr>
                    <tr>
                        <td>Jerky</td>
                        <td>2 SP</td>
                    </tr>
                </tbody>
            </table>
            <h5>Sixes</h5>
            <p>
                One of the tables seems to have a very active game of Sixes
                going on. Players may join in and gamble with the group, as they
                are hungry for new players and new gold. Present at the table is
                Mad Dog, Captain of the Scarlet Ghost Bandits. He does not take
                kindly to losing to strangers and will grow angry, but not
                hostile, if beaten.
            </p>
            <p>
                If the player is caught cheating, the group at the table will
                band together to fight and kick you out of the bar. They can be
                talked down to a duel out on the street instead with a DC15
                persuasion check.
            </p>
            <ol>
                <li>All players ante</li>
                <li>Each player rolls a public d6</li>
                <li>Moving clockwise, each player may fold, call, or raise</li>
                <li>Each player then rolls a secret d6 and repeats betting</li>
                <li>Each player rolls a final secret d6 and repeats betting</li>
                <li>All dice are revealed</li>
                <li>
                    All Ones &lt; Highest Value &lt; Highest Pair &lt; Highest
                    Straight &lt; Highest Tripple
                </li>
            </ol>
            <h4>Second Floor</h4>
            <PanZoom>
                <img src={SaloonLevel2Image} alt="Saloon Level 2 Map" />
            </PanZoom>
            <p>
                The three bedrooms upstairs can be rented for 5 SP per night.
                When not rented, they are used by the prostitutes that work on
                the ground floor of the saloon. They are naturally soundproof
                and always locked while in use. These can be picked with a DC12
                slight of hand check and thieves tools.
            </p>
            <p>
                The office on the top floor is the Saloon Owner's office. It is
                locked and can be picked with a DC12 slight of hand check with
                thieve's tools. Inside is a safe that contain's the Saloon's
                funds.
            </p>
            <p>
                The office safe can be picked with a DC17 slight of hand check.
                It is trapepd and can be detected beforehand with a DC15
                investigation check. If not disarmed, the trap will sound off an
                alarm that can be heard from every room and on every level, with
                the exception of the bedrooms. Inside is...
            </p>
            <ul>
                <li>2000 GP</li>
                <li>544 SP</li>
                <li>998 CP</li>
                <li>20 Bars of Silver ( 400 GP )</li>
                <li>4 Saphires ( 4000 GP )</li>
                <li>1 Bottle of Waterdavian Scotch</li>
                <li>1 Ring of Invisibility</li>
                <li>1 Pistol</li>
                <li>20 Bullets</li>
            </ul>
            <h3>General Store and Pharmacy</h3>
            <PanZoom>
                <img src={GeneralStore} alt="General Store Map" />
            </PanZoom>
            <p>The General Store is run by Jack Miller</p>
            <h4>Inventory</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Corn Meal</td>
                        <td>1 CP</td>
                    </tr>
                    <tr>
                        <td>Wheat</td>
                        <td>1 CP</td>
                    </tr>
                    <tr>
                        <td>Rag Cloth</td>
                        <td>2 CP</td>
                    </tr>
                    <tr>
                        <td>Flask</td>
                        <td>2 CP</td>
                    </tr>
                    <tr>
                        <td>Bucket</td>
                        <td>5 CP</td>
                    </tr>
                    <tr>
                        <td>Pipeweed</td>
                        <td>5 CP</td>
                    </tr>
                    <tr>
                        <td>Dice Set</td>
                        <td>1 SP</td>
                    </tr>
                    <tr>
                        <td>Oil</td>
                        <td>1 SP</td>
                    </tr>
                    <tr>
                        <td>Wooden Pipe</td>
                        <td>1 SP</td>
                    </tr>
                    <tr>
                        <td>Rations ( 1 Day )</td>
                        <td>5 SP</td>
                    </tr>
                    <tr>
                        <td>Rope ( 50 Feet )</td>
                        <td>1 GP</td>
                    </tr>
                    <tr>
                        <td>Shovel</td>
                        <td>2 GP</td>
                    </tr>
                    <tr>
                        <td>Tent ( Two-Person )</td>
                        <td>2 GP</td>
                    </tr>
                    <tr>
                        <td>Herbalism Kit</td>
                        <td>5 GP</td>
                    </tr>
                    <tr>
                        <td>Potion of Healing</td>
                        <td>50 GP</td>
                    </tr>
                </tbody>
            </table>
            <h4>The Back Store Room</h4>
            <p>
                Prior to the arrival of the party, Jack had captured an elderly
                man that had realized his association with the occult. He bound
                him in the back of his store room, letting him starve to death.
                This door may be opened with a DC12 slight of hand check.
            </p>
            <h4>Jack's Bedroom</h4>
            <p>
                Jack's bedroom has been made to be a small temple to Asmodeous,
                where is conducts rituals daily in his service. This is where he
                began to experiment with Necromancy and dark magic. This door is
                locked and embedded with a spell. A DC12 slight of hand check
                may open it, but the player will instantly feel disinterested in
                the room. They will feel compelled to lock it back up and forget
                why they were there.
            </p>
        </Fragment>
    );
};
