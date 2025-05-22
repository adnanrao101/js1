// const mathNumber = prompt("What is Your Math Number")
// const englishNumber = prompt("What Is Your English Numbers")
// const urduNumber = prompt("What Is Your urdu Numbers")
// const islamiyateNumber = prompt("What Is Your islamiyate Numbers")
// const computerNumber = prompt("What Is Your computer Numbers")


// document.write("Your Math Number is  " + mathNumber + "<br>" + "Your English Number is " + englishNumber + "<br>" + "Your urdu Number is  " + urduNumber + "<br>" + "Your islamiyate Number is  " + islamiyateNumber + "<br>" + "Your computer Number is  " + computerNumber + "<br>")



// if (mathNumber > 33) {
//     document.write("Congratiols You are Pass in math Subject, And Your Number Is " + mathNumber + "<br>")
// } else {
//     document.write("You Are Fails in math Subject, And Your Number Is " + mathNumber + "<br>")
// }


// if (englishNumber > 33) {
//     document.write("Congratiols You are Pass in english Subject, And Your Number Is " + englishNumber + "<br>")
// } else {
//     document.write("You Are Fails in english Subject, And Your Number Is " + englishNumber + "<br>")
// }


// if (urduNumber > 33) {
//     document.write("Congratiols You are Pass in urdu Subject, And Your Number Is " + urduNumber + "<br>")
// } else {
//     document.write("You Are Fails in urdu Subject, And Your Number Is " + urduNumber + "<br>")
// }


// if (islamiyateNumber > 33) {
//     document.write("Congratiols You are Pass in islamiyate Subject, And Your Number Is " + islamiyateNumber + "<br>")
// } else {
//     document.write("You Are Fails in islamiyate Subject, And Your Number Is " + islamiyateNumber + "<br>")
// }


// if (computerNumber > 33) {
//     document.write("Congratiols You are Pass in computer Subject, And Your Number Is " + computerNumber + "<br>")
// } else {
//     document.write("You Are Fails in computer Subject, And Your Number Is " + computerNumber + "<br>")
// }



// {
//     let a = 10
//     console.log(a); 
// }


// let a = 20
// console.log(a);



// const a = 10
// a= 11

// console.log(a);
// a = null

// console.log(typeof(a));


// function tableOfTwo(multiplier) {
//   if (multiplier > 10) {
//     return;
//   }
//   document.write(`5 * ${multiplier} = ${5 * multiplier}<br>`);
//   tableOfTwo(multiplier + 1);
// }

// tableOfTwo(1);

// const students = [ "owais" , "shabaz" , "adnan"]

// // const pro = " Is pro Devloper"

// // document.write(students[2]+pro);

// students.pop()
// document.write(students);

// students.push("newman", "feman", "heman")

// document.write(students);




// const no = [ 100 , 200 , 300 , 400 , 500]


// no[2] = 600;

// console.log(no);




// const car = {type:"vitz", model:"2020", color:"white", price:"2M",};

// model = ("2022");

// name:value{1} = 2022

// car.model="2022";

// console.log(car);


// const person = {
//      firstname:"Adnan",
//      lastname:"Ejaz",
//      age:"21",
//      haircolor:"black",
//      height:"6.1 inchs", 
// }

// person.age="22";

// console.log(person);


// const pets = ["dog" , "cats", "cows", "birds"]

// // pets.shift()

// // pets.unshift("birds" , "snakes");

// pets.splice(2, 0, "aunt", "duck", "emu");

// console.log(pets);

// const persons = ["ali", "adnan" , "shabaz", "owais", "hamza"]

// persons.splice(5, 0, "rao", "rana",)

// console.log(persons);


// const persons2 = ["ali", "adnan" , "shabaz", "owais", "hamza"]

// persons2.splice(2, 2, "rao", "rana",)

// console.log(persons2);


// const persons3 = ["ali", "adnan" , "shabaz", "owais", "hamza"]

// persons3.splice(3, 1, "rao", "rana",)

// console.log(persons3);

// const persons4 = ["ali", "adnan" , "shabaz", "owais", "hamza"]

// persons4.splice(0, 5, "rao", "rana",)

// console.log(persons4);

// const persons5 = ["ali", "adnan" , "shabaz", "owais", "hamza"]

// persons5.splice(0, 3, "rao", "rana",)

// console.log(persons5);




// const newmethod = ["b","c","b","r"]


// const slice = newmethod.slice(1,2)

// console.log(slice);

// for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
//  }


// () paranthises
// ; terminate

// const user = prompt("write a number")


// if (user == 0){
//     document.write("your number is equal to 0")
// }else{
//     if (user > 0){
//         document.write("your number is postive")
//     }else{
//         document.write("your number is negetive")
//     }

// }


// const a = prompt("What is your mobile number?");
// if (a.startsWith("+92")) {
//     document.write("Congratulations! You have a Pakistani number.");
// } else {
//     document.write("Sorry, you do not have a Pakistani number.");
// }


const a = prompt("What is your mobile number?");

// Remove all non-numeric characters except +
const cleanedNumber = a.replace(/[^+\d]/g, "");

if (cleanedNumber.startsWith("+92")) {
    document.write("Congratulations! You have a Pakistani number.");
} else {
    document.write("Sorry, you do not have a Pakistani number.");
}







