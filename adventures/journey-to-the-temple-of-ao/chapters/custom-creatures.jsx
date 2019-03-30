import React from "react";

import { CollapsableContainer, MonsterBlock, Page } from "dnd-module";

import ARCTIC_FOX from "../constants/creatures/arctic-fox";
import KROSSA_NOMAD from "../constants/creatures/krossa-nomad";
import NEW_FEY_GUARD from "../constants/creatures/new-fey-guard";
import OWLBEAR_CUB from "../constants/creatures/owlbear-cub";
import ORACLE_WORM from "../constants/creatures/oracle-worm";
import PROFANE_SOUL_SOLDIER from "../constants/creatures/profane-soul-soldier";
import PROFANE_SOUL_FLAG_SHIP from "../constants/creatures/profane-soul-flag-ship";
import PROFANE_SOUL_MONSTROSITY from "../constants/creatures/profane-soul-monstrosity";
import PROFANE_SOUL_SHIP from "../constants/creatures/profane-soul-ship";

const CustomCreatures = () => {
    return (
        <Page>
            <h1>Custom Creatures</h1>
            <CollapsableContainer title="Arctic Fox">
                <MonsterBlock {...ARCTIC_FOX} />
            </CollapsableContainer>
            <CollapsableContainer title="Krossa Nomad">
                <MonsterBlock {...KROSSA_NOMAD} />
            </CollapsableContainer>
            <CollapsableContainer title="New Fey Guard">
                <MonsterBlock {...NEW_FEY_GUARD} />
            </CollapsableContainer>
            <CollapsableContainer title="Oracle Worm">
                <MonsterBlock {...ORACLE_WORM} />
            </CollapsableContainer>
            <CollapsableContainer title="Owlbear Cub">
                <MonsterBlock {...OWLBEAR_CUB} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Soldier">
                <MonsterBlock {...PROFANE_SOUL_SOLDIER} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Flagship">
                <MonsterBlock {...PROFANE_SOUL_FLAG_SHIP} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Monstrosity">
                <MonsterBlock {...PROFANE_SOUL_MONSTROSITY} />
            </CollapsableContainer>
            <CollapsableContainer title="Profane Soul Ship">
                <MonsterBlock {...PROFANE_SOUL_SHIP} />
            </CollapsableContainer>
        </Page>
    );
};

export { CustomCreatures };
