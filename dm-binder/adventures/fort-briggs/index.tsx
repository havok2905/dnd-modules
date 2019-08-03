import React, { Fragment } from "react";
import {
    CollapsableContainer,
    Creatures,
    DmScreen,
    EmphasisBlock,
    Footer,
    Map,
    MonsterBlock,
    Page,
    RollTable,
    ScrollToMe
} from "../../core/index.js";

import TowerImage from "./img/tower.png";
import Level1Image from "./img/level-1.png";
import BasementImage from "./img/basement.png";
import TunnelsImage from "./img/tunnels.png";

import TABLE_OF_CONTENTS from "./constants/table-of-contents/table-of-contents";
import KROSSA_RANDOM_ENCOUNTERS from "./constants/roll-tables/krossa-random-encounters";

const FortBriggs = () => {
    return (
        <Fragment>
            <Page>
                <h1>Fort Briggs</h1>
                <ScrollToMe scrollActionString="overview" />
                <h2>Overview</h2>
                <p>
                    <strong>Expected Level:</strong> 3
                </p>
                <p>
                    The residents of East Eagle Fort have begun the process of
                    expanding their basement further underground, in an attempt
                    to house more soldiers. As they dug deeper, they stumbled
                    upon the ruins of an ancient ice wizard. Encased in a blue
                    crystal is the withering corpse of an woman. The life force
                    of this elf was used to summon{" "}
                    <strong>Ice Elementals</strong> in a previous age. There is
                    just enough life force for one more elemental. It proceeded
                    to lay waste to the soldiers, their skeletons reanimating
                    with the abundant magic in the area.
                </p>
                <p>
                    One soldier was able to escape. He flees south for
                    reinforcements to help save his friends.
                </p>
                <ScrollToMe scrollActionString="hook" />
                <h2>Hook</h2>
                <EmphasisBlock>
                    <p>
                        Your journeys have unfortunately taken you through the
                        frozen wastes of Krossa, a land of sprawling tundra,
                        razor sharp mountain peaks, and icy windstorms that tear
                        through the most weathered of travelers. The sheer cold
                        bores through your bones with every gust as you traverse
                        across the region.
                    </p>
                    <p>
                        It is now the end of your first week of travel, as in
                        the distance, the howls of wolves echo under the dull
                        grey skies. Mixed in with this howl, is a blood curdling
                        scream of a man.
                    </p>
                </EmphasisBlock>
                <p>
                    Players who approach the sound discover an{" "}
                    <strong>Arctic Nomad</strong> in a heavy black fur coat. His
                    clothes are torn and weathered as he has been traveling
                    alone for days. He is being assaulted by 1{" "}
                    <strong>Dire Wolf</strong>.
                </p>
                <p>
                    This man is the lone survivor of the incident at Fort
                    Briggs. If the players save him, he will tell his tale and
                    request help in saving his comrades, while he travels south
                    to alert his superiors.
                </p>
                <ScrollToMe scrollActionString="krossa" />
                <h2>Krossa</h2>
                <h3>The Wilds</h3>
                <RollTable items={KROSSA_RANDOM_ENCOUNTERS} />
                <ScrollToMe scrollActionString="fort-briggs" />
                <h2>Fort Briggs</h2>
                <h3>History</h3>
                <h4>First Age</h4>
                <p>
                    After the absence of the gods, at the end of the first age,
                    the foundation behind what held the planes together began to
                    crumble. Creatures from the plane of ice flooded into the
                    region, wrecking havoc on the local towns people. In time, a
                    local wizard used his prowess to take command of the planar
                    creatures, ruling the region for hundreds of years.
                </p>
                <p>
                    Using his newfound slave army of creatures and dominated
                    people, the wizard constructed an immense iron wall,
                    blocking exit to the south into warmer climates. To the
                    people of Krossa, this was the last straw. As the first age
                    came to an end, the people revolted, destroying all remains
                    of the great wizard.
                </p>
                <h4>Third Age</h4>
                <p>
                    As time went on, the iron wall was converted into a military
                    fortress from the people of Krossa. Now littered with
                    smaller forts, it is the primary defensive structure against
                    all potential invaders. Rechristened Fort Briggs, it houses
                    the finest military force on the continent. Only the most
                    worthy of applicants are honored with the opportunity to
                    serve on the fort.
                </p>
                <h3>Fort East Eagle</h3>
                <p>
                    Fort East Eagle is the furthermost scouting fort on the
                    opposite side of the wall. It's job is to scout out
                    potential threats before they reach the wall. If possible,
                    neutralize them.
                </p>
                <p>
                    Having a need for more troops to man the fort, the soldiers
                    began to tunnel deep into the tundra.As they dug, they
                    uncovered ruins from the first age, a magical artifact
                    leaking dark magic.
                </p>
                <p>
                    The ruins used to be a factory for{" "}
                    <strong>Ice Elementals</strong> for the wizard's oppressive
                    army. It has long been forgotten and almost out of magic. It
                    had enough to summon another <strong>Ice Elemental</strong>,
                    which proceeded to slay the entirety of the squad, before
                    perishing itself.
                </p>
                <h3>Maps</h3>
                <h4>Tower</h4>
                <Map src={TowerImage} alt="Tower" />
                <h5>S: East Eagle Tower</h5>
                <ul>
                    <li>Wood Pile</li>
                    <li>2 Hand Crossbow</li>
                    <li>30 Bolts</li>
                    <li> 1 Hammok</li>
                    <li>1 Tent</li>
                </ul>
                <p>
                    In a chest is 1 Ring of Cold Resistance, and 1 Decanter of
                    Endless Water.
                </p>
                <p>
                    In the fire are <strong>3 Ember Bats</strong>. Inspecting
                    the fire or causing a disturbance will cause them to attack.
                </p>
                <h4>Level 1</h4>
                <Map src={Level1Image} alt="Level 1" />
                <h5>A: Main Hall</h5>
                <EmphasisBlock>
                    Splatters of frozen blood and shards of ice blanket the
                    black stonework floor beneath you. Skeletons in shredded
                    coats and sprawled out at odd, inhuman, angles. The air is
                    frigid, stale, and not a sound can be heard, sans the wind
                    blowing outside of the walls of the fort.
                </EmphasisBlock>
                <p>
                    4 <strong>Skeletons</strong> come to life as the party
                    approaches them. A DC15 stealth check from every player can
                    avoid them animating.
                </p>
                <p>
                    The blood coating the floor has frozen over. Any player
                    stepping on the bloody ice must succeed a DC12 DEX saving
                    throw or be knocked prone.
                </p>
                <p>
                    Each <strong>Skeleton</strong> has on them; 1 short sword, 1
                    short bow, 20 arrows, 1 black fur coat, and one set of flint
                    and steel. Among all of the skeletons, there are 1d4 out of
                    four potions of healing. The remainder are shattered, their
                    contents frozen to the bones of the fallen soldiers.
                </p>
                <h6>Left Closet</h6>
                <p>This closet contains...</p>
                <ul>
                    <li>1 50lbs bag of coarse salt</li>
                    <li>1 Pick Axe</li>
                    <li>3 Black Fur Coats</li>
                </ul>
                <h6>Right Closet</h6>
                <ul>
                    <li>
                        1 Locked Wooden box containing a{" "}
                        <strong>Wand of Fireballs</strong> with one charge. The
                        box can be opened with a DC12 slight of hand check with
                        thieves tools or a DC17 STR check.
                    </li>
                    <li>5 Torches</li>
                    <li>10 logs of firewood</li>
                </ul>
                <h6>Stairwell</h6>
                <p>The Stairwell leads to...</p>
                <ul>
                    <li>Tower: S</li>
                    <li>Basement: F</li>
                </ul>
                <h5>B: Store Room</h5>
                <EmphasisBlock>
                    As you open the door what seems like a tiny shadow whips
                    behind the barrels, where two yellow eyes look back at you
                    in the darkness. One of the chests of rations is cracked
                    open, a few wrappers littering the floor.
                </EmphasisBlock>
                <p>In this room there is...</p>
                <ul>
                    <li>
                        1 <strong>Cat</strong>
                    </li>
                    <li>3 Barrels of Oil</li>
                    <li>3 Barrels of Ale</li>
                    <li>Two chests of rations</li>
                    <li>Boots of the Winterlands</li>
                </ul>
                <h5>C: Founder's Hall</h5>
                <EmphasisBlock>
                    A ceiling high stone statue towers over you, standing behind
                    a curved stone altar. Along the top reads, "In memory of
                    General Briggs, who led the assault to secure the fortress
                    for the good of mankind." The room is quite warm, with
                    random puddles of water scattered about.
                </EmphasisBlock>
                <p>On a bowl on the altar is 5gp, 10sp, and 100cp.</p>
                <p>
                    Attempting to take the money will cause the floor of the
                    room to become electrified. It will cause 1d6+3 lightning
                    damage to anyone in the room.
                </p>
                <h5>D: Kitchen</h5>
                <EmphasisBlock>
                    <p>
                        You walk into a cramped kitchen, full with a water pump,
                        iron stove, a pantry stocked with dried rations, and
                        table littered with utensils, knives, bowls, and spices.
                    </p>
                </EmphasisBlock>
                <p>In this room, the following can be found.</p>
                <ul>
                    <li>Grater</li>
                    <li>Drinking Horn</li>
                    <li>4 Daggers</li>
                    <li>Cooking Oil</li>
                    <li>Cast Iron Pan</li>
                    <li>Hourglass</li>
                    <li>
                        In the pantry: (For stove) 1 heat sink, 1 off switch
                    </li>
                </ul>
                <h6>The Stove</h6>
                <p>
                    The stove is not functional, and near explosion. It makes
                    loud clicking noises and is steadily heating up. It can be
                    repaired with a DC15 slight of hand check, with advantage if
                    the player is using the replacement tools. With a failure of
                    5 or more, the stove spews a cloud of dark ash. The target
                    must make a DC12 CON saving throw or be blinded until the
                    ash can be washed out. A failure of 8 or more will cause the
                    stove to fire off a small explosion, causing 1d6+3 fire
                    damage, causing a loud boom, audible for 120 feet. The north
                    exit to the kitchen will be caught on fire.
                </p>
                <p>
                    If the players idle in this room, it will be counted as a
                    failure of 8 or more.
                </p>
                <h5>E: Dining Hall</h5>
                <EmphasisBlock>
                    <p>
                        A smoldering, dying, flame in an immense fireplace casts
                        a sad warm glow on the tables in the dining hall.
                    </p>
                </EmphasisBlock>
                <ul>
                    <li>5 Wood Smoking Pipes</li>
                    <li>1 Chess Board</li>
                    <li>
                        Left over rations; stale bread, frozen cheese, dried
                        fish
                    </li>
                    <li>1 Flask of Whiskey</li>
                    <li>10 Bottles of Mead</li>
                    <li>1 Deck of Cards</li>
                    <li>57 Copper Pieces</li>
                    <li>Two Long Swords</li>
                    <li>1 Shield, branded with a wolf's head</li>
                    <li>1 Letter to Loved Ones</li>
                </ul>
                <h4>Basement</h4>
                <Map src={BasementImage} alt="Basement" />
                <h5>F: Lobby</h5>
                <p>Stairwell leads up to Level 1: A.</p>
                <h5>G: Smith</h5>
                <EmphasisBlock>
                    <p>
                        The air warms up very quickly. The furnace in this room
                        is still raging.
                    </p>
                </EmphasisBlock>
                <ul>
                    <li>Shackles</li>
                    <li>Chains</li>
                    <li>50 Iron Ingots</li>
                </ul>
                <h5>H: Library</h5>
                <p>
                    2 <strong>Skeleton</strong> idly walk between the shelves.
                </p>
                <h6>The First Age: Blue Light</h6>
                <EmphasisBlock>
                    <p>
                        The beginning of the first age began with an explosion
                        of blue light that flooded the night skies. Titans of
                        enormous proportions ravaged the land. The Isles of Mann
                        crashed into the sea, and the desert Metropolis of
                        Habarashi fell. The gods abandoned us.
                    </p>
                </EmphasisBlock>
                <h6>Krossa at the End of the First Age</h6>
                <EmphasisBlock>
                    <p>
                        The end of the first age came to a close with the
                        collapse of the planar bindings that held the universe
                        together. Arch Mage Kofax, a wizard of great power took
                        control of the North. Enslaved creatures and golems of
                        ice ravaged the people even further. In that time,
                        construction of the great iron wall began.
                    </p>
                </EmphasisBlock>
                <h6>The Resistance</h6>
                <EmphasisBlock>
                    <p>
                        Flames filled the sky and battle cries echoed over the
                        battle fields as the people fought back. Blade and
                        shield in hand, Commander Briggs slayed Kofax, bringing
                        about an age of slavery and violence.
                    </p>
                </EmphasisBlock>
                <h5>I: Vault</h5>
                <p>
                    The door to this room is locked and trapped. It can be
                    unlocked with a DC12 slight of hand check. If the trap is
                    not disarmed, the room will fill with flames for 2d6+3 fire
                    damage.
                </p>
                <p>
                    Inside is a safe, it is locked and can be opened with a DC15
                    slight of hand check. Inside is a Talisman of Ultimate Evil.
                </p>
                <h5>J: Commander's Quarters</h5>
                <EmphasisBlock>
                    <p>
                        You walk into a well furnished, cozy, bedroom. on the
                        desk is a single letter, ink dried and frozen to the
                        wood of the desk.
                    </p>
                    <p>
                        "Commander Hazel, we dug up something truly evil. I've
                        locked it in the safe to keep the men from getting to
                        it. I fear what one could do with such an item. Tomorrow
                        should be our last day of digging before we start to
                        construct the new quarters. I've made the executive
                        decision to delay until tomorrow before informing you of
                        what we found. We need all of the men we have on duty.
                        Speak with you soon, General Havoc."
                    </p>
                </EmphasisBlock>
                <h5>K: Quarters</h5>
                <ul>
                    <li>5 Copper Pieces</li>
                    <li>1 Bottle of Mead</li>
                </ul>
                <h5>L: Quarters</h5>
                <p>
                    Make a DC10 STR saving throw. On a failure a disconnected
                    skeletal arm grapples the target, tripping you to the floor.
                    It tries to pull you under the bed where another dislocated
                    arm is wielding a blade.
                </p>
                <h5>M: Quarters</h5>
                <p>
                    Under the bed is a box of mushrooms. Consuming them will
                    cause disadvantage on attack rolls and ability checks for 1
                    hour unless a DC15 WIS save is succeeded.
                </p>
                <h5>N: Quarters</h5>
                <p>
                    <ul>
                        <li>2 Black Coats</li>
                    </ul>
                </p>
                <h5>O: Toilet</h5>
                <EmphasisBlock>
                    <p>The smell is awful as door swings open.</p>
                </EmphasisBlock>
                <h5>P: Passage to Tunnels</h5>
                <p>Leads to Q: Ruins</p>
                <h4>Tunnels</h4>
                <Map src={TunnelsImage} alt="Tunnels" />
                <h5>Q: Caves</h5>
                <EmphasisBlock>
                    <p>
                        The eery silence above quickly turns into an ever
                        present humming. The walls themselves vibrate gently as
                        you touch them. To the left and to the right are two
                        narrow tunnels. Directly in front, crates of mining
                        material block a third tunnel.
                    </p>
                </EmphasisBlock>
                <h5>R: Ruins</h5>
                <EmphasisBlock>
                    <p>
                        Circular rings of stone, colored in faded blues and
                        yellows ripple from the center of the cave. Bobbing a
                        few feet from the ground is a ten foot orb of blue
                        crystal. Inside, you see the withered corpse of an
                        ancient elf. Her hair is stark white, and her body is
                        frail. Her face contorts into agonizing shapes, slowly,
                        as if time has been slowed inside of the orb.
                    </p>
                    <p>
                        As the players approach, the elf lets out a harsh
                        shriek. Extruding from the orb, trunk like limbs climb
                        out and the orb's light dims.
                    </p>
                </EmphasisBlock>
                <p>
                    1 <strong>Ice Elemental</strong> proceeds to chase after the
                    party.
                </p>
                <ScrollToMe scrollActionString="creatures" />
                <h2>Creatures</h2>
                <h3>Existing Creatures</h3>
                <ul>
                    <li>Cat (MM 320)</li>
                    <li>Dire Wolf (MM 321)</li>
                    <li>Ice Mephit (MM 215)</li>
                    <li>Skeleton (MM 272)</li>
                </ul>
                <h3>Custom Creatures</h3>
                <CollapsableContainer title="Arctic Nomad">
                    <MonsterBlock {...Creatures.ARCTIC_NOMAD} />
                </CollapsableContainer>
                <CollapsableContainer title="Ember Bat">
                    <MonsterBlock {...Creatures.EMBER_BAT} />
                </CollapsableContainer>
                <CollapsableContainer title="Ice Elemental">
                    <MonsterBlock {...Creatures.ICE_ELEMENTAL} />
                </CollapsableContainer>
            </Page>
            <DmScreen
                contentsList={TABLE_OF_CONTENTS}
                hashReferencesSupported={false}
            />
            <Footer />
        </Fragment>
    );
};

export { FortBriggs };
