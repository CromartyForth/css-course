// JS Errors and Error Handling
"use strict";
const makeError = (reps) => {
    let i = 1;
    while (i <= reps){
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd number!")
            }
            console.log("Even number");
        } catch(error) {
            console.error(error.stack);
        } finally {
            console.log("...finally");
            i++;
        }
    }
};
makeError(5);


// JSON

/* const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello");
    }
}

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJson = JSON.parse(sendJSON);
console.log(receiveJson);
console.log(receiveJson.name) */





// Factory Functions
/* function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;

    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */

/* Classes */

/* class Pizza {
    #crust = "original";
    #sauce = "traditional tomato";
    #size;
    constructor(pizzaSize) {
       // _underscore indicates private variables
        this.#size = pizzaSize;
    }
  
    getCrust() {
        return this.#crust;
    }

    setCrust(pizzaCrust) {
        this.#crust = pizzaCrust;
    }

    hereYouGo() {
        console.log(`Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
myPizza.setCrust("stuffed")
console.log(myPizza.getCrust()); */



/* class SpecialityPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = `"The Works"`;
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialty = new SpecialityPizza("medium");
mySpecialty.slice(); */



/* // Objects Destructuring
 
const band = {
    bandName: "Led Zeppelin",
    members: {
        vocals: "Robert Plant",
        guitar: "Jimmy Page",
        bass: "John Paul Jones",
        drums: "John Bonham"
    },
    topSong: "Stairway to Heaven",
    play: function(reps = 1){
        return `And now ${this.topSong}!\n` + `"Laa laa la laa laa!"\n`.repeat(reps);
    }
}

console.log(Object.keys(band.members));
console.log(Object.values(band.members));

for (let job in band.members) {
    console.log(`On ${job}, it's ${band.members[job]}!`);
}

console.log(band.hasOwnProperty("keyboard"));
console.log(band.play());

// Destructuring Objects with my own name
const { play: singToMe } = band;
console.log(singToMe(2));

// Destructuring Objects with object keys
const { play } = band;
console.log(play(3));

// Destructuring Objects passed into functions
function sings({ members }) { return `${members.vocals} sings`};
console.log(sings(band)); */





/* Functions */
/* function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@randomemail.co.uk"));
 */

/* Annon */
/* const getUserNameFromEmailTwo = function (email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmailTwo("EveryDayNormalGuy@mother.fc.uk.er"));
 */

/* Arrow */
/* const getUserNameFromEmailThree = (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmailTwo("Tigger@10acreswood.com"));
 */

/* My Proper Case Function*/
/* const toProperCase = (word) => {
    return(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
}
console.log(toProperCase("sEPTEmber")); */