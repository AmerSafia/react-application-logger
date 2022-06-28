import React, { useEffect, useState } from "react";
import LoggerTable from "./loggerTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { Api } from "../api";
import * as lodash from "lodash";

const Logger = () => {
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState({ path: "logId", order: "asc" });
  const [logger, setLogger] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    Api.audiLogApi.list().then((response) => {
      setDataTable(response.result.auditLog);
    });
    getPagedData()

  }, [dataTable]);

  const getPagedData = () => {
    const sorted = lodash.orderBy(dataTable, [sortColumn.path], [sortColumn.order]);
    const logger = paginate(sorted, currentPage, pageSize);
    setLogger(logger);
    setTotalCount(dataTable.length)
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
    getPagedData();
  };

  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
    getPagedData()
  };

  return (
    <div className="row">
      <div className="col table-style">
        <LoggerTable
          data={logger}
          sortColumn={sortColumn}
          onSort={handleSort}
        />
        <hr />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Logger;
