import React, { Fragment } from "react";

import { CollapsableContainer, MonsterBlock, ScrollToMe } from "dnd-module";

import CECELIA_MARILUZE from "../constants/npcs/cecelia-mariluze";
import DANIEL_RUDOLF from "../constants/npcs/daniel-rudolf";
import ESTEBAN from "../constants/npcs/esteban";
import GABRIEL_KATARINA from "../constants/npcs/gabriel-katarina";
import KLAUS_CORDULA from "../constants/npcs/klaus-cordula";
import MADELINE_CELESTE from "../constants/npcs/madeline-celeste";
import SIGI_ELLI from "../constants/npcs/sigi-elli";

const Npcs = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="npcs" />
            <h2>NPCs</h2>
            <CollapsableContainer title="Cecelia Mariluze: Blood Hunter">
                <MonsterBlock {...CECELIA_MARILUZE} />
            </CollapsableContainer>
            <CollapsableContainer title="Daniel Rudolf: New Fay Guard Captain">
                <MonsterBlock {...DANIEL_RUDOLF} />
            </CollapsableContainer>
            <CollapsableContainer title="Estaban: Profane Soul Leader">
                <MonsterBlock {...ESTEBAN} />
            </CollapsableContainer>
            <CollapsableContainer title="Gabriel Katarina: Mysterious Elf Stranger">
                <MonsterBlock {...GABRIEL_KATARINA} />
            </CollapsableContainer>
            <CollapsableContainer title="Klaus Cordula: Waffle and Sausage Hut Owner">
                <MonsterBlock {...KLAUS_CORDULA} />
            </CollapsableContainer>
            <CollapsableContainer title="Madeline Celeste: Mountain Guide">
                <MonsterBlock {...MADELINE_CELESTE} />
            </CollapsableContainer>
            <CollapsableContainer title="Sigi Elli: Inn Keeper">
                <MonsterBlock {...SIGI_ELLI} />
            </CollapsableContainer>
        </Fragment>
    );
};

export { Npcs };
