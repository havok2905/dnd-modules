import React, { Fragment } from "react";
import {
    CollapsableContainer,
    MonsterBlock,
    Npcs
} from "../../../core/index.js";

const NpcsPage = () => {
    return (
        <Fragment>
            <h2>Npcs</h2>
            <CollapsableContainer title="Aamon">
                <MonsterBlock {...Npcs.AAMON} />
            </CollapsableContainer>
            <CollapsableContainer title="Ava the Gunsmith">
                <MonsterBlock {...Npcs.AVA_THE_GUNSMITH} />
            </CollapsableContainer>
            <CollapsableContainer title="Barry Manchester">
                <MonsterBlock {...Npcs.BARRY} />
            </CollapsableContainer>
            <CollapsableContainer title="Din the Resistance Spy">
                <MonsterBlock {...Npcs.DIN} />
            </CollapsableContainer>
            <CollapsableContainer title="Erika Stillwater">
                <MonsterBlock {...Npcs.ERIKA_STILLWATER} />
            </CollapsableContainer>
            <CollapsableContainer title="Sarah Hanson">
                <MonsterBlock {...Npcs.SARAH_HANSON} />
            </CollapsableContainer>
            <CollapsableContainer title="Resistance Commander, Sheriff MacDonald">
                <MonsterBlock {...Npcs.SHERIFF_MACDONALD} />
            </CollapsableContainer>
            <CollapsableContainer title="Sloan Manchester">
                <MonsterBlock {...Npcs.SLOAN} />
            </CollapsableContainer>
        </Fragment>
    );
};

export { NpcsPage };
