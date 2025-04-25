
# React Context API

## 🔍 What is Context API?
The Context API is a React structure that enables you to share specific data across all levels of the application without passing props down manually at every level (also known as prop drilling).

---

## 🧵 Prop Drilling vs Context API

### Prop Drilling
Passing data from a parent to child component through props manually, often across multiple intermediate components.

```jsx
const App = () => {
  const userName = "Saiyam";
  return <Component1 name={userName} />;
};

const Component1 = ({ name }) => <Component2 name={name} />;

const Component2 = ({ name }) => <Component3 name={name} />;

const Component3 = ({ name }) => <h1>{name}</h1>;
```

### Problem:
As your app grows, prop drilling becomes messy and hard to maintain.

---

## ✅ Using Context API

### Step 1: Create Context
```jsx
import { createContext } from "react";

export const data = createContext(null);      // Context for first value
export const data2 = createContext(null);     // Context for second value
```
Using `null` as a default value helps in identifying when context is accessed outside of a proper Provider.

---

### Step 2: Provide Context in App
```jsx
import React from "react";
import Example3 from "./components/context/Example3";
import { data, data2 } from "./App"; // Assuming same file for simplicity

const App = () => {
  const usrName = "Saiyam";
  const name = "Arjun";

  return (
    <data.Provider value={usrName}>
      <data2.Provider value={name}>
        <Example3 />
      </data2.Provider>
    </data.Provider>
  );
};

export default App;
```

---

## 📥 Accessing Context

### 1. Using `Context.Consumer` (Less preferred)

```jsx
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
```

### 🚫 Problem:
When you nest multiple Consumers, code becomes less readable.

---

### 2. ✅ Using `useContext` Hook (Recommended)
```jsx
import React, { useContext } from "react";
import { data, data2 } from "../../App";

const Example3 = () => {
  const usrName = useContext(data); // Accessing first context value
  const name = useContext(data2);   // Accessing second context value

  return (
    <div>
      <h1>{usrName}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Example3;
```

### ✅ Benefit:
- Cleaner and more readable
- Easy to scale and maintain

---

## 📝 Summary
- Context API is useful for avoiding prop drilling.
- You **create context** using `createContext()`.
- You **provide values** using the `Provider` component.
- You **consume values** using either `useContext()` or `.Consumer`.
- Recommended: **useContext** for cleaner syntax.

---

Happy Coding! 🚀
