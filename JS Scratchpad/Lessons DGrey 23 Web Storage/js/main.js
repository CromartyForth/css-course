// Web Storage API

// Not part of the DOM - refers to the window API
// Available to JS via the flobal variable: window
// We do not have to type window it is implied:

/* window.alert("Ok");
alert("Really OK")

window.alert(window.location);
alert(location); */

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
}


//sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const key = localStorage.key(0);
//localStorage.removeItem("myLocalStore");
//localStorage.clear;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
console.log(key);

const storageLength = localStorage.key.length;
console.log(storageLength);