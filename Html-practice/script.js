// // login.html 

// const loginFunction = () => {

//     window.localStorage.setItem("user", document.getElementById("userName").value);

//     if (document.getElementById("userName").value === "Sonu" &&
//         document.getElementById("password").value === "Sonu") {
//         window.location = "./welcome.html";
//     } else {
//         window.location = "./login.html";
//         console.log("invalid credentials");
//     }
// }


// // welcome.html 
// document.getElementById("welcomeUserName").innerHTML =
//     window.localStorage.getItem("user");


// 51-login.html 
loginFunction = () => {
    if (document.getElementById("userName").value === "Sonu" &&
        document.getElementById("password").value === "Sonu") {
        window.localStorage.setItem("user", document.getElementById("userName").value);
        window.location = "./52-welcome.html";
    } else {
        document.getElementById("credentials").innerHTML = "Invalid credentials!";
        window.localStorage.removeItem("user");
    }
}

// 52-welcome.html 
document.getElementById("credentials").innerHTML = window.localStorage.getItem("user");
window.localStorage.removeItem("user");