let person = {
	name: "Terry",
	age: 23,
	favoriteColor: "green",
	height: "6'8\"",
	satScore: 400,
	job: "Basketball Player",
	biggestFear: "inflated balls",
	favoriteNumber: 3,
	gender: "boy"
};
console.log(person);
console.log(person["height"]); 
console.log(person.biggestFear); // more accepted way to do it - this is dot notation
person.age = 25;
//person["age"] = 25; this also works 

let person2 = {
	name: "Mary" , 
	age: 26,
	favoriteColor: "green",
	height: "7'3\"",
	actScore: 4,
	job: "Volleyball Player",
	biggestFear: "inflated balls",
	favoriteNumber: 3,
	gender: "girl"
};
 
console.log("One day a " + person.gender + " named " + person.name + " was at a " + person.biggestFear + " factory trying to get over his fear of them. Then out of the corner of his eye he saw a beutifil "+ person2.height + " " + person2.gender + ". Little "  + person.height + " " + person.name + " went up to her. He said 'Hi I'm " + person.name + ". What's your name? " + person2.name + " said the girl, I am here on the get over your fears -" + person2.biggestFear + "tour.'What about you?' she asked. 'Me too' " + person.name + " responed.");
