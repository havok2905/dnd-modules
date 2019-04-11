import React, { Fragment } from "react";

import { PanZoom } from "dnd-module";

import DUNGEON_MAP from "../img/dungeon.png";
import LEVEL_ONE_MAP from "../img/level-one.png";
import LEVEL_TWO_MAP from "../img/level-two.png";
import LEVEL_THREE_MAP from "../img/level-three.png";
import LEVEL_FOUR_MAP from "../img/level-four.png";

const ThePalace = () => {
    return (
        <Fragment>
            <h2>The Palace</h2>
            <h3>Dungeon</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={DUNGEON_MAP} alt="dungeon map" />
            </PanZoom>
            <h4>A: Stairwell to Level 1</h4>
            <h4>B: Blacksmith</h4>
            <h4>C: Vault</h4>
            <h4>D: Prison</h4>
            <h4>E: Draco's Office</h4>
            <h4>F: Stairwell to Kitchen, (L1, C)</h4>
            <h4>G: Stairwell to Great Hall (L1, F)</h4>
            <h4>H: Wine Cellar</h4>
            <h4>I: Servant's Quarters</h4>
            <h4>J: Secret Torture Room</h4>
            <h3>Level 1</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_ONE_MAP} alt="level 1 map" />
            </PanZoom>
            <h4>A: Lobby / Main Hallway</h4>
            <h4>B: Hall of the Elders</h4>
            <h4>C: Kitchen</h4>
            <h4>D: Bathrooms</h4>
            <h4>E: Library</h4>
            <h4>F: Great Hall</h4>
            <h4>G: Mistress' Quarters</h4>
            <h4>H: Meeting Room</h4>
            <h4>I: Throne Room</h4>
            <h3>Level 2</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_TWO_MAP} alt="level 2 map" />
            </PanZoom>
            <h4>A: Main Walkway</h4>
            <h4>B: West Balcony</h4>
            <h4>C: East Balcony</h4>
            <h4>D: Entrance to Ruler's Quarters</h4>
            <h4>E: Main Stairwell</h4>
            <h4>F: Stairwell to Tower D</h4>
            <h4>G: Stairwell to Tower A</h4>
            <h4>H: Stairwell to Tower B</h4>
            <h4>I: Stairwell to Tower C</h4>
            <h3>Level 3</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_THREE_MAP} alt="level 3 map" />
            </PanZoom>
            <h4>A: Tower A</h4>
            <h4>B: Tower B</h4>
            <h4>C: Tower C</h4>
            <h4>D: Tower D</h4>
            <h4>E: Ruler's Office</h4>
            <h4>F: Ruler's Supply Room</h4>
            <h4>G: Ruler's Bathroom</h4>
            <h4>H: Ruler's Bedroom</h4>
            <h3>Level 4</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_FOUR_MAP} alt="level 4 map" />
            </PanZoom>
            <h4>A: Stairwell Down to Tower A</h4>
            <h4>B: North Walkway</h4>
            <h4>C: Stairwell Down to Tower B</h4>
            <h4>D: East Walkway</h4>
            <h4>E: Stairwell Down to Tower C</h4>
            <h4>F: South Walkway</h4>
            <h4>G: Stairwell Down to Tower D</h4>
            <h4>I: West Walkway</h4>
        </Fragment>
    );
};

export { ThePalace };
