import React, { useRef, useState, useEffect } from "react";
import Usercambo from "./UserCambo";
import { insertAsync, getAllAsync,deleteAsync } from "servise/todoServise";
import Paging from "components/custom-component/paging";
import PageTitle from "components/custom-component/PageTitle";
const Crudaxios = () => {
  const [userId, setUserId] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page,setPage]=useState(0)
  const [currentPage,setCurrentPage]=useState(1)
  const [currentTodos, setCurrentTodos] = useState([]);
  const pageItemCount = process.env.REACT_APP_PAGE_COUNT;
  

  useEffect(() => {
    //get all data
    fetchdata();
  }, []);

  async function fetchdata() {
      const response = await getAllAsync();
      setPosts(response.data);
      setPage(Math.ceil(response.data.length / pageItemCount)) 
      setCurrentTodos(response.data.slice(0,10))
      
    }
 
    const changePage =(i)=>{
      setCurrentPage(i)
      const start =((i-1)* pageItemCount)
      setCurrentTodos(posts.slice(start,start+10))

    }  

  const titleRef = useRef();
  const completedRef = useRef();

    //!delete
      const deleteItem =async(id)=>{
          const response =await deleteAsync(id)
          console.log(response);
            if(response){
                setPosts([...posts.filter(p=>p.id !=id)])
            }
      }

  const changeUser = (id) => {
    setUserId(id);
  };

  //save
  const save = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const post = {
      userId,
      title: titleRef.current.value,
      completed: completedRef.current.checked,
    };
    //    insert(post);
    const result = await insertAsync(post);
    console.log(result);
    setisLoading(false);
  };


  return (
    <>
      <div>
      <PageTitle title='مدیریت داده ها با axios'/>
        <div className="card">
          <div className="card-header">مدیریت داده با axios</div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <form onSubmit={save}>
                  <div className="mb-3">
                    <label htmlFor="" class="form-label">
                      عنوان :
                    </label>
                    <input
                      ref={titleRef}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      کاربر :
                    </label>
                    <Usercambo changeUser={changeUser} />
                  </div>
                  <div className="mb-2 ">
                    <label className="form-label">کامل شده :</label>
                    
                    <input
                      type="checkbox"
                      style={{width: '20px', height: '20px'}}
                      className="mt-2  "
                      ref={completedRef}
                    />

                  </div>

                  <button
                    disabled={isLoading ? "disabled" : ""}
                    type="submit"
                    className="btn btn-primary"
                  >
                    ذخیره
                  </button>
                </form>
              </div>
              <div className="col">
              
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>کد</th>
                      <th>عنوان</th>
                      <th>کاربر</th>
                      <th>انجام شده</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTodos.map((p) => (
                      <tr
                        key={p.id}
                        className={p.completed ? "compeleted-row" : ""}
                      >
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.userId}</td>
                        <td>{p.completed ? <span>✓</span> : <span>✖</span>}</td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={()=>deleteItem(p.id)}>حذف</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               
              </div>
            </div>
            <div className="row center mx-auto">
                 <div className="col">
                  <nav aria-label="...">
                    <ul className="pagination">
                      <Paging pageCount={page} currentPage={currentPage} changePage={changePage}/>
                  {/* {generatePagination(page,1,changePage)} */}
                    </ul>
                  </nav>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Crudaxios ;
