import React from "react";

import { Page, ScrollToMe } from "dnd-module";

const NewFey = () => {
    return (
        <Page>
            <ScrollToMe scrollActionString="new-fey" />
            <h1>New Fey</h1>
            <h2>Port City</h2>
            <h2>Fort Waffleheim</h2>
            <h2>New Fey Krossa Border</h2>
        </Page>
    );
};

export { NewFey };
