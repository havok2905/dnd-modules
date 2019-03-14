import React, { Fragment } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Page } from 'dnd-module';

import { TheHive } from './the-hive/index.jsx';
import { HibersEdge } from './hibers-edge/index.jsx';

const ModulesPage = ()=> {
    return (
    <Page>
        <h1>DND MODULES</h1>
        <h2>Adventures</h2>
        <ul>
            <li><Link to='/the-hive'>The Hive</Link></li>
        </ul>
        <h2>Towns</h2>
        <ul>
            <li><Link to='/hibers-edge'>Hibers Edge</Link></li>
        </ul>
    </Page>
    );
};

render((
   <Router basename="/dnd-modules">
        <div>
            <Route path='/' exact component={ModulesPage}/>
            <Route path='/the-hive' component={TheHive}/>
            <Route path='/hibers-edge' component={HibersEdge}/>
        </div>
   </Router> 
), document.getElementById('root'));