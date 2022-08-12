
import React from "react";
import {Spinner} from 'reactstrap'

const ProductList = ({ products ,deleteItem }) => {
    console.log(typeof products);
    let productList;
    console.log(products);
    if(typeof products=='string'){
      productList= <div className="text-center"><span className="text-muted h5">...loading</span><Spinner color="primary" children={false}/></div>
    }else if(typeof products=='object'){
          if(products.length===0 ) productList=<div className="text-center">محصولی وجود ندارد!</div>
          else{
            productList= products.map((p) => (
              <div key={p.id} className="card ">
                <div className="card-body">
              <li  className='d-flex justify-content-between '>
                <p className="my-auto pb-2">عنوان : {p.title} </p>
                <p className="my-auto pb-2">تعداد : {p.amount}x </p>
                
                <button type="button" className="close close-btn" aria-label="Close" onClick={()=>deleteItem(p.id)}>
                  <span aria-hidden="true">&times;</span>
                </button>              
              
              </li>
              </div>
              </div>
            ))
          }
    }
  return (
    <>
      <div className="col-md-12 mt-5">
        
        <ul className="list-unstyled">
          { productList}
        </ul>
      </div>
    </>
  );
};

export default React.memo(ProductList) ;
