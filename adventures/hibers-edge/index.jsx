import React, { Fragment } from 'react';
import { Footer, Page, TableOfContents } from 'dnd-module';

import TABLE_OF_CONTENTS from './constants/table-of-contents';

const HibersEdge = ()=> {
    return (
        <Fragment>
            <Page>
                <h1>Hibers Edge</h1>
                <TableOfContents contentsList={ TABLE_OF_CONTENTS }/>
            </Page>
            <Footer scrollButton={true} quickRefButton={true} rollForm={true}/>
        </Fragment>
    );
};

export { HibersEdge };