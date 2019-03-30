import React from 'react';

import { 
    Columns,
    EmphasisBlock,
    Page,
    PanZoom,
    RollTable,
    ScrollToMe
} from 'dnd-module';

import MARSH_ROLL_TABLE from '../constants/roll-tables/marsh-roll-table';

import MarshMapImage from '../img/marsh-map.jpg';

const ChapterTwo = ()=> {
    return (
        <Page>
            <ScrollToMe scrollActionString='chapter-two'/>
            <h1 id='chapter-two'>Chapter Two: Into the Marsh</h1>           
            <EmphasisBlock>
                <p>
                    Hazy fog clings to the muddy ground as you make your way out of your ship. 
                    Black trees claw at you with their branches, as your feet sink slightly 
                    into the muddy surface. Along each tree are a multitude of multicolored 
                    mushrooms. The air smells foul, like brine and decay.
                </p>
            </EmphasisBlock>
            <p>
                Any player that consumes a mushroom must succeed a DC15 WIS saving throw. 
                On failure, the player's mind can now be read by any myconid within 
                five miles of the the target. Regardless, the Myconids can telepathically 
                communicate with this player should they wish, regardless of the roll.
            </p>
            <h2>Map</h2>
            <PanZoom>
                <img src={ MarshMapImage } alt='marsh map'/>
            </PanZoom>
            <Columns>
                <div>
                    <h2>A: Random</h2>
                    <p>Roll from the random encounter table.</p>
                    <h2>B: Random</h2>
                    <p>Roll from the random encounter table.</p>
                    <h2>C/D: Myconid Territory</h2>
                    <p>
                        All who enter the dense wood that surround the marsh will be ambushed
                        by a variety of creatures, all enslaved by the myconid. Take any CR3 and below
                        beasts for inspiration in these encounters.
                    </p>
                    <h2>E: Last Camp of Sentient Myconids</h2>
                    <EmphasisBlock>
                        <p>
                            You see a tall fence lining the perimeter of a deep, frothy, moat.
                            Your vision is obscured by heavy fog, but tall mushroom shaped
                            figures peer over the fence, staring in your direction.
                        </p>
                    </EmphasisBlock>
                    <p>
                        Approaching the camp will prompt one of the Myconid inhabitants to
                        attempt communication. They are not hostile and are the last remaining
                        refuges of the Abolehth's takeover. They do not know what the force
                        that corrupted them is or what it is after.
                    </p>
                    <p>
                        These Myconid wish only for the safety of their brothers and wish to see
                        their kin freed from captivity.
                    </p>
                    <h3>Soveirgn Doodle Sprout</h3>
                    <p>
                        This is the leader of the camp. All myonids direct their visitors to him.
                        He is jolly, loud, and somewhat monotone in speech. He will inform the players
                        that the way to free their kin is to destroy whatever is corrupting the network
                        of Myconid or destory the largest nodes. These are the <strong>Myconid Masters</strong>.
                    </p>
                    <h3>Secret Passage</h3>
                    <p>
                        If the players agree to help, they will be led to a secret passage that will drop
                        them off directly at the entrance of the underdark caves.
                    </p>
                    <h2>F: Cult of the Red Mushroom</h2>
                    <EmphasisBlock>
                        <p>
                            You approach a circle of humans, each taking turns licking the stem of a great
                            red mushroom that stands 10 feet tall.
                        </p>
                        <p>
                            This is a cult that worships the new arrival of the mushrooms. They partake in the
                            myconid visions every day in hope to become one with them.
                        </p>
                    </EmphasisBlock>
                    <p>
                        Any player that licks a mushroom must make a DC15 WIS saving throw. On failure they
                        fall asleep for one minute and have a vision of the DM's choosing.
                    </p>
                    <h2>G: Fallen Log</h2>
                    <p>Roll from the random encounter table.</p>
                    <h2>H: Random</h2>
                    <p>Roll from the random encounter table.</p>
                    <h2>I: Random</h2>
                    <p>Roll from the random encounter table.</p>    
                </div>
                <div>
                    <h2>Random Encounters</h2>
                    <RollTable items={ MARSH_ROLL_TABLE }/>        
                </div>
            </Columns>
        </Page>
    );
};

export default ChapterTwo;