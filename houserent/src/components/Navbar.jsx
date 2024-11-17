import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../store/slices/userSlice";
import toast from "react-hot-toast";
const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
    setTimeout(() => {
      navigate("/");
      toast.success("Logout success");
    }, 300);
  };

  return (
    <nav className="flex   justify-between w-full items-center px-5  ">
      {/* <Link to="/signup">signup</Link>
      <GAuth />
      <Link to="/login">Login</Link>
      {isAdmin && <Link to="/admin/dashboard">admin</Link>}
      <Logout /> */}
      <Link to="/" className="font-semibold text-xl">
        HousRent
      </Link>
      <div className="flex  items-center gap-10 pr-10">
        <Link to="/signup">signup</Link>
        {user && user.email ? (
          <button onClick={() => signOut()}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/search">Search</Link>
        {user && user.email && <Link to="/profile">Profile</Link>}
        {user && user.email && (
          <Link to="/createProperty">Create Property</Link>
        )}
        {user && user.email && <Link to="/yourProperties">Your Property</Link>}
        {user && user.email && <Link to="/yourBookings">Your Bookings</Link>}

        {/* {user && user.email} */}
      </div>
    </nav>
  );
};

export default Navbar;
