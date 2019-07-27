import React, { Fragment } from "react";
import { CollapsableContainer, MonsterBlock, ScrollToMe } from "dnd-module";

import FortuneTellerBaba from "../constants/npcs/fortune-teller-baba";
import GendryMasters from "../constants/npcs/gendry-masters";
import GracieMiller from "../constants/npcs/gracie-miller";
import Griff from "../constants/npcs/griff";
import JackMiller from "../constants/npcs/jack-miller";
import KellyStumpwood from "../constants/npcs/kelly-stumpwood";
import KyleStumpwood from "../constants/npcs/kyle-stumpwood";
import MadDog from "../constants/npcs/mad-dog";
import TimMacDougel from "../constants/npcs/tim-macdougel";
import TamJackelfort from "../constants/npcs/tam-jackelfort";
import TracyMelrose from "../constants/npcs/tracy-melrose";

export const Characters = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="characters" />
            <h2 id="characters">Characters</h2>
            <h3>Baba ( Fortune Teller )</h3>
            <CollapsableContainer>
                <MonsterBlock {...FortuneTellerBaba} />
            </CollapsableContainer>
            <h3>Gendry Masters ( Silver Creek Mine Owner )</h3>
            <p>
                Gendry comes from a long line of mine owners. Gendry has
                recently inherited this mine from his recently deceased father.
                He is very well aware of the city's history of cult activity,
                but is not personally involved.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...GendryMasters} />
            </CollapsableContainer>
            <h3>Gracie Miller ( Sherif )</h3>
            <p>
                Gracie is a no nonsense woman, proud of her position, and hell
                bent on maintaining law and order in her town. She does turn a
                blind eye to suspecting her brother Jack and his odd behavior.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...GracieMiller} />
            </CollapsableContainer>
            <h3>Griff ( Mysterious Stranger )</h3>
            <p>
                Griff is an old bard from Sigil. His memory, all but his musical
                abilities, have been erased. He wanders around time, playing
                songs that nobody can explain, begging for change.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...Griff} />
            </CollapsableContainer>
            <h3>Jack Miller ( General Store Owner and Doctor )</h3>
            <p>
                Jack, in his study of necromancy, stumbled across the town's
                history of cult activity. He began experimenting slowly, in
                attempts to help his patients. Over time, he began to by into
                devil worship more and more, allowing his worship to consume
                him. His mission changed, attempting to recruit all that he
                thinks would be open to Asmodeous.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...JackMiller} />
            </CollapsableContainer>
            <h3>Kelly Stumpwood ( Blacksmith )</h3>
            <p>
                Kelly is the best blacksmith for hundreds of miles, originating
                from a dwarvish settlement to the east. She met the mayor on one
                of his visits out east and decided to return with him. Her other
                pride, outside of her work, is her flowing beard.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...KellyStumpwood} />
            </CollapsableContainer>
            <h3>Kyle Stumpwood ( Mayor )</h3>
            <p>
                Kyle is the mayor in town, and constantly under pressure from
                all factions in town. He is nervous he will be ousted, and is
                more than anything, afraid to let down his wife.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...KyleStumpwood} />
            </CollapsableContainer>
            <h3>Mad Dog ( Scarlet Ghost Gang Captain )</h3>
            <p>
                Mad Dog is proud, and prone to emotional outbursts. He tries to
                hide this with humor however, never wanting to appear weak or
                not confident.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...MadDog} />
            </CollapsableContainer>
            <h3>Tam Jackelfort ( Rancher )</h3>
            <p>
                Tam spent much of his youth exploring the mountains and is
                deeply familiar with the tunnels of the mines. He remembers them
                fondly, sneaking about town through the various secret tunnels.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...TamJackelfort} />
            </CollapsableContainer>
            <h3>Tim MacDougel ( Rancher )</h3>
            <p>
                Tim grew up in the desert wastelands and is an expert hunter. He
                is one of the few that know how to survive in the wastes.
            </p>
            <p>He calls his ranch the Ranch at Cucumundo.</p>
            <CollapsableContainer>
                <MonsterBlock {...TimMacDougel} />
            </CollapsableContainer>
            <h3>Tracy Melrose ( Priestess of Lathander )</h3>
            <p>
                Tracy is a kind, welcoming, preistess. She never presses her
                faith too hard on any new travelers, but will gladly answer all
                questions when asked. First and foremost he tries to live a
                lifestyle that would make Lathander proud.
            </p>
            <CollapsableContainer>
                <MonsterBlock {...TracyMelrose} />
            </CollapsableContainer>
        </Fragment>
    );
};
