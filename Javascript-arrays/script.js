//let tasks = ["do my homework", "orginize my bathroom draw" , "orginze my underbed draws"];
//// grab first item and alert it
//alert(tasks[0]);
//
//// change first item
//tasks[0] = "orginze/cleanout my desk";
//alert(tasks);
//
//// add item to list (it will get added to the end of the list)
//tasks.push("change out phone wallet");
//alert(tasks);
//
//// remove the item at the end of the list
//tasks.pop();
//alert(tasks);
//

//
//let grocries = ["milk", "fruit", "bread", "eggs"];
//// replace fruit with ice cream
//grocries.splice(1, 1, "ice cream");  // or can do grocries[1] = "ice cream";  
//alert(grocries);
//
//// removes milk
//grocries.splice(0,1);
//alert(grocries);



let items = ["phone", "computer", "watch"];
console.log(items);
items.push("headphones", "charger");
console.log(items);
items.pop();
console.log(items);
items.splice(1,0, "toothbrush");
console.log(items);
items.splice(2,1);
console.log(items);



let numbers = [3, 6, 9];
console.log(numbers);
numbers.splice(0,0,0);
console.log(numbers);
numbers.splice(1,1,1);
console.log(numbers);

//First activity:
//Create an array of three items you use every day.
//Add two items to the end using push.
//Remove the last item using pop.
//Add a new item to the second position using splice.
//Remove the third item using splice.
//console.log the array after each step.
//Second Activity:
//Create an array of three numbers.
//Write code to:
//Add a new number at the start using splice.
//Replace the second number with another value using splice.