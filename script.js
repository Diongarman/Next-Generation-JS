///////////////////////
//Lecture: let and const

let i = 23;

for(let i = 0; i<5; i++) {
    console.log(i)
}
console.log(i)

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
    return 2020 - year
});

//console.log(ages5);

//ES6

let ages6 = years.map((year, index) => `Age Element ${index}: ${2020-year}`)

ages6 = years.map((year) => {
    let now = new Date().getFullYear();
    let age = now - year;
    return age
})

console.log(ages6);



////////////////////
////Lesson: Arrow functions and lexical 'this'