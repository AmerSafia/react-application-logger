import React, { useEffect, useState } from "react";
import LoggerTable from "./loggerTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { Api } from "../api";
import * as lodash from "lodash";
import { useHistory } from "react-router-dom";
import FiltersForm from "./common/filtersForm";

const Logger = () => {
  const [dataTable, setDataTable] = useState([]);
  const [constantData, setConstantData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState({ path: "logId", order: "asc" });
  const [logger, setLogger] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const history = useHistory();

  const [searchLogger, setSearchLogger] = useState({
    employee: "",
    action: "",
    application: "",
    fromDate: "",
    toDate: "",
    applicationID: "",
  });

  useEffect(() => {
    setFormValueFromParams();
    getAudiLog();
  }, []);

  const setFormValueFromParams = () => {
    const urlParams = new URLSearchParams(history.location.search);
    const params = Object.fromEntries(urlParams);
    setSearchLogger({
      ...searchLogger,
      ...params,
    });
  };

  const getAudiLog = async () => {
    let data;
    await Api.audiLogApi.list().then((response) => {
      data = response.result.auditLog;
    });
    setConstantData(data);
    setDataTable(data);
    getPagedData(data);
  };

  const getPagedData = (data, currentPage) => {
    const sorted = lodash.orderBy(data, [sortColumn.path], [sortColumn.order]);
    const dataTableSorted = paginate(sorted, currentPage, pageSize);
    setLogger(dataTableSorted);
    setDataTable(data);
    setTotalCount(data.length);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
    getPagedData(dataTable, currentPage);
  };

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    getPagedData(dataTable, currentPage);
  };

  const handleSearchLogger = (e) => {
    e.preventDefault();
    const { application, action, applicationID } = searchLogger;
    const filterDataTable = dataTable.filter(
      ({ applicationType, actionType, applicationId }) => {
        return (
          applicationType === application ||
          actionType === action ||
          applicationId === applicationID
        );
      }
    );

    updateUrlParams();
    setLogger(filterDataTable);
    getPagedData(filterDataTable);
  };

  const setFieldValue = (event) => {
    const { value, name } = event.target;
    setSearchLogger({
      ...searchLogger,
      [name]: value,
    });
  };

  const updateUrlParams = () => {
    const params = new URLSearchParams();
    for (const paramsKey in searchLogger) {
      if (searchLogger[paramsKey]) {
        params.append(paramsKey, searchLogger[paramsKey]);
      } else {
        params.delete(paramsKey);
      }
    }

    history.push({ search: params.toString() });
  };

  const handleReset = (e) => {
    e.preventDefault();
    const reset = {...searchLogger}
    for (const property in reset) {
      reset[property] = ''
    }
    setSearchLogger(reset)
    getAudiLog()
  }

  return (
    <div>
      <FiltersForm
        setFieldValue={setFieldValue}
        searchLogger={searchLogger}
        constantData={constantData}
        handleSearchLogger={handleSearchLogger}
        handleReset={handleReset}
      />

      <div className="row">
        <div className="col table-style m-3" style={{ backGround: "#fff" }}>
          <LoggerTable
            data={logger}
            sortColumn={sortColumn}
            onSort={handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Logger;
