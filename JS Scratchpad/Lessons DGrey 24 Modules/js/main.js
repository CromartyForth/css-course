// Modules
import User from "./user.js";
import * as Guitars from "./guitars.js";

const me = new User("ann@on.co.uk", "Brian")
console.log(me);
console.log(me.greeting());
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());



/* import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerPicking} from "./guitars.js";
 
console.log(playGuitar());
console.log(shred());
console.log(fingerPicking()); */
