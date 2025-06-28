import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
        navigate('/');
    };

    return (
        <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
            <Link to="/pets" className="text-xl font-bold">PetApp</Link>
            <div className="space-x-4">
                <Link to="/pets" className="hover:text-indigo-600">Pets</Link>
                <Link to="/profile" className="hover:text-indigo-600">Profile</Link>
                <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-800"
                >
                    Logout
                </button>
            </div>
        </nav>
    );

}

export default Navbar;