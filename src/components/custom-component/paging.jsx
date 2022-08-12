import React from "react";

const Paging = ({ pageCount, currentPage, changePage }) => {
  let items = [];
  for (let i = 1; i <= pageCount; i++) {
    const item = (
      <li key={i} className={i == currentPage ? "page-item active" : "page-item"}>
        <span onClick={() => changePage(i)} className="page-link label">
          {i}
        </span>
      </li>
    );
    items.push(item);
  }
  return items;
};

export default Paging;
