import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

// import { HomePage, AboutPage, LoginPage } from "./index";



export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar/>
        <hr />

        <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="about" element={<AboutPage/>}/> 
            <Route path="login" element={<LoginPage/>}/> 

            {/* <Route path="/*" element={<LoginPage/>}/>  <= Queda con la dirección equivocada */}

            <Route path="/*" element={<Navigate to="about"/>}/> 



        </Routes>
       
    </UserProvider>
  )
}
