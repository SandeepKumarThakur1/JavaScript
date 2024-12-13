# JavaScript
- JavaScript ek programming language hai jo websites ko interactive aur dynamic banata hai, jaise buttons click karna, animations, aur real-time updates. Ye browsers aur server dono par kaam karta hai.

### Variables in JavaScript
- Variable ek container ya storage hota hai jo kisi value ko temporarily store karta hai, taaki usko program me use kiya ja sake.
- JavaScript me variables data ko manipulate aur reuse karne ke liye kaam aate hain.
- Variable declare karne ke liye `var`, `let`, ya `const` ka use hota hai:

``` Javascript
    let name = "Rahul"; // String value store
    const age = 25;     // Number value store
    var isActive = true; // Boolean value store
```

### Types of Variables:
- let: Block-scope variable, jo sirf us block me accessible hota hai.
- const: Block-scope variable, jisme value change nahi ki ja sakti.
- var: Function-scope variable, jo purane JavaScript versions me use hota tha.

### Difference Between var, let, and const in JavaScript:
| Feature           | var                           | let                                  | const                                |
|-------------------|-------------------------------|--------------------------------------|--------------------------------------|
| Scope            | Function-scoped              | Block-scoped                        | Block-scoped                        |
| Re-declaration   | Allowed                      | Not allowed                         | Not allowed                         |
| Re-assignment    | Allowed                      | Allowed                             | Not allowed                         |
| Hoisting         | Hoisted, but uninitialized (undefined by default) | Hoisted, but in Temporal Dead Zone | Hoisted, but in Temporal Dead Zone |
| Usage Preference | Older style, avoid in modern code | Use for variables that change       | Use for constants that don't change |

**Summary**:  
- Use `let` for variables that need to be reassigned.  
- Use `const` for constants or values that won't change.  
- Avoid using `var`, as it's outdated and less predictable due to its function-scoping.

### What is "use strict" in JavaScript?
- `use strict` ek special directive (string) hai jo JavaScript ko strict mode me execute karne ke liye enable karta hai. Strict mode JavaScript code me errors ko reduce karne aur bugs ko catch karne me madad karta hai.
- Strict mode ka use code ko zyada secure aur reliable banata hai.

### How to Enable Strict Mode?
``` Javascript
    "use strict";
    let x = 10; // Strict mode enabled for the whole script
```
### Why Use "use strict"?
- Bugs ko detect karna asaan hota hai.
- Secure coding practices promote karta hai.
- Modern JavaScript engines ke sath better optimization karta hai.

### JavaScript Data Types
- JavaScript me data types kaafi important hote hain, kyunki ye define karte hain ki kisi variable me kis tarah ka data store hoga. JavaScript dynamically typed language hai, iska matlab hai ki variable ka type usme assigned value ke basis par decide hota hai.

### Data Type on the basic of Memory
- JavaScript me data types ko memory allocation ke basis par do major categories me divide kiya ja sakta hai:

## 1. Primitive Data Types (Value Types)
- Primitive data types wo hote hain jinme value directly store hoti hai. Jab aap in variables ko assign karte ho, to ye apni own copy ko store karte hain. Inka memory allocation directly value ke liye hota hai.

**Key Features of Primitive Data Types:**
- They are `immutable` (unko change nahi kiya ja sakta).
- When assigned to another variable, they create a copy (pass-by-value).
- Memory mein unki size fixed hoti hai.

### Types of Primitive Data Types:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES6)
7. BigInt (for large integers)

### 2. Non-Primitive Data Types (Reference Types)
- Non-primitive data types wo hote hain jinme reference store hota hai, na ki actual value. Jab inko kisi doosre variable ko assign kiya jata hai, to wo reference copy hota hai, na ki value ka copy. Matlab, agar ek variable ko change kiya jata hai to doosra variable bhi effect ho sakta hai.

**Key Features of Non-Primitive Data Types:**
- They are `mutable` (unko modify kiya ja sakta hai).
- When assigned to another variable, they create a reference (pass-by-reference).
- Memory mein inka size dynamic hota hai, kyunki wo complex structures ko hold karte hain.

### Types of Non-Primitive Data Types:
1. Object
2. Array
3. Function
4. Date
5. RegExp (Regular Expressions)

### Conversion Operations
- JavaScript mein conversion operations ka use type ko ek format se dusre format mein convert karne ke liye hota hai. Ye operations implicit (automatic) aur explicit (manual) conversion dono ke liye kiye ja sakte hain.

### Implicit Type Conversion (Type Coercion)
- Implicit conversion tab hoti hai jab JavaScript automatically ek type ko doosre type mein convert kar leta hai, bina programmer ke intervention ke. Ye usually arithmetic aur logical operations ke time hota hai.

#### Examples
- String + Number (Concatenation) Jab ek number aur string ko add kiya jata hai, toh JavaScript number ko string mein convert kar leta hai.

``` Javascript
    let result = "5" + 10; // " " (string + number)
```

- Number + Boolean (Type Coercion) Boolean ko number mein convert kiya jata hai. true ko 1 aur false ko 0 banaya jata hai.

``` Javascript
    let sum = 10 + true; // 11 (true is converted to 1)
    let sum2 = 10 + false; // 10 (false is converted to 0)
```

- String + Boolean (Concatenation) Boolean values ko string mein convert karke concatenate kiya jata hai.

``` Javascript
    let concat = "Value: " + true; // "Value: true"
```

### Explicit Type Conversion (Type Casting)
- Explicit conversion tab hoti hai jab programmer manually data type ko convert karta hai.

#### Examples

- Number() Function Number() function ka use karke kisi bhi value ko number mein convert kiya ja sakta hai.

``` Javascript
    let str = "100";
    let num = Number(str); // 100 (String to Number)
```
- parseInt() (For integers) Agar aapko string ko integer mein convert karna ho:

``` Javascript
    let str = "123px";
    let num = parseInt(str); // 123 (String to Integer)
```

- String() Function String() function ka use karke kisi bhi value ko string mein convert kiya ja sakta hai.

``` Javascript
    let num = 25;
    let str = String(num); // "25" (Number to String)
```

- toString() Method JavaScript objects aur values pe toString() method bhi use hota hai.

``` Javascript
    let num = 100;
    let str = num.toString(); // "100" (Number to String)
```

- Boolean() Function Boolean() function ka use karke kisi bhi value ko boolean mein convert kiya ja sakta hai.

``` Javascript
    let num = 0;
    let boolVal = Boolean(num); // false (0 is falsy value)
```

- Falsy Values: JavaScript mein kuch values jo automatically false ban jaati hain:
- 0, "" (empty string), null, undefined, NaN, false

``` Javascript
    Boolean(0); // false
    Boolean(""); // false
    Boolean(undefined); // false
```

- Truthy Values: Baaki sab values true ban jaati hain:

``` Javascript
    Boolean(42); // true
    Boolean("Hello"); // true
```

## Prefix and postfix

- Prefix operator mein, increment ya decrement operation pehle hota hai aur fir value ko use kiya jata hai.

``` Javascript
    let x = 5;
    let result = ++x;  // x ko pehle 1 se increment kiya jaata hai, fir result mein value assign hoti hai
    console.log(x);     // 6
    console.log(result); // 6
```

- Postfix operator mein, increment ya decrement operation baad mein hota hai. Matlab, pehle value ko use kiya jata hai, fir operation perform hota hai.

``` Javascript
    let x = 5;
    let result = x++;  // Pehle result mein x ki value assign hoti hai, phir x ko increment kiya jaata hai
    console.log(x);     // 6
    console.log(result); // 5
```

### Comparison Operators 
- JavaScript me comparison operators ka use do values ko compare karne ke liye hota hai. Ye comparisons true ya false (boolean) return karte hain. 

### Types of Comparison Operators in JavaScript
1. Equality Operators
2. Relational Operators
3. Logical Operators
4. Special Operators

### Equality Operators
| Operator | Description                  | Example     | Output |
|----------|------------------------------|-------------|--------|
| ==       | Loose Equality (value compare only) | 5 == "5"    | true   |
| ===      | Strict Equality (value + type)      | 5 === "5"   | false  |
| !=       | Loose Inequality             | 5 != "5"    | false  |
| !==      | Strict Inequality            | 5 !== "5"   | true   |

### Relationaly Operators
| Operator | Description                  | Example     | Output |
|----------|------------------------------|-------------|--------|
| >        | Greater than                | 5 > 3       | true   |
| <        | Less than                   | 5 < 3       | false  |
| >=       | Greater than or equal to    | 5 >= 5      | true   |
| <=       | Less than or equal to       | 5 <= 3      | false  |

### Logical Operators
| Operator | Description              | Example         | Output |
|----------|--------------------------|-----------------|--------|
| &&       | Logical AND (all true)  | true && false   | false  |
| ||       | Logical OR (any true)   | true || false   | true   |
| !        | Logical NOT (negation)  | !true           | false  |

###  Special Operators

``` Javascript
    console.log(typeof 5);         // "number"
    console.log(typeof "hello");   // "string"

    let arr = [];
    console.log(arr instanceof Array); // true
```

### Key Differences Between `==` and `===`
| Aspect         | == (Loose Equality)                   | === (Strict Equality)               |
|----------------|---------------------------------------|-------------------------------------|
| Type Coercion  | Yes, converts types before comparison | No, does not convert types          |
| Comparison     | Compares values only                 | Compares values and types both      |
| Example (True) | 5 == "5" (true)                      | 5 === 5 (true)                      |
| Example (False)| 5 == "hello" (false)                 | 5 === "5" (false)                  |

## String
- JavaScript me string ek sequence of characters hai jo " ", ' ', ya `template literals` me likhi jaati hai.

### String ke Features
1. `Immutable`: Ek baar string ban gayi, uska content change nahi hota.
2. `Indexing`: String zero-based indexing follow karti hai.

``` Javascript
let str = "JavaScript";
console.log(str[0]); // 'J'

let str1 = "Hello";           // Primitive string
let str2 = new String("Hello"); // String object
```

### Template Literals
- Interpolation aur multi-line ke liye:

``` Javascript
let name = "John";
let greet = `Hello, ${name}!`;
console.log(greet); // "Hello, John!"
```

### String Methods
``` Javascript
// 1. toUpperCase() - String ko uppercase mein convert karta hai
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"

// 2. toLowerCase() - String ko lowercase mein convert karta hai
let str2 = "HELLO";
console.log(str2.toLowerCase()); // "hello"

// 3. charAt() - Given index par character return karta hai
let str3 = "JavaScript";
console.log(str3.charAt(0)); // "J"

// 4. indexOf() - Substring ka pehla occurrence ka index return karta hai
let str4 = "Hello, World!";
console.log(str4.indexOf("World")); // 7

// 5. includes() - Check karta hai ki substring string mein hai ya nahi
let str5 = "Hello, World!";
console.log(str5.includes("World")); // true

// 6. slice() - String ke ek part ko extract karta hai
let str6 = "JavaScript";
console.log(str6.slice(0, 4)); // "Java"

// 7. substring() - Do indices ke beech characters ko extract karta hai
let str7 = "JavaScript";
console.log(str7.substring(4, 10)); // "Script"

// 8. replace() - Substring ko kisi aur substring se replace karta hai
let str8 = "Hello";
console.log(str8.replace("e", "a")); // "Hallo"

// 9. trim() - String ke starting aur ending spaces ko remove karta hai
let str9 = "  Hello  ";
console.log(str9.trim()); // "Hello"

// 10. split() - String ko array mein split karta hai
let str10 = "apple,banana,orange";
let arr = str10.split(",");
console.log(arr); // ["apple", "banana", "orange"]

// 11. repeat() - String ko given number of times repeat karta hai
let str11 = "Hi!";
console.log(str11.repeat(3)); // "Hi!Hi!Hi!"

// 12. startsWith() - Check karta hai ki string specified substring se start hoti hai
let str12 = "JavaScript";
console.log(str12.startsWith("Java")); // true

// 13. endsWith() - Check karta hai ki string specified substring se end hoti hai
let str13 = "JavaScript";
console.log(str13.endsWith("Script")); // true

// 14. concat() - Do ya zyada strings ko concatenate karta hai
let str14 = "Hello";
let str15 = "World";
console.log(str14.concat(", ", str15)); // "Hello, World"
```

## Numbers in JavaScript
- JavaScript mein numbers ko handle karne ke liye primitive data type ka use hota hai. Yahan par integer aur floating-point numbers dono hote hain.

``` Javascript
let num1 = 5;
let num2 = 3;

// Addition
console.log(num1 + num2); // 8

// Subtraction
console.log(num1 - num2); // 2

// Multiplication
console.log(num1 * num2); // 15

// Division
console.log(num1 / num2); // 1.666...

// Modulus (remainder)
console.log(num1 % num2); // 2

// Exponentiation
console.log(num1 ** num2); // 125
```

## Math Object
- JavaScript mein Math object built-in functions provide karta hai for performing complex mathematical calculations.

### Math methods
``` Javascript 
// 1. Math.round() - Number ko nearest integer tak round karta hai
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

// 2. Math.floor() - Number ko lower nearest integer tak round karta hai
console.log(Math.floor(4.7)); // 4

// 3. Math.ceil() - Number ko upper nearest integer tak round karta hai
console.log(Math.ceil(4.3)); // 5

// 4. Math.max() - Diye gaye numbers mein se sabse bada number return karta hai
console.log(Math.max(1, 5, 10)); // 10

// 5. Math.min() - Diye gaye numbers mein se sabse chhota number return karta hai
console.log(Math.min(1, 5, 10)); // 1

// 6. Math.random() - 0 se 1 ke beech random number generate karta hai
console.log(Math.random()); // Example: 0.345678

// 7. Math.sqrt() - Number ka square root return karta hai
console.log(Math.sqrt(16)); // 4

// 8. Math.pow(base, exponent) - Base ko exponent tak raise karta hai
console.log(Math.pow(2, 3)); // 8

// 9. Math.abs() - Number ka absolute value return karta hai
console.log(Math.abs(-5)); // 5
```

## Date
- JavaScript mein Date object ka use hota hai date aur time ko handle karne ke liye. Aap Date object se current date and time ko get kar sakte hain, date ko manipulate kar sakte hain, aur specific date and time values set kar sakte hain.

### Creating a Date Object
``` Javascript 
// Current date and time
let date1 = new Date();
console.log(date1); // Example: Fri Dec 13 2024 12:00:00 GMT+0000 (UTC)

// Specific date (year, month, day)
let date2 = new Date(2024, 11, 13); // month is 0-based (11 = December)
console.log(date2); // Example: Thu Dec 13 2024 00:00:00 GMT+0000 (UTC)
```

### Date Method
``` Javascript 
// 1. new Date() - Current date aur time ko get karta hai
let date = new Date();
console.log(date); // Example: Fri Dec 13 2024 12:00:00 GMT+0000 (UTC)

// 2. getFullYear() - Year ko get karta hai
console.log(date.getFullYear()); // 2024

// 3. getMonth() - Month ko get karta hai (0-based index, 0 = January)
console.log(date.getMonth()); // 11 (December)

// 4. getDate() - Day of the month ko get karta hai (1-31)
console.log(date.getDate()); // 13

// 5. getDay() - Day of the week ko get karta hai (0 = Sunday, 1 = Monday, ... 6 = Saturday)
console.log(date.getDay()); // 5 (Friday)

// 6. getHours() - Hours ko get karta hai (0-23)
console.log(date.getHours()); // Example: 12

// 7. getMinutes() - Minutes ko get karta hai (0-59)
console.log(date.getMinutes()); // Example: 45

// 8. getSeconds() - Seconds ko get karta hai (0-59)
console.log(date.getSeconds()); // Example: 30

// 9. setFullYear(year) - Year ko set karta hai
date.setFullYear(2025);
console.log(date); // New date with year set to 2025

// 10. setMonth(month) - Month ko set karta hai (0-based index)
date.setMonth(0); // January
console.log(date); // New date with month set to January

// 11. setDate(day) - Day ko set karta hai
date.setDate(25);
console.log(date); // New date with day set to 25

// 12. setHours(hours) - Hours ko set karta hai
date.setHours(10);
console.log(date); // New date with hours set to 10

// 13. setMinutes(minutes) - Minutes ko set karta hai
date.setMinutes(30);
console.log(date); // New date with minutes set to 30
```

## Memory Management
- In JavaScript, memory management ka kaafi important role hota hai, jisme data ko store aur manage karna shamil hai. Yeh automatic hota hai, lekin samajhna zaroori hai.

### 1. Stack Memory
- Stack memory mein primitive data types (like numbers, strings, booleans) store hote hain.
- Jab function call hota hai, to local variables stack mein store hote hain aur function return hone par ye automatically remove ho jaate hain.

``` Javascript 
let a = 10; // 'a' stack memory mein store hoga
```

### 2. Heap Memory
- Heap memory mein complex data types (like objects and arrays) store hote hain.
- Yeh dynamically allocate hoti hai, aur jab objects/arrays ka reference end hota hai, to garbage collector usse free kar deta hai.

``` Javascript 
let obj = { name: "John" }; // 'obj' heap memory mein store hoga
```

### 3. Garbage Collection
- JavaScript automatically unused data ko memory se remove karta hai garbage collection ke through.
- Jab kisi object ya variable ka reference nahi hota, to garbage collector usko memory se free kar deta hai.

### 4. Memory Leaks
- Memory leak tab hota hai jab unnecessary memory ka use hota rahe, jaise ki unused objects ya listeners ka reference retained rehna.
- JavaScript me aise leaks avoid karne ke liye best practices follow karna zaroori hai.

## Array in JavaScript
- Array ek collection hota hai jisme multiple values ko ek single variable mein store kar sakte hain. Ye 0-based index system pe kaam karta hai, yani pehla element index 0 pe hota hai.

``` Javascript
let fruits = ["Apple", "Banana", "Orange"]; // String values
let numbers = [1, 2, 3, 4]; // Number values
let mixed = [1, "Apple", true]; // Mixed values

console.log(fruits[0]); // "Apple" (Index 0)
console.log(numbers[2]); // 3 (Index 2)
```

### Array Method
``` Javascript
// 1. push() - End mein element add karta hai
myArr.push(6); 
console.log(myArr); // Adds 6 to the array

// 2. pop() - Last element remove karta hai
myArr.pop(); 
console.log(myArr); // Removes last element

// 3. unshift() - Start mein element add karta hai
myArr.unshift("sandeep");
console.log(myArr); // Adds "sandeep" at the beginning

// 4. shift() - First element remove karta hai
myArr.shift(); 
console.log(myArr); // Removes the first element

// 5. includes() - Check karta hai agar element array mein exist karta hai
console.log(myArr.includes(9)); // true/false if 9 exists

// 6. indexOf() - Element ka index return karta hai
console.log(myArr.indexOf(9)); // Returns index of 9 or -1 if not found

// 7. join() - Array ko string mein convert karta hai
console.log(myArr.join()); // Joins array elements into a string

// 8. slice() - Sub-array banata hai (without modifying original)
console.log(mainArr.slice(1, 3)); // Extracts elements from index 1 to 2

// 9. splice() - Elements ko add/remove karta hai
mainArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log(mainArr); 

// 10. concat() - Do ya zyada arrays ko combine karta hai
let marvel_heros = ["Ironman", "Thor"];
let dc_heros = ["Batman", "Superman"];
let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // ["Ironman", "Thor", "Batman", "Superman"]

// 11. flat() - Nested arrays ko flatten karta hai
let another_array = [1, [2, [3, [4]]]];
console.log(another_array.flat(Infinity)); // [1, 2, 3, 4]

// 12. isArray() - Check karta hai ki variable array hai ya nahi
console.log(Array.isArray(another_array)); // true

// 13. from() - Array-like object ya string ko array mein convert karta hai
console.log(Array.from('Sandeep')); // ['S', 'a', 'n', 'd', 'e', 'e', 'p']
console.log(Array.from({ name: 'sandeep' })); // [] (Not iterable object)

// 14. of() - Arguments ko ek array mein convert karta hai
let score1 = 10, score2 = 20, score3 = 30;
console.log(Array.of(score1, score2, score3)); // [10, 20, 30]
```

# JavaScript and Classes
- JavaScript me classes ek tarah ka blueprint ya template hoti hain jo objects banane ke liye use hoti hain. Agar aapko ek hi type ke objects bar-bar banane hain, toh classes kaafi helpful hoti hain. Yeh JavaScript ke ES6 version se introduce hui thi. Classes ka syntax simple aur readable hota hai, jo traditional prototype-based inheritance se zyada organized hai.

## OOP (Object-Oriented Programming) in JavaScript
- OOP (Object-Oriented Programming) ek programming style hai jo objects ke around focused hota hai. Isme 4 main pillars hote hain

## Object 
- Collection of properties and methods

## Why use OOP?
- Code reusability (Inheritance).
- Easy to manage (Encapsulation).
- Flexible behavior (Polymorphism).

## Part Of OOP
* Object literal :- Object literal JavaScript me object banane ka ek simplest aur most common method hai. Isme object ko directly curly braces {} ke andar define kiya jata hai, jisme key-value pairs hoti hain.

- Constructor Function :- A constructor function ek special type ki function hoti hai jo objects banane ke liye use ki jaati hai. Isme new keyword ka use karke ek object banaya jaata hai aur us object ko automatically initialize kiya jaata hai.

- Prototypes (Proto) :- JavaScript me prototype ek aisa concept hai jisme ek object apne parent object se properties aur methods inherit karta hai. Matlab, har object ka ek parent object hota hai jahan se wo properties ya methods le sakta hai.

- Classes :- Class ek blueprint hota hai jisme aap properties aur methods ko define karte ho. Aap phir is class se multiple objects create kar sakte ho.

- Instances (new, this) L- Instance ka matlab hai ek specific object jo ek class ya constructor function se banaya gaya ho. Jab hum ek constructor function ko new keyword ke saath call karte hain, toh hum ek new instance create karte hain.

## 4 Pillars
- Abstraction :- Sirf necessary details dikhana, baaki complexity hide karna.
- Encapsulation :- Data aur methods ko ek object ke andar band karna. Private properties ko hide karna.
- Inheritance :- Ek class ka code dusri class me reuse karna.
- Polymorphism :- Same method ka different behavior.