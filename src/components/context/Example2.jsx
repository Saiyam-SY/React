import React from "react";
import Example3 from "./Example3";
const Example2 = (props) => {
  return (
    <div>
      Example2
      <Example3 name={props.name} />
    </div>
  );
};

export default Example2;
