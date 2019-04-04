import React, { Fragment } from "react";

import { EmphasisBlock, ScrollToMe } from "dnd-module";

const SamsCottage = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="sams-cottage" />
            <h2>Sam's Cottage</h2>
            <EmphasisBlock>
                <p>
                    What was once a cottage, pouring smoke lazily into the
                    clouds above, now lay in ruin. Debris is everywhere and the
                    thudding of gargantuan footsteps ring through the air. In
                    the far distance, two glowing orbs of red light can be seen
                    ambling down the mountainside. In the wreckage, lay the body
                    of a halfling man, in his hand a lute. It's neck is snapped
                    and strings pointing at odd angles. The left side of his
                    body has been crushed. On his face, is a slight smile. His
                    skin is blue, frozen over, and as stiff as the rock face
                    above. At his feet, lay a book.
                </p>
            </EmphasisBlock>
            <p>
                This book outlines Sam's life in the cottage. He lived up here
                for several years to be close to the gods. He lived peacefully,
                but each page hints at something bothering him in the back of
                his mind.
            </p>
            <EmphasisBlock>
                <blockquote>
                    I've been here many years now. Now I am able to face why.
                    All my life, my long life, I shouldered the fate of mortals
                    on my shoulders and mine alone. Even when I tried to guide
                    others, I never fully let go. In these final days, I see how
                    wrong I really was. It was never my power alone that saved
                    anybody. It was every survivor banding together in the
                    aftermath. It was every brave soul who died at the hands of
                    evil that gave inspiration to the next generation to
                    continue. So I step aside now, to let my friends find that
                    fire within themselves that they have yet to unleash.
                    Enkiem, I can see your monsters on the horizon. I will meet
                    you one last time, and finally allow myself to die. I wish
                    you would understand that this is not your victory. I go
                    peacefully, knowing that though you can never truely fall,
                    life will continue, despite you.
                </blockquote>
            </EmphasisBlock>
        </Fragment>
    );
};

export { SamsCottage };
