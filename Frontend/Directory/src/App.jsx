import {BrowserRouter, Routes, Route} from "react-router-dom"

//Pages
import Table from "./pages/Table.jsx";
import Forms3 from "./pages/Forms3.jsx";
import Login from "./pages/Login.jsx";
import Forgot_password from "./pages/Forgot_password.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";


//Customer
import CustomerDashboard from "./pages/Customer/Dashboard.jsx";
import ChangePassword from "./pages/Customer/ChangePassword.jsx";
import AddContact from "./pages/Customer/AddContact.jsx";
import ViewContact from "./pages/Customer/View_contact.jsx";

//Admin
import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import AdminDashboard from "./pages/Admin/Dashboard.jsx";
import ForgotPassword from "./pages/Admin/ForgotPassword.jsx";
import ResetPassword_admin from "./pages/Admin/ResetPassword_admin.jsx";
import ViewUser from "./pages/Admin/ViewUser.jsx";
import ChangePassword_admin from "./pages/Admin/ChangePassword_admin.jsx";

import UserLayout from "./Layouts/UserLayout.jsx";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";


function App() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<PublicLayout/>}>
                    <Route path="table" element={<Table/>}/>
                    <Route path="forms3" element={<Forms3/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="forgot_password" element={<Forgot_password/>}/>
                    <Route path="resetpassword" element={<ResetPassword/>}/>

                </Route>


                <Route path = {"/customer"} element={<UserLayout/>}>
                    <Route path="dashboard" element={<CustomerDashboard />}/>
                    <Route path="changepassword" element={<ChangePassword />}/>
                    <Route path="addcontact" element={<AddContact/>}/>
                    <Route path="viewcontact" element={<ViewContact />}/>
                </Route>

                <Route path="adminLogin" element={<AdminLogin/>}/>
                <Route path="forgot_password_admin" element={<ForgotPassword/>}/>
                <Route path="reset_password_admin" element={<ResetPassword_admin/>}/>

                <Route path={"/admin"} element={<AdminLayout/>}>
                    <Route path="dashboard" element={<AdminDashboard/>}/>
                    <Route path="view_user" element={<ViewUser />}/>
                    <Route path="change_password" element={<ChangePassword_admin/>}/>

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App