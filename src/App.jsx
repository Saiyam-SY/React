import React, { createContext } from "react";
import Profile from "./components/Profile";
import Useeff from "./components/Useeff";
import Example1 from "./components/context/Example1";

export const data = createContext(null);
export const data2 = createContext(null);

const App = () => {
  const usrName = "Saiyam";
  const name = "Arjun";

  return (
    <div>
      {/* <Profile /> */}
      {/* <Useeff /> */}
      {/* <Example1 name={usrName} /> */}
      <data.Provider value={usrName}>
        <data2.Provider value={name}>
          <Example1 />
        </data2.Provider>
      </data.Provider>
    </div>
  );
};

export default App;
