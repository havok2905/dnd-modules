import React, { Fragment } from "react";
import { ScrollToMe } from "dnd-module";

export const Creatures = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="creatures" />
            <h2 scrollActionString="creatures">Creatures</h2>
            <ul>
                <li>(MM: 343) Bandit</li>
                <li>(MM: 318) Blink Dog</li>
                <li>(MM: 71) Bone Devil</li>
                <li>(MM: 345) Cultist</li>
                <li>(MM: 327) Giant Scorpion</li>
                <li>(MM: 147) Ghost</li>
                <li>(MM: 182) Hell Hound</li>
                <li>(MM: 76) Imp</li>
                <li>(MM: 194) Kenku</li>
                <li>(MM: 76) Lemure</li>
                <li>(MM: 235) Nightmare</li>
                <li>(MM: 334) Poisonous Snake</li>
                <li>(MM: 335) Raven</li>
                <li>(MM: 84) Red Shadow Dragon</li>
                <li>(MM: 336) Riding Horse</li>
                <li>(MM: 268) Scarecrow</li>
                <li>(MM: 339) Swarm of Bats</li>
            </ul>
        </Fragment>
    );
};
