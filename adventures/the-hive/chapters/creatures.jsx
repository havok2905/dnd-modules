import React from "react";

import {
    CollapsableContainer,
    MonsterBlock,
    Page,
    ScrollToMe
} from "dnd-module";

import MYCONID_ADULT from "../constants/creatures/myconid-adult";
import MYCONID_MASTER from "../constants/creatures/myconid-master";
import MAGE_OF_THE_DRAGONS_FLAME from "../constants/creatures/mage-of-the-dragons-flame";
import PIRATE_OF_THE_DRAGONS_FLAME from "../constants/creatures/pirate-of-the-dragons-flame";
import SLOANS_ELITE_GUARD from "../constants/creatures/sloans-elite-guard";
import SLOAN from "../constants/creatures/sloan";

const Creatures = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="creatures-and-npcs" />
            <h1 id="creatures-and-npcs">Creatures and NPCs</h1>
            <CollapsableContainer title="Myconid Adult" idSlug="myconid-adult">
                <MonsterBlock {...MYCONID_ADULT} />
            </CollapsableContainer>
            <CollapsableContainer title="Myconid Master" idSlug="myconid-adult">
                <MonsterBlock {...MYCONID_MASTER} />
            </CollapsableContainer>
            <CollapsableContainer
                title="Mage of the Dragon's Flame"
                idSlug="mage-of-the-dragons-flame"
            >
                <MonsterBlock {...MAGE_OF_THE_DRAGONS_FLAME} />
            </CollapsableContainer>
            <CollapsableContainer
                title="Pirate of the Dragon's Flame"
                idSlug="pirate-of-the-dragons-flame"
            >
                <MonsterBlock {...PIRATE_OF_THE_DRAGONS_FLAME} />
            </CollapsableContainer>
            <CollapsableContainer
                title="Sloan's Elite Guard"
                idSlug="sloans-elite-guard"
            >
                <MonsterBlock {...SLOANS_ELITE_GUARD} />
            </CollapsableContainer>
            <CollapsableContainer title="Sloan" idSlug="sloan">
                <MonsterBlock {...SLOAN} />
            </CollapsableContainer>
        </Page>
    );
};

export default Creatures;
