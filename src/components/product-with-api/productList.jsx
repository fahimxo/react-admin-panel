import {Link } from 'react-router-dom'

const ProductList = ({ data ,remove ,editeMode}) => {

  return (
    <>
      {data.length===0?<div className='text-center'>محصولی وجود ندارد!</div> :<table className="table table-striped table-bordered align-middle table-hover">
        <thead>
          <tr>
            <th>کد</th>
            <th>عنوان</th>
            <th>گروه</th>
            <th>قیمت</th>
            <th>مدیریت</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => {
              return( 
              <tr className={p.editMode ?'selectedItem':''} key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.categoryName}</td>
              <td>{p.price}</td>
              <td>
              <Link className="btn btn-sm btn-secondary ml-2" to={`/products/product?id=${p.id}&title=${p.title}&categoryName=${p.categoryName}&price=${p.price}`}>مشاهده مشخصات</Link>
              <button className="btn btn-warning btn-sm ml-2" 
              onClick={() => editeMode(p.id)}>ویرایش</button>
              <button className="btn btn-danger btn-sm ml-2" onClick={() =>remove(p.id)}>حذف</button>
              </td>
            </tr>)
           
          })}
        </tbody>
      </table>}
    </>
  );
};

export default ProductList;
