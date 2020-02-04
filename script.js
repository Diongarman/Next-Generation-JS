///////////////////////
//Lecture: let and const

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}
//console.log(i)

//Comments

/*
var is function scoped whilst let & const are block scoped
*/

///////////////////////
//Lecture Blocks and IIFEs(ugh)

//ES6
{
  let a = '6ix9ine';
  const b = 'Trippie Red';
}

//console.log(a + b);

//ES5

(function() {
  var c = 30;
})();
//Below fails
//console.log(c)

/*

Data Privacy is much more verbose in ES5

*/

///////////////
///Lesson: Arrow Functions

const years = [1989, 1990, 1991, 1992];

//ES5

var ages5 = years.map(function(year) {
  return 2020 - year;
});

//console.log(ages5);

//ES6

let ages6 = years.map((year, index) => `Age Element ${index}: ${2020 - year}`);

ages6 = years.map(year => {
  let now = new Date().getFullYear();
  let age = now - year;
  return age;
});

//console.log(ages6);

////////////////////
////Lesson: Arrow functions and lexical 'this'

//ES5

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;

    document.querySelector('.green').addEventListener('click', function() {
      var str =
        'This is box number ' + self.position + ' and it is ' + self.color;

      alert(str);
    });
  }
};

//box5.clickMe();

const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      let str = `This is box number ${this.position} and is ${this.color}`;

      alert(str);
    });
  }
};

//box6.clickMe();

function Person(name) {
  this.name = name;
}
//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + ' is friends with ' + el;
    }.bind(this)
  );
  console.log(arr);
};

//var friends = ['Ricky', 'Ashley', 'Gren', 'Nick'];
//new Person('Dion').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = friends => {
  let arr = friends.map(el => `${this.name} + ' is friends with ' + ${el}`);

  console.log(arr);
};

const friends = ['Ricky', 'Ashley', 'Gren', 'Nick'];
new Person('Dion').myFriends6(friends);

///////////////////////////
//Lecture Destructuring

//ES5

var dion = ['Dion', 30];
//var name = dion[0];
//var age = dion[1];

//ES6

const [name, age] = dion;

console.log(name, age);

const obj = {
  firstName: 'Chuck',
  secondName: 'Norris'
};

const { firstName, secondName } = obj;
console.log(firstName, secondName);

//if you want different key names

const { firstName: a, secondName: b } = obj;

console.log(a, b);

//////////////////////////////////
//LECTURE: Arrays

const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

Array.from(boxes).forEach(
  element => (element.style.backgroundColor = 'dodgerblue')
);

//ES5
/*
for(var j = 0; j< boxesArr5.length; j++) {
    if (boxesArr5[j].className === "box blue") {
        continue;
    }

    boxesArr5[j].textContent = "I CHANGED TO BLUE";
};
*/

//ES6

for (const cur of Array.from(boxes)) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I CHANGED TO BLUEFACE';
}

//ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(curr) {
  return curr >= 18;
});

console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex(curr => curr >= 18));
console.log(ages.find(curr => curr >= 18));

/////////////////////////////
//Lecture: Spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var ages = [18, 30, 12, 21];

//ES5
var sum5 = addFourAges.apply(null, ages);
console.log(sum5);

//ES6
const sum6 = addFourAges(...ages);
console.log('using spread operator: ', sum6);

//using spreads to join arrays

const family1 = ['Mary', 'John', 'Stacey'];
const family2 = ['Shaniqua', 'Devon', 'Deontay'];

const bigFamily = [...family1, 'Baby Tyrell', ...family2];
console.log(bigFamily);
