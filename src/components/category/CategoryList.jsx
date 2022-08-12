import axios from 'axios';
import PageTitle from 'components/custom-component/PageTitle';
import React ,{useEffect,useState} from 'react'
import Loading from '../custom-component/Loading';

export default function CategoryList() {
    const [items ,setItems] = useState([])
    const [isLoading ,setIsLoading] = useState(true)
    useEffect(() => {
        const url = 'https://apitester.ir/api/CategoriesWithTokenAuth';
        const token =localStorage.getItem('token')
        axios.get(url,{
            headers:{
                'content-type':'application/json charset=utf-8',
                'authorization':`bearer ${token}`
            }
        })
        .then(response =>{
            setItems(response.data)
            setIsLoading(false)
        })
        
     
    }, []);
  return (
    <>

    <div>
    <PageTitle title="گروه بندی محصولات " />
            
            <div className="card">
                <div className="card-header">category list  with authorization</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   { isLoading?<Loading>درحال دریافت...</Loading>: items.map(item=>
                                   <tr key={item.categoryId}>
                                       <td>{item.categoryId}</td>
                                       <td>{item.categoryName}</td>
                                       <td>{item.description}</td>
                                       
                                       </tr>
                                   )} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}
