// Classes
var Stark = (function () {
    function Stark() {
        this.name = "Randy";
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
})();
var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);
ned.hello("Jim");
