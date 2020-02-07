import React, { Fragment } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

import "../assets/css/main.css";
import "../assets/Bootstrap/dist/css/bootstrap-reboot.css";
import "../assets/Bootstrap/dist/css/bootstrap-grid.css";
import "../assets/Bootstrap/dist/css/bootstrap.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <TopNav />
      <SideNav />
      {children}
    </Fragment>
  );
};

export default Layout;
