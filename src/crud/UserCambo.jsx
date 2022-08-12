import React ,{useState,useEffect} from 'react';

const Usercambo = ({changeUser}) => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        getItem()
    }, []);
    const getItem=()=>{
        const url='http://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response=>response.json())
        .then(
            (data)=>{
                setusers(data)
            },
            (error)=>{
                console.log(error)
            }
        )
    }


    return (
        <>
        <select className='form-control' onChange={(e)=>changeUser(e.target.value)}>
        <option value="">انتخاب کنید</option>
        {users.map(user=><option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
            
        </>
    );
}

export default Usercambo;
