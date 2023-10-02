
js

// Generate two random numbers between 1 and 10
var a = Math.floor(Math.random() * 10) + 1;
var b = Math.floor(Math.random() * 10) + 1;

// Compare a and b using if statements
if (a > b) {
    console.log("a is greater");
} else if (b > a) {
    console.log("b is greater");
} else {
    console.log("both are equal");
}

// Display the randomly generated values of a and b
console.log("a =", a);
console.log("b =", b);