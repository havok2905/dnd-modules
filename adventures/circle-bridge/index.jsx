import React, { Fragment } from "react";
import {
    CollapsableContainer,
    Columns,
    Creatures,
    EmphasisBlock,
    Footer,
    ItemBlock,
    Items,
    MonsterBlock,
    Page,
    PanZoom,
    Tools
} from "dnd-module";

import CircleBridgeMap from "./img/circle-bridge.png";

const CircleBridge = () => {
    return (
        <Fragment>
            <Page>
                <h1>Circle Bridge</h1>
                <Columns>
                    <div>
                        <h2>The Eye of Selûne</h2>
                        <p>
                            This bridge was constructed ages ago by priests of
                            the Goddess Selûne, goddess of knowledge and life.
                            The original elvish craftsmen are long dead, but
                            their work remains. Deep under the water, only when
                            a full moon shines overhead, do people see a bright
                            glow under the water. Those who have attempted the
                            dive to explore are said to never be seen again.
                        </p>
                        <p>
                            In actuality, a small portal to the plane of water
                            opens under the full moon, revealing a glistening
                            tunic of silver, crafted by the priests. It is
                            guarded 24/7 by loyal merfolk, always in threes, who
                            still follow the teachings of Selûne. They will
                            attempt to defend it at all costs.
                        </p>
                        <p>
                            The corpses of those defeated stay for eternity in
                            the plane of water.
                        </p>
                        <h3>Description</h3>
                        <EmphasisBlock>
                            Slow rolling fog creeps it's way across a circular
                            cobblestone bridge, perched just off of the rocky
                            coast. The cool earth is damp, the air misty and
                            bouncing light across the water from the moon above.
                            In the center of the bridge, a bright glow emanates
                            from deep under the water, perfectly aligned with
                            the moon.
                        </EmphasisBlock>
                        <h3>Map</h3>
                        <PanZoom>
                            <img
                                src={CircleBridgeMap}
                                alt="circle bridge map"
                            />
                        </PanZoom>
                        <h2>Items</h2>
                        <ItemBlock {...Items.TUNIC_OF_LOST_MEMORY}>
                            {Items.TUNIC_OF_LOST_MEMORY.description}
                        </ItemBlock>
                        <h2>Creatures</h2>
                        <CollapsableContainer title="Merfolk Paladin">
                            <MonsterBlock {...Creatures.MERFOLK_PALADIN} />
                        </CollapsableContainer>
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

export { CircleBridge };
