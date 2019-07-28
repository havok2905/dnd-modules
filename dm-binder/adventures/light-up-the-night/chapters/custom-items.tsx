import React, { Fragment } from "react";
import { ItemBlock, Items } from "../../../core/index.js";

export const CustomItems = () => {
    return (
        <Fragment>
            <h2>Custom Items</h2>
            <ItemBlock {...Items.TORNADO_OF_CATS}>
                <p>{Items.TORNADO_OF_CATS.description}</p>
            </ItemBlock>
        </Fragment>
    );
};
