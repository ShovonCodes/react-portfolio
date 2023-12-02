import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";

import Menu from "./components/Menu";
import About from "./pages/About";

import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import Experience from "./pages/Experience";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Publications from './pages/Publications'
import Education from './pages/Education'
import BackToTop from "./components/BackToTop";

// const routes = [
//   { path: "/", name: "About", Component: About },
//   { path: "/resume", name: "Resume", Component: Resume },
// ];

function App() {
    return (
        <>
            <BackToTop />
            <div className="page-wrap">
                <BgBubbles />
                <Router>
                    <div className="container">
                        <Menu />
                        <Profile />
                        <AnimatedRoutes />
                    </div>
                </Router>
            </div>
        </>
    );
}

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup className="transition-wrapper">
        <CSSTransition
            classNames="transition"
            timeout={1000}
            unmountOnExit
            key={location.pathname}
        >
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route exact path="/experience">
                    <Experience />
                </Route>
                <Route exact path="/works">
                    <Works />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/publications">
                    <Publications />
                </Route>
                <Route exact path="/education">
                    <Education />
                </Route>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default App;
