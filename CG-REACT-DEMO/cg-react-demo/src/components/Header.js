// types of components in react 
// 1. function components 
// 2. class components 



import { Link } from "react-router-dom";

const Header = () => {

    return ( <
        header class = "header sticky-top" >
        <
        nav class = "navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark" >
        <
        div class = "container" >
        <
        Link className = "navbar-brand"
        to = "/" >
        <
        img src = "https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
        height = "24px"
        alt = "Capgemini" / >
        <
        /Link> <
        button class = "navbar-toggler"
        type = "button"
        data - toggle = "collapse"
        data - target = "#navbarResponsive" >
        <
        span class = "navbar-toggler-icon" > < /span> <
        /button> <
        div class = "collapse navbar-collapse"
        id = "navbarResponsive" >
        <
        ul class = "navbar-nav ml-auto" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/hello" > Hello < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/emp" > Emp < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/spring" > Spring < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/register" > Register < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/login" > Login < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/#" > Logout < /Link> <
        /li> <
        /ul> <
        /div> <
        /div> <
        /nav> <
        /header>
    );
}

export default Header;




// types of components in react 
// 1. function components 
// 2. class components 


// function component 
// const Header = () => {

//     return (
//         <div className="display-4">
//             <p>Header Component</p>
//         </div>
//     );
// }
// export default Header;

// class component  
// import React from "react";
// class Header extends React.Component {

//     // constructor() { super(); }

//     render = () => {
//         return (
//             <div className="display-4" >
//                 <p>Header Component</p>
//             </div>
//         )
//     }
// }
// export default Header;
// const Header = () => {

//     return (
//         <header className="header sticky-top">
//             <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container">
//                     <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                         height="24px" alt="Capgemini" />
//                     <button className="navbar-toggler" type="button">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarResponsive">
//                         <ul className="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <span className="nav-link" to="/#" >Home</span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" to="/#" >Register</span>
//                             </li>
//                             <li className="nav-item">
//                                 <span className="nav-link" to="/#" >Login</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Header;





// function component 
// const Header = () => {

//     return (
//         <div className="display-4">
//             <p>Header Component</p>
//         </div>
//     );
// }
// export default Header;

// class component  
// import React from "react";
// class Header extends React.Component {

//     // constructor() { super(); }

//     render = () => {
//         return ( <
//             div className = "display-4" >
//             <
//             p > Header Component < /p> <
//             /div>
//         )
//     }
// }
// export default Header;