js

var me = {
    name: "Tanujsai Nimmagadda",
    age: 15,
    classes: ["CSP", "Honors Principles of Engineering", "Chemistry", "Honors Humanities", "Calc"],
    interests: ["Volleyball", "Going to the gym", "Watching Motor sports, specifically F1"],
    places: ["USA", "India", "Europe"],
    cuisine: ["Indian", "Mexican", "American"]
};

console.log(me);

me.classes.push("Speech And Debate");
console.log(me.classes);
me.interests.push("Playing Volleyball");
console.log(me.interests);
me.places.shift();
console.log(me.places);
me.cuisine.pop();
console.log(me.cuisine);

console.log(me)

me.age = me.age+1;

console.log("Next year, I'll be", me.age);

console.log("The type of classes is ", typeof me.classes);
console.log("The type of name variable is ", typeof me.name);
console.log("The type of age variable is ", typeof me.age);
