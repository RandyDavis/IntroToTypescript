// Class Inheritance
class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	dance() {
		console.log(this.name + " is dancing!");
	}
}


var jay = new Person("Jay");
jay.dance()

class AwesomePerson extends Person {
	dance() {
		console.log('SO AWESOME!!!!');
		super.dance();
	}
}

var rob = new AwesomePerson("Rob");
rob.dance();