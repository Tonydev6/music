import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import "../button/button.css";
interface props {
  to: string;
  title: string;
  icon: any;
  onClick?: () => {};
}

export const Button = (props: props) => {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <>
      <Link to={props.to}>
        <div className={btnClass}>
          <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
            {props.icon}
            <p>{props.title}</p>
          </IconContext.Provider>
        </div>
      </Link>
    </>
  );
};
