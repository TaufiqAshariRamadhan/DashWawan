import { type Metadata } from "next";
import ComplexTable from "./components/ComplexTable";

import {
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";


export const metadata: Metadata = {
  title: 'Data Mahasiswa',
}

const DataTablesPage = () => {
  return (
    <div>
      <div className="mt-3">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default DataTablesPage;
