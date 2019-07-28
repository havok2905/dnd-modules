import React, { Fragment } from "react";

import {
    CollapsableContainer,
    MonsterBlock,
    Npcs,
    ScrollToMe
} from "../../../core/index.js";

const NpcsPage = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="npcs" />
            <h2>NPCs</h2>
            <CollapsableContainer title="Cecelia Mariluze: Blood Hunter">
                <MonsterBlock {...Npcs.CECELIA_MARILUZE} />
            </CollapsableContainer>
            <CollapsableContainer title="Estaban: Profane Soul Leader">
                <MonsterBlock {...Npcs.ESTEBAN} />
            </CollapsableContainer>
            <CollapsableContainer title="Madeline Celeste: Mountain Guide">
                <MonsterBlock {...Npcs.MADELINE_CELESTE} />
            </CollapsableContainer>
        </Fragment>
    );
};

export { NpcsPage };
