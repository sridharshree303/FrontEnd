// import React from "react";
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import Employee from "./models/Employee";
// import AppUser from "./models/AppUser";

// const AddEmp = (props) => {

//     const[employee,setEmployee] = useState(new AppUser());
//     const[details,setDetails] = useState('');

//     const handleEmployee = (event) => {
//       //  console.log(event.target.name);
//       //  console.log(event.target.value);
//         setEmployee({
//             ...employee,
//             [event.target.name]: event.target.value
//         });
//     }

//     const submitEmployee = (event) => {

//         axios.post('http://localhost:8082/addemp',employee)
//             .then((response) => {
//                 console.log(response.data);
//                 localStorage.setItem('employee',employee);
//                 alert('Employee Added successfulyy');
//             }).catch((error) => {
//                 console.log(error.response);
//                 setDetails('Employee already Exists');
//             });
//         event.preventDefault();
//     }

//     return (

//         <div className="container">
//             <div className="col-4 mt-3">
//                 <h3 className="display-5 text-primary">Add Employee details</h3>
//                 <form className="form form-group form-dark" onSubmit={submitEmployee}>
//                     <div>
//                         <input 
//                             type="text"
//                             className="form-control"
//                             name="eid"
//                             id="eid"
//                             className="form-control mb-3"
//                             placeholder="Enter eid"
//                             value={employee.eid}
//                             onChange={handleEmployee}
//                             required />
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="firstName"
//                             id="firstName"
//                             className="form-control mb-3"
//                             placeholder="Enter firstName"
//                             value={employee.firstName}
//                             onChange={handleEmployee} 
//                             required/>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="salary"
//                             id="salary"
//                             className="form-control mb-3"
//                             placeholder="Enter salary"
//                             value={employee.salary}
//                             onChange={handleEmployee}
//                             required />
//                         <input 
//                             type="number"
//                             className="form-control"
//                             name="did"
//                             id="did"
//                             className="form-control mb-3"
//                             placeholder="Enter departmentId"
//                             value={employee.did}
//                             onChange={handleEmployee}
//                             required />
//                     </div>
//                     <input
//                         type="submit"
//                         id="submit"
//                         name="submit"
//                         className="form-control btn btn-primary mb-3"
//                         value="Register"
//                         onClick={submitEmployee}
//                     />
//                 </form>
//                 <p className="text-danger">{details}</p>
//             </div>
//         </div>

//     )
// }

// export default AddEmp;