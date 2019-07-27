import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { HomePageTile } from "./home-page-tile";
import { IHomePageState } from "./interfaces/i-home-page-state";
import { IHomePageProps } from "./interfaces/i-home-page-props";

import "./tile-collection.scss";

class HomePage extends Component<IHomePageProps, IHomePageState> {
    private tiles: HomePageTile[] = [
        new HomePageTile("tile-collection__tile--maps", "maps", "Maps"),
        new HomePageTile(
            "tile-collection__tile--adventures",
            "adventures",
            "Adventures"
        ),
        new HomePageTile(
            "tile-collection__tile--compendium",
            "compendium",
            "Compendium"
        )
    ];

    public state = {
        redirect: false,
        redirectRoute: ""
    };

    redirectTo(redirectRoute: string) {
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
                    {this.tiles.map((tile: any, index: number) => {
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

export { HomePage };
