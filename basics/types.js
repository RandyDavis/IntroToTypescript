//var n: String = "Hey";
//
//n = "Rob";
// Booleans
var isWinter = false;
//isWinter = 123;
// Number
var count = 5;
// String
var name = "Brand";
// Arrays
// Can only add strings to this array
var names = ["Randy", "Jim", "Arya"];
// Can add any type to this array
var moreNames = ["Joe", 2, false, "Bill", null];
// Enum
var Starks;
(function (Starks) {
    Starks[Starks["Randy"] = 0] = "Randy";
    Starks[Starks["Jon"] = 1] = "Jon";
    Starks[Starks["Brad"] = 2] = "Brad";
    Starks[Starks["Kate"] = 3] = "Kate";
    Starks[Starks["Bill"] = 4] = "Bill";
})(Starks || (Starks = {}));
;
var buffalo = Starks.Bill;
// Void
function getName() {
    console.log("Winter is coming");
}
