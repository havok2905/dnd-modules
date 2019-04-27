import React, { Fragment } from "react";
import { CollapsableContainer, MonsterBlock } from "dnd-module";

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
            <h2>Characters</h2>
            <h3>Baba ( Fortune Teller )</h3>
            <CollapsableContainer>
                <MonsterBlock {...FortuneTellerBaba} />
            </CollapsableContainer>
            <h3>Gendry Masters ( Silver Creek Mine Owner )</h3>
            <CollapsableContainer>
                <MonsterBlock {...GendryMasters} />
            </CollapsableContainer>
            <h3>Gracie Miller ( Sherif )</h3>
            <CollapsableContainer>
                <MonsterBlock {...GracieMiller} />
            </CollapsableContainer>
            <h3>Griff ( Mysterious Stranger )</h3>
            <CollapsableContainer>
                <MonsterBlock {...Griff} />
            </CollapsableContainer>
            <h3>Jack Miller ( General Store Owner and Doctor )</h3>
            <CollapsableContainer>
                <MonsterBlock {...JackMiller} />
            </CollapsableContainer>
            <h3>Kelly Stumpwood ( Blacksmith )</h3>
            <CollapsableContainer>
                <MonsterBlock {...KellyStumpwood} />
            </CollapsableContainer>
            <h3>Kyle Stumpwood ( Mayor )</h3>
            <CollapsableContainer>
                <MonsterBlock {...KyleStumpwood} />
            </CollapsableContainer>
            <h3>Mad Dog ( Scarlet Ghost Gang Captain )</h3>
            <CollapsableContainer>
                <MonsterBlock {...MadDog} />
            </CollapsableContainer>
            <h3>Tam Jackelfort ( Rancher )</h3>
            <CollapsableContainer>
                <MonsterBlock {...TamJackelfort} />
            </CollapsableContainer>
            <h3>Tim MacDougel ( Rancher )</h3>
            <CollapsableContainer>
                <MonsterBlock {...TimMacDougel} />
            </CollapsableContainer>
            <h3>Tracy Melrose ( Priestess of Lathander )</h3>
            <CollapsableContainer>
                <MonsterBlock {...TracyMelrose} />
            </CollapsableContainer>
        </Fragment>
    );
};
