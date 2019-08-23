import React from "react";
import _ from "lodash";
import { HashRouter } from "react-router-dom";
import { createGenerateClassName } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import OldMuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import JssProvider from "react-jss/lib/JssProvider";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { HeaderBar } from "@dhis2/ui-widgets";
import i18n from "@dhis2/d2-i18n";

import Root from "./Root";
import { muiTheme } from "./themes/dhis2.theme";
import muiThemeLegacy from "./themes/dhis2-legacy.theme";

import "./App.css";

const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: "c",
});

const isLangRTL = code => {
    const langs = ["ar", "fa", "ur"];
    const prefixed = langs.map(c => `${c}-`);
    return _(langs).includes(code) || prefixed.filter(c => code && code.startsWith(c)).length > 0;
};

const configI18n = ({ keyUiLocale: uiLocale }) => {
    i18n.changeLanguage(uiLocale);
    document.documentElement.setAttribute("dir", isLangRTL(uiLocale) ? "rtl" : "ltr");
};

const App = () => {
    const { baseUrl } = useConfig();
    const { loading, error, data } = useDataQuery({
        userSettings: {
            resource: "/userSettings",
        },
    });

    if (loading) return <div>Loading...</div>;
    if (error)
        return (
            <div>
                <a rel="noopener noreferrer" target="_blank" href={baseUrl}>
                    {"Login"}
                </a>
                {` ${baseUrl}`}
            </div>
        );

    configI18n(data.userSettings);

    return (
        <HashRouter>
            <JssProvider generateClassName={generateClassName}>
                <MuiThemeProvider theme={muiTheme}>
                    <OldMuiThemeProvider muiTheme={muiThemeLegacy}>
                        <React.Fragment>
                            <HeaderBar appName="Template application" />
                            <Root />
                        </React.Fragment>
                    </OldMuiThemeProvider>
                </MuiThemeProvider>
            </JssProvider>
        </HashRouter>
    );
};

App.propTypes = {};

App.defaultProps = {};

export default App;
