import React, { Fragment } from "react";

import {
    EmphasisBlock,
    ItemBlock,
    Items,
    Map,
    ScrollToMe
} from "../../../core/index.js";

import TEMPLE_OF_AO_L1 from "../img/TempleOfAoL1.png";
import TEMPLE_OF_AO_L2 from "../img/TempleOfAoL2.png";
import PORTAL_PUZZLE from "../img/portal-puzzle.png";

const TempleOfAo = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="the-temple-of-ao" />
            <h2>The Temple of Ao</h2>
            <h3>Outside the Temple</h3>
            <EmphasisBlock>
                <p>
                    We see three archways, crumbled with the passage of time,
                    their pieces scattered across the snow and rock. Leading up
                    to them, a wide stairwell slopes upwards. Further beyond, a
                    lone stone temple dominates the mountain's peak, trimmed
                    with onyx and pearl gems, glimmering as rays of sun pour
                    down between the clouds. There is no wind here, only
                    silence. An aura of grandness and timelessness emanates from
                    every stone.
                </p>
                <p>
                    Standing, arms crossed at the temple door is a hulking man
                    with pale blue skin, unmoving in the cold.
                </p>
            </EmphasisBlock>
            <p>
                Clerics and Paladins of all worship will feel a special
                connection to this temple, as if they are standing right next to
                their god. This feeling will dwarf any feelings closeness they
                have ever experienced before.
            </p>
            <p>
                The creature standing at the entrance of the temple is an
                <strong> Empyrean</strong>. It will reluctantly let only the
                player characters into the temple. Before doing so, he will
                recite the rite of passage.
            </p>
            <EmphasisBlock>
                <p>
                    First we examine the mind, the fabric of the planes just one
                    in kind. Second we examine the essence, from ashes to ashes,
                    we all learn our lessons. Third we examine the soul,
                    prostrate ourselves, and emerge again whole.
                </p>
            </EmphasisBlock>
            <h3>Maps</h3>
            <h4>Level 1</h4>
            <Map alt="Temple of Ao L1" src={TEMPLE_OF_AO_L1} />
            <h5>A: Temple Entrance</h5>
            <p>There is a peaceful quiet in this room.</p>
            <h5>B: The Portal Puzzle</h5>
            <Map alt="Temple of Ao Puzzle" src={PORTAL_PUZZLE} />
            <h5>C: Lobby of the Elementals</h5>
            <p>Engraved on a plaque on at the end of the room reads...</p>
            <EmphasisBlock>
                <p>
                    In the beginning there was the creator. Alone in the fog, he
                    begot first Selune and then Shar from her shadow. Next, as
                    they roamed, the rock and stone took shape under their feet.
                    Next, as they spoke, the seeds of life traveled far and wide
                    to new homes. Next, as they fought, the sparks of their rage
                    and passion warped the world to their will. Lastly, as they
                    wept for the fallen, the seeds of life sprouted, giving
                    birth to new children.
                </p>
            </EmphasisBlock>
            <p>
                Each room beyond the door contains a master elemental that is
                almost impossible to kill. Hitting on will force an elemental to
                drop an elemental gem. When placed in the final door in order
                (Light, Shadow, Earth, Wind, Fire, Water), the final door will
                open. Each of the gems can be used to summon an elemental.
            </p>
            <p>
                If all gems are placed into the door, the elementals will shut
                down.
            </p>
            <h5>D: Vault of Wands</h5>
            <p>
                One item in this chest may be removed, but only after first
                praying to an appropriate god or goddess related to the item,
                stating your use. If this condition is not met, the armor, which
                contains an <strong>Empyrean</strong> will attempt to take back
                the item.
            </p>
            <ul>
                <li>Wand of Polymorph</li>
                <li>Wand of Wonder</li>
                <li>Wand of Wand of Fear</li>
            </ul>
            <h5>E: Vault of Treasures</h5>
            <p>
                One item in this chest may be removed, but only after first
                praying to an appropriate god or goddess related to the item,
                stating your use. If this condition is not met, the armor, which
                contains an <strong>Empyrean</strong> will attempt to take back
                the item.
            </p>
            <ul>
                <li>Gem of Seeing</li>
                <li>Ring of Invisibility</li>
            </ul>
            <h5>F: Chamber of Water</h5>
            <p>
                Upon entering the room, a Master Elemental of Water will begin
                to attack. If hit, it will drop an Elemental Gem of Water.
            </p>
            <h5>G: Chamber of Earth</h5>
            <p>
                Upon entering the room, a Master Elemental of Earth will begin
                to attack. If hit, it will drop an Elemental Gem of Earth.
            </p>
            <h5>H: Chamber of Darkness</h5>
            <p>
                Upon entering the room, a Master Elemental of Darkness will
                begin to attack. If hit, it will drop an Elemental Gem of
                Darkness.
            </p>
            <h5>I: Chamber of Fire</h5>
            <p>
                Upon entering the room, a Master Elemental of Fire will begin to
                attack. If hit, it will drop an Elemental Gem of Fire.
            </p>
            <h5>J: Chamber of Air</h5>
            <p>
                Upon entering the room, a Master Elemental of Air will begin to
                attack. If hit, it will drop an Elemental Gem of Air.
            </p>
            <h5>K: Chamber of Light</h5>
            <p>
                Upon entering the room, a Master Elemental of Light will begin
                to attack. If hit, it will drop an Elemental Gem of Light.
            </p>
            <h5>L: Winding River of the Gods</h5>
            <EmphasisBlock>
                <p>
                    Floating at the dock ahead of you are three reed made rafts,
                    each one with a sign spelling out your name.
                </p>
                <p>
                    Snaking downwards in near blackness, you find yourselves
                    floating down a narrow tunnel with seemingly no end. Lining
                    the walls are hundreds if not thousands of statues,
                    featureless, genderless, all with multicolored glowing eyes.
                    Their heads turn to follow you as you venture downward.
                </p>
            </EmphasisBlock>
            <p>
                A player with a strong faith will find themselves drawn to one
                statue in particular. Each statue is an embodiment of one of the
                gods. They will be drawn to the one of their faith, but be
                unable to communicate with it.
            </p>
            <p>
                After a time, the rafts will split in different directions,
                causing each player's individual trial to commence.
            </p>
            <h4>Level 2</h4>
            <Map src={TEMPLE_OF_AO_L2} alt="Temple of Ao L2" />
            <h5>A: Main Hall</h5>
            <EmphasisBlock>
                <p>
                    Coming down the steps, you find yourselves in an empty white
                    hall. The trickling of water can be heard, echoing through
                    the hall.
                </p>
            </EmphasisBlock>
            <h5>B: Selune's Chamber</h5>
            <EmphasisBlock>
                <p>
                    The same white that filled the halls behind you continues
                    into a circular chamber. Imprinted on the tile floor are
                    seven star bursts surrounding a pair of eyes. A voice made
                    of thousands of voices, rings out, filling the chamber with
                    a joyous melody.
                </p>
                <blockquote>
                    Welcome friends. We are Selune. Do you choose us?
                </blockquote>
            </EmphasisBlock>
            <p>
                Those choosing the trial of light must begin by recounting the
                entirety of their journey so far, from birth. Based on the
                response, the DM will choose a moment from their past to play
                out. They player will need to make it out of the chosen scenario
                by trying to help as many around them as possible. The goal is
                to do what is right by all costs. What is important are the
                motivations. A worthy character will receive Star's Emblem.
            </p>
            <ItemBlock {...Items.STARS_EMBLEM}>
                <p>{Items.STARS_EMBLEM.description}</p>
            </ItemBlock>
            <h5>C: Shar's Chamber</h5>
            <EmphasisBlock>
                <p>
                    The same white that filled the halls behind you fades to
                    black as you continue down the hallway. Imprinted on the
                    tile floor are three concentric circles of varying widths. A
                    voice made of thousands of voices, rings out, filling the
                    chamber with a cold, dark, sneer.
                </p>
                <blockquote>Welcome. We are Shar. Do you choose us?</blockquote>
            </EmphasisBlock>
            <p>
                Those choosing the trial of darkness must begin by recounting
                the entirety of their journey so far, from birth. Based on the
                response, the DM will choose a moment from their past to play
                out. They player will need to make it out of the chosen scenario
                with little care to those around them. They must maximize their
                own well being. What is important are the motivations. A worthy
                character will receive Moon's Emblem.
            </p>
            <ItemBlock {...Items.MOONS_EMBLEM}>
                <p>{Items.MOONS_EMBLEM.description}</p>
            </ItemBlock>
            <h5>D: Ao's Chamber</h5>
            <EmphasisBlock>
                <p>
                    Two candelabras flank a gargantuan fountain, water pouring
                    from the wall at the end of the hall. In the center of the
                    floor is a circle of intertwining vines, etched into the
                    tile. The air weighs down on you, not in oppression, but as
                    a mark of the majesty of this chamber. The fountain begins
                    to glow.
                </p>
                <p>
                    Voices call out in every direction, every inflection, every
                    emotion and state of being. Their words differ, but the
                    meaning rings true; Welcome, my children.
                </p>
            </EmphasisBlock>
            <p>
                Ao will grant each player a scroll which will boost their level
                to 20 for six rounds of combat. After being expended, the
                players return their previous state.
            </p>
        </Fragment>
    );
};

export { TempleOfAo };
