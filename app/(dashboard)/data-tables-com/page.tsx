import { type Metadata } from "next";
import ColumnsTable from "./components/ColumnsTable";

import {
  columnsDataColumns,
} from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";



export const metadata: Metadata = {
  title: 'Data Perusahaan',
}

const DataTablesPage = () => {
  return (
    <div>
      <div className="mt-3">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </div>
    </div>
  );
};

export default DataTablesPage;
