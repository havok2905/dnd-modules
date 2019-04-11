import React, { Fragment } from "react";
import { RollTable } from "dnd-module";
import HABARASHI_RANDOM_ENCOUNTERS from "../constants/roll-tables/habarashi-random-encounters";

const Habarashi = () => {
    return (
        <Fragment>
            <h2>Habarashi</h2>
            <h3>Random Encounters</h3>
            <RollTable items={HABARASHI_RANDOM_ENCOUNTERS} />
            <h3>The City Walls</h3>
            <h3>The Market District</h3>
            <h4>Ruined Marketplace</h4>
            <h3>The Artificer District</h3>
            <h4>Erika's Shop</h4>
            <h4>Ava's Shop</h4>
            <h4>Mercers's Shop</h4>
            <h3>The Royal District</h3>
            <h4>The Palace</h4>
            <h3>The University District</h3>
            <h4>Devry</h4>
            <h4>The Library</h4>
            <h3>The Military District</h3>
            <h4>Tunnel Snake House</h4>
        </Fragment>
    );
};

export { Habarashi };
