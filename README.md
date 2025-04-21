
# React `useState` Hook - Complete Beginner Guide

## ✅ What is `useState`?
`useState` is a React Hook that allows you to manage **state in functional components**.

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: current value
- `setState`: function to update it
- `initialValue`: default value (string, number, boolean, object, array, etc.)

---

## 🧠 Basics You Practiced

### 1. Managing Single Input Value
```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### 2. Update State Only on Button Click
```jsx
const [input, setInput] = useState("");
const [saved, setSaved] = useState("");

<button onClick={() => setSaved(input)}>Save</button>
<p>{saved}</p>
```

### 3. Managing Multiple Inputs with Multiple useState
```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [bio, setBio] = useState("");
```

### 4. Better Way: Group Inputs in One Object
```jsx
const [profile, setProfile] = useState({ name: "", email: "", bio: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setProfile((prev) => ({ ...prev, [name]: value }));
};
```

---

## 📋 Preserving Previous State

### 1. For Objects
```jsx
setProfile((prev) => ({ ...prev, name: "Yadav" }));
```

### 2. For Arrays
```jsx
setTasks((prev) => [...prev, "New Task"]);
```

---

## 🧩 Arrays of Objects

```jsx
const [users, setUsers] = useState([
  { name: "Arjun", email: "arjun@email.com" },
  { name: "Saiyam", email: "saiyam@email.com" }
]);

const [selectedIndex, setSelectedIndex] = useState(0);

const handleChange = (e) => {
  const { name, value } = e.target;
  setUsers((prev) =>
    prev.map((user, i) =>
      i === selectedIndex ? { ...user, [name]: value } : user
    )
  );
};
```

---

## 💡 Tips & Best Practices

- Always treat state as **immutable** (never modify it directly)
- Use updater function `(prev) => {}` when new state depends on previous state
- For forms, group related values into an object for cleaner code
- Use dynamic property names with `[name]` to handle multiple inputs
- When updating arrays, use `.map()` for editing and `filter()` for deleting

---

## 🧠 Key Concepts You Learned

- What `useState` is and how it works
- Controlled inputs (using state with inputs)
- Updating state only on events (like a button click)
- Object destructuring: `{ name, value } = e.target`
- Dynamic property keys in objects: `[name]: value`
- Updating a single object in an array using `.map()`

---

## ✅ You’re Now Confident With

- `useState` with strings, objects, and arrays
- Controlled components
- Dynamic form handling
- Working with nested or complex state

---

## 🔁 Practice Suggestions

- Todo list app
- Multi-step form
- Shopping cart
- Notes manager

You're doing great! 🚀
