import { Link } from "react-router-dom";
import React, { Fragment } from "react";

import { DmBinderTile } from "../../components/dm-binder-tile-collection/dm-binder-tile";
import { DmBinderTileCollection } from "../../components/dm-binder-tile-collection/dm-binder-tile-collection";
import { Page } from "../../core/index.js";

import FORT_BRIGGS_TITLE_CARD from "./img/fort-briggs-title-card.png";
import MAGE_LAND_TITLE_CARD from "./img/mage-land-title-card.png";
import SILVER_CREEK_TITLE_CARD from "./img/silver-creek-title-card.png";

const AdventuresPage = () => {
    const standAloneTiles = [
        new DmBinderTile(
            "/adventures/mage-land",
            "Mage Land ( LVL 11+ )",
            MAGE_LAND_TITLE_CARD
        ),
        new DmBinderTile(
            "/adventures/silver-creek",
            "Silver Creek ( LVL 3+ )",
            SILVER_CREEK_TITLE_CARD
        ),
        new DmBinderTile(
            "/adventures/fort-briggs",
            "Fort Briggs ( LVL 3+ )",
            FORT_BRIGGS_TITLE_CARD
        )
    ];

    return (
        <Fragment>
            <h2 style={{ textAlign: "center" }}>Adventures</h2>
            <DmBinderTileCollection tiles={standAloneTiles} />
            <Page>
                <h3>Unfinished Ideas</h3>
                <ul>
                    <li>
                        <Link to="/adventures/circle-bridge">
                            Circle Bridge
                        </Link>
                    </li>
                    <li>
                        <Link to="/adventures/new-york">New York</Link>
                    </li>

                    <li>
                        <Link to="/adventures/the-whispering-sea">
                            The Whispering Sea
                        </Link>
                    </li>
                </ul>
                <h3>Habarashi Campaign Adventures</h3>
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
        </Fragment>
    );
};

export { AdventuresPage };
