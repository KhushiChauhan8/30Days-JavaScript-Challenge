// Feature Request

// 2. Reassignment Demo: Demonstrate the difference in behavior between let and const when it comes to reassignment

let reDemoLet = "Let Var";
const reDemoConst = "Const Var";

console.log("Initial reDemoLet =", reDemoLet); // Output: Let Var
reDemoLet = "Let Var Reassigned";
console.log("Reassigned reDemoLet =", reDemoLet); // Output: Let Var Reassigned

console.log("Initial reDemoConst =", reDemoConst); // Output: Const Var
try {
  reDemoConst = "Const Var Reassigned";
} catch (error) {
  console.error("Error when reassigning const:", error.message); // Output: Assignment to constant variable.
}