import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ChangePassword from "./Pages/ChangePassword";
import ForgetPassword from "./Pages/ForgetPassword";
import Mainpage from "./Mainpage/Mainpage"
import Home from "./Pages/Home";
import ProtectedRoutes from "./Services/ProtectedRoutes";


function App() {
  
   return (
     <>
     <BrowserRouter>
        <Routes>
          <Route path="/reset-password" element={<ForgetPassword />} />
          <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainpage" element={<Mainpage />} /> 
          <Route path="/" element={<Login/>}/>
          
      
        </Routes>
    </BrowserRouter> 
    
    </>


  );
}

export default App;