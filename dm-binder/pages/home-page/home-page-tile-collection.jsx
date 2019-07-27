import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./tile-collection.scss";

const tiles = [
    {
        backgroundClassName: "tile-collection__tile--maps",
        redirectRoute: "maps",
        text: "Maps"
    },
    {
        backgroundClassName: "tile-collection__tile--adventures",
        redirectRoute: "adventures",
        text: "Adventures"
    },
    {
        backgroundClassName: "tile-collection__tile--compendium",
        redirectRoute: "compendium",
        text: "Compendium"
    }
];

class HomePageTileCollection extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            redirectRoute: ""
        };
    }

    redirectTo(redirectRoute) {
        this.setState({
            redirect: true,
            redirectRoute
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirectRoute} />;
        }

        return (
            <div className="tile-collection">
                <ul>
                    {tiles.map((tile, index) => {
                        return (
                            <li
                                className={`tile-collection__tile ${
                                    tile.backgroundClassName
                                }`}
                                onClick={() => {
                                    this.redirectTo(tile.redirectRoute);
                                }}
                                key={index}
                            >
                                <span>{tile.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

HomePageTileCollection.propTypes = {
    tiles: PropTypes.shape({
        backgroundClassName: PropTypes.string,
        text: PropTypes.string
    })
};

export { HomePageTileCollection };
