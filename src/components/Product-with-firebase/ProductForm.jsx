import Loading from "components/custom-component/Loading";
import React from "react";

const ProductForm = ({addNewproduct,isLoading}) => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    const item={
        title,
        amount
    }
    addNewproduct(item)
    setTitle('')
    setAmount('')
  };
  return (
    <>
      <div className="col-md-5">
        <form onSubmit={handelSubmit}>
          <div className="form-group">
            <label htmlFor="">عنوان</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">تعداد</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            {isLoading?<Loading>درحال ذخیره</Loading>:<button className="btn btn-primary">ذخیره</button>}
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
