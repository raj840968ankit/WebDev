import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

    // Toggle function for the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const activeLinkStyle = ({isActive}) => {
        return {color : isActive ? "blue" : "black"}
    }

    return (
        // Style for the navbar container
        <nav className="navbar">
            <div className="navbar-container">
                {/* Project Title - Ankit */}
                <div className="navbar-title-wrapper">
                    <NavLink to="#" className="navbar-title">
                        Ankit
                    </NavLink>
                </div>

                {/* Mobile menu button (hamburger icon) */}
                <div className="navbar-toggler">
                    <button
                        onClick={toggleMenu}
                        className="navbar-toggler-button"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            // Close icon (X)
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Links - Desktop and Mobile */}
                <div className={`navbar-links-wrapper ${isOpen ? 'navbar-links-open' : ''}`}>
                    <ul className="navbar-links">
                        <li>
                            <NavLink to="/" className="navbar-link-item"
                                style={({ isActive }) => {
                                    return { color: isActive ? "blue" : "black" }
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movie" className="navbar-link-item" style={activeLinkStyle}>
                                Movie
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="navbar-link-item" style={activeLinkStyle}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navbar-link-item" style={activeLinkStyle}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}