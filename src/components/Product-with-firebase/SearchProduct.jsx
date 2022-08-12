import React,{useState,useEffect,useRef} from 'react';


const SearchProduct = ({onLoadProducts}) => {

  const [search,setSearch]=useState('')

  const inputRef=useRef()

  useEffect(()=>{
    setTimeout(() => {
      if(search===inputRef.current.value){
        const query=search.length===0?'':`?orderBy="title"&equalTo="${search}"`
    
      fetch('https://products-40593-default-rtdb.firebaseio.com/products.json'+query)
      .then((response)=>response.json())
      .then((data)=>{
        
        const loadedProducts=[]
        for (const key in data) {
          loadedProducts.push({
            id:key,
            title:data[key].title,
            amount:data[key].amount
          })
        }
        onLoadProducts(loadedProducts)
      }).catch((err)=>{
       
        console.log(err);
      })
        
      }   
    }, 500);
  },[search,onLoadProducts,inputRef])

    return (
        <>
        <div className='col-md-12 '>
          <div className=' d-flex align-items-center justify-content-center'>
          <label className='mr-2'>جستجو</label>
          <input
          ref={inputRef} 
          className='w-50 form-control border-primary' 
          value={search}
          onChange={(e)=>setSearch(e.target.value)} />
        </div> 
        </div> 
        </>
    );
}

export default React.memo(SearchProduct);
