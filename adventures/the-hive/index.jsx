import React, { Fragment } from 'react';
import { Footer, Page, TableOfContents } from 'dnd-module';

import Overview from './chapters/overview.jsx';
import ChapterOne from './chapters/chapter-one.jsx';
import ChapterTwo from './chapters/chapter-two.jsx';
import ChapterThree from './chapters/chapter-three.jsx';
import Creatures from './chapters/creatures.jsx';

import TABLE_OF_CONTENTS from './constants/table-of-contents';

const TheHive = ()=> {
    return (
        <Fragment>
            <Page>
                <h1>The Hive</h1>
                <TableOfContents contentsList={ TABLE_OF_CONTENTS } hashReferencesSupported={false}/>
            </Page>
            <Overview/>
            <ChapterOne/>
            <ChapterTwo/>
            <ChapterThree/>
            <Creatures/>
            <Footer scrollButton={true} quickRefButton={true} rollForm={true}/>
        </Fragment>
    );
};

export { TheHive };