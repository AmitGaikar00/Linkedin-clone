import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { Home, SupervisorAccount , Search, BusinessCenter, Chat, Notifications } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {auth} from './firebase'
import { logout } from "./features/counter/userSlice";


function Header() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="header">
      {/* this is the header */}
      <div className="header__left">
        <img src="linkedin.png" alt="logo" />

        <div className="header__search">
          {/* search icon */}
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption title="Me" onClick={logoutHandler} avatar={true} />
      </div>
    </div>
  );
}

export default Header;
