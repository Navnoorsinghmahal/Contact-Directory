import {Link} from "react-router-dom"

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/table">Tables</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/forms3">Sign Up</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;