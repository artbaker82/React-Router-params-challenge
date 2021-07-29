import React from "react";
import { Link } from "react-router-dom";
import style from "./NavbarItem.module.css";

const NavbarItem = ({ title, url }) => {
  return (
    <Link to={url} className={style.navbarItem}>
      {title}{" "}
    </Link>
  );
};

export default NavbarItem;
