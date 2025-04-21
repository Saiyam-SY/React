// import React, { useState } from "react";

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [bio, setBio] = useState("");

//   const handleNameChange = (e) => setName(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleBioChange = (e) => setBio(e.target.value);

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <input type="text" value={email} onChange={handleEmailChange} />
//       <input type="text" value={bio} onChange={handleBioChange} />

//       <h1>Profile</h1>
//       <p>Name:{name} </p>
//       <p>Email:{email} </p>
//       <p>Bio:{bio} </p>
//     </div>
//   );
// };

// // AI help taken...👇

// // If I wnt to stop the live updation and add a button I have to create 3 other different states to the defined states
// // const [name, setName] = useState("");         // Live typing
// // const [submittedName, setSubmittedName] = useState(""); // Displayed only after button click

// // const handleClick = () => {
// //   setSubmittedName(name);
// // };

// // <button onClick={handleClick}>Save</button>
// // <p>Name: {submittedName}</p>

// export default Profile;

// //-----------------------------------------------------------------------------
// import React, { useState } from "react";

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     bio: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setProfile((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={profile.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="email"
//         value={profile.email}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="bio"
//         value={profile.bio}
//         onChange={handleChange}
//       />

//       <h1>Profile</h1>
//       <p>Name:{profile.name} </p>
//       <p>Name:{profile.email} </p>
//       <p>Name:{profile.bio} </p>
//     </div>
//   );
// };

// // If i want to change all three at one button click i have to create a useState object
// // const [savedProfile, setSavedProfile] = useState({
// //   name: "",
// //   email: "",
// //   bio: ""
// // });

//   // // Save profile on button click
//   // const handleClick = () => {
//   //   setSavedProfile(formData);
//   // };

// {/* <button onClick={handleClick}>Save</button>

// <h1>Profile</h1>
// <p>Name: {savedProfile.name}</p>
// <p>Email: {savedProfile.email}</p>
// <p>Bio: {savedProfile.bio}</p> */}

// export default Profile;

// //---------------------------------------------------------------------------
// import React, { useState } from "react";

// const Profile = () => {
//   const [profile, setProfile] = useState([
//     {
//       name: "arjun",
//       email: "arjun@email.com",
//       bio: "",
//     },
//     {
//       name: "Saiyam",
//       email: "saiyam@email.com",
//       bio: "",
//     },
//   ]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setProfile((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={profile.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="email"
//         value={profile.email}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="bio"
//         value={profile.bio}
//         onChange={handleChange}
//       />

//       <h1>Profile</h1>
//       <p>Name:{profile.name} </p>
//       <p>Name:{profile.email} </p>
//       <p>Name:{profile.bio} </p>
//     </div>
//   );
// };

// export default Profile;

// //-------------------------------------------------------------------------------------
// import React, { useState } from "react";

// const Profile = () => {
//   const [profile, setProfile] = useState([
//     {
//       name: "arjun",
//       email: "arjun@email.com",
//       bio: "",
//     },
//     {
//       name: "Saiyam",
//       email: "saiyam@email.com",
//       bio: "",
//     },
//   ]);

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setProfile((prev) =>
//       prev.map((item, index) =>
//         index === selectedIndex
//           ? {
//               ...item,
//               [name]: value,
//             }
//           : item
//       )
//     );
//   };

//   return (
//     <div>
//       {/* Add buttons to select which profile to edit */}
//       <button onClick={() => setSelectedIndex(0)}>Edit Arjun</button>
//       <button onClick={() => setSelectedIndex(1)}>Edit Saiyam</button>

//       <input
//         type="text"
//         name="name"
//         value={profile[selectedIndex].name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="email"
//         value={profile[selectedIndex].email}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="bio"
//         value={profile[selectedIndex].bio}
//         onChange={handleChange}
//       />

//       <h1>All Profiles</h1>
//       {profile.map((p, i) => (
//         <div key={i}>
//           <p>Name: {p.name}</p>
//           <p>Email: {p.email}</p>
//           <p>Bio: {p.bio}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Profile;

// ----------------------------------------------------------------------

import React, { useState } from "react";

const Profile = () => {
  const [items, setItems] = useState("");
  const [quant, setQuant] = useState("");
  const [lists, setLists] = useState([]);

  const handleItemChagne = (e) => setItems(e.target.value);
  const handleQuantChange = (e) => setQuant(e.target.value);

  const handleClick = () => {
    const newItems = {
      items,
      Quantity: quant,
    };

    setLists((prev) => [...prev, newItems]);
  };

  return (
    <div>
      <input type="text" value={items} onChange={handleItemChagne} />
      <input type="text" value={quant} onChange={handleQuantChange} />
      <button onClick={handleClick}> Add </button>
      {lists.map((list, index) => (
        <li key={index}>
          {list.items}-{list.Quantity}
        </li>
      ))}
    </div>
  );
};

export default Profile;
