
import {Route,Routes } from "react-router-dom";
import {Login} from './components/auth/Login'
import PrivateRoute from './components/utils/PrivateRoute';
import { AdminLayout } from "./components/layouts/admin-layout/AdminLayout";

function App() {


  return (
    <>

    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<PrivateRoute><AdminLayout/></PrivateRoute>}/>  
    </Routes> 

    </>
  );
}

export default App;