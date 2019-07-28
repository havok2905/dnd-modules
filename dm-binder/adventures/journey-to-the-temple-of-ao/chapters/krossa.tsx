import React, { Fragment } from "react";

import { EmphasisBlock, RollTable, ScrollToMe } from "../../../core/index.js";

import { FROZEN_TUNDRA_ROLL_TABLE } from "../constants/roll-tables/frozen-tundra-roll-table";
import { SNOWCRASH_MOUNTAINS_ROLL_TABLE } from "../constants/roll-tables/snowcrash-mountains-roll-table";

const Krossa = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="krossa" />
            <h2>Krossa</h2>
            <h3>Attempting to Fly Into Krossa</h3>
            <EmphasisBlock>
                <p>
                    Sleet and hail buffets against your ship as winds pull the
                    floors out from under you in huge jerks. Control of your
                    ship is almost non existent. Alarms sound from every
                    control. Despite moving at full speed it is as if your ship
                    has hit a wall.
                </p>
            </EmphasisBlock>
            <p>
                It is impossible to fly into Krossa directly. This is the will
                of Ao who supercedes the will of all other deities. Any attempts
                to continue beyond what is reasonable will cause massive damage
                to this ship. It will get caught in the wind and crash just
                outside of the closest town in New Fey.
            </p>
            <h3>The Frozen Tundra</h3>
            <EmphasisBlock>
                <p>
                    Flat plains of frozen earth span out in every direction like
                    a giant carpet. Cold winds cut through all of you, almost as
                    if shaving off layers of bone with each gust. On the
                    horizon, mountains cut into the sky, through the clouds.
                </p>
            </EmphasisBlock>
            <h4>Random Encounters</h4>
            <RollTable items={FROZEN_TUNDRA_ROLL_TABLE} />
            <h3>Snowcrash Mountains</h3>
            <h4>A: Start of Climb</h4>
            <EmphasisBlock>
                <p>
                    Rolling, gray brown hills, dusted with frost scale
                    continuously upward towards a jagged rock tooth tearing the
                    clouds in two. It’s summits are speckled with white, and the
                    air silent with the exception of the howling of wolves heard
                    in the distance.
                </p>
            </EmphasisBlock>
            <h4>B: Scale Cliff</h4>
            <EmphasisBlock>
                <p>
                    As you approach the base of the mountain, you see a sheer
                    and jagged cliff, towering for hundreds of feet in front of
                    you.
                </p>
            </EmphasisBlock>
            <p>
                Perception DC 15: Buzzing around overhead, you see four crystal
                looking creatures, reflecting the sun back down at you. They are
                Ice Mephits.
            </p>
            <p>
                If an Ice Mephit explodes mid climb, roll a d20. On an 18-20,
                the surrounding rock will crumble, revealing more hand/foot
                holds. Players will have advantage on rolls pertaining to
                climbing. On a 1-3, the rock under the closest player within
                twenty feet, will fall from under them, causing them to start
                falling if they fail a DC15 DEX saving throw. Whenever a Mephit
                explodes, debris will rain down on the climbers. This debris can
                be avoided with a DC12 DEX saving throw. On failure, the targets
                take 1d4 bludgeoning damage.
            </p>
            <h4>C: Dig Through Snow</h4>
            <EmphasisBlock>
                <p>
                    You cimb up to a spanning, field of white and snow capped
                    evergreens. Thick snake like patterns disturb the surface of
                    the snow in all directions. The air is completely silent.
                    Around the edges of the forest, are all kinds of plant life
                    and shrubs.
                </p>
            </EmphasisBlock>
            <p>
                Survival/Nature DC16. The players know this to be the tell tale
                sign of remoraz territory.
            </p>
            <p>
                Stealth DC20. On failure, two remoraz are alerted to your
                presence.
            </p>
            <h4>D: Empty Chasm</h4>
            <EmphasisBlock>
                <p>
                    The air is growing thinner as you walk into a thick sheet of
                    pure ice. As you walk forward you notice that in every
                    direction, there is a deep cut in the ice, dropping down
                    hundreds of feet below. The chasm is fifty feet wide. Over
                    the chasm, a dozen of ice mephits can be seen buzzing
                    around.
                </p>
            </EmphasisBlock>
            <h4>E: Traverse Through Tunnels</h4>
            <EmphasisBlock>
                <p>
                    Light dims to a complete darkness as you descend into a
                    tunnel of ice that encircles you like a pipe. As you descend
                    deeper you being to hear the shuffling of feet.
                </p>
            </EmphasisBlock>
            <p>
                Investigation of 15 shows that the ceilings and floor are
                littered with cracks.
            </p>
            <p>
                The floors and ceiling can be caved in, creating a gap, by
                causing more than ten damage to the rock.
            </p>
            <p>
                Deeper in the tunnels reside hundreds of Drauger. Disturbing one
                will cause them to come in waves of 5, 10, 20, 40, 80, 160.
            </p>
            <h4>F: Cross Underground Lake</h4>
            <EmphasisBlock>
                <p>
                    You walk into a room filled with shimmering blue light,
                    filled with rocks of a deep red jutting from the ceilings
                    and the lake surface. The surface is crystal clear.
                </p>
            </EmphasisBlock>
            <h4>G: Climb Ice Waterfall</h4>
            <EmphasisBlock>
                <p>
                    You emerge from another tunnel to a blinding light. As your
                    eyes adjust, there is a single path leading up the snowy
                    summit to a peak that holds a simple, wood cottage, chimney
                    billowing smoke.
                </p>
            </EmphasisBlock>
            <h4>Random Encounters</h4>
            <RollTable items={SNOWCRASH_MOUNTAINS_ROLL_TABLE} />
        </Fragment>
    );
};

export { Krossa };
