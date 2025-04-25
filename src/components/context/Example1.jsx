import React from "react";
import Example2 from "./Example2";

const Example1 = (props) => {
  return (
    <div>
      Example1
      <Example2 name={props.name} />
    </div>
  );
};

export default Example1;
