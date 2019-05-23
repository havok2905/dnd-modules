import React, { Fragment } from "react";
import { ScrollToMe } from "dnd-module";

export const Ranches = () => {
    return (
        <Fragment>
            <ScrollToMe scrollActionString="ranches" />
            <h2 id="ranches">MacDougel Ranch & Jackelfort Ranch</h2>
            <p>
                Both of these ranches are currently in a feud with one another.
                Once great friends, meeting weekly for dice, stories, and good
                food, they now despise one another. As of late, something has
                been getting into the cellars, making off with stored food. Both
                ranchers claim to have found half eaten crumbs from the other's
                ranch in their place.
            </p>
            <p>
                In reality, none of the ranchers are at fault. A friendly Blink
                Dog has been going between the two ranches, teleporting into the
                cellars, and having a good meal. The dog can be seen in the
                early mornings, before people wake up, blinking out of the
                cellar with a muzzle full of food.
            </p>
            <p>
                If fed, the dog will always follow you and teleport to your side
                at inopportune times.
            </p>
        </Fragment>
    );
};
