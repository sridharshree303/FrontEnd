// props - arguments to a component 
// pass data - 
// 1. from parent component to child component - props 
// 2. from child compoment to parent component - ??

import { useEffect, useState } from "react";

// import { useState } from "react";

const EmpData = (props) => {
    console.log('Child component');

    // state - one object for a component to store all the data in that component
    // in function component, state can be created with useState(); hook (hook means method)    
    // syntax const [variableName, setVariableName] = useState(initial value);
    // const [eid, setEid] = useState(0);
    // const [ename, setEname] = useState('');
    // const [isAvailable, setIsAvailable] = useState(false);
    // const [emp, setEmp] = useState({});
    // const [cities, setCities] = useState([]);

    // const childData = 2211;
    const [childData, setChildData] = useState(1);
    // const [childData2, setChildData2] = useState(1); // multipple variables are also possible 

    // optionally, state can be initialized with useEffect(); 
    // useEffect(arg, arg2);

    useEffect(() => {
        console.log('Child useEffect');
        setChildData(41548);
    }, []);

    const childFun = () => {
        console.log('childFun');
        return childData;
    }

    return ( <
        div >
        <
        p className = "display-4 text-primary" > Emp Data Component < /p> <
        p > Child data in child component: { childData } < /p>

        <
        p > { props.someData.def } < /p> <
        p > { props.numToPassToChild } < /p> { /* try this  */ } { /* <p>{props.anotherData}</p> */ } <
        p > { props.someOtherData } < /p> { /* Invoke function from parent  */ } { /* <p>{props.callParentFun}</p> */ } <
        button className = "btn btn-primary"
        onClick = {
            () => { props.callParentFun(childFun) } } >
        Pass data From child To parent < /button> <
        /div>
    );
}

export default EmpData;



// pass data - 
// 1. from parent component to child component - props 
// 2. from child compoment to parent component - ??
// import { useEffect, useState } from "react";
// // import { useState } from "react";

// const EmpData = (props) => {
//     console.log('Child component')
//     // state - one object for a component to store all the data in that component
//     // in function component, state can be created with useState(); hook (hook means method)    
//     // syntax const [variableName, setVariableName] = useState(initial value);
//     // const [eid, setEid] = useState(0);
//     // const [ename, setEname] = useState('');
//     // const [isAvailable, setIsAvailable] = useState(false);
//     // const [emp, setEmp] = useState({});
//     // const [cities, setCities] = useState([]);

//     //const childData = 2211;
//     const[childData,setChildData] = useState(1);

//     // optionally, state can be initialized with useEffect(); 
//     useEffect(() => {
//         console.log('Child useEffect');
//         setChildData(41548);

//         console.log('seller useEffect');
//         setSellerPrice(1430);
//     }
//         , []);


//     const childFun = () => {
//         console.log('childFun');
//         return childData;
//     }
//     const[sellerPrice,setSellerPrice] = useState(250);



//     const seller = () => {
//         console.log('seller');
//         return sellerPrice;
//     }



//     return (
//         <div>
//             <p className="display-4 text-primary">Emp Data Component</p>
//             <p> Child data in child component :  {childData}</p>
//             <p> Buyer data of buyer price : {sellerPrice} </p>
//             <p>{props.someData.def}</p>
//             <p>{props.numToPassToChild}</p>
//             {/* try this  */}
//             {/* <p>{props.anotherData}</p> */}
//             <p>{props.someOtherData}</p>
//             {/* Invoke function from parent  */}
//             {/* <p>{props.callParentFun}</p> */}
//             <button className="btn btn-primary" onClick={() => { props.callParentFun(childFun) }} >
//                 Pass data From child To parent</button>
//             <button className="btn btn-primary" onClick={() => {props.callBuyer(seller)}} >
//                 Transfer Buyer data to seller
//             </button>
//         </div>
//     );
// }

// export default EmpData;


// const EmpData = (props) => {

//     const childData = 2211;

//     const childFun = () => {
//         console.log('childFun');
//         return childData;
//     }

//     return (
//         <div>
//             <h6>Emp Data Component</h6>
//             <p>{props.someData.def}</p>
//             <p>{props.numToPassToChild}</p>
//             {/* try this  */}
//             {/* <p>{props.anotherData}</p> */}
//             {/* <p>{props.someOtherData}</p> */}
//             {/* Invoke function from parent  */}
//             {/* <p>{props.callParentFun}</p> */}
//             <button onClick={() => { props.callParentFun(childFun) }} >Pass Data From Parent To Child</button>

//         </div>
//     );
// }

// export default EmpData;

// const EmpData = (props) => {
//     return (
//         <div>
//             <h4>Emp Data Component</h4>
//             <p>{props.someData.def}</p>
//             <p>{props.numToPassToChild}</p>
//             {/* try this  */}
//             <p>{props.anotherData}</p>
//             <p>{props.someOtherData}</p>
//         </div>
//     );
// }

// export default EmpData;

// const EmpData = (props) => {
//     return (
//         <div>
//             <h1>Emp Data Component</h1>
//             <p>This is emp data component.</p>
//             <p>My name is {props.name} and my salary is {props.salary}.</p>
//             {/* <p>{props.someData.def}</p> */}
//             {/* <p>{props.numToPassToChild}</p> */}
//             {/* try this  */}
//             {/* <p>{props.anotherData}</p> */}
//             {/* <p>{props.anotherData}</p> */}
//         </div>
//     );
// }

// export default EmpData;