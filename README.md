# JavaScript
- JavaScript ek programming language hai jo websites ko interactive aur dynamic banata hai, jaise buttons click karna, animations, aur real-time updates. Ye browsers aur server dono par kaam karta hai.

## Variables in JavaScript
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

## Difference Between var, let, and const in JavaScript:
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