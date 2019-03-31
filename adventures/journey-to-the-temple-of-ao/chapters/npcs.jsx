import React from "react";

import {
    CollapsableContainer,
    MonsterBlock,
    Page,
    ScrollToMe
} from "dnd-module";

import MADELINE_CELESTE from "../constants/npcs/madeline-celeste";

const Npcs = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="npcs" />
            <h1>NPCs</h1>
            <CollapsableContainer title="Madeline Celeste: Mountain Guide">
                <MonsterBlock {...MADELINE_CELESTE} />
            </CollapsableContainer>

            <ul>
                <li>Daniel Rudolf: New Fay Guard Captain</li>
                <li>Estaban: Profane Soul Leader</li>
                <li>Gabriel Katarina: Mysterious Elf Stranger</li>
                <li>Klaus Cordula: Waffle and Sausage Hut Owner</li>
                <li>Sigi Elli: Inn Keeper</li>
            </ul>
        </Page>
    );
};

export { Npcs };
