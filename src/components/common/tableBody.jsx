import React from "react";
import _ from "lodash";

const TableBody = ({ columns, data }) => {
 const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

 const createKey = () => {
    return Math.random();
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={createKey()}>
          {columns.map((column) => (
            <td key={createKey()} className="m-4">
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
