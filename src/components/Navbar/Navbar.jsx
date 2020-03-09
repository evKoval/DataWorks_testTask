import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.task}>
        <NavLink to="/calendar" activeClassName={styles.active} >
          Calendar
        </NavLink>
      </div>
      <div className={styles.task}>
        <NavLink to="/spiralMatrix" activeClassName={styles.active} >
          Spiral matrix
        </NavLink>
      </div>
      <div className={styles.task}>
        <NavLink activeClassName={styles.active} to="/brackets_validator">
          Brackets validation
        </NavLink>
      </div>
      <div className={styles.task}>
        <NavLink activeClassName={styles.active} to="/summ_arrays">
          2 Arrays
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
