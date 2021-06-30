import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const isBlank = props.blankCard;
  const name = props.cardName;
  const sign = props.cardSign;
  console.log("data reached");
  return (
    <main>
      {isBlank ? (
        <div className={classes.Outline}>
          <div className={classes.Top}>
            {" "}
            <span>?</span>
            <span>?</span>
          </div>
          <h1>?</h1>
          <div className={classes.Bottom}>
            {" "}
            <span>?</span>
            <span>?</span>
          </div>
        </div>
      ) : (
        <div className={classes.Outline}>
          <div className={classes.Top}>
            {" "}
            <span>{name}</span>
            <span>{sign}</span>
          </div>
          <h1>{sign}</h1>
          <div className={classes.Bottom}>
            {" "}
            <span>{name}</span>
            <span>{sign}</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Card;
