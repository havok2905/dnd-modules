import React, { Fragment } from "react";
import { ScrollToMe } from "../../../core/index.js";

export const Factions = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="factions" />
            <h2 id="factions">Major Factions</h2>
            <h3>The Town of Silver Creek</h3>
            <p>
                The Town of Silver Creek is under pressure from a number of
                interests located in the area. However, they keep the order
                among the people, and support the day to day interests of the
                citizens. Their primary goal is the safety of their citizens.
            </p>
            <h4>Ties</h4>
            <ul>
                <li>
                    Under pressure from the townspeople with the recent
                    kidnappings and attacks. They fear the people will riot if
                    nothing is done.
                </li>
                <li>
                    Uneasy tensions with the Scarlet Ghost Gang. They offer
                    protection from outside threats but are suspects in the
                    recent kidnappings. There is an uneasy truce.
                </li>
                <li>
                    The Silver Creek mining company has significant political
                    sway within the town, as they provide the town's primary
                    export.
                </li>
                <li>
                    The Church of the Dawn is a close partner in easing
                    tensions, and conducting repairs throughout town.
                </li>
            </ul>
            <h3>Silver Creek Mine Company</h3>
            <p>
                The Silver Creek Mine Company is the oldest organization in
                Silver Creek and mine copious amounts of silver. They have
                significant history with the old worshipers of Asmodeous,
                providing many of their old worshipers as miners began to
                unearth old artifacts related to the dark god. This has largely
                been forgotten to all but the owners of the mine, who still own
                many artifacts to this day.
            </p>
            <h4>Ties</h4>
            <ul>
                <li>
                    The Scarlet Ghost Gang currently extort the mining company
                    for silver, in exchange for being left alone.
                </li>
                <li>
                    Much of the town's population is employed with this mining
                    company.
                </li>
            </ul>
            <h3>The Church of the Dawn</h3>
            <p>
                The Church of the Dawn is a relatively new fixture in Silver
                Creek, only two hundred years old. They are the moral beacon for
                the people, offering guidance and aid.
            </p>
            <h4>Ties</h4>
            <ul>
                <li>
                    Loathe the town's truce with the Scarlet Ghost Gang, viewing
                    them as dangerous.
                </li>
                <li>
                    The church is at odds with the Silver Creek Mining company.
                    Though they don't understand why, they sense a great evil
                    from the mines.
                </li>
            </ul>
            <h3>The Cult of Asmodeous</h3>
            <p>
                The Cult of Asmodeous aim to prove themselves with their god in
                hope that they will be on his side in the Blood War they think
                is to come. These worshipers are of descendance of the originals
                cultists, many who are still employed at the mines.
            </p>
            <p>
                As of recent, the cult of Asmodeous has begun to experiment with
                cannibalism.
            </p>
            <h3>The Scarlet Ghost Gang</h3>
            <p>
                The Scarlet Ghost Gang began as an effort of a select few
                citizens seeking independence from the town. They spent much of
                their early days raiding the trains, the ranches, and the town's
                people.
            </p>
            <p>
                As of late they have begun extorting the various organizations
                in Silver Creek in exchange for peace. They occasionally also
                offer security and lend forces to the sherif for more difficult
                efforts.
            </p>
            <p>
                Living in the hills of Silver Creek, they often have an ear to
                ground in regards to what lurks in the shadows.
            </p>
            <h4>Ties</h4>
            <ul>
                <li>
                    In an uneasy truce with the city in exchange for help
                    securing the city. They are suspected of the recent cattle
                    disappearances and kidnappings.
                </li>
                <li>
                    They currently extort the Silver Creek Mine Company, leaving
                    them alone in exchange for gold.
                </li>
                <li>
                    Often at odds with the Church of the Dawn with their amoral
                    behavior.
                </li>
            </ul>
        </Fragment>
    );
};
