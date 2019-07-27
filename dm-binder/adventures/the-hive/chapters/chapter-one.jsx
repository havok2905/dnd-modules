import React, { Fragment } from "react";

import { EmphasisBlock, ScrollToMe } from "../../../core/index.js";

const ChapterOne = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="chapter-one" />
            <h2 id="chapter-one">Chapter One: Pirate Captain Sloan</h2>
            <EmphasisBlock>
                <p>
                    After several days flying through crystal clear skies, past
                    puffy clouds, and rolling hills of the north, the air begins
                    to chill. On the horizon, a swarm of dark objects, looms in
                    the distance, giving off a sickening hum.
                </p>
            </EmphasisBlock>
            <p>
                A perception or investigation check of DC15 can identify that
                this is a fleet of airships, their sigils painted over black.
            </p>
            <p>
                There are currently 100 ships in this fleet, all flying in
                formation. Any attempts to continue through the formation or
                around will result in being attacked and boarded.
            </p>
            <EmphasisBlock>
                <p>
                    Over the scrying orb of your ship, you hear a croaking voice
                    of an old male orc. "Identify yourselves vessel!"
                </p>
            </EmphasisBlock>
            <p>
                The players will need to provide a passcode of the word "Flame"
                in draconic.
            </p>
            <p>If the players do the following, they will be boarded...</p>
            <ol>
                <li>Try to move past the ships without communicating.</li>
                <li>Attempt to attack the ships</li>
                <li>
                    Attempt to give the wrong passcode or delay proceedings.
                </li>
            </ol>
            <p>
                If the players do the following, a small force will arrive to
                escort them to the main ship peacefully...
            </p>
            <ol>
                <li>Truthfully identify themselves</li>
                <li>Mention the the party's name</li>
                <li>Invite the pirates onboard to investigate</li>
            </ol>
            <h3>The Party is Invited Peacefully</h3>
            <p>
                Upon being invited peacefully on the ship, either as prisoners
                or supposed members of the gang, they will immediately be
                recognized.
            </p>
            <EmphasisBlock>
                <p>
                    You walk into the cargo hold filled with crates, warmly lit
                    with candles, and the walls a deep mahogany. Flanked on
                    either side of you are eight pirates, each with a strange
                    look of on their faces.
                </p>
            </EmphasisBlock>
            <p>
                A DC12 insight check can reveal that they are terrified, but not
                of you. A DC20 insight check reveals they fear the repercussions
                of failing this particular task.
            </p>
            <EmphasisBlock>
                <p>
                    Walking to meet you is a well dressed goblin man in a red
                    top hat. He gives you a bow, "Welcome to our fine ship
                    guests. You are welcome guests on this ship. Our commander
                    is overwhelmed with joy to speak with you. Please follow me
                    and let's get you freshened up!"
                </p>
            </EmphasisBlock>
            <p>
                The players are led to luxurious quarters, with racks of red,
                black, and gold clothing. They are asked to bathe themselves,
                dress up, and be ready by the hour. The commander would not be
                pleased, to have her command room defiled.
            </p>
            <h3>The Ship is Boarded</h3>
            <EmphasisBlock>
                <p>
                    Eight ships circle around yours as grappling hooks fly
                    through the air, tearing into the deck. Cannons pop out of
                    every surface of the enemy vessels, pointed directly at you.
                    Hoards of men and women flock onto the top deck.
                </p>
            </EmphasisBlock>
            <p>
                These enemies will arrive in waves of eight. When an enemy dies,
                another will take it's place so long as another ship is still
                attached to the ship. The wave can replenish one enemy per round
                for each attached ship.
            </p>
            <p>
                A ship can be detached for one round by dealing ten damage to
                the cables connecting the vessels. It will reattach after thirty
                seconds pass.
            </p>
            <p>
                If the players detach every ship ship and try to escape they
                will be fired upon and crash to the surface.
            </p>
            <h3>Sloan's Command Room</h3>
            <p>
                Depending on the circumstances behind the party's arrival, Sloan
                will approach the situation differently. She will be hostile and
                angry should they not come peacefully or have not presented
                themselves cleanly. If the party comes in peace and freshened
                up, she will come off as cool, welcoming, and friendly.
            </p>
            <EmphasisBlock>
                <p>
                    You enter a circular hall with a long black table in it's
                    center. Etched into the center is the outline of a flame,
                    it's tendrils made of dragons. At the end of the table, sits
                    Sloan. She is flanked by four red dragonborn, all in red
                    robes.
                </p>
            </EmphasisBlock>
            <p>
                If the party came peacefully, Sloan will attempt to recruit the
                party to her crew. If they agree or agree to help with one job,
                they will be tasked with exterminating the myconids on the
                surface.
            </p>
            <p>
                If the party does not come peacefully, Sloan offers to allow
                them to pass should they scout out the storage tunnels
                underneath the marshes for her. Their role is to amass as much
                information as possible and return.
            </p>
            <p>
                Should the party fail to cooperate, they will be stripped of all
                of their belongings and jailed until they cooperate.
            </p>
            <p>
                Upon finishing the conversation with Sloan, the players may
                return to their ship to prepare for descent into the marshes
                below. They will be flanked by four other ships that will circle
                the party from above, keeping watch.
            </p>
            <h3>The Party Crashes</h3>
            <EmphasisBlock>
                <p>
                    The sky falls around you and you feel your feet lift off the
                    deck as your ship descends rapidly. You pierce through the
                    clouds. Below you, sickly marshes come into view, dotted
                    with drooping black trees and multicolored fungus.
                </p>
            </EmphasisBlock>
            <p>
                NPCs and players inside the ship must make a DC15 DEX saving
                throw or take 10d6 fall damage. They take 2d6 on a success.
            </p>
            <p>
                NPCs and players on deck must find a way to secure themselves to
                the ship. They have 3 turns each in initiative order to pull
                this off. Anyone secured to the ship will need to take 10d6 fall
                damage on a DC15 saving throw, or half as much on success.
                Anyone not secured must make a DC20 DEX saving throw or take
                15d6 fall damage, or half as much on success.
            </p>
        </Fragment>
    );
};

export default ChapterOne;
