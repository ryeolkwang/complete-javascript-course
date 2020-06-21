///////////////////////////////////////
// Lecture: Hoisting

function calculateAge(year) {
    console.log(2020 - year);
}

calculateAge(1994);

retirement (1992);

const retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(1990);


//function hoisting only works for function declarations and not function expressions






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









