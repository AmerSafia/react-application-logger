import React, { useEffect, useState } from "react";
import LoggerTable from "./loggerTable";
import { Input } from "./common/input";
import SelectMenu from "./common/selectMenu";
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

  const [searchLogger, setSearchLogger] = useState({
    employee: "",
    action: "",
    application: "",
    fromDate: "",
    toDate: "",
    applicationID: "",
  });
  useEffect(() => {
    Api.audiLogApi.list().then((response) => {
      setDataTable(response.result.auditLog);
    });
    getPagedData()
  }, [dataTable]);
  
  const optionsApplication = [
    "ADD_COMPANY_EMPLOYEE",
    "CERT_PROP_OWNERSHIP",
    "ADD_COMPANY",
    "ADD_POA",
  ];
  const optionsAction = [
    "INITIATE_APPLICATION",
    "ADD_EMPLOYEE",
    "SUBMIT_APPLICATION",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchLogger, "searchLogger");
  };
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
    setCurrentPage(page);
    getPagedData()
  };

  return (
    <div>
       <form className="row">
        <Input
          type="text"
          placeholder="e.g. Admin.User"
          label="Employee Name"
          onSetInput={(e) =>
            setSearchLogger({
              ...searchLogger,
              employee: e.target.value,
            })
          }
        />
        <SelectMenu
          label="Action type"
          options={optionsAction}
          onSelectedValue={(e) =>
            setSearchLogger({
              ...searchLogger,
              action: e.target.value,
            })
          }
        />
        <SelectMenu
          label="Application Type"
          options={optionsApplication}
          onSelectedValue={(e) =>
            setSearchLogger({
              ...searchLogger,
              application: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="Select date"
          label="From Date"
          onSetInput={(e) =>
            setSearchLogger({
              ...searchLogger,
              fromDate: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="Select date"
          label="To Date"
          onSetInput={(e) =>
            setSearchLogger({
              ...searchLogger,
              toDate: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="e.g.219841/2021"
          label="Application ID"
          onSetInput={(e) =>
            setSearchLogger({
              ...searchLogger,
              applicationID: e.target.value,
            })
          }
        />
        <div className="col d-flex align-items-end ">
          <button
            type="submit"
            className=" btn btn-primary btn-sm"
            onClick={handleSubmit}
          >
            <div>Search Logger</div>
          </button>
        </div>
      </form>
 
    <div className="row">
      <div className="col table-style m-3"  style={{ backGround: "#fff" }}>
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
    </div>
  );
};

export default Logger;
