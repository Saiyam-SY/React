
# 📘 React `useState` Form Handling & Best Practices

---

## 📌 Basic Controlled Inputs (Single Field)
```jsx
const [name, setName] = useState("");
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```
- **Controlled component**: The input is linked to React state.
- **onChange** updates the state whenever the user types.

---

## ✳️ Grouping Multiple Inputs in One Object
```jsx
const [profile, setProfile] = useState({ name: "", email: "", bio: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setProfile((prev) => ({ ...prev, [name]: value }));
};
```
- Input should have `name="name"`, `name="email"`, etc.
- Uses object spread to update only the changed field.

---

## ✅ Conditional Rendering on Save Click
```jsx
const [name, setName] = useState("");
const [submittedName, setSubmittedName] = useState("");

<button onClick={() => setSubmittedName(name)}>Save</button>
```
- Use a separate state to show changes **only after submission**.

---

## 🧠 Updating Array of Objects by Index
```jsx
const [profiles, setProfiles] = useState([
  { name: "Arjun", email: "arjun@email.com", bio: "" },
  { name: "Saiyam", email: "saiyam@email.com", bio: "" }
]);

const [selectedIndex, setSelectedIndex] = useState(0);

const handleChange = (e) => {
  const { name, value } = e.target;
  setProfiles((prev) =>
    prev.map((item, index) =>
      index === selectedIndex ? { ...item, [name]: value } : item
    )
  );
};
```

- Use `map` to return a new array with the updated object.
- Avoid mutating the original array.

---

## 🛒 Example: Grocery List App
```jsx
const [item, setItem] = useState("");
const [quantity, setQuantity] = useState("");
const [list, setList] = useState([]);

const handleAdd = () => {
  const newItem = { item, quantity };
  setList((prev) => [...prev, newItem]);
  setItem("");  // Clear input
  setQuantity("");
};
```

```jsx
<input value={item} onChange={(e) => setItem(e.target.value)} />
<input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
```

- `list` stores an array of item objects.
- `setList([...prev, newItem])` appends the new entry immutably.

---

## ✅ Summary of Key Concepts

| Concept                    | Description                                      |
|---------------------------|--------------------------------------------------|
| `useState()`              | Declares state in a function component           |
| Controlled Inputs         | Value is set from state; updates via onChange   |
| State as Object           | Group form fields in one object for clean code  |
| State as Array of Objects | Used for managing lists or multiple profiles     |
| Immutable Update          | Always spread (`...`) previous state before updating |
| Conditional Save          | Use an extra state to hold submitted data       |
| Form Reset After Submit   | Clear inputs after data is added                |
