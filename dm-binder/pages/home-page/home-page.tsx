import React from "react";

import { DmBinderTile } from "../../components/dm-binder-tile-collection/dm-binder-tile";
import { DmBinderTileCollection } from "../../components/dm-binder-tile-collection/dm-binder-tile-collection";

import ADVENTURES_TILE from "./img/adventures-tile.png";
import COMPENDIUM_TILE from "./img/compendium-tile.png";
import MAPS_TILE from "./img/maps-tile.png";

const HomePage = () => {
    const tiles = [
        new DmBinderTile("maps", "Maps", MAPS_TILE),
        new DmBinderTile("adventures", "Adventures", ADVENTURES_TILE),
        new DmBinderTile("compendium", "Compendium", COMPENDIUM_TILE)
    ];

    return <DmBinderTileCollection tiles={tiles} />;
};

export { HomePage };
