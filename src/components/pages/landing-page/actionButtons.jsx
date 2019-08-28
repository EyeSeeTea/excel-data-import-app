import React, { useRef, useCallback, useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import XLSX from "xlsx";
import { withStyles } from "@material-ui/styles";
import { useDataQuery } from "@dhis2/app-runtime";

import LoadingMask from "../../loading-mask";
import ExcelReader from "../../../models/ExcelReader";
import { styles } from "./styles";

const fetchTemplates = async () => {
    return (await axios("templates.json")).data;
};

const LandingPage = ({ selectedRef, classes }) => {
    const { key: metadataId, value: fileName } = selectedRef || {};
    const { data } = useDataQuery({
        metadata: {
            resource: metadataId ? `/dataSets/${metadataId}/metadata` : "",
        },
    });

    console.log(metadataId, fileName);

    const fileInput = useRef(null);
    const openFileInput = useCallback(() => fileInput.current.click(), [fileInput]);
    const submitFiles = useCallback(
        e => {
            const files = fileInput.current.files;
            for (const file of files) {
                console.log(e, file);
                const reader = new FileReader();
                reader.onload = function(e) {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: "array" });
                    axios.get(`/templates/${fileName}.json`).then(config => {
                        const excelReader = new ExcelReader(config.data, workbook);
                    });
                };
                reader.readAsArrayBuffer(file);
            }
        },
        [fileInput]
    );

    return (
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
    );
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default withStyles(styles)(LandingPage);
