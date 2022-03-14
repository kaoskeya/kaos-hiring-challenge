import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const TabNav = ({ active, goto }) => {
  return (
    <Nav pills>
      <Navbar tabs="true">
        <NavItem>
          <NavLink
            className={active === "form" ? "active" : ""}
            onClick={() => goto("form")}
          >
            Add Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={active === "feed" ? "active" : ""}
            onClick={() => goto("feed")}
          >
            View Submissions
          </NavLink>
        </NavItem>
      </Navbar>
    </Nav>
  );
};

export default TabNav;
