/*
var name = 'John'; 
console.log(name);  

var lastName = ('smith');  
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
/*
// Lecture: variables 2
var name = 'john';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;
//console.log(job);

job ='teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'porn star';

console.log(name + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');

var lastName = prompt(' what is the last name');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');
*/
/*
// Lecture: operators
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
// 2016 - 52
// 1964

console.log(birthYear);

var agoJohn = 30
var ageMark = 30

ageJohn = ageMark = (3 + 5) * 4 -6;
//ageJogn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark*= 2;

console.log(ageJohn);
console.log(ageMark);
*/

/////////////////////////////////////////////////////
//Lecthure: If/Else Statements
 
/*
var name = 'john';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married');
 
} else {
    console.log(name + ' will hopefully marry soon :)')
}

isMarried = false;

/*
if (isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}



if(isMarried) {
    console.log('YES');
}

if (23 === '23') {
    console.log('something to print....');
    
}
*/

/////////////////////////////////////////
// Lecture : boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('john is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('john is young man.');
} else {
    console.log('john is a man.');
}

var job = 'teacher';

job = prompt ('what does john do?')

switch (job) {
    case 'teacher':
        console.log(' john teaches kids');
        break;
    case 'driver':
        console.log('john drives a cab');
        break;
    case 'cop':
        console.log('john helps fights crime');
        break;
    default:
        console.log('John does something else');
        
}
*/

///////////////////////////////////////////////
// coding challange 1
/*
var johnHeight = 178;
var bobHeight = 166;

var johnAge = 48;
var bobAge = 42;

johnTotal = johnAge * johnHeight;
bobTotal = bobHeight * bobAge;

if (johnTotal > bobTotal) {
    console.log('john is the winner because he is the bestest.');
} else if (johnTotal < bobTotal) {
    console.log('bob is the winner, he is so much better than john');
} else if (johnTotal = bobTotal){
        console.log('they best mates, so its a draw');
} else {
    console.log('error, something is wrong')
}
*/

// adding in the 3rd
/*    
var johnHeight = 178;
var bobHeight = 166;
var markHeight = 178;

var johnAge = 41;
var bobAge = 21;
var markAge = 41;

johnTotal = johnHeight + johnAge*5;
bobTotal = bobHeight + bobAge*5;
markTotal = markHeight + markAge*5;

if (johnTotal > bobTotal && johnTotal > markTotal) {
    console.log('John is the weiner with score of ' + johnTotal);
} else if ( bobTotal > johnTotal && bobTotal > markTotal) {
    console.log('bob is the winner with the score of ' + bobTotal);
} else if (markTotal > johnTotal && markTotal > bobTotal) {
    console.log('mark is the winner with the score of ' + markTotal);
} else {
    console.log('it\'s a draw');
}
 */

////////////////////////////////////////////
// trying challange again without looking at code or notes.

/*
var age = 10;

while (age <= 20) {
    console.log('your age is ' + age );
    age++;
}

console.log('you are now over 20');
*/

//////////////////////////////////////////////
// Leacture: Functions
/*
function calcualateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calcualateAge(1990);
var ageMike = calcualateAge(1969);
var ageMary = calcualateAge(1948);



function yearsUntilRetirement(name, year) {
    var age = calcualateAge(year);
    var retirement = 65 - age;
    if (retirement >0) {
    console.log(name + ' retires in ' + retirement + ' years');
    }else {
     console.log(name + ' has already retired');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('mike', 1969);
yearsUntilRetirement('mary', 1948);

*/

///////////////////////////////////////////
// Function practivce

/*
// calories of each indervidual fruit
var orange = 87;
var banana = 121;
var apple = 116;

// number of fruit in each basket - converted into total calories.
/*
var basketOne = 4*orange + 2*banana + 4*apple;
var basketTwo = 6*orange + 1*banana + 3*apple;
var basketThree = 2*orange + 6*banana + 2*apple;
*/
/*
function totalNumberOfruit(totalOrange, TotalBanana, TotalApple) {
    totalCalories = totalOrange*orange + TotalBanana*banana + TotalApple*apple;
    return totalCalories;   
    
}

var totalCalories;

var basketOne = totalNumberOfruit(4, 2, 4); // 1054 Calories, average 105.4
var basketTwo = totalNumberOfruit(6, 1, 3); // 991 Calories, average 99.1
var basketThree = totalNumberOfruit(2, 6, 2); // 1132 Calories, average 113.2



function averageFruitCalories (BasketName, totalCaloriesInBasket){
    var averageCalories = totalCaloriesInBasket/10;
        console.log(BasketName + ' has a total of ' + totalCaloriesInBasket + ' calories in the basket, and an average of ' + averageCalories + ' calories per item.');
   }

averageFruitCalories('Basket 1', basketOne);
averageFruitCalories('Basket 2', basketTwo);
averageFruitCalories('Basket 3', basketThree);

*/

///////////////////////////////////////////////////////////////////////////////////
/*
// inflation rate persantage as a decimal
var year2011 = 1.042; // 1.4% etc
var year2012 = 1.0271;
var year2013 = 1.0199;
var year2014 = 1.005;
var year2015 = 1.002;
var year2016 = 1.016;

function yearsOfInflation(year, inflation) {
    var numberOfYears = 2017 - year; 
    console.log('There has been ' + numberOfYears + ' between 2017 and ' + year);
}

yearsOfInflation(2011);
yearsOfInflation(2012);
yearsOfInflation(2013);
yearsOfInflation(2014);
yearsOfInflation(2015);
yearsOfInflation(2016);

*/

/*
function yearsAndInflation(year, inflationRate) {
    inflationIncrease = money * inflationRate;
    inflationRate.push(year);
    console.log(totalIncrease);

}

var money = 10;
var inflationIncrease;
var totalIncrease;

yearsAndInflation(2011, 1.042);
yearsAndInflation(2012, 1.0271);
yearsAndInflation(2013, 1.0199);
yearsAndInflation(2014, 1.005);
yearsAndInflation(2015, 1.002);
yearsAndInflation(2016, 1.016);

var year2011 = 1.042;
var year2012 = 1.0271;
var year2013 = 1.0199;
var year2014 = 1.005;
var year2015 = 1.002;
var year2016 = 1.016;

*/
/*
var mark = ['Mark', 'Colombus', 1980, 'Photographer', true];
mark.push('green');
mark.unshift('Sir');
mark.pop();
mark.shift();

if (mark.indexOf('Colombus') === -1){
    console.log('Mark is a not a Photographer');
} else {
    alert('Mark is a Photographer');
}

*/

///////////////////////////////
//Leacture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'jane'; // this is now filling the object with data using both the dot and brackets notation.
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane)

*/

//////////////////////////////
// Lecture: Objects and methods

/* version 1.0

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() { // function expresion
        return 2016 - this.yearOfBirth;
    }
};

/*

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

*/

// veresion 2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() { // function expresion
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
*/
/*
var mark = {
    name: 'Mark',
    lastName: 'Colombus',
    yearOfBirth: 1980,
    isMarried: true,
    pets: 'None',
    wife: ['Katie', 'Colombus', 1970],
   
    calculateRetirementAge: function() {
    this.yearsUntilRetirement = 65 - (2016 - this.yearOfBirth);
    },
    calculateWifeRetirementAge: function() {
    mark.wife[3] = 65 - (2016 - mark.wife[2]);    
    }

};

    
mark.calculateRetirementAge();
mark.calculateWifeRetirementAge();
console.log(mark);
*/
///////////////////////////////////////////////////
// Lecture: Loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/
/*
var names = ['John', 'Mark', 'Bob', 'Mary', 'Jane']
for (var i = names.length -1; i>=0 ; i--) {	
	console.log(names[i]);			
}
*/

/*
var names = ['John', 'Mark', 'Bob', 'Mary', 'Jane', 'Jim', 'fiona', 'francis', 'billy']

for (var i=names.length-1; i>0; i--){
       console.log(names[i]) 
        if ((names[i])==='fiona'){
        break;
    }
  
}


*/



/* as the loop
for (i = 0; i < years.length; i++){
    ages[i] = 2017 - years[i];
}

for (i = 0; i < ages.length; i++) {
    if (ages[i] <= 18) {
        console.log('Person is ' + ages[i] + ' years old and of full age');
    } else {
        console.log('Person is ' + ages[i] + ' years old and NOT of full age');
    }
}
*/

// as the function
var years =[1990,2000,1969,1957,1980, 2013]

function printFullAge (years){
    var ages =[];
    var fullAge =[];
    
    for (i = 0; i < years.length; i++){
    ages[i] = 2017 - years[i];
    }
    
    for (i = 0; i < ages.length; i++) {
    if (ages[i] <= 18) {
        console.log('Person is ' + ages[i] + ' years old and of full age');
        fullAge.push(true);
    } else {
        console.log('Person is ' + ages[i] + ' years old and NOT of full age');
        fullAge.push(false);
    }
    }
    return fullAge;
}


var full_1 = printFullAge(years);
var full_2 = printFullAge([2012,1915,1777,2016]);
