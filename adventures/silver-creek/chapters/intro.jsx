import React, { Fragment } from "react";
import { ScrollToMe } from "dnd-module";

export const Intro = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="intro" />
            <h2 id="intro">Intro</h2>
            <p>
                Dust whips up, melding with the billowing smoke of the steam
                engine as it barrels through the wastes. It's horn blares with a
                deafening cry, briefly silencing the strumming of a denim clad
                stranger, plucking his guitar in the shade of the Bull's Head
                Saloon. High noon approaches. The train is on schedule as always
                and the shadows begin to creep back into the deep cracks of the
                brittle earth, biding their time.
            </p>
            <p>
                The stranger adjusts his hat accordingly, now alone under the
                scorching rays of the sun looming overhead. The silence is
                broken only by his strumming and the low chorus of his song.
            </p>
            <p>Welcome to Silver Creek.</p>
        </Fragment>
    );
};
