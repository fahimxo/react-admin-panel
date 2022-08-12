import {Navigate} from "react-router-dom";

const user =()=>{

    const auth = JSON.parse(localStorage.getItem('user'))
    return auth; 
}
const PrivateRoute = ({children}) => {

const isauth =user() 

   return isauth ?children:<Navigate to="/login"/>

}
 
export default PrivateRoute;