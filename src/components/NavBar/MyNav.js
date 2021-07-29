import React from "react";
import NavbarItem from "../NavbarItems/NavbarItem";
import style from "./Navbar.module.css";

const MyNav = ({ config }) => {
  return (
    <div className={style.mainNavWrapper}>
      {config.map((item) => (
        <NavbarItem title={item.title} url={item.url} />
      ))}
    </div>
  );
};

export default MyNav;
