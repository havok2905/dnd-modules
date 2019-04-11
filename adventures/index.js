import React, { Fragment } from "react";
import { render } from "react-dom";

import { HashRouter, Route, Link } from "react-router-dom";

import { Page } from "dnd-module/";

import { TheHive } from "./the-hive/index.jsx";
import { HibersEdge } from "./hibers-edge/index.jsx";
import { JourneyToTheTempleOfAo } from "./journey-to-the-temple-of-ao/index.jsx";
import { LightUpTheNight } from "./light-up-the-night/index.jsx";

const ModulesPage = () => {
    return (
        <Page>
            <h1>DND MODULES</h1>
            <h2>Habarashi Adventures</h2>
            <ul>
                <li>
                    <Link to="/the-hive">The Hive</Link>
                </li>
                <li>
                    <Link to="/hibers-edge">Hibers Edge</Link>
                </li>
                <li>
                    <Link to="/journey-to-the-temple-of-ao">
                        Journey To The Temple Of Ao
                    </Link>
                </li>
                <li>
                    <Link to="/light-up-the-night">Light up the Night</Link>
                </li>
            </ul>
        </Page>
    );
};

render(
    <HashRouter basename="/dnd-modules">
        <Fragment>
            <Route path="/" exact component={ModulesPage} />
            <Route path="/the-hive" component={TheHive} />
            <Route path="/hibers-edge" component={HibersEdge} />
            <Route
                path="/journey-to-the-temple-of-ao"
                component={JourneyToTheTempleOfAo}
            />
            <Route path="/light-up-the-night" component={LightUpTheNight} />
        </Fragment>
    </HashRouter>,
    document.getElementById("root")
);
