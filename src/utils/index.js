import axios from "axios";

export const parseDhis2Version = version => ({
    major: Number.parseInt(version, 10),
    minor: Number.parseInt(version.substring(version.indexOf(".") + 1), 10),
    snapshot: version.indexOf("-SNAPSHOT") >= 0,
});

export const goToExternalUrl = externalUrl => {
    if (externalUrl) window.location = externalUrl;
};

export const goToHashUrl = hash => {
    if (hash) window.location.hash = hash;
};

const cleanDhis2Url = (baseUrl, path) =>
    [baseUrl.replace(/\/$/, ""), path.replace(/^\//, "")].join("/");

export const goToDhis2Url = (baseUrl, path) => {
    if (baseUrl && path) window.location = cleanDhis2Url(baseUrl, path);
};

export const existsDhis2Url = async (baseUrl, path) => {
    try {
        await axios.get(cleanDhis2Url(baseUrl, path));
        return true;
    } catch (error) {
        if (error.response.status === 404) return false;
        throw error;
    }
};

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
