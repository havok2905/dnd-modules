import React, { Fragment } from "react";

import { ScrollToMe } from "dnd-module";

const Overview = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="overview" />
            <h2>Overview</h2>
            <ScrollToMe scrollActionString="backstory" />
            <h3>Backstory</h3>
            <p>
                Several months ago, a devastating force overtook the continent.
                Skyscraper tall cyclops titans appeared throughout the land,
                destroying large cities in a lumbering, arduous, fashion.
                Rotting demons run through the alleys, slaughtering citizens by
                the millions. The long forgotten goddess of destruction,
                civilization, and balance, Enkiem, has been awoken from a long
                slumber. She has set her minions unto the world to allow people
                of the material plane to start over, curb their existing power,
                and keep the mortal realm from ever threatening the realm of the
                gods.
            </p>
            <p>
                The party has recently learned a secret, that a temple at the
                highest peak in the snowy lands of Krossa may hold the key to
                being rid of this destruction god, saving the lives of millions.
                Aboard their airship, they are currently enroute to a bordering
                region, New Fey, where they hope to find a guide to lead them
                into the mountains.
            </p>
            <p>
                Unfortunately for the heroes, another group seeks the temple.
                The Order of the Profane Soul, a group dedicated to removing
                darkness from the world by any means, looks to acquire what lies
                in the temple. Their methods and end goals are far more
                nefarious however.
            </p>
            <ScrollToMe scrollActionString="goals" />
            <h3>Goals</h3>
            <ul>
                <li>
                    Reach the Temple of Ao before the Order of the Profane Soul.
                </li>
                <li>
                    Prove worthy in front of all of the god's will, Ao to gain
                    new power
                </li>
                <li>Leave Krossa, enroute to slay Enkiem</li>
            </ul>
            <ScrollToMe scrollActionString="pantheon" />
            <h3>Pantheon</h3>
            <h4>How Gods Work</h4>
            <p>
                In this adventure, gods and goddesses are positions of power, to
                be filled when a mortal perishes that most closely identifies
                with the available role. Each position was split from Ao's will.
                When the current holder is slain, the position remains empty
                until a new candidate reveals themselves. Then the candidate is
                revealed, the world will fill with blue light, signaling their
                arrival into godhood.
            </p>
            <p>
                in the beginning there was Ao. He split himself in two, creating
                the goddesses of light and darkness. In turn they split their
                will even further, resulting in all of the gods and goddesses
                that currently exist.
            </p>
            <p>
                When a deity makes a move to affect the material plane, they
                themselves become a part of the material plane, making them
                vulnerable. They can be slain by other deities, weaponry forged
                by other deities, or by divine power handed down by the wills of
                Ao, Shar, or Selune.
            </p>
            <p>
                When you speak or deal with a higher god, you hear the voices of
                all gods split from that deity's will. The presence can be life
                altering, and in some cases mind shattering.
            </p>
            <h4>Ao: God of Creation</h4>
            <p>
                Ao is the beginning. Ao created all of the lesser gods, and all
                of creation by proxy. Ao is neutral and speaks with the voice of
                all of the lesser gods. Ao values first and foremost the
                advancement of his creations; the lesser gods, devils, fiends,
                angels, humans, elves, dwarves, etc. Those who seek progression
                for progression's sake can recieve Ao's blessing.
            </p>
            <h4>Shar: Goddess of Trickery and Death</h4>
            <p>
                Though being the goddess of trickery and death, Shar represents
                Ao's wish for struggle for creation and the belief that one
                cannot progress while idle. In character, Shar is slick,
                ambitious, and cruel. Those who would seek gain for themselves
                alone can receive Shar's blessing.
            </p>
            <h3>Selune: Goddess of Knowledge and Life</h3>
            <p>
                Selune is the goddess of knowledge and life, representing all
                that Ao wishes creation could become. Selune in character
                changes mood rapidly, from bubbly to pensive in an instant.
                Those who seek gain for others for other's sake can receive
                Selune's blessing.
            </p>
            <h4>Enkiem: Goddess of Destruction, Civilization, and Balance</h4>
            <p>
                Enkiem is the Goddess of Destruction, Civilization, and Balance.
                She exists as a foil to the mortal realms desire for
                advancement. When a civilization becomes too advanced, she
                releases demonic forces to wipe the land clean, making room for
                now custodians of the world to take charge. She has even gone as
                far as to slay other gods and goddesses in this pursuit. Most
                notably was the goddess Maren who gave birth to a demigod
                halfling named Sam. Because this released a potential threat to
                the gods into the mortal realm, she slayed Maren, leaving
                innocent Sam behind as he was still innocent.
            </p>
            <p>
                This would prove a mistake, as Sam would fight back for
                thousands of years, saving as many people from Maren's wrath as
                he could. Amassing enough power, he was finally able to seal her
                away for 50,000 years, until recently when the seal was broken.
                Now aged, Sam has lost much of his power and was slain by Enkiem
                upon her return, high in the mountains of Krossa.
            </p>
            <h4>Maren: God of Life, Fire, and Inspiration</h4>
            <p>
                In the absence of Sam's mother, this position in godhood lay
                vacant for thousands of years. Upon Sam's death, he was found to
                be the next candidate, ascending to godhood, taking the mantel,
                for providing hope for the people. He is still new however, and
                just beginning to get a grasp of his powers. His goal is quite
                different now however. He no longer wishes to slay Enkiem
                personally, but rather help others discover their true potential
                so that they may take on the job themselves.
            </p>
        </Fragment>
    );
};

export { Overview };
