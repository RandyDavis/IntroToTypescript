//var n: String = "Hey";
//
//n = "Rob";

// Booleans
var isWinter: Boolean = false;
//isWinter = 123;

// Number
var count: Number = 5;

// String
var name: string = "Brand";

// Arrays
// Can only add strings to this array
var names: string[] = ["Randy", "Jim", "Arya"];

// Can add any type to this array
var moreNames: any[] = ["Joe", 2, false, "Bill", null];

// Enum
enum Starks { Randy, Jon, Brad, Kate, Bill };
var buffalo: Starks = Starks.Bill;

// Void
function getName(): void {
	console.log("Winter is coming");
}