import React, { Fragment } from "react";

import {
    CollapsableContainer,
    Creatures,
    MonsterBlock,
    Npcs,
    ScrollToMe
} from "dnd-module";

const CreaturesChapter = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="creatures-and-npcs" />
            <h2 id="creatures-and-npcs">Creatures and NPCs</h2>
            <CollapsableContainer title="Myconid Adult">
                <MonsterBlock {...Creatures.MYCONID_ADULT} />
            </CollapsableContainer>
            <CollapsableContainer title="Myconid Master">
                <MonsterBlock {...Creatures.MYCONID_MASTER} />
            </CollapsableContainer>
            <CollapsableContainer title="Mage of the Dragon's Flame">
                <MonsterBlock {...Creatures.MAGE_OF_THE_DRAGONS_FLAME} />
            </CollapsableContainer>
            <CollapsableContainer title="Pirate of the Dragon's Flame">
                <MonsterBlock {...Creatures.PIRATE_OF_THE_DRAGONS_FLAME} />
            </CollapsableContainer>
            <CollapsableContainer title="Sloan's Elite Guard">
                <MonsterBlock {...Creatures.SLOANS_ELITE_GUARD} />
            </CollapsableContainer>
            <CollapsableContainer title="Sloan">
                <MonsterBlock {...Npcs.SLOAN} />
            </CollapsableContainer>
        </Fragment>
    );
};

export default CreaturesChapter;
