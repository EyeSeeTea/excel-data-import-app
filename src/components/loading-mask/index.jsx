import React from "react";
import { withStyles } from "@material-ui/styles";

import { styles } from "./styles";

const LoadingMask = ({ message, classes }) => {
    return (
        <div className={classes.loader}>
            <div className={classes.loaderWheel}></div>
            <div className={classes.loaderMsg}>{message}</div>
        </div>
    );
};

LoadingMask.propTypes = {};

LoadingMask.defaultProps = {};

export default withStyles(styles)(LoadingMask);
