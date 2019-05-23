import React, { Fragment } from "react";
import { EmphasisBlock, ScrollToMe } from "dnd-module";

export const Hook = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="hook" />
            <h2 id="hook">Hook</h2>
            <EmphasisBlock>
                <p>
                    The great plains of Silver Creek speed past your windows.
                    All of you are seated in plush green arm chairs, aboard The
                    Dust Storm Rail, bound towards Silver Creek. Across from you
                    is an impeccably dressed gentleman with a long, curled, jet
                    black mustache. Next to him a stern looking woman with tied
                    back red hair, and silver badge on her white shirt.
                </p>
                <blockquote>
                    Sherif: We're glad to finally meet you. So, the mission... (
                    Explain the mission )
                </blockquote>
                <p>
                    As the train nears the station, it comes to a halt. Blue
                    flame envelops the train, yet it is unscathed. Overhead a
                    deafening screech can be heard. The train falls under attack
                    by a Red Shadow Dragon. Immediately, men on the train
                    carrying spears filter out. Unfortunately, the dragon cuts
                    through, piercing the roof where the players sit with it's
                    talons.
                </p>
            </EmphasisBlock>
            <p>
                Have each player make a DC 12 DEX saving throw or take 2d4
                piercing damage from the talons.
            </p>
            <p>
                A man will call out to the rest of the train for any able bodied
                men and women to join the fight. They mayor will ask that the
                party stay for protection.
            </p>
            <p>
                Regardless of the choice, the dragon will never directly target
                the players. Have the players make a variety of saves to keep
                safe from the side effects of the dragon's attacks. If they join
                the effort to fight it off, they simply need to deal 20 damage
                before it flies off.
            </p>
            <p>
                Finally getting off at the station. The Mayor and Sherif will
                wish you best of luck, letting you know that they are always
                available to talk.
            </p>
        </Fragment>
    );
};
