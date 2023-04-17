import React, { Fragment } from "react";
import classes from "./InputControl.module.css";

const InputControl = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props} />
      </div>
    </Fragment>
  );
};

export default InputControl;
