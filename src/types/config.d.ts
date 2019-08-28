type SheetType = "AGGREGATE_STATIC";

interface Config {
    name: string;
    file: string;
    password?: string;
    ignoreTotals?: boolean;
    sheets: Sheet[];
}

interface Sheet {
    name: string;
    orgUnitCell: string;
    yearCell: string;
    password?: string;
    ignoreTotals?: boolean;
    data: {
        cells?: CellValue[];
    };
}

interface CellValue {
    dataElement: string;
    categoryOptionCombo: string;
    address: string;
    total?: boolean;
}
