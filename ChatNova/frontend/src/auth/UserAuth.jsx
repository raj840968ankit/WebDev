import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

export const UserAuth = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setLoading(false);
        }

        if(!token) {
            navigate('/login'); // Redirect to login if no token
        }

        if(!user) {
            navigate('/login'); // Redirect to login if user is not authenticated
        }
    }, []);

    if (loading) return (
        <div>Loading...</div>
    );

    return (
        <>
            {children}
        </>
    );
}