// jshint esversion:6

// All the global constants and variables
const songs = new Array("wow", "memories", "symphony", "cheerleader");
const obj = {
  fname: "Suryansh",
  lname: "Agrawal",
};
const helloWorld = "Helo World";

// All the functions
const greet = (name) => name;
const add = (...nums) => nums.reduce((p, c) => (p += c));
const subtract = (...nums) => nums.reduce((p, c) => (p -= c));
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const sqr = (n) => Math.pow(n, 2);
const sqrt = (n) => Math.pow(n, 1 / 2);

// All the classes
class Name {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}
class Meme {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
class Grades {
  constructor(...arrays) {
    arrays.forEach((array) => {
      this[array[0]] = array[1];
    });
  }
}
