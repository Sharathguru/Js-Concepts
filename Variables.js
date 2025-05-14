// var Keyword
// var is used to declare a variable and was the traditional way before let and const were introduced in ES6 (2015).

// Key points:
// Function-scoped: The variable is visible throughout the function in which it’s declared.
// Hoisted: The declaration is moved to the top of its scope during compilation, but not the initialization.
// Can be re-declared and updated in the same scope.


// Declaration
var message;
console.log(message); // Output: undefined

// Initialization
message = "Hello, Sarath!";
console.log(message); // Output: Hello, Sarath!

//Re-Initialization
message = "Hello";
console.log(message);//Output: Hello

// Declaration + Initialization
var name = "Sarath";
console.log(name); // Output: Sarath
 
// Declaration + Re-Initialization
var name = "Kumar";
console.log(name); // Output: Kumar

// ----------------------------------------------------------------------------------------------------------


//  let Keyword

// let is used to declare block-scoped variables that can be re-assigned but cannot be re-declared in the same scope.

// Explanation:
// ✅ let allows re-initialization (changing the value).

// ❌ let does not allow re-declaration in the same scope.

// let is block scoped, so re-declaration is allowed only inside a new block:


//Declaration 
let language ;
console.log(language); // Output: undefine

// initialization
language="message"
console.log(language); //Output : message


// Re-initialization ✅
language = "Python"; // Allowed
console.log(language); // Output: Python

// Re-declaration ❌
// let language = "Java"; // ❌ SyntaxError: Identifier 'language' has already been declared


// --------------------------------------------------------------------------------------------------------

//const keyword

// Explanation:

// const must be initialized at the time of declaration (you can't declare it without assigning a value).
// Re-initialization (changing the value) is not allowed for const.
// Re-declaration in the same scope is also not allowed.

// Declaration + Initialization (Must be done together)
const country = "India";
console.log(country); // Output: India

// Re-initialization ❌
country = "USA"; // ❌ TypeError: Assignment to constant variable.

// Re-declaration ❌
// const country = "Canada"; // ❌ SyntaxError: Identifier 'country' has already been declared



// 📌 Summary Table:
// Feature	            var	                             let     	            const
// Scope	            Function	                     Block	                Block
// Re-initialization	✅ Yes	                        ✅ Yes	            ❌ No
// Re-declaration	    ✅ Yes	                        ❌ No	            ❌ No
// Hoisting	✅ Yes (undefined)	                        🚫 No (TDZ)	        🚫 No (TDZ)









