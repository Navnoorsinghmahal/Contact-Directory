import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function UserNavbar() {

    const navigate = useNavigate();
    const handleLogout = () => {

        localStorage.removeItem('token');

        navigate('/login');
    };

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/customer/dashboard">Navbar</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"
                                      to="/customer/dashboard">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer/changepassword">Change Password</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/customer/addcontact">Add Contact</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/customer/viewcontact">View Contact</Link>
                            </li>

                        </ul>

                        <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UserNavbar;