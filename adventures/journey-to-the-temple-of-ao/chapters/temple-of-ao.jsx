import React, { Fragment } from "react";

import { EmphasisBlock, ItemBlock, ScrollToMe } from "dnd-module";

const TempleOfAo = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="the-temple-of-ao" />
            <h2>The Temple of Ao</h2>
            <EmphasisBlock>
                <p>
                    We see three archways, crumbled with the passage of time,
                    their pieces scattered across the snow and rock. Leading up
                    to them, a wide stairwell slopes upwards. Further beyond, a
                    lone stone temple dominates the mountain's peak, trimmed
                    with onyx and pearl gems, glimmering as rays of sun pour
                    down between the clouds. There is no wind here, only
                    silence. An aura of grandness and timelessness emanates from
                    every stone.
                </p>
            </EmphasisBlock>
            <p>
                Clerics and Paladins of all worship will feel a special
                connection to this temple, as if they are standing right next to
                their god. This feeling will dwarf any feelings closeness they
                have ever experienced before.
            </p>
            <h3>The Winding Tunnel of the Gods</h3>
            <EmphasisBlock>
                <p>
                    Snaking downwards in near blackness, you find yourselves
                    down a narrow tunnel with seemingly no end. Lining the walls
                    are hundreds if not thousands of statues, featureless,
                    genderless, all with multicolored glowing eyes. Their heads
                    turn to follow you as you venture downward.
                </p>
            </EmphasisBlock>
            <p>
                A player with a strong faith will find them seleves drown to one
                statue in particular. Each statue is an embodiment of one of the
                gods. They will be drawn to the one of their faith, but be
                unable to communicate with it.
            </p>
            <h4>The Trial of the Self</h4>
            <EmphasisBlock>
                The stairwell levels out to a circular arena. Standing in the
                center, motionless, are shadowy figures of pure black. They are
                equal in number to your party.
            </EmphasisBlock>
            <p>
                This trial is a trial to face yoursleves. The shaodws will do
                anything to prevent the players from progressing. However, they
                will only use as much force as they need to use. Though they
                cannot speak, they do understand all languages. It is up to the
                DM to decide if they can be talked out of moving aside.
            </p>
            <p>
                The shadows are exact duplicates of the members of the party,
                down to inventory, stats, weaponry, ect. All items fade to
                nothingness. If the shadows are banished, they instantly appear
                back in the center of the room.
            </p>
            <p>
                This trial can be completed by either defeating the shadows or
                talking them aside.
            </p>
            <h3>The Main Hall</h3>
            <EmphasisBlock>
                <p>
                    Coming down the steps, you find yourselves in an empty white
                    hall. The trickling of water can be heard, echoing through
                    the hall.
                </p>
            </EmphasisBlock>
            <h3>The Chamber of Shar</h3>
            <EmphasisBlock>
                <p>
                    The same white that filled the halls behind you fades to
                    black as you continue down the hallway. Imprinted on the
                    tile floor are three concentric circles of varying widths. A
                    voice made of thousands of voices, rings out, filling the
                    chamber with a cold, dark, sneer.
                </p>
                <blockquote>Welcome. We are Shar. Do you choose us?</blockquote>
            </EmphasisBlock>
            <h4>The Trial of Darkness</h4>
            <p>
                Those choosing the trial of darkness must begin by recounting
                the entirety of their journey so far, from birth. Based on the
                response, the DM will choose a moment from their past to play
                out. They player will need to make it out of the chosen scenario
                with little care to those around them. They must maximize their
                own well being. What is important are the motivations.
            </p>
            <h3>The Chamber of Selune</h3>
            <EmphasisBlock>
                <p>
                    The same white that filled the halls behind you continues
                    into a circular chamber. Imprinted on the tile floor are
                    seven star bursts surrounding a pair of eyes. A voice made
                    of thousands of voices, rings out, filling the chamber with
                    a joyous melody.
                </p>
                <blockquote>
                    Welcome friends. We are Selune. Do you choose us?
                </blockquote>
            </EmphasisBlock>
            <h4>The Trial of Light</h4>
            <p>
                Those choosing the trial of darkness must begin by recounting
                the entirety of their journey so far, from birth. Based on the
                response, the DM will choose a moment from their past to play
                out. They player will need to make it out of the chosen scenario
                by trying to help as many around them as possible. The goal is
                to do what is right by all costs. What is important are the
                motivations.
            </p>
            <h3>The Chamber of Ao</h3>
            <EmphasisBlock>
                <p>
                    Two candelabras flank a gargantuan fountain, water pouring
                    from the wall at the end of the hall. In the center of the
                    floor is a circle of intertwining vines, etched into the
                    tile. The air weighs down on you, not in oppression, but as
                    a mark of the majesty of this chamber. The fountain begins
                    to glow.
                </p>
                <p>
                    Voices call out in every direction, every inflection, every
                    emotion and state of being. Their words differ, but the
                    meaning rings true; Welcome, my children.
                </p>
            </EmphasisBlock>
            <h4>The Trial of Creation</h4>
            <p>
                Those wishing to undergo the trial of creation will be told that
                Ao already knows of their past. All players must undergo the
                trial of Ao together and pass together. This trial is to test
                the original forming of the group and to pit them against an
                impossible struggle.
            </p>
            <p>
                Each player is reduced to a level 1 character. Prepare their
                sheets for them in advance.
            </p>
            <EmphasisBlock>
                <p>
                    You all find yourselves in a dark void, standing on white
                    tile. Behind you is a deep red door, exit scrawled across it
                    in common. In front of you is a Tarrasque, a mountain like
                    creature with spines the size of houses. A chorus of voices
                    boom inwards at you from every direction.
                </p>
                <blockquote>Choose...</blockquote>
                <p>
                    Before you appear a rack of simple weapons, daggers, swords,
                    bows, etc.
                </p>
            </EmphasisBlock>
            <p>
                If a player dies, they are teleported back to the chamber of Ao.
                Do not reveal this until the trial is complete. This is not a
                winnable fight, but if any player flees our of self interest,
                the who party loses. A player sacrificing themselves to allow
                the others to escape is acceptable.
            </p>
            <p>Only one player may use the exit per round.</p>
            <h3>Trial Prizes</h3>
            <h4>Selune</h4>
            <p>
                Shar will grant the player a "Star's Emblem" as reward as well
                as a scroll that will boost the player's level to 15 for one
                hour.
            </p>
            <ItemBlock
                name="Star's Emblem"
                rarity="Wonderous"
                type="Small Divine Item"
            >
                <p>
                    This item may only be used by you. You may attach it to any
                    weapon of yours, allowing that weapon to deal an extra 10d12
                    radiant damage that cannot be resisted or be made immune
                    from. This has two charges before it depletes for good. Any
                    evil character that attempts to wield this weapon will
                    instantly die.
                </p>
            </ItemBlock>
            <h4>Shar</h4>
            <p>
                Shar will grant the player a "Moon's Emblem" as reward as well
                as a scroll that will boost the player's level to 15 for one
                hour.
            </p>
            <ItemBlock
                name="Moon's Emblem"
                rarity="Wonderous"
                type="Small Divine Item"
            >
                <p>
                    This item may only be used by you. You may attach it to any
                    weapon of yours, allowing that weapon to deal an extra 10d12
                    necrotic damage that cannot be resisted or be made immune
                    from. This has two charges before it depletes for good. Any
                    good character that attempts to wield this weapon will
                    instantly die.
                </p>
            </ItemBlock>
            <h4>Ao</h4>
            <p>
                Ao will grant each player a scroll which will boost their level
                to 20 for hour. Along with that, each player will receive a
                specialized weapon tailored specifically to their past. It will
                shatter after four charges. This item will have the innate
                ability to cause twice the damage to lesser gods and instantly
                destroy any other foe. If not a weapon, the item in question
                should boost one stat to broken levels.
            </p>
        </Fragment>
    );
};

export { TempleOfAo };
