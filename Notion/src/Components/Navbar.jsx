import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logout Successful");
  };

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to="/">
        <img src={logo} height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Button - Login = Signup = Logout = Dashboard */}
      <div className="flex items-center gap-x-4 text-white">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 py-[8px] px-[12px] rounded-[8px] text-white border border-blue-700 transition-colors duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-600 hover:bg-green-700 py-[8px] px-[12px] rounded-[8px] text-white border border-green-700 transition-colors duration-300">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <button className="bg-gray-600 hover:bg-gray-700 py-[8px] px-[12px] rounded-[8px] text-white border border-gray-700 transition-colors duration-300">
                Dashboard
              </button>
            </Link>
            <Link to="/">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 py-[8px] px-[12px] rounded-[8px] text-white border border-red-700 transition-colors duration-300"
              >
                Log Out
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
