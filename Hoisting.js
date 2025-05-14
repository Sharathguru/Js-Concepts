// Hoisting means JavaScript moves declarations to the top of their scope before executing the code.But the way it does this is different for var, let, and const.

// var — Hoisted & Initialized as undefined
console.log(a); // Output: undefined
var a = 10;


// let — Hoisted but in Temporal Dead Zone (TDZ)

console.log(b); // ❌ ReferenceError
let b = 20;
// 🔍 Behind the scenes:
// b is hoisted, but not initialized.
// It’s in the TDZ from the start of the block to the line let b = 20.
// ❌ Accessing b before declaration throws an error.


// const — Same as let (Hoisted + TDZ)

console.log(c); // ❌ ReferenceError
const c = 30;


// Function Declarations — Fully Hoisted  // ✅ Entire function is hoisted (declaration + body).

sayHello(); // Output: Hello!
function sayHello() {
  console.log("Hello!");
}


// Function Expressions with var — Partially Hoisted

sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
// 🔍 Only the var sayHi part is hoisted (set to undefined), but not the function itself.


//---------------------------------------------------------------------------------------------------------

// Summary of Hoisting Behavior
/* +------------+----------+--------------------+------------------------------+
| Keyword    | Hoisted? | Initialized?       | Usable Before Declaration?   |
+------------+----------+--------------------+------------------------------+
| var        | ✅ Yes   | ✅ As undefined     | ✅ But value is undefined     |
| let        | ✅ Yes   | ❌ No (TDZ)         | ❌ ReferenceError             |
| const      | ✅ Yes   | ❌ No (TDZ)         | ❌ ReferenceError             |
| function   | ✅ Yes   | ✅ Fully hoisted    | ✅ Yes                        |
+------------+----------+--------------------+------------------------------+   */

// 📝 Notes:
// TDZ = Temporal Dead Zone — period between hoisting and actual declaration where the variable cannot be used.
// function declarations are fully hoisted — they can be called before their definition.



