import React, { useRef, useCallback, useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import XLSX from "xlsx";
import { withStyles } from "@material-ui/styles";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";

import LoadingMask from "../../loading-mask";
import ExcelReader from "../../../models/ExcelReader";
import { styles } from "./styles";

const fetchTemplates = async () => {
    return (await axios("templates.json")).data;
};

const LandingPage = ({ classes }) => {
    const [loading, setLoading] = useState(true);
    const [templates, setTemplates] = useState([]);
    const { baseUrl } = useConfig();

    const { loading: queryLoading, data } = useDataQuery({
        me: {
            resource: "/me",
            fields: "dataSets,programs",
        },
    });

    useEffect(() => {
        fetchTemplates().then(templates => {
            setTemplates(templates);
            setLoading(false);
        });
    }, []);

    const templateSelect = useRef(null);
    const fileInput = useRef(null);
    const openFileInput = useCallback(() => fileInput.current.click(), [fileInput]);
    const submitFiles = useCallback(
        e => {
            setLoading(true);
            const files = fileInput.current.files;
            for (const file of files) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: "array" });
                    const template = templates.find(e => e.id === templateSelect.current.value);
                    axios.get(`/configs/${template.fileName}.json`).then(config => {
                        axios
                            .get(`${baseUrl}/api/dataSets/${template.id}/metadata.json`)
                            .then(metadata => {
                                console.log(metadata);
                                const excelReader = new ExcelReader(
                                    config.data,
                                    workbook,
                                    metadata.data
                                );
                                console.log(excelReader.importExcelFile());
                                setLoading(false);
                            });
                    });
                };
                reader.readAsArrayBuffer(file);
            }
        },
        [baseUrl, templates, fileInput, setLoading]
    );

    return (
        <div>
            {(queryLoading || loading) && <LoadingMask message={"Processing the Excel Files..."} />}
            <div className={classes.contentArea}>
                <div className={classes.templateSelect}>
                    <div className={classes.inputGroup}>
                        <span className={classes.inputGroupAddon} id="basic-addon1">
                            Template
                        </span>
                        <select
                            className={classes.formControl}
                            id="temSelectBox"
                            ref={templateSelect}
                        >
                            {data &&
                                _(templates)
                                    .filter(
                                        ({ id }) =>
                                            data.me.dataSets.includes(id) ||
                                            data.me.programs.includes(id)
                                    )
                                    .map(({ id, name }) => (
                                        <option value={id} key={id}>
                                            {name}
                                        </option>
                                    ))
                                    .value()}
                        </select>
                    </div>

                    <div className={classes.inputGroup}>
                        <span className={classes.inputGroupAddon} id="basic-addon1">
                            OrgUnit Scheme
                        </span>
                        <select className={classes.formControl} id="ousSelectBox">
                            <option value="UID">UID</option>
                            <option value="CODE">Code</option>
                        </select>
                    </div>
                </div>

                <div id="sideBarWithLogo">
                    <div className={classes.logo}>
                        <img src="img/logo_b.png" alt="Excel Data Importer Logo" />
                    </div>
                </div>

                <div className={classes.actionButtons}>
                    <div
                        id="uploadLogo"
                        className={classes.uploadLogo}
                        title="Upload data sheets"
                        onClick={openFileInput}
                    />
                    <div
                        id="downloadLogo"
                        className={classes.downloadLogo}
                        title="Download a sample template"
                        download
                    />
                    <input
                        type="file"
                        id="uploadFile"
                        className={classes.uploadFile}
                        ref={fileInput}
                        accept=".xlsx, .xls"
                        multiple
                        onChange={submitFiles}
                    />
                </div>

                <div id="helpText" className={classes.helpText}>
                    <p className={classes.mediumFont}>Help Tips:</p>
                    <ul className={classes.smallFont}>
                        <li>
                            Single or Mulitple xlsx data files can be uploaded using upload button.
                        </li>
                        <li>
                            Template xlsx file can be generated using download button, this is
                            useful to compare the datasheet format with actual template.
                        </li>
                        <li>
                            Make sure that the template and datasheet mapping in sync, if find any
                            descripencies please contact admin.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default withStyles(styles)(LandingPage);
