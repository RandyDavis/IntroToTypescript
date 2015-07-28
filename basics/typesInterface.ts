// Interfaces
interface Stark {
	name: string;
	age?: number; // ? makes attribute optional
}
function printName(stark: Stark) {
	console.log(stark.name);
}

printName({name: "Randy", age: 35});
printName({name: "Joe"});