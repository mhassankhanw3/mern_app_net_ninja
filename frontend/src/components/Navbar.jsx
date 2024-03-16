import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  // logout

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="w-full flex items-center justify-between px-16 py-3 bg-white border-b border-neutral-200">
      <Link to="/">
        <span className="text-3xl text-neutral-800 font-bold">
          Workout Buddy
        </span>
      </Link>
      <div className="flex items-center space-x-2">
        {user ? (
          <div>
            <span className="text-sm text-blue-500 mr-2">
              {user?.email}
            </span>
            <button
              onClick={handleLogout}
              className="border-red-500 border-[1px] rounded-md py-1 px-3 text-red-600 hover:bg-red-50 text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/signin"
              className="text-blue-500 hover:underline hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
