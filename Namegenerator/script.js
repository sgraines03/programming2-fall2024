

function generate() {
	let m1 = document.getElementById("birthmonth").value;
	let n1 = document.getElementById("favNum").value;
	let l1 = document.getElementById("firstLetter").value;
	let name = document.getElementById("yourName");
	const dancer = ["a", "b", "c", "d", "e"];
	const walker = ["f", "g", "h", "i", "j"];
	const singer = ["k", "l", "m", "n", "o"];
	const keeper = ["p", "q", "r", "s", "t"];
	const seeker = ["u", "v", "w", "x", "y", "z"];
		if (n1 % 2 == 0){
			part1 = "crystal";
		}else if(n1 % 2 ==1){
			part1 = "shadow";
		}if (m1 == "j"){
			part2 = "hunter";
		}else if (m1 == "f"){
			part2 = "flame";
		}else if (m1 == "ma"){
			part2 = "river";
		}else if (m1 == "a"){
			part2 = "storm";
		}else if (m1 == "may"){
			part2 = "blossom";
		}else if (m1 == "june"){
			part2 = "sky";
		}else if (m1 == "july"){
			part2 = "blade";
		}else if (m1 == "au"){
			part2 = "light";
		}else if (m1 == "s"){
			part2 = "whisper";
		}else if (m1 == "o"){
			part2 = "fang";
		}else if (m1 == "n"){
			part2 = "stone";
		}else if (m1 == "d"){
			part2 = "dream";
		}if (dancer.includes(l1)){
			part3 = "dancer";
		}else if(walker.includes(l1)){
			part3 = "walker";
		}else if(singer.includes(l1)){
			part3 = "singer";
		}else if(keeper.includes(l1)){
			part3 = "keeper";
		}else if(seeker.includes(l1)){
			part3 = "seeker";
		}

	name.innerText = (part1+ part2+ part3);
	console.log(part1);
	console.log(part2);
	console.log(part3);

}

