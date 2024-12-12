# JavaScript
- JavaScript ek programming language hai jo websites ko interactive aur dynamic banata hai, jaise buttons click karna, animations, aur real-time updates. Ye browsers aur server dono par kaam karta hai.

### Variables in JavaScript
- Variable ek container ya storage hota hai jo kisi value ko temporarily store karta hai, taaki usko program me use kiya ja sake. JavaScript me variables data ko manipulate aur reuse karne ke liye kaam aate hain.
- Variable declare karne ke liye var, let, ya const ka use hota hai:

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
    let result = "5" + 10; // "510" (string + number)
```

- Number + Boolean (Type Coercion) Boolean ko number mein convert kiya jata hai. true ko 1 aur false ko 0 banaya jata hai.

``` Javascript
    let sum = 10 + true; // 11 (true is converted to 1)
    let sum2 = 10 + false; // 10 (false is converted to 0)
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