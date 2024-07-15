"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ES6 기능: 블록 스코프 변수 선언 (const, let)
var name = 'Alice';
var age = 30;

// ES6 기능: 화살표 함수 (Arrow function)
var greet = function greet(name) {
  console.log("Hello, ".concat(name, "!"));
};
greet(name);

// ES6 기능: 템플릿 리터럴 (Template literals)
var message = "Hello, ".concat(name, ". You are ").concat(age, " years old.");
console.log(message);

// ES6 기능: 객체 분해 (Object Destructuring)
var person = {
  firstName: 'Bob',
  lastName: 'Smith',
  city: 'New York'
};
var firstName = person.firstName,
  lastName = person.lastName,
  city = person.city;
console.log("".concat(firstName, " ").concat(lastName, " lives in ").concat(city, "."));

// ES6 기능: 확장된 객체 리터럴 (Enhanced Object Literals)
var email = 'bob@example.com';
var newUser = _defineProperty(_defineProperty({
  firstName: firstName,
  lastName: lastName,
  city: city,
  email: email
}, 'full name', "".concat(firstName, " ").concat(lastName)), "getFullName", function getFullName() {
  return this['full name'];
});
console.log(newUser);
console.log(newUser.getFullName());

// ES6 기능: 클래스 (Class)
var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);
    this.name = name;
    this.age = age;
  }
  return _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
  }]);
}();
var john = new Person('John', 25);
john.greet();