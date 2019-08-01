import React, { Fragment } from "react";
import {
    CollapsableContainer,
    Creatures,
    DmScreen,
    Footer,
    MonsterBlock,
    Page
} from "../../core/index.js";

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
                    Your party visits Mage Land for a healthy break from
                    adventuring only to receive tips of a recently missing
                    child.
                </p>
                <h2>Intro</h2>
                <h2>Mage Land Activities</h2>- Arabian Themed
                <h2>Popo's Fun House</h2>
                <h3>Spinning Floor</h3>
                <h3>Floor Rollers</h3>
                <h3>Rotating Tunnel</h3>
                <h3>Unstable Stairs</h3>
                <h3>Rope Bridge</h3>
                <h3>Hall of Mirrors</h3>
                <h3>Spiral Slide</h3>
                <h3>Ball Pit</h3>
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
