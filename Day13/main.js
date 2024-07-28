import { add } from './addModule.js';
import { person } from './personModule.js';
import { multiply, subtract } from './mathModule.js';
import divide from './divideModule.js';
import * as constantsModule from './constantsModule.js';
import './lodashScript.js';
import './axiosScript.js';

console.log("Add Function Result:", add(2, 3)); // Output: 5
console.log("Person Object:", person.name); // Output: John Doe
console.log("Person Greeting:", person.greet()); // Output: Hello, my name is John Doe
console.log("Multiply Function Result:", multiply(2, 3)); // Output: 6
console.log("Subtract Function Result:", subtract(5, 2)); // Output: 3
console.log("Divide Function Result:", divide(6, 3)); // Output: 2
console.log("PI Constant:", constantsModule.PI); // Output: 3.14
console.log("Square Function Result:", constantsModule.square(3)); // Output: 9
console.log("Cube Function Result:", constantsModule.cube(3)); // Output: 27
