import React from "react";
import { House } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HousePlus } from "lucide-react";
import toast from "react-hot-toast";
import { LandPlot } from "lucide-react";
const MobileNavbar = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const login = () => {
    toast.error("Please login to your account");

    setTimeout(() => {
      navigate("/login");
    }, 300);
  };
  return (
    <div className="flex  w-full py-1 bg-white justify-between px-10 flex-wrap">
      <button onClick={() => navigate("/")}>
        <House />
      </button>
      <Link to="/search">
        <Search />
      </Link>
      {user && user.email ? (
        <button onClick={() => navigate("/profile")}>
          <User />
        </button>
      ) : (
        <button onClick={() => login()}>
          <User />
        </button>
      )}
      {user && user.email && (
        <Link to="/createProperty">
          <HousePlus />
        </Link>
      )}
      {user && user.email && (
        <Link to="/yourProperties">
          <LandPlot />
        </Link>
      )}
    </div>
  );
};

export default MobileNavbar;
