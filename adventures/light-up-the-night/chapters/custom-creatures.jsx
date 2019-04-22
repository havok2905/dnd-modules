import React, { Fragment } from "react";
import { CollapsableContainer, Creatures, MonsterBlock } from "dnd-module";
import Archer from "../constants/creatures/archer";

const CustomCreatures = () => {
    return (
        <Fragment>
            <h2>Custom Creatures</h2>
            <CollapsableContainer title="Archer">
                <MonsterBlock {...Archer} />
            </CollapsableContainer>
            <CollapsableContainer title="Demon Hound">
                <MonsterBlock {...Creatures.DEMON_HOUND} />
            </CollapsableContainer>
            <CollapsableContainer title="Demon Lizard">
                <MonsterBlock {...Creatures.DEMON_LIZARD} />
            </CollapsableContainer>
            <CollapsableContainer title="Fallen Planetar">
                <MonsterBlock {...Creatures.FALLEN_PLANETAR} />
            </CollapsableContainer>
            <CollapsableContainer title="Flesh Sentinel">
                <MonsterBlock {...Creatures.FLESH_SENTINEL} />
            </CollapsableContainer>
            <CollapsableContainer title="High Priest of Enkiem">
                <MonsterBlock {...Creatures.HIGH_PRIEST_OF_ENKIEM} />
            </CollapsableContainer>
            <CollapsableContainer title="Kipine">
                <MonsterBlock {...Creatures.KIPINE} />
            </CollapsableContainer>
            <CollapsableContainer title="Metal Gorilla">
                <MonsterBlock {...Creatures.METAL_GORILLA} />
            </CollapsableContainer>
            <CollapsableContainer title="Resistance Fighter">
                <MonsterBlock {...Creatures.RESISTANCE_FIGHTER} />
            </CollapsableContainer>
            <CollapsableContainer title="Thieves Guild Underling">
                <MonsterBlock {...Creatures.THIEVES_GUILD_UNDERLING} />
            </CollapsableContainer>
            <CollapsableContainer title="Titan Cyclops">
                <MonsterBlock {...Creatures.TITAN_CYCLOPS} />
            </CollapsableContainer>
        </Fragment>
    );
};

export { CustomCreatures };
