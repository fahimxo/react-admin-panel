
import React,{useState,useCallback,useReducer} from 'react'
import PageTitle from '../custom-component/PageTitle'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'

const productReducer=(state,action)=>{
  switch (action.type) {
    case "SET":
      return action.payload
    case "ADD":
      return [...state,action.payload]
    case "remove":
        return [...state.filter(p=>p.id!==action.payload)]
    default:
      return state;
  }
}
export default function MainDashboard() {
  
  
  const [isLoading,setIsLoading]=useState(false)

  const [products,dispatch]=useReducer(productReducer,'')

  const addNewproduct=(item)=>{
  
    setIsLoading(true)
    fetch('https://products-40593-default-rtdb.firebaseio.com/products.json',{
      method:"POST",
      headers:{
        'content-type':'application/json; charset=UTF-8'
      },
      body:JSON.stringify(item)
    }).then((response)=>response.json())
    .then((data)=>{
      setIsLoading(false)
      
      dispatch({type:"ADD",payload:{id:data.name,...item}})
    }).catch((err)=>{
      setIsLoading(false)
      console.log(err);
    })
    
  }

  const deleteItemHandler=(id)=>{
    fetch(`https://products-40593-default-rtdb.firebaseio.com/products/${id}.json`,{
      method:"DELETE",
      headers:{
        'content-type':'application/json; charset=UTF-8'
      },})
    .then((response)=>response.json())
    .then((data)=>{
     
      dispatch({type:"remove",payload:id})
    }).catch((err)=>{
     
      console.log(err);
    })
  }

  const searchProductHandler=useCallback((items)=>{
    dispatch({type:"SET",payload:items})
   
  },[])
 
  return (
    <div>
          <PageTitle title="مدیریت محصولات با firebase" />
       
            <div className="card">
                <div className="card-header"> مدیریت محصولات با firebase</div>
                <div className="card-body">
                    <div className="row">
                        <ProductForm addNewproduct={addNewproduct} isLoading={isLoading}/>
                    
                    <div className='col-md-7 mx-auto'>
                    <div className='row mx-auto'>
                      <SearchProduct onLoadProducts={searchProductHandler}/>
                        
                      <ProductList products={products} deleteItem={deleteItemHandler}/>
                    </div>
                    </div>
                      
                     </div> 
                    
                </div>
            </div>
    </div>
  )
}
