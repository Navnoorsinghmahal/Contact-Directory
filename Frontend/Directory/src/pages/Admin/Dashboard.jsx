import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const AdminDashboard = () => {

    const navigate = useNavigate();




    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);

        if (!token) {
            navigate("/adminLogin")
        }
    }, [])
    return(
        <>
            <h2>Admin Dashboard</h2>

        </>
    )
}

export default AdminDashboard