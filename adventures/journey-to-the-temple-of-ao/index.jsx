import React, { Fragment } from 'react';
import { 
    CollapsableContainer,
    EmphasisBlock,
    Footer,
    ItemBlock,
    MonsterBlock, 
    Page, 
    PanZoom,
    RollTable,
    TableOfContents 
} from 'dnd-module';

import SKY_ROLL_TABLE from './constants/roll-tables/sky-roll-table';
import FROZEN_TUNDRA_ROLL_TABLE from './constants/roll-tables/frozen-tundra-roll-table';
import SNOWCRASH_MOUNTAINS_ROLL_TABLE from './constants/roll-tables/snowcrash-mountains-roll-table';

import WorldMap from './img/world-map.jpg';

const JourneyToTheTempleOfAo = ()=> {
    return (
        <Fragment>
            <Page>
                <h1>Journey to the Temple of Ao</h1>
            </Page>
            <Page>
                <h1>Overview</h1>
                <h2>Backstory</h2>
                <p>
                    Several months ago, a devastating force overtook the continent. Skyscraper
                    tall cyclops titans appeared throughout the land, destroying large cities
                    in a lumbering, arduous, fashion. Rotting demons run through the alleys,
                    slaughtering citizens by the millions. The long forgotten goddess of destruction,
                    civilization, and balance, Enkiem, has been awoken from a long slumber. She
                    has set her minions unto the world to allow people of the material plane to
                    start over, curb their existing power, and keep the mortal realm from ever threatening
                    the realm of the gods.
                </p>
                <p>
                    The party has recently learned a secret, that a temple at the highest peak in the
                    snowy lands of Krossa may hold the key to being rid of this destruction god, saving
                    the lives of millions. Aboard their airship, they are currently enroute to a bordering
                    region, New Fey, where they hope to find a guide to lead them into the mountains.
                </p>
                <p>
                    Unfortunately for the heroes, another group seeks the temple. The Order of the Profane
                    Soul, a group dedicated to removing darkness from the world by any means, looks
                    to acquire what lies in the temple. Their methods and end goals are far more nefarious however.
                </p>
                <h2>Goals</h2>
                <ul>
                    <li>Reach the Temple of Ao before the Order of the Profane Soul.</li>
                    <li>Prove worthy in front of all of the god's will, Ao to gain new power</li>
                    <li>Leave Krossa, enroute to slay Enkiem</li>
                </ul>
                <h2>Pantheon</h2>
                <h3>How Gods Work</h3>
                <p>
                    In this adventure, gods and goddesses are positions of power, to be filled when
                    a mortal perishes that most closely identifies with the available role. Each position
                    was split from Ao's will. When the current holder is slain, the position remains empty
                    until a new candidate reveals themselves. Then the candidate is revealed, the world
                    will fill with blue light, signaling their arrival into godhood.
                </p>
                <p>
                    in the beginning there was Ao. He split himself in two, creating the goddesses of light
                    and darkness. In turn they split their will even further, resulting in all of the gods
                    and goddesses that currently exist.
                </p>
                <p>
                    When a deity makes a move to affect the material plane, they themselves become a part of
                    the material plane, making them vulnerable. They can be slain by other deities, weaponry
                    forged by other deities, or by divine power handed down by the wills of Ao, Shar, or Selune.
                </p>
                <p>
                    When you speak or deal with a higher god, you hear the voices of all gods split from that
                    deity's will. The presence can be life altering, and in some cases mind shattering.
                </p>
                <h3>Ao: God of Creation</h3>
                <p>
                   Ao is the beginning. Ao created all of the lesser gods, and all of creation by proxy.
                   Ao is neutral and speaks with the voice of all of the lesser gods. Ao values
                   first and foremost the advancement of his creations; the lesser gods, devils, fiends, angels,
                   humans, elves, dwarves, etc. Those who seek progression for progression's sake can recieve
                   Ao's blessing.
                </p>
                <h3>Shar: Goddess of Trickery and Death</h3>
                <p>
                    Though being the goddess of trickery and death, Shar represents Ao's wish for struggle
                    for creation and the belief that one cannot progress while idle. In character, Shar
                    is slick, ambitious, and cruel. Those who would seek gain for themselves alone can
                    receive Shar's blessing.
                </p>
                <h3>Selune: Goddess of Knowledge and Life</h3>
                <p>
                    Selune is the goddess of knowledge and life, representing all that Ao wishes creation
                    could become. Selune in character changes mood rapidly, from bubbly to pensive in an instant.
                    Those who seek gain for others for other's sake can receive Selune's blessing.
                </p>
                <h3>Enkiem: Goddess of Destruction, Civilization, and Balance</h3>
                <p>
                    Enkiem is the Goddess of Destruction, Civilization, and Balance. She exists as a foil to
                    the mortal realms desire for advancement. When a civilization becomes too advanced, she
                    releases demonic forces to wipe the land clean, making room for now custodians of the world
                    to take charge. She has even gone as far as to slay other gods and goddesses in this pursuit.
                    Most notably was the goddess Maren who gave birth to a demigod halfling named Sam. Because this
                    released a potential threat to the gods into the mortal realm, she slayed Maren, leaving innocent
                    Sam behind as he was still innocent.
                </p>
                <p>
                    This would prove a mistake, as Sam would fight back for thousands of years, saving as many people
                    from Maren's wrath as he could. Amassing enough power, he was finally able to seal her away
                    for 50,000 years, until recently when the seal was broken. Now aged, Sam has lost much of his
                    power and was slain by Enkiem upon her return, high in the mountains of Krossa.
                </p>
                <h3>Maren: God of Life, Fire, and Inspiration</h3>
                <p>
                    In the absence of Sam's mother, this position in godhood lay vacant for thousands of years.
                    Upon Sam's death, he was found to be the next candidate, ascending to godhood, taking the mantel,
                    for providing hope for the people. He is still new however, and just beginning to get a grasp of his
                    powers. His goal is quite different now however. He no longer wishes to slay Enkiem personally, but
                    rather help others discover their true potential so that they may take on the job themselves.
                </p>
            </Page>
            <Page>
                <h1>Factions</h1>
                <h2>Order of the Profane Soul</h2>
                <p>
                    The Order of the Profane Soul is an ancient organization of Blood Hunters. They have succumb to the
                    darkness themselves in pursuit of trying to rid the world of that same darkness. The organization is
                    extremely secretive with how it operates, keeping themselves hidden at all costs. They abhor all forms
                    of the undead and evil creatures. Currently, their leader is following a lead that may lend him to
                    be rid of an ancient god of destruction, and all gods that stand in their way.
                </p>
                <h2>Fey Wildlands</h2>
                <p>
                    The Fey Wildlands are the ancient home of the elves. Today the most noble families live here,
                    just off the coast of the main continent, beyond Planar Gate Isle. They typically keep to
                    themselves, with the exception of trading with the mainland. They hold the migrants that moved to
                    New Fey as traitors to the high elf king and wish to one day annex New Fey, to claim back their kin.
                </p>
                <h2>New Fey</h2>
                <p>
                    The elves of New Fey migrated to the the northern half of the continent ages ago. They yearned
                    for independence from the high elf king. Since then, they have never ascended to their former glory.
                    The elves struggle to tame the harsh frozen lands, but stay out of love for their home in isolation.
                    These elves are hearty, tough, people that are exceptional at survival. They despise the Fey Wildlands
                    and always have an ear out for talks of invasion. In preparation, they have made alliances with many of
                    the nomadic tribes in Krossa to help bolster their forces in time of need.
                </p>
            </Page>
            <Page>
                <h1>World Map</h1>
                <PanZoom>
                    <img src={WorldMap} alt='World Map'/>
                </PanZoom>
            </Page>
            <Page>
                <h1>Encountering Profane Soul Fleet</h1>
                <p>
                    Attempting to fly over New Fey will cause the players to get view of a fleet of
                    small airships hovering in the air, five in total. They are all unmarked and can be
                    seen from five hundred feet away.
                </p>
                <p>
                    These ships are owned by the Order of the Profane soul and they will avoid conflict
                    unless provoked or they gain knowledge that you are also in search of the temple.
                </p>
                <h2>The Flagship</h2>
                <p>
                    The largest of the five has the leader of the order onboard. In his possession is a
                    tome depicting Enkiem's slaying of Maren, as Maren was left to die. Maren outlines
                    in this tome the ways in which the gods are vulnerable and her hope in mortals eventually
                    overcoming this obstacle. She outlines explicit directions to Ao's temple, and the trials
                    that lay ahead.
                </p>
            </Page>
            <Page>
                <h1>Sky Encounters</h1>
                <h2>Random Encounters</h2>
                <RollTable items={SKY_ROLL_TABLE}/>
            </Page>
            <Page>
                <h1>New Fey</h1>
                <h2>Port City</h2>
                <h2>Fort Waffleheim</h2>
                <h2>New Fey Krossa Border</h2>
            </Page>
            <Page>
                <h1>Krossa</h1>
                <h2>Attempting to Fly Into Krossa</h2>
                <EmphasisBlock>
                    <p>
                        Sleet and hail buffets against your ship as winds pull the floors out from under
                        you in huge jerks. Control of your ship is almost non existent. Alarms sound from
                        every control. Despite moving at full speed it is as if your ship has hit a wall.
                    </p>
                </EmphasisBlock>
                <p>
                    It is impossible to fly into Krossa directly. This is the will of Ao who supercedes the
                    will of all other deities. Any attempts to continue beyond what is reasonable will cause
                    massive damage to this ship. It will get caught in the wind and crash just outside of the
                    closest town in New Fey.
                </p>
                <h2>The Frozen Tundra</h2>
                <EmphasisBlock>
                    <p>
                        Flat plains of frozen earth span out in every direction like a giant carpet. Cold winds
                        cut through all of you, almost as if shaving off layers of bone with each gust. On the horizon,
                        mountains cut into the sky, through the clouds.
                    </p>
                </EmphasisBlock>
                <h3>Random Encounters</h3>
                <RollTable items={FROZEN_TUNDRA_ROLL_TABLE}/>
                <h2>Snowcrash Mountains</h2>
                <h3>A: Start of Climb</h3>
                <EmphasisBlock>
                    <p>
                        Rolling, gray brown hills, dusted with frost scale continuously upward towards a jagged 
                        rock tooth tearing the clouds in two. It’s summits are speckled with white, and the air 
                        silent with the exception of the howling of wolves heard in the distance.
                    </p>
                </EmphasisBlock>
                <h3>B: Scale Cliff</h3>
                <EmphasisBlock>
                    <p>
                        As you approach the base of the mountain, you see a sheer and jagged cliff, towering for 
                        hundreds of feet in front of you. 
                    </p>
                </EmphasisBlock>
                <p>
                    Perception DC 15: Buzzing around overhead, you see four crystal looking creatures, 
                    reflecting the sun back down at you. They are Ice Mephits.
                </p>
                <p>
                    If an Ice Mephit explodes mid climb, roll a d20. On an 18-20, the surrounding
                    rock will crumble, revealing more hand/foot holds. Players will have advantage on rolls
                    pertaining to climbing. On a 1-3, the rock under the closest player within twenty feet, will
                    fall from under them, causing them to start falling if they fail a DC15 DEX saving throw.
                    Whenever a Mephit explodes, debris will rain down on the climbers. This debris can be avoided
                    with a DC12 DEX saving throw. On failure, the targets take 1d4 bludgeoning damage.
                </p>
                <h3>C: Dig Through Snow</h3>
                <EmphasisBlock>
                    <p>
                        You cimb up to a spanning, field of white and snow capped evergreens. Thick snake 
                        like patterns disturb the surface of the snow in all directions. The air is completely 
                        silent. Around the edges of the forest, are all kinds of plant life and shrubs.
                    </p>
                </EmphasisBlock>
                <p>
                    Survival/Nature DC16. The players know this to be the tell tale sign of remoraz territory.
                </p>
                <p>
                    Stealth DC20. On failure, two remoraz are alerted to your presence.
                </p>
                <h3>D: Empty Chasm</h3>
                <EmphasisBlock>
                    <p>
                        The air is growing thinner as you walk into a thick sheet of pure ice. As you walk 
                        forward you notice that in every direction, there is a deep cut in the ice, dropping 
                        down hundreds of feet below. The chasm is fifty feet wide. Over the chasm, a dozen 
                        of ice mephits can be seen buzzing around.
                    </p>
                </EmphasisBlock>
                <h3>E: Traverse Through Tunnels</h3>
                <EmphasisBlock>
                    <p>
                        Light dims to a complete darkness as you descend into a tunnel of ice that encircles 
                        you like a pipe. As you descend deeper you being to hear the shuffling of feet.
                    </p>
                </EmphasisBlock>
                <p>
                    Investigation of 15 shows that the ceilings and floor are littered with cracks.
                </p>
                <p>
                    The floors and ceiling can be caved in, creating a gap, by causing more than ten
                    damage to the rock.
                </p>
                <p>
                    Deeper in the tunnels reside hundreds of Drauger. Disturbing one will cause them 
                    to come in waves of 5, 10, 20, 40, 80, 160.
                </p>
                <h3>F: Cross Underground Lake</h3>
                <EmphasisBlock>
                    <p>
                        You walk into a room filled with shimmering blue light, filled with rocks of 
                        a deep red jutting from the ceilings and the lake surface. The surface is crystal clear.
                    </p>
                </EmphasisBlock>
                <h3>G: Climb Ice Waterfall</h3>
                <EmphasisBlock>
                    <p>
                        You emerge from another tunnel to a blinding light. As your eyes adjust, there is a single 
                        path leading up the snowy summit to a peak that holds a simple, wood cottage, chimney billowing smoke.
                    </p>
                </EmphasisBlock>
                <h3>Random Encounters</h3>
                <RollTable items={SNOWCRASH_MOUNTAINS_ROLL_TABLE}/>
            </Page>
            <Page>
                <h1>Sam's Cottage</h1>
            </Page>
            <Page>
                <h1>The Temple of Ao</h1>
            </Page>
            <Page>
                <h1>Custom Creatures</h1>
                <ul>
                    <li>Arctic Fox</li>
                    <li>Krossa Nomad</li>
                    <li>New Fey Guard</li>
                    <li>Oracle Worm</li>
                    <li>Owlbear Cub</li>
                    <li>Profane Soul Assassin</li>
                    <li>Profane Soul Flagship</li>
                    <li>Profane Soul Monstrosity</li>
                    <li>Profane Soul Ship</li>
                    <li>Profane Soul Tank</li>          
                </ul>
            </Page>
            <Page>
                <h1>NPCs</h1>
                <ul>                    
                    <li>Celeste Albina: Mountain Guide</li>
                    <li>Daniel Rudolf: New Fay Guard Captain</li>
                    <li>Estaban: Profane Soul Leader</li>
                    <li>Gabriel Katarina: Mysterious Elf Stranger</li>
                    <li>Ivo Doris: Brewer</li>
                    <li>Klaus Cordula: Waffle and Sausage Hut Owner</li>
                    <li>Sigi Elli: Inn Keeper</li>
                </ul>
            </Page>
            <Footer scrollButton={true} quickRefButton={true} rollForm={true}/>
        </Fragment>
    )
};

export { JourneyToTheTempleOfAo };