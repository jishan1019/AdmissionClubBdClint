import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../SecurityLayout/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.photoURL);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl hidden md:block">
            Admission Club Bd
          </a>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold">
                <a>Admission Club Bd</a>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collage">Colleges</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
              <li>
                <Link to="/myCollage">My Collage</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collage">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/myCollage">My Collage</Link>
            </li>
            {user ? (
              <li>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control mr-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-28 md:w-auto"
            />
          </div>
          <div className="rounded-full">
            <img
              src={
                user
                  ? user.photoURL
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpksu6S3Rc6c62Ce5RmC5DGRK9Bu3Q4Nal0A&usqp=CAU"
              }
              className="h-12 rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
