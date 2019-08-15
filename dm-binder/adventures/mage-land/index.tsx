import React, { Fragment } from "react";
import {
    CollapsableContainer,
    Creatures,
    DmScreen,
    EmphasisBlock,
    Footer,
    Map,
    MonsterBlock,
    Page
} from "../../core/index.js";

import MAGE_LAND_BASEMENT from "./img/mage-land-basement.png";

export const MageLand = () => {
    return (
        <Fragment>
            <Page>
                <h1>Mage Land</h1>
                <h2>Overview</h2>
                <p>
                    Popo, the owner of the infamous theme park Mage Land, and
                    powerful illusion wizard, has been using the life energy of
                    park going children to sustain a lengthened youth over
                    multiple generations. He has park staff direct children into
                    the fun house, where they are abducted and brought to his
                    laboratory under the attraction. This has been going on for
                    hundreds of years.
                </p>
                <p>
                    The illusions that this wizard creates take on a life of
                    their own. This has caused his haunted house to become a
                    world renowned attraction. The park goers commend it for
                    it's realism and goriness, not knowing that it is infact
                    real.
                </p>
                <p>
                    As the party explores the park, they will constantly hear
                    rumors and praise of an exciting haunted house ride, called
                    Popo's Haunted House. If the players do not head to the
                    house, have an NPC ask for help finding their missing child
                    that never made it out of the ride.
                </p>
                <h2>Intro</h2>
                <EmphasisBlock>
                    <p>
                        Bright carnival music and the cheers of small children
                        fill the air. The smell of fresh funnel cake wafts in
                        the breeze. Looming over you is a gaping archway of
                        bright rainbow lights, topped with an animated illusory
                        sign. It reads, "Mage Land, where all of your dreams
                        become reality!" Behind the words, a dark skinned man in
                        a white turban welcomes you with his arms wide open.
                    </p>
                </EmphasisBlock>
                <h2>Popo's Haunted House</h2>
                <p>
                    Have the players make a DC15 WIS saving throw as they
                    progress through the haunted ride. A success reveals that
                    most of the illusions have been brought to life and are
                    actually real. The violence happening on the ride is very
                    real.
                </p>
                <p>
                    When a player finally succeeds they are able to see beyond
                    the actual illusions. They can see behind the scenes
                    equipment, spare parts, and doors all connecting to stairs
                    that lead to the basement.
                </p>
                <EmphasisBlock>
                    <p>
                        A set of double oak doors swing open and an upholstered
                        cart with plush red seats rolls up to the station,
                        enough to seat four. As you all sit down, it rolls
                        backwards into the darkness, taking you with it.
                    </p>
                    <p>
                        Two pure white eyes glow in the darkness. From every
                        direction you hear, "Hi. Welcome. To my lair. From this
                        point forward, your sorry pathetic lives are mine. If
                        there are no questions, then we can begin. Bye."
                    </p>
                    <p>
                        A glowing scarlet circle, laced with intricate symbols
                        forms around your cart. An intense heat blasts you from
                        all sides as flames lick the sides of your seats.
                        Suddenly, you're falling. As you fall down a seemingly
                        endless shaft you see images of men being torn apart,
                        entrails flapping in the wind as they fall with you. The
                        screams are deafening, just as you feel that you can't
                        take it anymore, your cart lands in a room flooded with
                        flashing red lights. Crawling up the front of your cart
                        if a gaunt elf with flesh hanging like curtains. It's
                        lower jaw falls off, dripping blood in thick trails. The
                        creature begins to convulse before falling limp, sliding
                        down to the floor.
                    </p>
                </EmphasisBlock>
                <h2>Haunted House Basement</h2>
                <EmphasisBlock>
                    <p>
                        You enter a large domed room filled with glowing green
                        tanks of water. Floating inside are the bodies of
                        children. Each tank has a pipe leading from the tank
                        into the floor. At the end of the room there is a large
                        throne with pipes leading into the walls. Upon the
                        throne is a plump dark skinned man with a stark white
                        turban. His eyes are soulless, blank, and look directly
                        at your party.
                    </p>
                </EmphasisBlock>
                <p>
                    The man in the throne is an <strong>Illusion Genie</strong>.
                    When he uses his <em>Illusory Servants</em> action, a child
                    emerged from a tank and takes on a new illusory form as an{" "}
                    <strong>Illusory Child</strong>. The genie is hostile from
                    the moment the players enter his lair.
                </p>
                <Map src={MAGE_LAND_BASEMENT} alt="Mage Land Basement" />
                <h2>Creatures</h2>
                <CollapsableContainer title="Illusion Child">
                    <MonsterBlock {...Creatures.ILLUSION_CHILD} />
                </CollapsableContainer>
                <CollapsableContainer title="Illusion Genie">
                    <MonsterBlock {...Creatures.ILLUSION_GENIE} />
                </CollapsableContainer>
            </Page>
            <DmScreen contentsList={null} hashReferencesSupported={null} />
            <Footer />
        </Fragment>
    );
};
