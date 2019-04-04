import React, { Fragment } from "react";

import { CollapsableContainer, MonsterBlock, ScrollToMe } from "dnd-module";

import MYCONID_ADULT from "../constants/creatures/myconid-adult";
import MYCONID_MASTER from "../constants/creatures/myconid-master";
import MAGE_OF_THE_DRAGONS_FLAME from "../constants/creatures/mage-of-the-dragons-flame";
import PIRATE_OF_THE_DRAGONS_FLAME from "../constants/creatures/pirate-of-the-dragons-flame";
import SLOANS_ELITE_GUARD from "../constants/creatures/sloans-elite-guard";
import SLOAN from "../constants/creatures/sloan";

const Creatures = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="creatures-and-npcs" />
            <h2 id="creatures-and-npcs">Creatures and NPCs</h2>
            <CollapsableContainer title="Myconid Adult">
                <MonsterBlock {...MYCONID_ADULT} />
            </CollapsableContainer>
            <CollapsableContainer title="Myconid Master">
                <MonsterBlock {...MYCONID_MASTER} />
            </CollapsableContainer>
            <CollapsableContainer title="Mage of the Dragon's Flame">
                <MonsterBlock {...MAGE_OF_THE_DRAGONS_FLAME} />
            </CollapsableContainer>
            <CollapsableContainer title="Pirate of the Dragon's Flame">
                <MonsterBlock {...PIRATE_OF_THE_DRAGONS_FLAME} />
            </CollapsableContainer>
            <CollapsableContainer title="Sloan's Elite Guard">
                <MonsterBlock {...SLOANS_ELITE_GUARD} />
            </CollapsableContainer>
            <CollapsableContainer title="Sloan">
                <MonsterBlock {...SLOAN} />
            </CollapsableContainer>
        </Fragment>
    );
};

export default Creatures;
