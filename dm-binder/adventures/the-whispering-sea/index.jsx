import React, { Fragment } from "react";
import { DmScreen, Footer, Page } from "../../core/index.js";

const TheWhisperingSea = () => {
    return (
        <Fragment>
            <Page>
                <h1>The Whispering Sea</h1>
                <h2>The Region</h2>
                <p>
                    The whispering sea is region of grassy plains that spread
                    for hundreds of miles. It is currently inhabited by several
                    tribes of halflings, long removed from current society. They
                    do not speak common, only an esoteric form of halfling.
                </p>
                <p>
                    Each tribe lays claim to territory several miles in radius,
                    with only the faintest hint of towns on the horizon. Their
                    houses are constructed with the bendy thick reeds that
                    sporadically sprout from the earth across the region. They
                    form huts, long houses for the chiefs.
                </p>
                <h2>People</h2>
                <p>
                    The people of the grasslands travel vast distances with a
                    form of wind surfing. Light personal sail boat structures
                    are fashioned from reeds and cloth spun from the sheep that
                    graze the land. Halfling children spend their entire
                    childhood learning to harness the power of the wind. Sailing
                    outside of the borders of one's own land for a hunt is
                    considered a rite of passage.
                </p>
                <p>
                    It's people are skittish to outsiders and fiercely
                    territorial in regards to other tribes. Legions of soldiers
                    have been said to mount their sails and go to war, wielding
                    long sharpened blades of bone. Though they control flame
                    almost as well as wind, they are hesitant to use it out of
                    respect for the land and fear of wildfire.
                </p>
                <p>
                    Within their tribes, the grassland people are carefree, fun
                    loving, and enjoy song, telling tales of the heavens and
                    heros that sailed into the stars.
                </p>
                <h2>Religion</h2>
                <p>
                    All tribes are united in their worship of an enormous white
                    worm that controls the skies. It occasionally feeds on the
                    halflings below, but will also provide counsel. It is an
                    ancient being with a perfect memory of tens of thousands of
                    years of history.
                </p>
                <h2>Grass Hivemind</h2>
                <p>
                    The grass that spans the plains is actually a hyper
                    intelligent hive mind. In older days, when fires raged
                    across the plains, the grass fought back against the
                    halflings, nearly wiping them out. The methods have been
                    warped into legend, but in actuality, the grasslands allowed
                    portions of itself to die, forcing tribes into contact, and
                    sparking war with food shortage. It then raised the dead
                    with necromancy, and systematically began to destroy tribes,
                    one by one. Only when the halflings ceased their use of
                    fire, and began to care for the land did it stop.
                </p>
                <p>
                    The grassland speaks all languages, sees all in it's domain,
                    and can manifest written language by allowing portions of
                    itself to die. It can cast illusion and magic, though it
                    prefers not to. Time is perceived differently for the grass,
                    and it is content to take it's time.
                </p>
                <h2>Creatures</h2>
                <ul>
                    <li>Bullette</li>
                    <li>Grass Hivemind</li>
                    <li>Oracle Worm</li>
                    <li>Roc</li>
                    <li>Sheep</li>
                    <li>Tribe Fire Bender</li>
                    <li>Tribe Air Bender</li>
                    <li>Tribe Guard</li>
                </ul>
            </Page>
            <DmScreen contentsList={null} hashReferencesSupported={null} />
            <Footer />
        </Fragment>
    );
};

export { TheWhisperingSea };
