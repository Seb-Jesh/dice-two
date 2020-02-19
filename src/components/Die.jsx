import React from "react";

const Die = props => {
  let styles = `fas fa-dice-${props.num} fa-7x Die ${props.shake && "Shake"}`;
  return (
    <div>
      <i className={styles}></i>
    </div>
  );
};

export default Die;
