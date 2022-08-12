import PageTitle from "components/custom-component/PageTitle";
import React ,{useState,useEffect} from "react";
import Loading from "../custom-component/Loading";
import PostInfo from "./PostInfo";

const Userpost = () => {
    const [users,setUsers]=useState([])
    const [posts,setPosts]=useState([])
    const [isLoading,setisLoading]=useState(false)
    useEffect(()=>{
        const url ='https://jsonplaceholder.typicode.com/users';
        fetch(url).then(response=>response.json())
        .then(
            (data)=>{
                setUsers(data)
            },
            (error)=>{
                alert(error)
            }
        )

    },[])

    const showPost =(e)=>{
        setisLoading(true)
    const id=e.target.value

    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    fetch(url).then(response=>response.json())
    .then(
    (data)=>{
        setPosts(data)
        setisLoading(false)
        
    },(error)=>{
        setisLoading(false)
        alert(error)
        
    }
    )
    }
  return (
    <>
      <div>
       <PageTitle title='پست های کاربران'/>
        <div className="card">
          <div className="card-header">لیست پست های کاربران </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <label htmlFor="userselect"></label>
                <select name="userselect" className="form-control" onChange={(e)=>showPost(e)}>
                <option value="">کاربر را انتخاب کنید</option>
                {users.map(user=>
                    <option key={user.id} value={user.id}>{user.name}</option>)}
          
                </select>

              </div>
            </div>
            <div className="row">
                {isLoading?<Loading>درحال دریافت...</Loading>: posts.map(post=><PostInfo key={post.id} info={post} />)}
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userpost;
