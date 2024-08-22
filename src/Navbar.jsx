import { NavLink } from "react-router-dom";

export default function Navbar() {

    // These styles are used to highlight the active page in the navigation
    const linkStyle = {
        marginLeft: 10,
        marginRight: 10,
        textDecoration: 'none',
        color: 'white'
    }

    const activeLinkStyle = {
        fontWeight: 'bold',
        color: 'black'
    }

    const navBarStyle = {
        backgroundColor: 'gray',
        padding: 10,
        color: 'white'
    }
    return (
        <nav style={{ ...navBarStyle }}>
            <NavLink
                to="/" style={({ isActive }) => ({
                    ...linkStyle,
                    ...(isActive ? activeLinkStyle : {})
                })}
            >
                Home
            </NavLink>
            {/* without style:  <NavLink to='/'>Home</NavLink> */}

            <NavLink
                to="/about" style={({ isActive }) => ({
                    ...linkStyle,
                    ...(isActive ? activeLinkStyle : {})
                })}
            >
                About
            </NavLink>

            <NavLink
                to="/account" style={({ isActive }) => ({
                    ...linkStyle,
                    ...(isActive ? activeLinkStyle : {})
                })}
            >
                Account
            </NavLink>
        </nav>
    );
}
