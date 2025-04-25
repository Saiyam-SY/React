// React Context API - Full Notes with Explanation and Code Comments

// ------------------- What is Context API? -------------------
// Context API in React is used to avoid 'props drilling' by providing a way to share values
// between components without having to explicitly pass props at every level.

// ------------------- Props Drilling Example -------------------
// Let's say we have a deeply nested component that needs access to a variable.
// We'd normally pass it through each component as a prop.

// App.jsx
// <Example1 name={usrName} />

// Example1.jsx
// <Example2 name={props.name} />

// Example2.jsx
// <Example3 name={props.name} />

// Example3.jsx
// <div>{props.name}</div>

// This works but becomes difficult to manage with more components and multiple props.

// ------------------- Using Context API Instead -------------------

// 1. Create Context Objects
import React, { createContext, useContext } from "react";

// Creating two contexts for demonstration
export const data = createContext(null); // context for usrName
export const data2 = createContext(null); // context for name

// 2. Wrap your components with Provider in App.jsx
// App.jsx
// import Profile from "./components/Profile";
// import Useeff from "./components/Useeff";
// import Example1 from "./components/context/Example1";

// const App = () => {
//   const usrName = "Saiyam";
//   const name = "Arjun";

//   return (
//     <div>
//       {/* Using Providers to supply values to nested components */}
//       <data.Provider value={usrName}>
//         <data2.Provider value={name}>
//           <Example1 />
//         </data2.Provider>
//       </data.Provider>
//     </div>
//   );
// };

// export default App;

// ------------------- Consuming Context Data -------------------

// Option 1: Using Consumer Component (older way)
// Example3.jsx
import React from "react";
import { data, data2 } from "../../App";

const Example3 = () => {
  return (
    <data.Consumer>
      {(usrName) => (
        <data2.Consumer>
          {(name) => (
            <div>
              <h1>{usrName}</h1>
              <h1>{name}</h1>
            </div>
          )}
        </data2.Consumer>
      )}
    </data.Consumer>
  );
};

export default Example3;

// NOTE: The Consumer pattern gets messy with multiple contexts.

// ------------------- Recommended: useContext Hook (modern way) -------------------

// // Example3.jsx
// import React, { useContext } from "react";
// import { data, data2 } from "../../App";

// const Example3 = () => {
//   // useContext is used to consume context values directly
//   const usrName = useContext(data);
//   const name = useContext(data2);

//   return (
//     <div>
//       <h1>{usrName}</h1>
//       <h1>{name}</h1>
//     </div>
//   );
// };

// export default Example3;

// ------------------- Summary -------------------
// - Use Context API to avoid passing props through many levels.
// - Create context with createContext().
// - Wrap the component tree with the Provider and pass the value.
// - Consume the context using:
//   - data.Consumer (old way)
//   - useContext(data) (recommended modern way)

// This method simplifies state sharing across components and improves code readability.
