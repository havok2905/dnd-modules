import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { IDmBinderTileCollectionState } from "./interfaces/i-dm-binder-tile-collection-state";
import { IDmBinderTileCollectionProps } from "./interfaces/i-dm-binder-tile-collection-props";

import "./tile-collection.scss";

class DmBinderTileCollection extends Component<
    IDmBinderTileCollectionProps,
    IDmBinderTileCollectionState
> {
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
        const { tiles } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={this.state.redirectRoute} />;
        }

        return (
            <div className="tile-collection">
                <ul>
                    {tiles.map((tile: any, index: number) => {
                        return (
                            <li
                                className="tile-collection__tile"
                                key={index}
                                onClick={() => {
                                    this.redirectTo(tile.redirectRoute);
                                }}
                            >
                                <div
                                    className="tile-collection__tile-image"
                                    style={{
                                        backgroundImage: `url(${tile.image})`
                                    }}
                                />
                                <span>{tile.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export { DmBinderTileCollection };
