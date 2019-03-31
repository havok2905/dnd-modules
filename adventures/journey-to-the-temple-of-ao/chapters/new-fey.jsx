import React from "react";

import { EmphasisBlock, Page, PanZoom, ScrollToMe } from "dnd-module";

import PORT_CITY_MAP from "../img/port-city.png";
import FORT_WAFFLEHEIM_MAP from "../img/fort-waffleheim.png";

const NewFey = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="new-fey" />
            <h1>New Fey</h1>
            <h2>Port City</h2>
            <PanZoom>
                <img src={PORT_CITY_MAP} alt="port city map" />
            </PanZoom>
            <p>
                Port City is the biggest trading hub in New Fey. They primarily
                deal with the nomadic tribes to the north, in Krossa, and the
                dwarves of Gastolir to the south. This port deals primarily in
                weaponry, furs, and ore. There is a modest representation of the
                New Fey Guard present, in order to keep an eye on the merchants
                dealing in the area.
            </p>
            <h3>Main Road</h3>
            <p>
                This road cuts right through the center of Port City. Along the
                sides of the road sport roadside marketplaces, street
                entertainment, and beggars. It is common to be pick pocketed
                along this road and strangers will be quick to warn newcomers.
            </p>
            <h3>A: The Docks</h3>
            <EmphasisBlock>
                <p>
                    Rivers flow between great blocks of ice that make up the
                    docks. Ships, long boats, canoes, boats of all kinds lash to
                    the frozen piers.
                </p>
            </EmphasisBlock>
            <p>
                Merchants in this area will be quick to boast of their
                "journey's" up the mountains in Krossa. It is a mark of pride to
                compare how far up each traveler has previously made it.
            </p>
            <p>
                A Perception check, instigated by the player, can reveal that
                the only one to make it more than halfway up was Madeline of
                Waffelheim.
            </p>
            <h3>B: The Armory</h3>
            <EmphasisBlock>
                <p>
                    Steam radiates off of the warmed metal door, water dripping
                    to the frozen ground and forming a mound of ice. Inside the
                    crackling flames heat the inside, and reflect warm hues on
                    the steel weapons lining the walls. Behind the counter,
                    leans a morbidly obese elf, bald, and adorning a full set of
                    plate armor.
                </p>
            </EmphasisBlock>
            <p>
                This shop takes custom orders and will for 10,000gp upgrade any
                weapon or armor +1 from it's former value.
            </p>
            <h3>C: Hiker Supply Store</h3>
            <EmphasisBlock>
                <p>
                    This screams tourist trap. Trinkets line the walls. Flyers
                    on every table advertise hokey guides promising tours of the
                    Snowcrash Mountains.
                </p>
            </EmphasisBlock>
            <h3>D: Port City Institute</h3>
            <EmphasisBlock>
                <p>
                    A pure white building with the crest of Ney Fey lines the
                    side of the road. It simple reads, Port City Institute.
                </p>
            </EmphasisBlock>
            <p>
                This is an official organization run by New Fey. They aim to
                study relics of the mountains above. They hire locals to guide
                them through the mountains in search of information of what lies
                above. There are tales of great powers, myths of creation,
                destruction, and more. To date, they have gathered that there is
                an ancient temple near the top. However, they are no closer to
                identifying it's purpose.
            </p>
            <p>
                Speaking with someone in the organization will point the players
                to speak to Madeline of Waffleheim. She led them on their last
                expedition. They will also inform the players that flying is
                impossible. They mountain is surrounded by a never ending
                blizzard. It cannot be swayed by divine means.
            </p>
            <h2>Fort Waffleheim</h2>
            <PanZoom>
                <img src={FORT_WAFFLEHEIM_MAP} alt="fort waffleheim city map" />
            </PanZoom>
            <p>
                Fort Waffleim is a town of mostly New Fey soldiers and shops
                that tailor to them. Home to many veterans, they use their
                training to work as guides, bringing people into the mountains
                to the north.
            </p>
            <h3>A: The Fort</h3>
            <EmphasisBlock>
                <p>
                    Lashed together from frozen tree trunks, this fort is
                    flooded with elves, all in heavy leader armor, brandishing
                    spears, their breath forming clouds around them as they
                    march.
                </p>
            </EmphasisBlock>
            <h3>B: Waffle Hut</h3>
            <p>
                Once inside you will be greeted by a jolly man named Klaus. He
                owns the waffle hut and will sit you, tending to your every
                need. He has every kind of sausage under the sun, waffles, and
                gravy coming out of his ears. This is a favorite spot for
                soldiers to relax, eat a good meal, and share stories.
            </p>
            <h3>C: The White Fox Inn</h3>
            <p>
                <EmphasisBlock>
                    <p>
                        Lining the walls behind the bar are barrels, stacked
                        high to the ceiling. Spigots pop out of each one. You
                        see a slender elvish lady hold a goblet up to one as
                        steaming hot wine, smelling of spices, flows out.
                    </p>
                    <p>
                        Sitting at the bar, a cup in hand is a woman with bright
                        red hair. She sips at a steaming cup, darts her eyes at
                        you, and returns them to her cup.
                    </p>
                </EmphasisBlock>
                <p>
                    Sitting at the bar is Madeline. She is a seasoned guide
                    through the mountains and the Tundra. Just coming off of a
                    brutal tour, she is not in the mood to return for some time.
                    If the players wish to hire her, it will take convincing.
                </p>
            </p>
            <h2>New Fey Krossa Border</h2>
            <EmphasisBlock>
                <p>
                    The gravel road fades into frozen tundra. The trees begin to
                    thin, and over the horizon the mountains grow ever closer.
                    Not a building can be seen for miles. There is only a
                    crooked wooden sign, posted in the dirt. It reads, "Krossa".
                </p>
            </EmphasisBlock>
        </Page>
    );
};

export { NewFey };
