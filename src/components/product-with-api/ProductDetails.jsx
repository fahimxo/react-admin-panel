import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as QueryString from "query-string";

export const ProductDetails = () => {
  const navigate = useNavigate();
 
  const location = useLocation();
  const params = QueryString.parse(location.search);
  console.log(params);

  return (
    <div className="card">
      <div className="card-header">مشخصات محصول</div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <div className="card">
            <div className="card-body d-flex justify-content-between align-item-center">
            <h5 className="my-auto">
              کد محصول : {params.id}
            </h5>
            <h5 className="my-auto ">نام محصول : {params.title}</h5>
            <h5 className="my-auto ">گروه محصول : {params.categoryName}</h5>
            <h5 className="my-auto ">قیمت محصول : {params.price}</h5>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/products")}
            >
              بازگشت به لیست
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
