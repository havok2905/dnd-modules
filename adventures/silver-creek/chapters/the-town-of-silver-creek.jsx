import React, { Fragment } from "react";

import { PanZoom } from "dnd-module";

import SilverCreekMineImage from "../img/silver-creek-mine.png";

export const TheTownOfSilverCreek = () => {
    return (
        <Fragment>
            <h2>The Town of Silver Creek</h2>
            <h3>Map</h3>
            <PanZoom>
                <img src={SilverCreekMineImage} alt="Silver Creek Mine Image" />
            </PanZoom>
            <h3>History</h3>
            <p>
                Silver Creek is an old mining town that built itself around a
                railway that is said to be older than time itself. It only ever
                rides in one direction, to the south, and carries off loads of
                silver pulled out of the local mines.
            </p>
            <p>
                The people of Silver Creek have had a long forgotten history
                with darkness. Worshipers of Asmodeous, lord over the Nine
                Hells, made camp in the secluded mountains to the west. After
                many failed attempts to appease the dark god, he grew
                disappointed, laying waste to the temple and his worshipers. The
                town, torn apart from the assault, turned their faith towards
                Lathander, god of the dawn, forgetting their dark past over the
                course of many generations.
            </p>
            <p>
                Now, Silver Creek prospers on the outskirts of civilization,
                connected only by the strange railway splitting the town in two.
            </p>
            <h3>The Region</h3>
            <p>
                Silver Creek is located in the middle of arid, rocky, hill
                country. It is prone to dust storms, drought, and excruciating
                heat. It does have a select few small lakes that stay filled for
                a majority of the year, as well as the Great Tomahawk River that
                runs through the west of town.
            </p>
            <h3>The People</h3>
            <p>
                The people of Silver Creek are tough, hearty people that have
                made their town survive in the wastelands. People typically keep
                quiet and to themselves during the day, with the exception of
                the Saloon which is always full of life. Much of the town are
                devout followers of Lathander, god of the dawn. Though lately,
                there is unease amongst the populous. With the kidnappings, they
                have grown suspicious, unruly, and on edge.
            </p>
            <h3>The Railroad</h3>
            <p>
                The train that runs through Silver Creek is as old as time
                itself. It is a singular rail that runs through the length of
                the continent, through the various planes, looping back into the
                material plane through Sigil, the city of doors. Many have come
                and go through the train, but only a few things are known the
                town's people.
            </p>
            <ol>
                <li>The trains run on their own with no driver</li>
                <li>Those who get on the train never come back</li>
                <li>The train is often seen under assault by a dark dragon</li>
            </ol>
            <p>
                The people refer to the local stretch of the rail as Dust Storm
                Rail.
            </p>
        </Fragment>
    );
};
