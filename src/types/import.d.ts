type id = string;
type Scheme = "UID" | "NAME" | "CODE";
type ImportStrategy = "CREATE" | "UPDATE" | "CREATE_AND_UPDATE" | "DELETE";
type Period = string | number;

interface Metadata {
    [metadataType: string]: object[];
}

interface DataValueSet extends DataValueSetImport {
    dataSet: id;
    orgUnit: id;
    period: Period;
    attributeOptionCombo?: id;
    completeDate?: Date;
    dataValues: DataValueSimple[];
}

interface DataValueSetImport {
    dataValues: DataValue[];
    dataElementIdScheme?: Scheme = "UID";
    orgUnitIdScheme?: Scheme = "UID";
    categoryOptionComboIdScheme?: Scheme = "UID";
    idScheme?: Scheme = "UID";
    preheatCache?: boolean = false;
    dryRun?: boolean = false;
    importStrategy?: ImportStrategy = "CREATE";
    skipExistingCheck?: boolean = false;
    skipAudit?: boolean = false;
    async?: boolean = false;
    force?: boolean = false;
}

interface DataValue {
    dataElement: id;
    categoryOptionCombo: id;
    value?: string | number | boolean | Date;
    comment?: string;
    orgUnit: id;
    period: Period;
}

type DataValueSimple = Pick<DataValue, "dataElement" | "categoryOptionCombo" | "value" | "comment">;
