import React, { Fragment } from "react";
import { RollTable } from "dnd-module";
import HABARASHI_RANDOM_ENCOUNTERS from "../constants/roll-tables/habarashi-random-encounters";
import { EmphasisBlock, ItemBlock, Items } from "dnd-module";

const Habarashi = () => {
    return (
        <Fragment>
            <h2>Habarashi</h2>
            <h3>Random Encounters</h3>
            <RollTable items={HABARASHI_RANDOM_ENCOUNTERS} />
            <h3>Airspace</h3>
            <EmphasisBlock>
                <p>
                    The airspace around the desert metropolis is alive with
                    beating of wings and the cries of battle. One lone airship
                    is attempting to fly head first into a swarm of leather
                    winged creatures. They tear into the fabric of the blimp,
                    causing it to begin descending into the streets below.
                    Swirling black clouds spiral inwards towards the central
                    tower of Habarshi Palace, swirling in unison with angelic
                    creatures scouting overhead.
                </p>
            </EmphasisBlock>
            <p>
                The skies are filled with Kipine and Fallen Planetar. They all
                serve Enkiem and will assault any creature that they notice. The
                Kipine travel in packs of six, while the Planetar operate alone.
            </p>
            <h3>The City Walls</h3>
            <EmphasisBlock>
                <p>
                    Where the great scarlet wall of the city once stood strong,
                    is now a jagged, half standing ruin. The corpses of great
                    purple worms rot in the sands, filled with arrows and bite
                    marks.
                </p>
            </EmphasisBlock>
            <h3>The Market District</h3>
            <h4>Ruined Marketplace</h4>
            <EmphasisBlock>
                <p>
                    The bustling crowds have been replaced by an empty
                    courtyard, torn down tents, and skeletons strewn about.
                </p>
            </EmphasisBlock>
            <h3>The Artificer District</h3>
            <h4>Erika's Shop</h4>
            <EmphasisBlock>
                <p>
                    Heavy planks are nailed to the windows of Erika's shop,
                    criss-crossed at odd angles.
                </p>
            </EmphasisBlock>
            <p>
                A number of children have holed themselves up in Erika's shop,
                living off of rations stored in the back office.
            </p>
            <h5>Inventory</h5>
            <ItemBlock {...Items.TORNADO_OF_CATS}>
                <p>{Items.TORNADO_OF_CATS.description}</p>
            </ItemBlock>
            <h4>Ava's Shop</h4>
            <p>
                Have the players make a perception or investigation check
                against the stealth check of Ava. She is on the roof of the
                building and currently has a rifle pointed at the players.
            </p>
            <h4>Mercers's Shop</h4>
            <p>
                Inside there is one Metal Gorilla. It will serve the party, but
                try to slay any unescorted individuals it does not recognize.
                Mercer has long been dead. His skeleton lies in his bedroom,
                still wrapped in blankets.
            </p>
            <h3>The Royal District</h3>
            <h4>The Palace</h4>
            <EmphasisBlock>
                <p>
                    As you approach the open courtyard leading to the palace,
                    you can see the mosaic double doors reflecting light down on
                    the pavement below. In this light, and standing guard over
                    the double doors stand a diverse group of individuals.
                </p>
                <p>
                    In the very front stands a man in a pristine suit. On his
                    coat lapel, he sports a pin with the Devry coat of arms.
                </p>
            </EmphasisBlock>
            <h3>The University District</h3>
            <h4>Devry</h4>
            <EmphasisBlock>
                <p>
                    The sounds of whips crack the air as hoards of tortles
                    oversee their new slaves. They bark orders as the meander
                    about the ruins.
                </p>
                <blockquote>Hello Mharti...</blockquote>
            </EmphasisBlock>
        </Fragment>
    );
};

export { Habarashi };
