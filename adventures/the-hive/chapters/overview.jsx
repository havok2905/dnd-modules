import React, { Fragment } from "react";

import { ScrollToMe } from "dnd-module";

const Overview = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="overview" />
            <h2 id="overview">Overview</h2>
            <p>
                This adventure is meant to pit the main party against two
                morally questionable factions, forcing them to choose sides. The
                Aboleth amasses forces by assimilating more slaves to it's
                myconid army, while Sloan's pirate gang terrorizes innocent
                people from the skies. Both sides however, have reason to help
                the party towards their end goal of slaying Enkiem.
            </p>
            <p>
                The players will need to traverse through the marshes and the
                underdark to learn the secrets behind the Aboleth that lives
                beneath, the origin of their foe Enkiem, and the horrors that
                have overcome the myconid population underground.
            </p>
            <p>
                In the end, the players will need to make one of four choices.
            </p>
            <ol>
                <li>Turn back Home</li>
                <li>Destroy Sloan's Gang</li>
                <li>Free the Myconids</li>
                <li>Pit the Myconids and Sloan against each other</li>
            </ol>
            <ScrollToMe scrollActionString="background-story" />
            <h3 id="background-story">Background Story</h3>
            <p>
                After the fall of the desert metropolis, Habarashi City, Sloan,
                second in command of the Thieves Guild fled with her closest
                followers. She attempted to make camp in the north side of the
                continent, between the last two standing strongholds for the
                mortal realm; New Fey and Anduin Capital City. She plunders
                merchant airships and caravans traveling between the two cities,
                using tunnels to the underdark for storage of pillaged goods.
            </p>
            <p>
                After some time, forces in the tunnels became disturbed.
                Myconids began to flood to the surface, fighting back against
                the pirates, destroying their camps, and forcing the fleet back
                into the air.
            </p>
            <p>
                Little known to the pirates, the myconids are being controlled
                by an ancient Aboleth that lives in the depths of the tunnels.
                Old worshipers guarded a secret and dangerous relic that lay
                deep in the tunnels. Now, the enslaved myconids guard this
                treasure, and will do anything to keep it safe. The pirates
                however, will do anything to be clear of this menace.
            </p>
            <p>
                The party approaches a blockade in the air, hailed by the
                pirate's ships. They pirates will not let them proceed
                willingly.
            </p>
            <ScrollToMe scrollActionString="sloans-motivation" />
            <h3 id="sloans-motivation">Sloan's Motivation</h3>
            <p>
                Sloan just recently fled the city of Habarashi without her
                beloved husband. Now seeing a power vacuum in the recent
                devastation, she has established herself as the leader of a new
                pirate gang, bringing with her the closest followers from the
                Raven Thieves Guild.
            </p>
            <p>Sloan is interested in three things.</p>
            <ol>
                <li>Gaining power for power's sake</li>
                <li>Gaining information pertaining to her lost husband</li>
                <li>
                    Clearing out the myconids that are terrorizing her people
                </li>
            </ol>
            <p>
                Sloan will never willingly show any sign of weakness and will
                hide any emotions that will portray her as weak or compromised.
            </p>
            <ScrollToMe scrollActionString="the-aboleths-motivation" />
            <h3 id="the-aboleths-motivation">The Aboleth's Motivation</h3>
            <p>
                The Abolith is more ancient than time itself, predating the
                current gods. It is incomprehensible, and seeks only one end.
            </p>
            <ol>
                <li>End the current reign of the Gods.</li>
            </ol>
            <p>
                It will do anything to seek that end, but views time on a very
                different scale. The Aboleth is wise, and patient. It will bide
                it's time and wait for precise moments to strike. It is slowly
                biding it's time, building up it's forces.
            </p>
            <ScrollToMe scrollActionString="the-myconids" />
            <h3 id="the-myconids">The Myconids</h3>
            <p>
                The myconids are a mushroom people that inhabit the underdark.
                They exist as a collective, a network of individuals all linked.
                The master myconids, also referred to as the master nodes, rule
                all. They have dominion over the sovereigns, which control
                smaller nodes.
            </p>
            <p>
                Myconids may split themselves from their network, but at great
                cost. They will always have a longing and desire to return. They
                will lose all capability to share knowledge until reconnected.
            </p>
            <p>
                Myconid are telepathic, but only with themselves. They must
                first infect another creature with temporary spores in order to
                communicate.
            </p>
        </Fragment>
    );
};

export default Overview;
