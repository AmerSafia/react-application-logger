import React from "react";
const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb  m-0 p-0">
        <li className="breadcrumb-item">
          <a>Home</a>
        </li>
        <li className="breadcrumb-item">
          <a>Administration</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Logger Search
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
