var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Class Inheritance
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing!");
    };
    return Person;
})();
var jay = new Person("Jay");
jay.dance();
var AwesomePerson = (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        _super.apply(this, arguments);
    }
    AwesomePerson.prototype.dance = function () {
        console.log('SO AWESOME!!!!');
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
})(Person);
var rob = new AwesomePerson("Rob");
rob.dance();
