 import { useForm } from "react-hook-form";
import React,{ useEffect } from "react";
import './productInfo.css'
import PropTypes from 'prop-types'

const ProductInfo = ({categories,product,save}) => {
  const {register, handleSubmit,reset,formState: { errors } } =useForm({defaultValues:{...product}})
   
  useEffect(() => {
    reset({...product})
  }, [product,reset]);

  const submit = (data)=>{

    save(data)
  }
  return (
    <>
   
      <form onSubmit={handleSubmit(submit)}>
        <div className="title-up mb-3">افزودن محصول</div>
        <input type="hidden" name="id" {...register('id',{required:false})} />
        <div className="form-group">
        <label htmlFor="title">عنوان محصول</label>
        <input type="text" className="form-control" {...register('title',{required:true ,minLength:5})} />
        {errors.title &&  errors.title.type === 'required' && <small className="form-text text-danger"> عنوان اجباری می باشد</small>}
        {errors.title &&  errors.title.type === 'minLength' && <small className="form-text text-danger"> حداقل 5 کاراکتر</small>}
        </div>
        <div className="form-group">
        <label htmlFor="categoryId" >گروه محصول</label>
        <select name="categoryId" {...register('categoryId',{required:true})} className="form-control">
          <option value="">انتخاب کنید</option>
          {categories.map(p=> <option key={p.id} value={p.id}>{p.title}</option>)}
        </select>
        {errors.categoryId && <small className="form-text text-danger"> گروه اجباری می باشد</small>}
        </div>
        <div className="form-group">
        <label htmlFor="price"> قیمت</label>
        <input type="text" className="form-control" {...register('price',{pattern:/\d+/})} />
        {errors.price &&  <small className="form-text text-danger"> مقدار عددی وارد کنید</small>}
        </div>
        <button type="submit" className="btn w-25 text-center btn-primary"> ذخیره</button>
      </form>
    </>
  );
};
ProductInfo.prototypes={
  categories:PropTypes.array.isRequired,
  product:PropTypes.object.isRequired,
  save:PropTypes.func.isRequired,
}
ProductInfo.defaultProps={
  categories:[],
  product:{},
}

export default React.memo(ProductInfo);
