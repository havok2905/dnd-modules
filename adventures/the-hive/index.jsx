import React, { Fragment } from "react";
import {
    Columns,
    Footer,
    Hero,
    Page,
    TableOfContents,
    Tools
} from "dnd-module";

import Overview from "./chapters/overview.jsx";
import ChapterOne from "./chapters/chapter-one.jsx";
import ChapterTwo from "./chapters/chapter-two.jsx";
import ChapterThree from "./chapters/chapter-three.jsx";
import CreaturesChapter from "./chapters/creatures.jsx";

import TABLE_OF_CONTENTS from "./constants/table-of-contents";

import HeroImage from "./img/hero.jpg";

const TheHive = () => {
    return (
        <Fragment>
            <Hero src={HeroImage} alt="adventure cover image" />
            <Page>
                <h1>The Hive</h1>
                <Columns>
                    <div>
                        <Overview />
                        <ChapterOne />
                        <ChapterTwo />
                        <ChapterThree />
                        <CreaturesChapter />
                    </div>
                    <div>
                        <h2>Table of Contents</h2>
                        <TableOfContents
                            contentsList={TABLE_OF_CONTENTS}
                            hashReferencesSupported={false}
                        />
                        <h2>Tools</h2>
                        <Tools />
                    </div>
                </Columns>
            </Page>
            <Footer scrollButton={true} rollForm={true} />
        </Fragment>
    );
};

export { TheHive };
