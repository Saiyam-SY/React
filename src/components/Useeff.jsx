import React, { useEffect, useState } from "react";

const Useeff = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mount", count);
  }); // No dependency array means: runs on every render

  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("Component mount");
  //   }, []); // Empty dependency array means: run once after mount

  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("Component mount");
  //   }, [count]); // React watches the `count` variable

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Useeff;
