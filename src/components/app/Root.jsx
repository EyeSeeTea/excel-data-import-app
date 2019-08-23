import React from "react";
import { Route, Switch } from "react-router-dom";

const Root = () => {
    return (
        <Switch>
            <Route render={() => <p>{"Hello world"}</p>} />
        </Switch>
    );
};

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
