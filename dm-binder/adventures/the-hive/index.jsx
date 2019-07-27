import React, { Fragment } from "react";
import { DmScreen, Footer, Page } from "../../core/index.js";

import Overview from "./chapters/overview.jsx";
import ChapterOne from "./chapters/chapter-one.jsx";
import ChapterTwo from "./chapters/chapter-two.jsx";
import ChapterThree from "./chapters/chapter-three.jsx";
import CreaturesChapter from "./chapters/creatures.jsx";

import TABLE_OF_CONTENTS from "./constants/table-of-contents";

const TheHive = () => {
    return (
        <Fragment>
            <Page>
                <h1>The Hive</h1>
                <Overview />
                <ChapterOne />
                <ChapterTwo />
                <ChapterThree />
                <CreaturesChapter />
            </Page>
            <DmScreen
                contentsList={TABLE_OF_CONTENTS}
                hashReferencesSupported={false}
            />
            <Footer />
        </Fragment>
    );
};

export { TheHive };
