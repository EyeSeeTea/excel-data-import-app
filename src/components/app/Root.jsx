import React from "react";
import { Route, Switch } from "react-router-dom";

import { LandingPage } from "../pages";

const Root = () => {
    return (
        <Switch>
            <Route render={() => <LandingPage />} />
        </Switch>
    );
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
