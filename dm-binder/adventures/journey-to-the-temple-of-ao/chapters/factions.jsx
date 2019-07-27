import React, { Fragment } from "react";

import { ScrollToMe } from "dnd-module";

const Factions = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="factions" />
            <h2>Factions</h2>
            <h3>Order of the Profane Soul</h3>
            <p>
                The Order of the Profane Soul is an ancient organization of
                Blood Hunters. They have succumb to the darkness themselves in
                pursuit of trying to rid the world of that same darkness. The
                organization is extremely secretive with how it operates,
                keeping themselves hidden at all costs. They abhor all forms of
                the undead and evil creatures. Currently, their leader is
                following a lead that may lend him to be rid of an ancient god
                of destruction, and all gods that stand in their way.
            </p>
            <h3>Fey Wildlands</h3>
            <p>
                The Fey Wildlands are the ancient home of the elves. Today the
                most noble families live here, just off the coast of the main
                continent, beyond Planar Gate Isle. They typically keep to
                themselves, with the exception of trading with the mainland.
                They hold the migrants that moved to New Fey as traitors to the
                high elf king and wish to one day annex New Fey, to claim back
                their kin.
            </p>
            <h3>New Fey</h3>
            <p>
                The elves of New Fey migrated to the the northern half of the
                continent ages ago. They yearned for independence from the high
                elf king. Since then, they have never ascended to their former
                glory. The elves struggle to tame the harsh frozen lands, but
                stay out of love for their home in isolation. These elves are
                hearty, tough, people that are exceptional at survival. They
                despise the Fey Wildlands and always have an ear out for talks
                of invasion. In preparation, they have made alliances with many
                of the nomadic tribes in Krossa to help bolster their forces in
                time of need.
            </p>
        </Fragment>
    );
};

export { Factions };
