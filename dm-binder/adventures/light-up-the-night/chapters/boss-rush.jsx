import React, { Fragment } from "react";

import { CollapsableContainer, EmphasisBlock, MonsterBlock } from "dnd-module";

import BuffOwlbear from "../constants/npcs/buff-owlbear";
import Maeter from "../constants/npcs/maeter";
import TheSoulOfTheRedDragon from "../constants/npcs/the-soul-of-the-red-dragon";
import BooRadley from "../constants/npcs/boo-radley";
import Felicia from "../constants/npcs/felicia";
import TheAboleth from "../constants/npcs/the-aboleth";
import ThePresidentOfDevry from "../constants/npcs/the-president-of-devry";

const BossRush = () => {
    return (
        <Fragment>
            <h2>Boss Rush: The League of 7 Disgruntled Villains</h2>
            <p>
                The League of 7 Disgruntled Villains is led by the President of
                Devry. Mharti, never having paid off his student debt, will be
                pursued by the league, periodically, as they venture further
                into Habarashi. They are all hostile and appear in the order
                described below, sometimes in groups. Each will introduce
                themselves as a member of the league and a representative of the
                president of Devry.
            </p>
            <h3>Group 1: Maeter and the Owlbear</h3>
            <EmphasisBlock>
                <p>
                    The sound of metal scraping on stone can be heard as a
                    gargantuan troll drags a chain behind him, each link the
                    size of a small child. At the end of the chain, is an
                    owlbear, muscles twice the size of a normal bear.
                </p>
            </EmphasisBlock>
            <CollapsableContainer title="Maeter">
                <MonsterBlock {...Maeter} />
            </CollapsableContainer>
            <CollapsableContainer title="Buff Owlbear">
                <MonsterBlock {...BuffOwlbear} />
            </CollapsableContainer>
            <h3>Group 2: The Soul of the Red Dragon and Boo Raddley</h3>
            <EmphasisBlock>
                <p>
                    A wailing can be heard overhead, as the color of red
                    blankets the city underneath. Soaring overhead is an
                    enormous spectral dragon, a figure in black riding on it's
                    back.
                </p>
            </EmphasisBlock>
            <CollapsableContainer title="The Soul of the Red Dragon">
                <MonsterBlock {...TheSoulOfTheRedDragon} />
            </CollapsableContainer>
            <CollapsableContainer title="Boo Radley">
                <MonsterBlock {...BooRadley} />
            </CollapsableContainer>
            <h3>Group 3: Felicia, the Aboleth, and the President</h3>
            <EmphasisBlock>
                <p>
                    Felicia and the Aboleth stand motionless in front of the
                    party. In their wake is a man in a suit, wearing a tie of
                    blue, yellow, and red.
                </p>
            </EmphasisBlock>
            <p>
                The President of Devry will not fight with the players, and will
                not react to any attempts to be taken hostage. At all costs,
                Felicia and the Aboleth will attempt to save him.
            </p>
            <p>
                When the fighting is over, the president will walk up to Mharti,
                list of debt owers in hand, demanding payment.
            </p>
            <CollapsableContainer title="Felicia">
                <MonsterBlock {...Felicia} />
            </CollapsableContainer>
            <CollapsableContainer title="The Aboleth">
                <MonsterBlock {...TheAboleth} />
            </CollapsableContainer>
            <CollapsableContainer title="The President of Devry">
                <MonsterBlock {...ThePresidentOfDevry} />
            </CollapsableContainer>
        </Fragment>
    );
};

export { BossRush };
