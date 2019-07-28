import React, { Fragment } from "react";
import {
    CollapsableContainer,
    Creatures,
    DmScreen,
    EmphasisBlock,
    Footer,
    MonsterBlock,
    Page,
    RollTable
} from "../../core/index.js";

import CityRandomEncounters from "./constants/roll-tables/city-random-encounters";
import Gozer from "./constants/creatures/gozer";
import GozerStage2 from "./constants/creatures/gozer-stage-2";

export const NewYork = () => {
    return (
        <Fragment>
            <Page>
                <h1>New York</h1>
                <h2>Intro</h2>
                <EmphasisBlock>
                    <p>
                        The soft warm glow of the twilight can be seen peeking
                        over the towering glass buildings that span the horizon,
                        perfectly reflected onto the frozen waters surrounding
                        this island. In the shadows of hidden alleyways, rats
                        feud over scraps of the previous day. In the streets,
                        people in heavy coats swarm in all directions, flooding
                        every corner with frigid breath that trails off into
                        puffs white of smoke. Further out to sea, a pale green
                        statue wielding a flaming torch stands watch over the
                        bay her arm thrust into the sky; her regal figure a
                        beacon of hope, prosperity, and a new dawn.
                    </p>
                    <p>
                        We now hear a sudden deafening crack as the statue's
                        flame splinters into a thousand pieces, plummeting down
                        through the thick ice of the frozen bay below. A spiral
                        of black, purple, and blue light takes it's place.
                    </p>
                    <p>
                        They say it's the city that never sleeps. They say if
                        you can make it here, you can make it anywhere. The city
                        so nice, they named it twice. Welcome to New York.
                    </p>
                </EmphasisBlock>
                <h2>The Adventure</h2>
                <p>
                    A dangerous necromancer has opened a portal to New York
                    City. Atop the Empire State Building, she is able to channel
                    the power necessary to raise the dead throughout the entire
                    city. She claims the tower as her new home, setting a throne
                    at it's very top.
                </p>
                <h2>Hook</h2>
                <EmphasisBlock>
                    <p>
                        You all wake to the sounds of screams and the feeling of
                        frigid cold air rushing past you. As you open your eyes,
                        you find yourselves in a filthy back alley, discarded
                        pizza boxes and garbage under your backs. Above you can
                        see swirling portals, silver and gold streaks emitting
                        from them and streaking across the sky. The portals all
                        seem to be clustered around one tower, standing tall
                        over the rest.
                    </p>
                    <p>
                        Around the corner and out of the alley, you find
                        yourself on a paved street. Just ahead is a narrow red
                        brick building, three stories tall, with an enormous
                        arched doorway. It is labeled 8 Hook & Ladder 8.
                    </p>
                </EmphasisBlock>
                <h2>Random Encounters</h2>
                <RollTable items={CityRandomEncounters} />
                <h2>Creatures</h2>
                <ul>
                    <li>(MM: ) Ghost</li>
                    <li>(MM: ) Gray Ooze</li>
                    <li>(MM: ) Hell Hound</li>
                    <li>(MM: ) Shadow</li>
                    <li>(MM: ) Swarm of Rats</li>
                    <li>(MM: ) Wraith</li>
                </ul>
                <h2>Custom Creatures</h2>
                <CollapsableContainer title="Car">
                    <MonsterBlock {...Creatures.CAR} />
                </CollapsableContainer>
                <CollapsableContainer title="Gozer">
                    <MonsterBlock {...Gozer} />
                </CollapsableContainer>
                <CollapsableContainer title="Gozer Stage 2">
                    <MonsterBlock {...GozerStage2} />
                </CollapsableContainer>
                <CollapsableContainer title="Helicopter">
                    <MonsterBlock {...Creatures.HELICOPTER} />
                </CollapsableContainer>
                <CollapsableContainer title="Police Officer">
                    <MonsterBlock {...Creatures.POLICE_OFFICER} />
                </CollapsableContainer>
                <CollapsableContainer title="Slime Spectre">
                    <MonsterBlock {...Creatures.SLIME_SPECTRE} />
                </CollapsableContainer>
            </Page>
            <DmScreen contentsList={null} hashReferencesSupported={null} />
            <Footer />
        </Fragment>
    );
};
