import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import userLayout from "../../Layouts/UserLayout.jsx";

const Dashboard = () => {

    const navigate = useNavigate();




    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);

        if (!token) {
            navigate("/login")
        }
    }, [])
    return(
        <>
            <h2>User Dashboard</h2>

        </>
    )
}

export default Dashboard