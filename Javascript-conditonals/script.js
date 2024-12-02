//let age = 16;
//if(age >= 18){
//	alert("you are an adult!!!");
//} else if (age >= 13) {
//	alert("you are a teenager.");
//} else {
//	alert("you are not an adult");
//}

//let score = 87;
//
//if (score >= 90){
//	alert("you got an A congrats");
//} else if (score >= 80) {
//	alert("you got a B not to bad.");
//} else if (score >70){
//	alert("you got a C... at least its a passing grade");
//} else {
//	alert("you need to study way more.");
//}

//
//let temp = 28;
//let condition = "sunny";
//
//if(temp >= 70 && condition == "sunny"){
//	alert("wear a tshirt");
//} else if(temp > 40 && (condition == "rainy" || condition == "stormy")){
//	alert("wear a raincoat");
//} else if(temp <= 30 || condition == "snowy"){
//	alert("wear a winter coat");
//} else if(temp > 30 && temp < 50){
//	alert("wear a coat");
//} else if(temp >= 50 && temp < 70){
//	alert("wear a hoodie");
//} else {
//	alert("consult your local meteorologest");
//}

const username = "SadieGraines";
const password = "parker2027";


function login() {
	let u = document.getElementById("username").value;
	let p = document.getElementById("password").value;
	let message = document.getElementById("yourMessage");
	if (u == username && p == password){
		message.innerText = "Logged in!!";
		message.style.color = "green";
	} else if(u == username && p != password ){
		message.innerText = "Password is wrong.";
		message.style.color = "red";
	} else if(u != username && p == password) {
		message.innerText = "Username is wrong.";
		message.style.color = "red";
	} else{
		message.innerText = "Username & Password are wrong.";
		message.style.color = "red";
	}
}