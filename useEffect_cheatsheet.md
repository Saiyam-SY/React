
# 📘 useEffect Hook in React

The `useEffect` Hook allows you to perform **side effects** in your components. It's one of the most important hooks in React.

---

## 🔧 Syntax

```js
useEffect(() => {
  // side-effect logic here
}, [dependencies]);
```

- The first argument is a function (runs after render).
- The second argument is a dependency array.

---

## 🧠 What is a Side Effect?

Side effects include things like:
- Fetching data
- Directly updating the DOM
- Setting up subscriptions or timers

---

## ⚙️ Basic Example

```js
useEffect(() => {
  console.log("Component mounted or updated");
});
```

Runs **after every render**.

---

## 📦 Run Once on Mount

```js
useEffect(() => {
  console.log("Component mounted");
}, []);
```

- Empty dependency array = only runs once (on mount).

---

## 📌 Conditional Effects

```js
useEffect(() => {
  console.log("Runs only when 'count' changes");
}, [count]);
```

Runs only when `count` changes.

---

## 🧹 Cleanup Function

```js
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Running...");
  }, 2000);

  return () => {
    clearTimeout(timer); // cleanup before next effect or unmount
  };
}, [count]);
```

Useful for:
- Cleaning up event listeners
- Stopping timers or intervals
- Canceling network requests

---

## 🌐 Fetching Data

```js
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    setData(data);
  };

  fetchData();
}, []);
```

Always handle async inside the effect function.

---

## ✅ Best Practices

- Keep logic minimal inside `useEffect`.
- Use multiple `useEffect`s if handling unrelated effects.
- Always clean up when necessary.

---

## 🚫 Common Mistakes

- Forgetting the dependency array.
- Using stale state inside effects (consider dependencies).
- Running async code directly in the `useEffect` callback.

---

Happy Coding! 🚀
