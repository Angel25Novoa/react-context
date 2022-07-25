import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react"
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
    const { user, setUser } = useContext( UserContext );
    const handleLogout = () => {
        setUser( null );
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/">
                        Home
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/about">
                        About
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/login">
                        Login
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/signin">
                        SignIn
                    </NavLink>
                    <button onClick={handleLogout}>Log Out</button>
                </ul>
            </div>
        </div>
    </nav>
  )
}