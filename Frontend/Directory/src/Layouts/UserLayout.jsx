import UserNavbar from "../Components/UserNavbar.jsx";
import Footer from "../Components/Footer.jsx";
import {Outlet, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";

const UserLayout = () => {

    const [verified, setVerified] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");

        if(!token)
            navigate("/login")
        else{
            setVerified(true);
        }
    }, []);


    return(
        <>
            {verified &&
                <>
                    <UserNavbar/>
                    <Outlet/>
                    <Footer/>
                </>
            }



        </>
    )
}

export default UserLayout;