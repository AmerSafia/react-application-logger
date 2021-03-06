import React from "react";
import { columns } from "../staticdata/data";
import Table from "./common/table";

const LoggerTable = ({ data, sortColumn, onSort }) => {
  return (
    <Table
      columns={columns}
      data={data}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default LoggerTable;
