// import React, { useState } from 'react'

// function createStudent() {

// const[error,setError]=useState("")
// const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     city:'',
//     class:'',
// });
// //code for submit user
// let name,value;
// // const handleChange = (e) => {
//     name=e.target.name
//     value=e.target.value
// //     if(name.length){
// //         setError("")
// //         setUser()
// //     }

// // };

// const handleChange = (e) => {
//     setUser({
//         ...user,
//         [e.target.name]: e.target.value,
//     });
// };

//  // Validation function
//     const validation= (values) => {
//         const error = {};
//         if (!values.name) {
//             error.name = "Name is required";
//         }
//         if (!values.email) {
//             error.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//             error.email = "Email is invalid";
//         }
//         if (!values.phone) {
//             error.phone = "Phone is required";
//         }
//         if (!values.address) {
//             error.address = "Address is required";
//         }
//         if (!values.city) {
//             error.city = "City is required";
//         }
//         if (!values.class) {
//             error.class = "Class is required";
//         }

// }
// //code for submit user
// const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(validation)

//     console.log(user);
//     let data = {
//         'name': user.name,
//         'email': user.email,
//         'phone': user.phone,
//         'address': user.address,
//         'city': user.city,
//         'class': user.class,
//     };
//     dispatchEvent(getStudent(data))

// return (
//     <>
//         <user onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={user.name}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Phone:</label>
//                 <input
//                     type="text"
//                     name="phone"
//                     value={user.phone}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Address:</label>
//                 <input
//                     type="text"
//                     name="address"
//                     value={user.address}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Mobile:</label>
//                 <input
//                     type="text"
//                     name="mobile"
//                     value={user.mobile}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit">Submit</button>
//         </user>
//     </>
// )
// }
// }
// export default createStudent

import React, { useState } from "react";

export default function CreateStudent() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    class: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.phone) errors.phone = "Phone is required";
    if (!values.address) errors.address = "Address is required";
    if (!values.city) errors.city = "City is required";
    if (!values.class) errors.class = "Class is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(user);
    setError(validationErrors);

    if ((validationErrors).length === 0) {
      // Replace with your API or dispatch logic
      console.log("Form Data:", user);
    }

  };
  dispatchEvent(getStudent(data))

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
        />
        {error.address && <p style={{ color: "red" }}>{error.address}</p>}
      </div>

      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
        />
        {error.city && <p style={{ color: "red" }}>{error.city}</p>}
      </div>

      <div>
        <label>Class:</label>
        <input
          type="text"
          name="class"
          value={user.class}
          onChange={handleChange}
        />
        {error.class && <p style={{ color: "red" }}>{error.class}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
