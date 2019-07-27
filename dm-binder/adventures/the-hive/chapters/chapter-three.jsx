import React, { Fragment } from "react";

import {
    EmphasisBlock,
    PanZoom,
    RollTable,
    ScrollToMe
} from "../../../core/index.js";

import UnderdarkLebel1Image from "../img/underdark-level-1.png";
import UnderdarkBasement1Image from "../img/underdark-basement-1.png";
import UnderdarkBasement2Image from "../img/underdark-basement-2.png";
import UnderdarkBasement3Image from "../img/underdark-basement-3.png";

import UNDER_DARK_ROLL_TABLE from "../constants/roll-tables/underdark-roll-table";

const ChapterThree = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="chapter-three" />
            <h2 id="chapter-three">Chapter Three: Into the Hive</h2>
            <div>
                <EmphasisBlock>
                    <p>
                        After hours traversing through the marshlands, you
                        encounter the mouth of cave emitting cold air. The
                        outside is lined with mushrooms. Inside, the air is
                        earthy, stale, and filled with rot. Inside you can hear
                        the echoing of feet pattering in the distance. A shrill
                        whistle bounces off of the cave walls and water droplets
                        can be heard dripping. Inside, the tunnels lower
                        uncomfortably close to your head.
                    </p>
                    <p>
                        Dim purple light emanates from mushrooms that coat the
                        walls, coating the dark stone. Ambling rigidly through
                        the halls are human sized white humanoid mushrooms. They
                        are ignoring you, moving to a fro, carrying small
                        armloads of miscellaneous things.
                    </p>
                </EmphasisBlock>
            </div>
            <div>
                <h3>On Creatures</h3>
                <p>
                    With the exception of the Illithid and Drow, all creatures
                    are servant to the Aboleth, through the myconid. They will
                    appear to be covered in spores, fungus, and rot.
                </p>
                <h3>On Myconids</h3>
                <p>
                    These Myconid creatures are currently enslaved by the
                    Aboleth living in the bottom basement. They will ignore the
                    players until they prove to be a threat. Once discovered,
                    they will first attempt to assimilate the players. If that
                    is not successful, they will kill their targets.
                </p>
            </div>
            <h3>Cavern</h3>
            <h4>Level 1</h4>
            <PanZoom>
                <img src={UnderdarkLebel1Image} alt="underdark level 1 map" />
            </PanZoom>
            <h5>A: Raven Storeroom</h5>
            <p>
                This room is blocked by a locked, trapped, door. It can be
                forced open with a DC20 STR check or a DC20 slight of hand
                check. When the door is forced open, it will immediately begin
                to sound off a high pitched alarm. A DC15 investigation check
                can detect the alarm. The alarm can be disarmed with a DC12
                slight of hand check.
            </p>
            <p>
                The sounding of the alarm will alert all of the myconids on the
                floor. Five <strong>Myconid Adults</strong> will be sent to
                investigate and apprehend the intruders. They will attempt to
                take one captive and return them to the basement 3 level to be
                enslaved.
            </p>
            <p>
                Inside this room are a number of large wooden crates. Inside,
                the following items can be found.
            </p>
            <ul>
                <li>500lbs of iron bars</li>
                <li>100lbs of rations</li>
                <li>500gp</li>
                <li>100lbs liadon brand pipeweed</li>
                <li>50lbs honey</li>
            </ul>
            <h5>B / C: Narrow Hallways Down to Basement 1</h5>
            <EmphasisBlock>
                The rocky floor beneath you dips sharply as gallons of water
                pour into the hallway below. The white rapids cut into the
                snaking stone passage that descends down into the blackness.
            </EmphasisBlock>
            <p>
                Any player that attempts to descend will be swept up in the
                water, sliding down to the lower level of the basement. Any
                attempt to climb back up fails, resulting in sliding back down.
            </p>
            <h5>D: Secret Stairwell down to Basement 3</h5>
            <p>
                The players are blocked by a door with no markings on the
                outside. The door can be forced open with a DC25 STR check. The
                resulting sound will echo through the underdark, alerting all of
                the myconids and the aboleth of the player's presence.
            </p>
            <h4>Basement 1</h4>
            <PanZoom>
                <img
                    src={UnderdarkBasement1Image}
                    alt="underdark basement 1 map"
                />
            </PanZoom>
            <h5>B: Underdark Shanty Town</h5>
            <h6>The Pond</h6>
            <p>
                The players will drop into the depths of a deep, ice cold, pond.
                Anyone who falls will need to make a DC12 CON saving throw. On
                failure they are shocked by the cold and begin to drown.
            </p>
            <h6>Enkiem's Cottage</h6>
            <p>
                The players stuble upon a lonely, abandoned cottage. Inside, are
                the scrawled diaries of what would become Enkiem and her son.
            </p>
            <EmphasisBlock>
                <p>
                    We haven't seen the daylight in years, not since I had
                    Morden. The drow, they rule everything down here and I guess
                    they always will...
                </p>
            </EmphasisBlock>
            <EmphasisBlock>
                <p>
                    I'm a terrible parent. I had to smother Morden as he cried
                    in my arms. The drow were going to discover us. He's young,
                    I hope he forgets. I don't think I'll ever forget the sight
                    of his face, purple, and blue. I'm just glad he's ok
                    now.We'll make it. I'm sure.
                </p>
            </EmphasisBlock>
            <EmphasisBlock>
                <p>
                    I prayed to her. Why won't she answer? Well, I guess it's on
                    my shoulders now. Morden, please forgive me.
                </p>
            </EmphasisBlock>
            <EmphasisBlock>
                <p>
                    Mom's been gone for days now. She walked up to a caravan of
                    the Drow's king rolling by and blew herself up. She took the
                    fuckers down with her and blue light filled the cavern, and
                    I heard her voice, peacful for the first time in years. I'll
                    miss her, but I'm glad to know she's in peace.
                </p>
            </EmphasisBlock>
            <p>
                The Mortal that was to become the current Goddess Enkiem lived
                in fear with her sun in the depths of the underdark. Here she
                was oppressed by Drow and driven into hiding, keeping her son
                hidden. She eventually cracked, coming to the conclusion that
                the only way to bring about a chance for life is to murder those
                in power. She sacrificed herself, and in the process ascended
                into the realm of Shar as Enkiem, goddess of order, destruction,
                and civilization.
            </p>
            <h5>C: Underdark Silent Lake</h5>
            <EmphasisBlock>
                <p>
                    You descend into a black pool of water that feels almost as
                    if it is dragging you down. There is a constant downward
                    current dragging you towards the bottom.
                </p>
            </EmphasisBlock>
            <p>
                The rate of descent will increase the deeper the player allows
                themselves to sink. For each failed DC X STR save, increase the
                difficulty by 5. It begins at 10.
            </p>
            <h5>E: Drow Common Room</h5>
            <EmphasisBlock>
                <p>
                    You enter a wide, lavish hall, decorated in elvish script,
                    and depictions of spider like creatures sitting on top of
                    high thrones. The entire hall has been cleared out. One{" "}
                    <strong>Myconid Adult</strong> circles the perimeter of the
                    hall, slowly, and deliberately.
                </p>
            </EmphasisBlock>
            <h5>F, G, H, I: Drow Quarters</h5>
            <p>
                Each of these quarters contain two{" "}
                <strong>Myconid Adults</strong>
                standing at attention. They are guarding hoards of food, simple
                weapons, metal, debris, wood, and rope.
            </p>
            <h5>J: Myconid Store Room</h5>
            <EmphasisBlock>
                Old shacks, rotting, and falling apart house a number of infant
                mushroom creatures, growing out the rock.
            </EmphasisBlock>
            <h5>K: Wide Hallway Down to Basement 2</h5>
            <EmphasisBlock>
                The wide sloping hall descends down into the darkness. Empty,
                and devoid of sound.
            </EmphasisBlock>
            <p>
                As the players descend, have them make a DC15 WIS saving throw
                one at a time. A player who fails will hear the Aboleth speak to
                it in it's mind. It will try to pray off of the target's fears,
                hoping to turn them back or convince them to become assimilated.
                It will create illusions of itself, communicate with the
                players, and try to turn them into slaves.
            </p>
            <p>Roll from the random encounter table.</p>
            <h5>L: Underdark Silent Caverns</h5>
            <EmphasisBlock>
                <p>
                    Large stone pillars cast dim shadows along the purple hued
                    floor, obscuring your view of what lays beyond.
                </p>
            </EmphasisBlock>
            <p>Roll from the random encounter table.</p>
            <h5>M: Narrow Hallway Down to Basement 2</h5>
            <p>Roll from the random encounter table.</p>
            <h5>N: Stairwell Down to Basement 2</h5>
            <p>This stairwell leads directly down to basement 2.</p>
            <h4>Basement 2</h4>
            <PanZoom>
                <img
                    src={UnderdarkBasement2Image}
                    alt="underdark basement 2 map"
                />
            </PanZoom>
            <h5>K: Wide Hall</h5>
            <p>Roll from the random encounter table.</p>
            <h5>M: Wide Hall</h5>
            <p>Roll from the random encounter table.</p>
            <h5>N: Food Supply Room</h5>
            <EmphasisBlock>
                <p>
                    Stacked to the ceiling are dried carcases of human, orc,
                    dwarf, and more. They dangle from their heels. In a corner
                    lay piles of black cloaks.
                </p>
            </EmphasisBlock>
            <p>
                A locked door cuts the party off from the rest of the floor. It
                may be opened with a DC12 slight of hand check. On the other
                side of the door is 1 <strong>Myconid Adult</strong>. It's back
                is turned towards the door.
            </p>
            <h5>O: Myconid Rest Area</h5>
            <EmphasisBlock>
                <p>
                    Hundreds of <strong>Myconid Adults</strong> stand at
                    attention, packed like sardines. They stand shoulder to
                    shoulder, still, interlinked with vine like tendrils, and
                    humming gently.
                </p>
            </EmphasisBlock>
            <h5>P: Wide Hall</h5>
            <p>Roll from the random encounter table.</p>
            <h5>Q: Silent Corner</h5>
            <EmphasisBlock>
                <p>
                    This ovular room is empty, silent, and oddly serene. Large
                    purple geodes stick out at every angle, refracting light
                    onto the stone floors.
                </p>
            </EmphasisBlock>
            <h5>R: Narrow Hall</h5>
            <p>Roll from the random encounter table.</p>
            <h5>S: Down to Basement 3</h5>
            <EmphasisBlock>
                <p>
                    The sound of dripping water floods your ears as your
                    footsteps echo into the darkness.
                </p>
            </EmphasisBlock>
            <h4>Basement 3</h4>
            <PanZoom>
                <img
                    src={UnderdarkBasement3Image}
                    alt="underdark basement 3 map"
                />
            </PanZoom>
            <h5>D: Back up to Level 1</h5>
            <p>This passageway leads back up to the first level.</p>
            <h5>S: Entryway</h5>
            <EmphasisBlock>
                <p>
                    You enter an empty stone hall. Standing before you is a
                    singular iron door.
                </p>
            </EmphasisBlock>
            <h5>T: Countdown Room</h5>
            <p>
                The players enter an ovular cavern with a single stone pedestal
                in the center. On top of the pedestal is the etching of an open
                hand. Behind the players, great iron doors slam shut, locking
                them in. At the head of the room a spiral of numbers can be seen
                scribbled in infernal. They read 20 - 0 and begin to tick off.
                As the countdown ticks off, the room begins to feel more and
                more dangerous as lights flash red, yellow, and the ticking
                becomes louder. Pressing the button in the center resets the
                countdown. If the countdown hits 0, the doors open.
            </p>
            <h5>U: Enslavement Hall</h5>
            <EmphasisBlock>
                <p>
                    Creatures of all kinds can be seen thrashing about,
                    screaming, and clawing at the Myconids tending to them.
                    Fungus grows out of every one of them. Much of their skin is
                    molted, decaying, and their eyes hollow.
                </p>
            </EmphasisBlock>
            <p>
                These creatures are currently beginning the process of becoming
                enslaved. The will attack all who approach without care.
            </p>
            <h5>V: The Lake</h5>
            <EmphasisBlock>
                <p>
                    The air smells stale as you walk into an enormous
                    underground lake. A huge shadow lurks underneath. On the
                    other side of the lake, is a single chest and two staves.
                    There is precisely a 5ft border of rock that encircles the
                    lake. Along the cave walls myconid cling to the rock.
                    Overhead, flying shadows in the distance circle over your
                    heads. In front of the Aboleth stand two enormous fungal
                    humanoids.
                </p>
            </EmphasisBlock>
            <p>
                These Myconid are Myconid Masters and guard the Aboleth and the
                treasures beyond. They will attack when the players are deemed a
                threat. If they are destroyed, the link to the Aboleth is also
                destroyed.
            </p>
            <p>
                In the chest is the Talisman of Ultimate Evil. On a rack on
                either side are two staves.
            </p>
            <ul>
                <li>Tentacle Rod</li>
                <li>Staff of the Python</li>
            </ul>
            <h5>W: Dead Myconid Corner</h5>
            <EmphasisBlock>
                <p>
                    Piled up high are dozens of myconid bodies at varying levels
                    of decomposition. The stench rips through your nostrils,
                    causing you all to gag.
                </p>
            </EmphasisBlock>
            <h3>Random Encounters</h3>
            <RollTable items={UNDER_DARK_ROLL_TABLE} />
        </Fragment>
    );
};

export default ChapterThree;
