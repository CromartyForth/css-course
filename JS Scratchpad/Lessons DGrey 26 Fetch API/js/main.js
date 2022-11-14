// Fetch API requires knowing:
// Callbacks, Promises, Thenables, and Async/Await


// Promises
// 3 states: Pending, Fulfilled, Rejected

// Async / Await

// 2nd Parameter of Fetch is an object

const getDataFromForm = () => {
    const choiceObj = {
        catagory: "career"
    };
    return choiceObj;
}

const constructUrl = (userChoice) => {
    return `https://api.chucknorris.io/jokes/random?category=${userChoice.catagory}`;
}

const requestJoke = async (url) => {
    for (let i = 0; i < 10; i++){
        const response = await fetch(url);
        const jsonResponse = await response.json();
        postJokeToWebpage(jsonResponse.value);
    }
}

const postJokeToWebpage = (joke) => {
    console.log(joke)
}

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = constructUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!");
}

processJokeRequest();


/* // Post
const jokeObject = {
    id: '1DQZvcFBdib', 
    joke: "To be Frank, I'd have to change my name."
};

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse);
};

postData(jokeObject); */


/* const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
            // Accept: "text/plain"
        }
    });
    const jsonJokeData = await response.json();
    // const textJokeData = await response.text();

    console.log(jsonJokeData);
    // console.log(textJokeData);
}

getDadJoke(); */



/* // workflow functions
const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    //console.log(userEmailArray);
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails(); */



/* const myUsers = {
    userList: []
}

// async function myCoolFunction( {} )
const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList); */




/* const users = fetch("https://jsonplaceholder.typicode.com/users");
// pending shows because we try to log the data right away.
console.log(users); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
}).then(data => {
    data.forEach(user => {
        console.log(user);
    });
}) */

/* // this code doesn't wait
console.log(users); */






// simulate a delay of 3 seconds.
/* const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved");
    }, 3000);
})


myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
}); */




// Thenables .then().Then()
/* console.log(myPromise);

myPromise.then(value => {
    return value + " +one";
})
.then(newValue => {
    console.log(newValue);
})
.then()
.catch(err => {
    console.error(err);
}) */




/* // Callbacks which we wont be using!!
function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

// AKA "callback hell"
firstFunction(par, function() {
    // do stuff
    secondFunction(para, function() {
        // do stuff
        thirdFunction(para, function() {
            // do stuff
        })
    })
}) */

