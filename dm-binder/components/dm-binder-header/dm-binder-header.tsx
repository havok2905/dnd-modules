import { Link } from "react-router-dom";
import * as React from "react";

import "./dm-binder-header.scss";

const DmBinderHeader = () => {
    return (
        <header className="dm-binder-header">
            <h1>Havok's DM Binder</h1>
            <h2>My collection of RPG resources</h2>
            <Link className="dm-binder-header__home-link" to="/">
                Home
            </Link>
        </header>
    );
};

export { DmBinderHeader };
