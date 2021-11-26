import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = ({ user, setUser }) => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();

  // set up the user
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [setUser]);

  // logout a user
  const logout = () => {
    // clear localStorage
    localStorage.clear();

    navigate("/auth");

    setUser(null);
  };

  // to expire the token
  useEffect(() => {
    const token = user?.data.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div className="">
      <header className="text-gray-600 body-font mb-3">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className=" flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-3xl">UdWell</span>
          </Link>
          <nav className="ml-5 flex flex-wrap items-center text-base justify-center">
            <div>
              <Link to="/" className="mr-5 hover:text-gray-900">
                Home
              </Link>
            </div>

            <div className="w-80">
              <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <span className=" z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-600" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-wh bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </div>
          </nav>
          <div className="ml-auto">
            {user?.data.result ? (
              <button
                className="px-4 py-1 text-xl text-red-600 font-semibold rounded border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                onClick={() => logout()}
              >
                Logout
              </button>
            ) : (
              <button className="px-4 py-1 text-xl text-blue-600 font-semibold rounded border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                <Link to="/auth">Sign In</Link>
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
