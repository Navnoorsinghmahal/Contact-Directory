// import Cards from "./Cards.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"
//Pages

import Table from "./pages/Table.jsx";
import Forms3 from "./pages/Forms3.jsx";
import Login from "./pages/Login.jsx";
import Forgot_password from "./pages/Forgot_password.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";


//Customer
import CustomerDashboard from "./pages/Customer/Dashboard.jsx";
import ChangePassword from "./pages/Customer/ChangePassword.jsx";
import AddContact from "./pages/Customer/AddContact.jsx";
import ViewContact from "./pages/Customer/View_contact.jsx";


import UserLayout from "./Layouts/UserLayout.jsx";
import PublicLayout from "./Layouts/PublicLayout.jsx";
// function App() {
//
//     let style = {
//         colour:"red", backgroundColor:"blue"
//     }
//
//     function sum(a, b){
//         return (a + b)
//     }
//     return(
//         <>
//             {/*<div className={"container"}>*/}
//             {/*    <span>Demo Project </span><span>Hello world </span>*/}
//             {/*    Output :: {sum(10, 44)}*/}
//             {/*<h1>Hello World</h1>*/}
//             {/*<p style={style}> hello </p>*/}
//             {/*<div className={"row mb-3"}>*/}
//             {/*    <Cards title={"Hello Cards"} description={"Hello world "} />*/}
//             {/*    <Cards title={"Hello Cards2"} description={"Hello world2 "}/>*/}
//             {/*    <Cards/>*/}
//             {/*</div>*/}
//
//
//             {/*<div className={"row mb-3"}>*/}
//             {/*    <Cards/>*/}
//             {/*</div>*/}
//             {/*    <button type={"button"} className={"btn btn-lg btn-primary"}>Click Me </button>*/}
//             {/*</div>*/}
//
//
//         </>
//     )
// }
// // let Cards = (props)=>{
// //     console.log(props)
// //     let{description, title} = props
// //     return(
// //         <>
// //             <div className="col-lg-4">
// //                 <div className="cards bg-primary">
// //                     <div className="card-header"> <h1> {title} </h1>
// //                         <div className="card-body">
// //                             <p> {description} </p>
// //                         </div>
// //
// //                     </div>
// //                 </div>
// //             </div>
// //
// //         </>
// //     )
// // }
//
// // import React from "react";
// //
// // class App extends React.Component {
// //     render() {
// //         return <h1> Class Component </h1>
// //     }
// // }
//

function App() {
    return(
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                {/*<Route path="/contact" element={<Contact/>}/>*/}
                {/*<Route path="/about" element={<About/>}/>*/}
                {/*<Route path="*" element={<PageNotFound/>}/>*/}

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
            </Routes>
        </BrowserRouter>
    )
}

export default App