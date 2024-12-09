//let fastFood = ["hamburger", "fries", "milkshake" , "chicken nuggets"];
//for (let i = 0; i < fastFood.length; i++){
//	console.log(fastFood[i]);
//}
//
//let numbers = [45, 23, 78];
//let doubled = [];
//for (let i = 0; i < numbers.length; i++){
//	doubled.push(numbers[i]*2);
//} 
//console.log(doubled);

let animals = ["monkey", "walrus", "lemur", "pig", "narwhal" ];
let animals1 = [];
for (let i = 0; i < animals.length; i++){
	console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++){
	animals[i] = animals[i].toUpperCase();
	animals1.push(animals[i]);
}
	console.log(animals1);

	
for (let i = 0; i < animals1.length; i++){
	console.log(animals1[i]);
}

for (let i = 2; i < animals1.length; i++){
	animals1.pop();
}



let score = [33, 37, 46, 53, 67, 72, 79, 83, 92, 99];
let scoreBonus = [];
for (let i = 0; i < score.length; i++){
	scoreBonus.push(score[i]+5);
	
}
for (let i = 0; i < score.length; i++){
	if (score[i] < 50) {
	score.splice(i,1,"retake");
}}

console.log(scoreBonus);
console.log(score);

//First Activity:
//Create an array of five animals.
//Tasks:
//Write a loop to print each animal.
//Use a loop to create a new array where each animal’s name is in uppercase (push).
//Remove the last two animals after looping through the array (pop).
//Second Activity:
//Create an array of 10 test scores between 30 and 100.
//Write a loop to:
//Add 5 bonus points to each score and store them in a new array.
//Replace any scores below 50 with "Retake" using splice (in the original array)