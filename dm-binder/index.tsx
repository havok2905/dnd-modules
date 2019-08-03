import { HashRouter, Route, withRouter } from "react-router-dom";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";

// COMPONENTS
import { DmBinderFooter } from "./components/db-binder-footer/dm-binder-footer";
import { DmBinderHeader } from "./components/dm-binder-header/dm-binder-header";

// ADVENTURES
import { CircleBridge } from "./adventures/circle-bridge";
import { FortBriggs } from "./adventures/fort-briggs";
import { HibersEdge } from "./adventures/hibers-edge";
import { JourneyToTheTempleOfAo } from "./adventures/journey-to-the-temple-of-ao";
import { LightUpTheNight } from "./adventures/light-up-the-night";
import { MageLand } from "./adventures/mage-land";
import { NewYork } from "./adventures/new-york";
import { SilverCreek } from "./adventures/silver-creek";
import { TheHive } from "./adventures/the-hive";
import { TheWhisperingSea } from "./adventures/the-whispering-sea";

// PAGES
import { AdventuresPage } from "./pages/adventures-page/adventures-page";
import { CompendiumPage } from "./pages/compendium-page/compendium-page";
import { HomePage } from "./pages/home-page/home-page";
import { MapsPage } from "./pages/maps-page/maps-page";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

const ScrollToTopComponent = withRouter(ScrollToTop);

render(
    <HashRouter basename="/dm-binder">
        <ScrollToTopComponent>
            <DmBinderHeader />
            <Route path="/" exact component={HomePage} />
            <Route path="/adventures" exact component={AdventuresPage} />
            <Route path="/compendium" exact component={CompendiumPage} />
            <Route path="/maps" exact component={MapsPage} />
            <Route
                path="/adventures/circle-bridge"
                exact
                component={CircleBridge}
            />
            <Route path="/adventures/the-hive" exact component={TheHive} />
            <Route
                path="/adventures/hibers-edge"
                exact
                component={HibersEdge}
            />
            <Route
                path="/adventures/journey-to-the-temple-of-ao"
                exact
                component={JourneyToTheTempleOfAo}
            />
            <Route
                path="/adventures/light-up-the-night"
                exact
                component={LightUpTheNight}
            />
            <Route path="/adventures/new-york" exact component={NewYork} />
            <Route
                path="/adventures/silver-creek"
                exact
                component={SilverCreek}
            />
            <Route
                path="/adventures/the-whispering-sea"
                exact
                component={TheWhisperingSea}
            />
            <Route
                path="/adventures/fort-briggs"
                exact
                component={FortBriggs}
            />
            <Route path="/adventures/mage-land" exact component={MageLand} />
            <DmBinderFooter />
        </ScrollToTopComponent>
    </HashRouter>,
    document.getElementById("root")
);
