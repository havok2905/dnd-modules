import React, { Fragment } from "react";

import {
    CollapsableContainer,
    Creatures,
    MonsterBlock,
    ScrollToMe
} from "../../../core/index.js";

import MASTER_ELEMENTAL from "../constants/creatures/master-elemental";
import PROFANE_SOUL_FLAG_SHIP from "../constants/creatures/profane-soul-flag-ship";

const CustomCreatures = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="custom-creatures" />
            <h2>Custom Creatures</h2>
            <CollapsableContainer title="Arctic Fox">
                <MonsterBlock {...Creatures.ARCTIC_FOX} />
            </CollapsableContainer>
            <CollapsableContainer title="Krossa Nomad">
                <MonsterBlock {...Creatures.ARCTIC_NOMAD} />
            </CollapsableContainer>
            <CollapsableContainer title="Master Elemental">
                <MonsterBlock {...MASTER_ELEMENTAL} />
            </CollapsableContainer>
            <CollapsableContainer title="New Fey Guard">
                <MonsterBlock {...Creatures.ARCTIC_ELF_GUARD} />
            </CollapsableContainer>
            <CollapsableContainer title="Oracle Worm">
                <MonsterBlock {...Creatures.ORACLE_WORM} />
            </CollapsableContainer>
            <CollapsableContainer title="Owlbear Cub">
                <MonsterBlock {...Creatures.OWLBEAR_CUB} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Soldier">
                <MonsterBlock {...Creatures.PROFANE_SOUL_SOLDIER} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Flagship">
                <MonsterBlock {...PROFANE_SOUL_FLAG_SHIP} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Monstrosity">
                <MonsterBlock {...Creatures.PROFANE_SOUL_MONSTROSITY} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Ship">
                <MonsterBlock {...Creatures.PROFANE_SOUL_SHIP} />
            </CollapsableContainer>
        </Fragment>
    );
};

export { CustomCreatures };
