/* Objects Destructuring */
 
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

/* Destructuring Objects with my own name*/
const { play: singToMe } = band;
console.log(singToMe(2));

/* Destructuring Objects with object keys*/
const { play } = band;
console.log(play(3));

/* Destructuring Objects passed into functions */
function sings({ members }) { return `${members.vocals} sings`};
console.log(sings(band));





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