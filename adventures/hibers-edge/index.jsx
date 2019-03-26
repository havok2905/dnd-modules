import React, { Fragment } from 'react';
import { 
    Container,
    EmphasisBlock,
    Footer,
    ItemBlock,
    MonsterBlock, 
    Page, 
    PanZoom,
    RollTable,
    TableOfContents 
} from 'dnd-module';

import TABLE_OF_CONTENTS from './constants/table-of-contents';

import HERO_OF_LEGEND from './constants/npcs/hero-of-legend';
import TOM_SELNICK from './constants/npcs/tom-selnick';
import MIA_THE_BLACKSMITH from './constants/npcs/mia-the-blacksmith';
import INNKEEPER_MARTEL from './constants/npcs/innkeeper-martel';
import ELSA from './constants/npcs/elsa';
import ELSAS_CONSTRUCT from './constants/npcs/elsas-construct';

import KRAKEN_TENTACLE from './constants/creatures/kraken-tentacle';
import PRIEST_OF_THOR from './constants/creatures/priest-of-thor';
import CULT_OF_THE_DEEP_ONE_MEMBER from './constants/creatures/cult-of-the-deep-one-member';
import CULT_OF_THE_DEEP_ONE_MASTER from './constants/creatures/cult-of-the-deep-one-master';

import RANDOM_ENCOUNTERS from './constants/roll-tables/random-encounters';

import HibersEdgeMap from './img/hibers-edge-map.jpg';

const HibersEdge = ()=> {
    return (
        <Fragment>
            <Page>
                <h1>Hibers Edge</h1>
                <TableOfContents contentsList={ TABLE_OF_CONTENTS }/>
            </Page>
            <Page>
                <h1>Overview</h1>
                <h2>Background</h2>
                <p>
                    Hibers Edge has been under blockade for some time and recently been freed. New challenges await them
                    however. The Cult of the Great Deep One has become emboldened, attributing the titans migrating throughout
                    the plains as proof of it's return. These same titans have forced storm giants to retreat south, causing
                    storms, making fishing and trade difficult for the town.
                </p>
                <h2>Factions</h2>
                <h3>Worshipers of Thor</h3>
                <p>
                    Thor is by far the most widely worshipped deity of Hiber's Edge. Worship is carried out through readings
                    of Thor's epic tales as well as copious amounts of drinking.
                </p>
                <h3>Cult of the Great Deep One</h3>
                <p>
                    Under the waves that border the port town of Hiber's Edge is a monstrous Dragon Turtle and Kraken. Long
                    ago they sunk an entire island city under the waves, to the horror of the bystanders in what is now
                    this city. Since then, this story is only believed as myth, the two beasts merging into just "The Great Depe One".
                </p>
                <p>
                    The Cult of the Great Deep one believes a creature will return to wreck havoc on the city, to they perform
                    daily sacrifices of varying severity. They will sacrifice limbs, animals, ears, and sometimes entire people.
                    The group typically keeps to themselves, rarely every reaching out of their inner circle for sacrifices.
                </p>
                <p>
                    The myth reaches out to more than just the cult though. Superstitious sailors will sometimes throw back a portion
                    of their catch, or pay tribute in gold.
                </p>
                <h3>Sailor's Guild</h3>
                <p>
                    The sailor's guild is made of merchants, fisherman, and those who chart travel across the waves. The are devout
                    believers of Thor, but also harbor superstitions around the old deep one. Many claim to see a wild
                    tentacled beast in the waters. Other claim to see a turtle as big as an island. While they do not associate
                    with the cult, they share many of it's beliefs.
                </p>
            </Page>
            <Page>
                <h1 id='the-town'>The Town</h1>
                <PanZoom>
                    <img src={HibersEdgeMap} alt='map of hibers edge'/>
                </PanZoom>
                <h2>A: Main Town</h2>
                <h3>Mjolnir's Anvil</h3>
                <EmphasisBlock>
                    <p>
                        The shop is a single storey stone-walled building, with carved 
                        wooden doors and dwarf-wrought iron furnishings. A collection 
                        of sundered shields hangs from the walls, all marked with
                        etchings of hammers and lightning.
                    </p>
                </EmphasisBlock>
                <p>
                    Mjolnir's Anvil is a blacksmith and armory run by a cunning woman
                    named Mia. She uses the town's love for Thor to better push her wares.
                </p>
                <h4>Inventory</h4>
                <ItemBlock 
                    name="Loki's Heavy Plate Armor" 
                    rarity='Wonderous' 
                    type='Plate Armor'>
                    <p><strong>15000gp</strong></p>
                    <p>
                        18AC. This armor is jet black and can only be touched by those of
                        chaotic alignment. Those who touch it with bare skin who are not chaotic,
                        will instantly cause the skin and flesh to peel back in layers, killing
                        the target. This process is slow, happening over several hours.
                    </p>
                </ItemBlock>
                <ItemBlock 
                    name="Heavy Steel Shield" 
                    rarity='Rare' 
                    type='Medium Shield'>
                    <p><strong>1100gp</strong></p>
                    <p>
                        +1 Shield. An ornate shield, painted with Thor's coat of arms.
                    </p>
                </ItemBlock>
                <ItemBlock 
                    name="Tower Shield" 
                    rarity='Very Rare' 
                    type='Medium Shield'>
                    <p><strong>9000gp</strong></p>
                    <p>
                        +3 Shield. This masterwork shield was taken from the hoard of the dragon Amunan.
                    </p>
                </ItemBlock>
                <ItemBlock 
                    name="Sailor's Spear" 
                    rarity='Rare' 
                    type='Medium Shield'>
                    <p><strong>4000gp</strong></p>
                    <p>
                        +1 Spear, +3 against Aquatic Creatures. Thrown (range 20/60), Versatile (1d8). 1d6 Piercing.
                    </p>
                </ItemBlock>
                <h3>The General Store</h3>
                <EmphasisBlock>
                    <p>
                        The shop is a single storey building of stone walls, with several stained glass windows. 
                        It is dimly lit by a few candles and fairly shabby.
                    </p>
                </EmphasisBlock>
                <p>
                    This shop simply holds miscellaneous items that the adventurers may be looking for in
                    their quest. 
                </p>
                <h3>The Fisherman's Widow Inn</h3>
                <EmphasisBlock>
                    <p>
                        The inn is a two-storey stone-walled building, with a small walled yard and garden. 
                        Accomodations consist of several large rooms with beds and woolen mattresses. The inside
                        has molding depicting tiny waves that ride along the wooden floors.
                    </p>
                </EmphasisBlock>
                <p>
                    The inn is runned by Innkeeper Martel. This Inn mostly sees one of a few kinds of patrons;
                    sailors making port, the town's people, as well as merchants flying between Anuin Capital
                    City to the north and the southern half of the continent.
                </p>
                <h4>Menu</h4>
                <ul>
                    <li>Grilled Salmon with Ginger and Dried Pomegranate, Glass of Mead (2gp)</li>
                    <li>Pickled Carp and Buckwheat Biscuits, Tankard of Beer (1gp)</li>
                    <li>Soup of the Day and Crusty Bread (1gp)</li>
                </ul>
                <h2>B: Town Gate</h2>
                <EmphasisBlock>
                    <p>
                        Two great wooden guard towers flank the sides of the dirt road leading towards the city.
                        Six bows all point in your direction, following you as you walk through. Swarms of 
                        flies hover around rotting bodies that hang in the air.
                    </p>
                </EmphasisBlock>
                <h2>C: Broken Fang Bandit Camp</h2>
                <EmphasisBlock>
                    You walk into a camp in ruin. The cleared out earth is carpeted in ash, rotting bodies are
                    sprawled to and fro. Most of the tents that would have been here have long since blown away.
                    Tools, half finished rations, and survival gear litter the ground.
                </EmphasisBlock>
                <h2>D: Cult of the Old Deep One Camp</h2>
                <EmphasisBlock>
                    Chanting can be heard over the tundra as billows of smoke rise into the clouds. As you
                    get closer, the chanting becomes clearer, "For the deep one. For the deep one. We give ourselves.
                    We give this child." You then hear the crying of a child ring out over the chants.
                </EmphasisBlock>
                <p>
                    10 Cult of the Deep One Members and 1 Cult of the Deep One Master have a child bound to a pole
                    in the center of a growing bonfire. The flames have just begun to reach the young boy's feet.
                    These cultists are preparing a sacrifice to keep the "Great Deep One" pleased. Any attempts
                    to disrupt the ritual wil turn the cultists on the players.
                </p>
                <h2>E: Ruin to the Old Deep One</h2>
                <EmphasisBlock>
                    You see a great stone mural, an island of tall buildings being toppled over and sunk into the
                    waves by a monstrous creature. It has a turtle shell, wild tentacles, and is breathing fire
                    down on the citizens. Old elvish describes, "So was the prosperous city of Celu"
                </EmphasisBlock>
                <h2>F: Smuggler's Docks</h2>
                <h3>Light House</h3>
                <EmphasisBlock>
                    <p>
                       It stands tall, stripped blue and white into the sky. Atop, blazing lights pierce into
                       the horizon, illuminating the way for travelers at sea. 
                    </p>
                </EmphasisBlock>
                <h3>Seaside Cave</h3>
                <EmphasisBlock>
                    <p>
                        A lone boat lay tied to a rickety pier, two oars inside. To the left, you see a lone cave,
                        it's entrance marked by two torches.
                    </p>
                </EmphasisBlock>
                <EmphasisBlock>
                    <p>
                        The water is strangely calm and an out of place serenity overcomes the group as you float
                        closer to the cave. You can still hear the rolling thunder overhead, but it does not seem to
                        bother you.
                    </p>
                </EmphasisBlock>
                <EmphasisBlock>
                    <p>
                        You sail through the open mouth of the cave to see a graveyard of broken crates, the remnants
                        of an old bandit camp. In the center of the wreckage sits an old man. A perfectly circular
                        border has been drawn, thirty feet in every direction. He's grizzled, white haired, older
                        than old, yet he swings his blade with grace as he trains.
                    </p>
                </EmphasisBlock>
                <p>
                    This is the training ground of the Hero of Legend. Defeating him in single combat will award you
                    his +3 sword and shield, granting the victor, the worlds next great hero.
                </p>
                <h2>G: Shipping Boat Docks</h2>
                <h3>Boat Docks</h3>
                <EmphasisBlock>
                    <p>
                        Rows upon rows of long boats and merchant ships span the docks. Workers can be seen
                        loading boxes on and off of the ships, orders can be heard screamed over the coastal
                        winds, as well the banter of negotiations. Gold is changing hand, occasionally you see
                        a gold piece flung over the shoulder and into the deep below. Just beyond, you can see
                        the mountains of Planar Gate Isle in the distance.
                    </p>
                </EmphasisBlock>
                <p>
                    Have the players roll a perception check of DC15. On a success, they hear sailors discuss
                    their superstitious belief in the deep one as they throw a coin over their shoulder into the
                    water.
                </p>
                <p>
                    There are a total of 3000gp lining the bottom of the ocean floor. A player may attempt to
                    swim 30ft to the bottom to collect some. The DM has discretion on how long and how much is
                    picked up at a time. Upon return, if they player is not attempting to hide their actions, the
                    people on the docks will turn on them, demanding that the gold be returned.
                </p>
                <h3>Boathouse</h3>
                <EmphasisBlock>
                    <p>
                        Tankards of ale are being emptied as burly men and women sit at long tables. Overhead, in the
                        rafters, wooden canoes dangle overhead. Praises of Thor can be heard ringing through the halls.
                    </p>
                </EmphasisBlock>
                <p>
                    A player may attempt to book passage on a ship here for a cost. They will also receive more knowledge
                    of activity out at sea. The storm giants have been fighting from time to time, causing problems. they typically
                    hung out north of here, but have been migrating south for some unknown reason.
                </p>
                <h2>H: Fishing Docks</h2>
                <EmphasisBlock>
                    <p>
                        The odor of fish and brine fill the air as the breeze whips in from the ocean. Traps dangle off of the
                        wooden pierces, and a stray crap scuttles past your feet. Silent old fisherman, sit in silence, occasionally
                        catching something, and dropping their catch into a crate. Overhead, seagulls cry out.
                    </p>
                </EmphasisBlock>
                <p>
                    These fisherman are here everyday. They alone know the goings on of the city and it's factions perfectly.
                    They will answer anything the players ask, so long as they accept a request to fish with them. They know the
                    reality that a vicious dragon turtle and kraken live below the waves, as they have seen it several times.
                    They have seen the vicious sacrifices of the cult, and superstitions of the sailors. They also know that the storm
                    giants have never ventured this far south.
                </p>
                <h2>I: Temple of Thor</h2>
                <EmphasisBlock>
                    <p>
                        A great stone longhouse, decorated with etchings of lightning, stands on a lone hill.
                        Inside, kegs of ale line the walls, in the center a fountain of meade. As you
                        walk in, the shouts of the priest ring through the hall.
                    </p>
                    <blockquote>
                        AND SO HE STRUCK DOWN THE BEAST. TANKARD IN ONE HAND, HAMMER IN THE OTHER! DRINK!
                    </blockquote>
                    <p>
                        Every worshiper in the building, children and adult alike, raise goblets, repeating the phrase.
                    </p>
                </EmphasisBlock>
                <h2>J: Tom Selnick's Farm</h2>
                <EmphasisBlock>
                    <p>
                        Rows of mushrooms, carrots, and other root vegetables are sprouting out of neatly tilled earth.
                        Birds chirp overhead as a black cat strolls up to you, rubbing itself against your leg affectionately.
                        From inside, you can hear the shout...
                    </p>
                    <blockquote>
                        About time you came to visit! Come in boys! Come in!
                    </blockquote>
                </EmphasisBlock>
                <h2>Random Encounters</h2>
                <RollTable items={ RANDOM_ENCOUNTERS }/>
            </Page>
            <Page>
                <h1>The Sea</h1>
                <h2>The Dragon Turtle's Skeleton</h2>
                <h3>Above Water</h3>
                <EmphasisBlock>
                    <p>
                        As the mist begins to shroud the town behind you, you can now see great ivory spire tearing out
                        of the water. Great claws arch into the air as if grabbing for the clouds. The
                        For hundreds of yards, a bone like ovular wall spans out into the water.
                    </p>
                </EmphasisBlock>
                <h3>Below Water</h3>
                <EmphasisBlock>
                    <p>
                        As you plunge into the deep, you find the enormous skeleton of a draconic turtle. It's shell forms
                        a basin under the sea where small huts have been erected. Swimming between them are schools
                        of merfolk.
                    </p>
                </EmphasisBlock>
                <p>
                    This ancient skeleton is now the home for a society of highly territorial merfolk. They will dine on any
                    easy meal that comes their way. Staying in this area for too long will cause a swarm of them to try to bring
                    the boat down.
                </p>
                <h2>The Kraken</h2>
                <p>
                    Players who have caused any disturbance out at sea, to the merfolk, other coastal people, misfired spells,
                    etc, will attrack the attention of the Kraken. If the players have not paid tribute or attempted to steal
                    gold from the docks, then they will also attract it's attention. The kraken will stop at nothing to destroy
                    the party at all costs. If the players pay tribute, it will simply surface to meet them, before diving back
                    down to the depths.
                </p>
                <h3>First Stage: Tentacles</h3>
                <EmphasisBlock>
                    The sky goes black and the boat under you lurches wildly as four gargantuan tentacles rise from the waves,
                    curling at the ends, preparing to strike like a cobra.
                </EmphasisBlock>
                <p>
                    Four Kraken Tentacles berate the boat until they are slain.
                </p>
                <h3>Second Stage: Lightning Storm</h3>
                <EmphasisBlock>
                    <p>
                        A salmander like face riddled with tendrils rises from the ocean, dwarfing your boat. It bares it's
                        razor teeth at you, looking straight at you with sickly yellow eyes the size of a full grown human.
                        It lets out a roar and lightning peels down from the sky. It then descends back down.
                    </p>
                </EmphasisBlock>
                <p>
                    The Kraken uses it's lightning storm action.
                </p>
                <h3>Third Stage: Assault and the Storm Giants</h3>
                <EmphasisBlock>
                    <p>
                        Lightning strikes the kraken from several directions as it screams in agony. From the waves,
                        the soaked pale beards and long hair of giants emerge. In their hands are swords the size of towers.
                        Their eyes are alight with rage.
                    </p>
                </EmphasisBlock>
                <p>
                    These four storm giants will attempt to slay all that are present, including the players. Their main target will
                    be the kraken unless the players make themselves known.
                </p>
                <p>
                    These storm giants can be spoken to with a DC20 persuasion check or a DC20 intimidation
                    check. After that, the players must show the giants that they are on the same side and promise
                    to help them return north. They cannot be spoken to during combat.
                </p>
                <p>
                    One of the giants has a Belt of Storm Giant's Strength on their person.
                </p>
            </Page>
            <Page>
                <h1>NPCs</h1>
                <h2>Hero of Legend</h2>
                <Container>
                    <MonsterBlock {...HERO_OF_LEGEND}/>
                </Container>
                <h2>Elsa</h2>
                <Container>
                    <MonsterBlock {...ELSA}/>
                </Container>
                <h2>Elsa's Construct</h2>
                <Container>
                    <MonsterBlock {...ELSAS_CONSTRUCT}/>
                </Container>
                <h2>Innkeeper Martel</h2>
                <Container>
                    <MonsterBlock {...INNKEEPER_MARTEL}/>
                </Container>
                <h2>Mia the Blacksmith</h2>
                <Container>
                    <MonsterBlock {...MIA_THE_BLACKSMITH}/>
                </Container>
                <h2>Tom Selnick</h2>
                <Container>
                    <MonsterBlock {...TOM_SELNICK}/>
                </Container>
            </Page>
            <Page>
                <h1>Custom Creatures</h1>
                <h2>Kraken Tentacle</h2>
                <Container>
                    <MonsterBlock {...KRAKEN_TENTACLE}/>
                </Container>
                <h2>Priest of Thor</h2>
                <Container>
                    <MonsterBlock {...PRIEST_OF_THOR}/>
                </Container>
                <h2>Cult of the Deep One Member</h2>
                <Container>
                    <MonsterBlock {...CULT_OF_THE_DEEP_ONE_MEMBER}/>
                </Container>
                <h2>Cult of the Deep One Master</h2>
                <Container>
                    <MonsterBlock {...CULT_OF_THE_DEEP_ONE_MASTER}/>
                </Container>
            </Page>
            <Page>
                <h1>Custom Items</h1>
                <h2>Marshmallow Capsule</h2>
                <ItemBlock  
                    name="Marshmallow Capsule" 
                    rarity='Rare' 
                    type='Small Magic Item'>
                    <p>
                        Explodes into a pillow of Marshmallow 20ft x 20ft under you. Reduces all fall damage to 0.
                    </p>
                </ItemBlock>
                <ItemBlock  
                    name="Eye Patch of True Sight" 
                    rarity='Rare' 
                    type='Small Magic Item'>
                    <p>
                        Grants the wearer true sight.
                    </p>
                </ItemBlock>
            </Page>
            <Footer scrollButton={true} quickRefButton={true} rollForm={true}/>
        </Fragment>
    );
};

export { HibersEdge };