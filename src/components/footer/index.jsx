import React from "react";
import { withStyles } from "@material-ui/styles";

import { styles } from "./styles";

const Footer = ({ classes }) => {
    return (
        <div
            className={classes.footer}
        >{`Excel Data Importer ${process.env.REACT_APP_VERSION}`}</div>
    );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default withStyles(styles)(Footer);
