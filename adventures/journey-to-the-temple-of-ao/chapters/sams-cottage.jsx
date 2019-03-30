import React from "react";

import { Page, ScrollToMe } from "dnd-module";

const SamsCottage = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="sams-cottage" />
            <h1>Sam's Cottage</h1>
        </Page>
    );
};

export { SamsCottage };
