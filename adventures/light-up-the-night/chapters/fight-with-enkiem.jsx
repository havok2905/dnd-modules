import React, { Fragment } from "react";
import { CollapsableContainer, EmphasisBlock, MonsterBlock } from "dnd-module";
import EnkiemStage1 from "../constants/enkiem/enkiem-stage-1";
import EnkiemStage2 from "../constants/enkiem/enkiem-stage-2";
import EnkiemStage3 from "../constants/enkiem/enkiem-stage-3";

const FightWithEnkiem = () => {
    return (
        <Fragment>
            <h2>Fight With Enkiem</h2>
            <EmphasisBlock>
                <p>
                    Enkiem slowly rises from her throne, black hair trailing
                    behind her back as her arms stretch out wide. Her priests
                    raise their maces to you, preparing for battle.
                </p>
                <blockquote>
                    Enkiem: I am the one that grants the desires of the fallen.
                    I bring order and make way for new life! Now die...
                </blockquote>
            </EmphasisBlock>
            <h3>Stage 1: Toying</h3>
            <p>
                Enkiem is currently granted power from her priests. She cannot
                take damage so long as the altars stay functioning and the
                priests remain alive. However, she will only take one simple
                action in this stage each turn.
            </p>
            <p>
                Any damage done directly to Enkiem will be halved and redirected
                to a priest or altar instead.
            </p>
            <p>
                Each altar has 20 HP. When an altar reaches 0, it will explode
                in a 15 foot radius. Each inside the radius may make a DC15 CON
                saving throw or take 2d12 necrotic damage.
            </p>
            <CollapsableContainer title="Enkiem Stage 1">
                <MonsterBlock {...EnkiemStage1} />
            </CollapsableContainer>
            <h3>Stage 2: The Goddess</h3>
            <EmphasisBlock>
                <p>
                    The explosion of the final altar blows the back wall out of
                    the palace. Outside, the swirling black clouds overhead
                    touch down through the throne room in a dark cyclone. Enkiem
                    enters the winds, emerging at the top of the cyclone,
                    looming over the party. The lowers herself to the party's
                    level.
                </p>
            </EmphasisBlock>
            <p>
                At this stage Enkiem will take the party seriously and be taken
                aback at the effectiveness of their new powers and tools. Those
                outside will also be made aware of her presence, making their
                way towards the battle to watch.
            </p>
            <CollapsableContainer title="Enkiem Stage 2">
                <MonsterBlock {...EnkiemStage2} />
            </CollapsableContainer>
            <h3>Stage 3: The Monster</h3>
            <p>This will trigger when Enkiem is down to 100 HP.</p>
            <p>
                Roll to see if any NPCs left behind succeeded in their side
                missions. If so, they arrive alongside the resistance army.
            </p>
            <p>
                A wave of necrotic energy will explode from Enkiem's body
                reducing all players to 10HP. This will render Enkiem looking
                tired, but still incredibly deadly.
            </p>
            <p>
                Running from the fight will result in the slaughter of the
                resistance as they flee.
            </p>
            <EmphasisBlock>
                <p>
                    Enkiem's form becomes mangled, feral, and filled with rage.
                    Her hair begins to turn white and her teeth extrudes into
                    long fangs. Her arms and legs stretch by several feet, storm
                    force winds swirling around her body. The howls and
                    screeching of her demons echos through the air and hundreds
                    of lumbering titans stomp in your direction. Their eyes
                    glow, painting the horizon red.
                </p>
                <blockquote>Enkiem: WHY WON'T YOU JUST DIE!?</blockquote>
            </EmphasisBlock>
            <p>
                If the players manage to make an example for the crowd, they
                will gain an initiative slot. Each turn a friendly NPC that they
                encountered may attack, otherwise a random resistance fighter.
                As a result, when a player falls, they are dragged back into the
                crowd, healed to full health.
            </p>
            <CollapsableContainer title="Enkiem Stage 3">
                <MonsterBlock {...EnkiemStage3} />
            </CollapsableContainer>
            <h3>Enkiem's Death</h3>
            <EmphasisBlock>
                <p>
                    Light shines through the darkness above as the cyclone of
                    black clouds dissipate. The shrieks of demons fall silent as
                    they all begin to crumble into dust. The monstrosity that is
                    Enkiem kneels before you, arms dangled at her side. On her
                    face is a blank stare. Her body slumps forward before
                    falling to the ground, curling into a ball, falling dead.
                </p>
            </EmphasisBlock>
        </Fragment>
    );
};

export { FightWithEnkiem };
