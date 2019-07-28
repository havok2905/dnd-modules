import React, { Fragment } from "react";

import { EmphasisBlock, PanZoom } from "../../../core/index.js";

import DUNGEON_MAP from "../img/dungeon.png";
import LEVEL_ONE_MAP from "../img/level-one.png";
import LEVEL_TWO_MAP from "../img/level-two.png";
import LEVEL_THREE_MAP from "../img/level-three.png";
import LEVEL_FOUR_MAP from "../img/level-four.png";

export const ThePalace = () => {
    return (
        <Fragment>
            <h2>The Palace</h2>
            <h3>Dungeon</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={DUNGEON_MAP} alt="dungeon map" />
            </PanZoom>
            <h4>A: Stairwell to Level 1</h4>
            <p>Stairwell leads up to Level 1</p>
            <h4>B: Blacksmith</h4>
            <p>
                4 flesh sentinels are in this room crafting weapons for the
                other sentinels. The sounds of them working will leave them
                ignorant to the presence of the party.
            </p>
            <p>
                On one of the crafting desks is a note from Draco, with explicit
                instructions to craft a replacement key for the front door and
                to have it sent to his office.
            </p>
            <h4>C: Vault</h4>
            <p>
                To door to this vault is locked. Attempting to pick it without
                first disarming the trap, will cause 3d8 lightning damage to the
                players within 10ft of the door.
            </p>
            <p>Inside is 1,000,000 GP worth of treasure.</p>
            <h4>D: Prison</h4>
            <EmphasisBlock>
                <p>
                    Corpses can be seen grasping onto the bars of their cells,
                    though many of the cells have been emptied. Players may see
                    footprints heading out the door and down the hall.
                </p>
            </EmphasisBlock>
            <h4>E: Draco's Office</h4>
            <p>
                Draco's office is locked, and sealed with a strange symbol. Any
                player that was previously an ally to him may enter.
            </p>
            <p>
                Inside is his coffin, papers detailing his time with the city
                government, attack plans for the war, and information gathering
                from ravens. On his desk is a shiny key of iron. On it, is an
                etching of a set of scales.
            </p>
            <h4>F: Stairwell to Kitchen, (L1, C)</h4>
            <p>Stairwll leads to Level 1C</p>
            <h4>G: Stairwell to Great Hall (L1, F)</h4>
            <p>Stairwll leads to Level 1F</p>
            <h4>H: Wine Cellar</h4>
            <EmphasisBlock>
                <p>
                    In this room barrels of wine stack to the ceiling. May
                    barrels dating back several decades.
                </p>
            </EmphasisBlock>
            <h4>I: Servant's Quarters</h4>
            <EmphasisBlock>
                <p>
                    Shoddy bed mats litter the floor, blood splattered over
                    every surface.
                </p>
            </EmphasisBlock>
            <h4>J: Secret Torture Room</h4>
            <p>
                A single cage hangs in this room. The stitched together remains
                of Dunnam sit inside. He was revived for questioning by Draco
                and is shockingly still alive, but slowly dying from starvation.
            </p>
            <h3>Level 1</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_ONE_MAP} alt="level 1 map" />
            </PanZoom>
            <h4>A: Lobby / Main Hallway</h4>
            <p>
                Walking side to side, down the length of the hallway are eight
                flesh sentinels.
            </p>
            <h4>B: Hall of the Elders</h4>
            <EmphasisBlock>
                <p>
                    Statues line the walls, each an idyllic sculpture of dwarves
                    and men. The beginning of the row is dominated by dwarves,
                    slowly being overtaken by humans. At the end, is a much
                    larger statue of a dwarf man. At his feet reads, "The
                    Builder."
                </p>
                <p>
                    Strewn about the floor are a series of elderly men, all
                    rotting, torn to pieces. A blood coated creature of flesh
                    looks up at you from an idle position.
                </p>
            </EmphasisBlock>
            <p>
                This was the last place of safety for the elders of Habarshi.
                They have been torn apart by 1 flesh sentinel. It will become
                hostile to all who enter.
            </p>
            <p>
                Reviving any of the elders will give the players the locations
                of the three keys needed to open the throne room, where Enkiem
                has taken residence.
            </p>
            <h4>C: Kitchen</h4>
            <EmphasisBlock>
                <p>
                    The smell of char and burning fills the player's nostrils as
                    they enter. At the end of the kitchen a trail of blood can
                    be seen leading towards a stairwell. A dismembered chef's
                    remains can be seen, previously trying to claw his way into
                    the dungeon.
                </p>
            </EmphasisBlock>
            <p>
                Players that investigate the pantries will find rations, cast
                iron cookware, cooking utensils, oil, and flour.
            </p>
            <p>The Stairwell leads to Dungeon F</p>
            <h4>D: Bathrooms</h4>
            <p>
                A player that makes a DC15 investigation check can determine
                that there is an odd set of hinges near the back wall. They will
                find a stairwell leading down to Dungeon J.
            </p>
            <h4>E: Library</h4>
            <p>
                1 High Preist of Enkiem is currently inside, deep into a tome
                outlining the history of Habarshi. In her other hand is a quill,
                where she is taking notes, working on a revised edition. She
                tells of it's destruction.
            </p>
            <p>
                This high priest is beginning to have doubts and can be
                persuaded to abandon her worship, in exchange for a new god.
            </p>
            <h4>F: Great Hall</h4>
            <EmphasisBlock>
                <p>
                    This room remains relatively untouched. Plates of food lay
                    rotting on the tables. At the far end of the room, a single
                    door lay ajar.
                </p>
            </EmphasisBlock>
            <p>The door ajar leads to Dungeon G.</p>
            <h4>G: Mistress' Quarters</h4>
            <p>
                Eddard, while ruling Habarashi, had quarters built for his
                rotating mistresses. He wanted to keep up appearances, and kept
                it secret behind a secret door. If he is with the party, he will
                disclose this information. Otherwise, it can be found with a
                DC20 perception check or a DC15 investigation check.
            </p>
            <p>
                The Mistress quarters are absolutely pristine. Inside a scared
                young woman is curled up on the bed. She had been hiding in
                these quarters, surviving on rations. The stairwell leads up to
                Level 3E.
            </p>
            <h4>H: Meeting Room</h4>
            <p>
                2 High Priests of Enkiem are seated at the table in this room.
                Amongst themselves, they are discussing the eventual reclaiming
                of Enkiem's Temple from the masses.
            </p>
            <h4>I: Throne Room</h4>
            <h5>The Door</h5>
            <EmphasisBlock>
                <p>
                    Nestled between the two stairwells of the balcony, are a set
                    of double iron doors that rise to the ceiling. In the
                    center, an ornate door lock keeps the doors shut. There are
                    three key holes, arranged in a triangle in the center of
                    this lock.
                </p>
            </EmphasisBlock>
            <p>
                Any attempt to pick this lock will deal 3d12 force damage to the
                player. That player will need to make a DC20 CON saving throw or
                be launched back 20 feet. The effect will cause a loud booming
                sound, alerting all to the player's presence.
            </p>
            <p>
                To open the doors, the players must find 3 unique keys scattered
                throughout the palace.
            </p>
            <h5>Balcony</h5>
            <p>
                Flanking the door to the throne room are two staircases. They
                ascend up to a narrow balcony where Eddard would have addressed
                the palace.
            </p>
            <h5>West Stairwell</h5>
            <p>Leads to Dungeon A</p>
            <h5>East Stairwell</h5>
            <p>Leads to Level 2E</p>
            <h5>Throne Room</h5>
            <EmphasisBlock>
                <p>
                    A purple glow washes over the room, all emitting from a set
                    of altars that have been erected in the center. At each
                    altar are three figures, hands folded, looking onward,
                    chanting. Sitting on the throne, legs crossed is the dark
                    haired woman, Enkiem. Beams of purple trail from the altars,
                    directly to her.
                </p>
            </EmphasisBlock>
            <h3>Level 2</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_TWO_MAP} alt="level 2 map" />
            </PanZoom>
            <h4>A: Main Walkway</h4>
            <p>
                2 Flesh Sentinels walk in unison around the circle of the
                balcony, overlooking the first floor.
            </p>
            <h4>B: Guard's Quarters</h4>
            <p>
                Inside the players can see 16 archers sleeping in their beds.
                Over the fireplace, hangs an iron key, etched onto it, a stack
                of books.
            </p>
            <h4>B: West Balcony</h4>
            <EmphasisBlock>
                <p>
                    Arrows fly overhead as archers on the roof are lobbing
                    attacks down on survivors scavenging for supplies. Overhead
                    are a row of windows, fifteen fee up from you.
                </p>
            </EmphasisBlock>
            <h4>C: East Balcony</h4>
            <EmphasisBlock>
                <p>
                    Arrows fly overhead as archers on the roof are lobbing
                    attacks down on survivors scavenging for supplies. Overhead
                    are a row of windows, fifteen fee up from you.
                </p>
            </EmphasisBlock>
            <h4>C: Officer's Quarters</h4>
            <p>
                Inside the players can find a note explaining the handoff of the
                new key to the guard to watch over as they change shifts.
            </p>
            <h4>D: Entrance to Ruler's Quarters</h4>
            <p>
                This door is locked and can be opened with a DC15 slight of hand
                check with thieves tools. The door has 20 HP.
            </p>
            <p>This stairwell leads to Level 3E.</p>
            <h4>E: Main Stairwell</h4>
            <p>Stairwell leads to Level 1</p>
            <h4>F: Stairwell to Tower D</h4>
            <p>Stairwell leads to Level 3D</p>
            <h4>G: Stairwell to Tower A</h4>
            <p>Stairwell leads to Level 3A</p>
            <h4>H: Stairwell to Tower B</h4>
            <p>Stairwell leads to Level 3B</p>
            <h4>I: Stairwell to Tower C</h4>
            <p>Stairwell leads to Level 3C</p>
            <h3>Level 3</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_THREE_MAP} alt="level 3 map" />
            </PanZoom>
            <h4>A: Tower A</h4>
            <p>2 Archers stand at windows, arrows at the ready.</p>
            <h4>B: Tower B</h4>
            <p>2 Archers stand at windows, arrows at the ready.</p>
            <h4>C: Tower C</h4>
            <p>2 Archers stand at windows, arrows at the ready.</p>
            <h4>D: Tower D</h4>
            <p>2 Archers stand at windows, arrows at the ready.</p>
            <h4>E: Ruler's Office</h4>
            <p>
                Papers line the floor. Plans of expansion, clean up of the city,
                dealing with the Ravens, improved relations with the Dwarves.
                Also, the players will find rejection letters from Gastolir,
                multiple tribes of Krossa, Ney Fey, Anduin, and the Fey
                Wildlands for assistance.
            </p>
            <h4>F: Ruler's Supply Room</h4>
            <p>
                Rations for weeks, books on politics, history, religion, and
                military strategy can all be found in here. Hung on the wall are
                a multitude of credentials, all in Eddard's name.
            </p>
            <h4>G: Ruler's Bathroom</h4>
            <p>
                A DC12 perception check allows a player to notice that the
                toilet is slightly pulled away from the wall. Behind it, in a
                box, is a key etched with the symbol of a flame.
            </p>
            <h4>H: Ruler's Bedroom</h4>
            <p>
                A disheveled bed lay at the end of the room. Heavy blankets have
                been thrown around, and remains of rations litter the floor.
            </p>
            <h3>Level 4</h3>
            <h4>Map</h4>
            <PanZoom>
                <img src={LEVEL_FOUR_MAP} alt="level 4 map" />
            </PanZoom>
            <h4>Overview</h4>
            <p>
                From this level, the players can get a good view of the
                destruction that has overtaken the city. There are 16 archers
                and 4 Fallen Planetar on this floor.
            </p>
            <h4>A: Stairwell Down to Tower A</h4>
            <p>Stairwell leads down to Level 3A</p>
            <h4>B: North Walkway</h4>
            <p>
                4 Archers face outward away from the palace. 1 Fallen Planetar
                stands behind them.
            </p>
            <h4>C: Stairwell Down to Tower B</h4>
            <p>Stairwell leads down to Level 3B</p>
            <h4>D: East Walkway</h4>
            <p>
                4 Archers face outward away from the palace. 1 Fallen Planetar
                stands behind them.
            </p>
            <h4>E: Stairwell Down to Tower C</h4>
            <p>Stairwell leads down to Level 3C</p>
            <h4>F: South Walkway</h4>
            <p>
                4 Archers face outward away from the palace. 1 Fallen Planetar
                stands behind them.
            </p>
            <h4>G: Stairwell Down to Tower D</h4>
            <p>Stairwell leads down to Level 3D</p>
            <h4>I: West Walkway</h4>
            <p>
                4 Archers face outward away from the palace. 1 Fallen Planetar
                stands behind them.
            </p>
        </Fragment>
    );
};
