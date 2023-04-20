import Avatar from '@mui/material/Avatar';
import React from "react";
import "./HeaderOption.css";
// import { useSelector } from "react-redux";
// import { selectUser } from "./features/userSlice";

const HeaderOption = ({ avatar, Icon, title ,}) => {
//   const { user } = useSelector(selectUser);

  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar}/>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;