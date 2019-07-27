import { Link } from "react-router-dom";
import React from "react";

import { Page } from "dnd-module/";

const AdventuresPage = () => {
    return (
        <Page>
            <h2>Stand Alone Adventures</h2>
            <ul>
                <li>
                    <Link to="/adventures/circle-bridge">Circle Bridge</Link>
                </li>
                <li>
                    <Link to="/adventures/new-york">New York</Link>
                </li>
                <li>
                    <Link to="/adventures/silver-creek">Silver Creek</Link>
                </li>
                <li>
                    <Link to="/adventures/the-whispering-sea">
                        The Whispering Sea
                    </Link>
                </li>
                <li>
                    <Link to="/adventures/fort-briggs">Fort Briggs</Link>
                </li>
            </ul>
            <h2>Habarashi Adventures</h2>
            <ul>
                <li>
                    <Link to="/adventures/the-hive">The Hive</Link>
                </li>
                <li>
                    <Link to="/adventures/hibers-edge">Hibers Edge</Link>
                </li>
                <li>
                    <Link to="/adventures/journey-to-the-temple-of-ao">
                        Journey To The Temple Of Ao
                    </Link>
                </li>
                <li>
                    <Link to="/adventures/light-up-the-night">
                        Light up the Night
                    </Link>
                </li>
            </ul>
        </Page>
    );
};

export { AdventuresPage };
