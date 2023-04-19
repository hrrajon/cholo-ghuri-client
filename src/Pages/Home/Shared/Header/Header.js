import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo3 from "../../../../assets/logo3.png";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch();
    };

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    <li><Link to='/addservices'>Add Services</Link></li>
                    {
                        user?.photoURL ?
                            <li>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img style={{ height: '40px' }} alt='user' className='rounded-lg my-auto' src={user?.photoURL} />
                                </div>
                            </li>
                            :
                            <li>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <FaUser className='h-10'></FaUser>
                                </div>
                            </li>
                    }
                    <li className='my-auto'><button onClick={handleLogOut} className='btn btn-outline btn-accent'>Logout</button></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Registration</Link></li>
                </>
        }
    </>
    return (
        <div data-theme="acid" className="navbar h-20 mb-8 bg-green-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItem}
                    </ul>
                </div>
                <Link
                    to="/"
                    href="/"
                    className="logo3 btn btn-ghost normal-case text-xl"
                >
                    <img src={logo3} alt="" />
                </Link>
                <h2 className="text-3xl font-semibold">
                    <i>Cholo Ghuri</i>
                </h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItem}</ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline">Appointment</button>
            </div>
        </div>
    );
};

export default Header;
