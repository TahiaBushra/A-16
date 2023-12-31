"use strict"

// // Objects

// // Example-1
// // const student = {
// //     fullName: "Mimi",
// //     birthYear: 2003,
// //     city: "Dhaka",
// //     isDeveloper: true,
// //     favoriteSubject: ["English", "Math", "ICT"],
// // };

// // // Accessing Properties
// // console.log(student.favoriteSubject[1]);     // Dot Notation
// // console.log(student["favoriteSubject"][0]);  // Bracket  Notation

// // // Mutate or Modify Properties
// // student.fullName = "Mimi Yasir";
// // student.favoriteSubject[0] = "Physics";
// // student.favoriteSubject[student.favoriteSubject.length - 1] = "Psychology ";

// // // Mutated Result
// // console.log(student.fullName);
// // console.log(student.favoriteSubject);

// // // Add New Property
// // student.hobby = "Gardening";
// // student.siblings = 4;

// // // Add Result
// // console.log(student);

// // // Delete Properties
// // delete student.fullName;

// // // Deleted Result
// // console.log(student);


// // // Object Seal
// // Object.seal(student);   // Modify is possible but can't add any properties

// // // Mutate or Modify Properties
// // student.fullName = "Mimi Karim";
// // student.favoriteSubject[0] = "Chemistry";
// // student.favoriteSubject[student.favoriteSubject.length - 1] = "Bangla";

// // // Mutated Result
// // console.log(student.fullName);
// // console.log(student.favoriteSubject);

// // // Add New Property
// // student.hobby = "Sleeping";
// // student.siblings = 5;

// // // Add Result
// // console.log(student);

// // // Object Freeze
// // Object.freeze(student);   // Can't add or modify any properties

// // // Mutate or Modify Properties
// // student.fullName = "Mimi Akter";
// // student.favoriteSubject[0] = "Social Studies";
// // student.favoriteSubject[student.favoriteSubject.length - 1] = "Accounting";

// // // Mutated Result
// // console.log(student.fullName);
// // console.log(student.favoriteSubject);

// // // Add New Property
// // student.hobby = "Sleeping";
// // student.siblings = 5;

// // // Add Result
// // console.log(student);

// // Methods Inside Objects

// // Exaple-1
// const programmingLang = {
//     langName: "Java Script",
//     libraries: ["React", "JQuery"],
//     frameworks: {
//         angular: {
//             learningCurve: "Hard", architecture: "Modular"
//         },
//         vue: {
//             learningCurve: "Medium", architecture: "MVC"
//         },
//     },
// };
// console.log(programmingLang.frameworks.angular.learningCurve);

// // Calc Funtion
// const student1 = {
//     fullName: "Mimi",
//     birthYear: 2003,
//     calcAge: function () {
//         return 2023 - this.birthYear;
//     },
// };
// console.log(student1.calcAge());

// const student2 = student1;

// console.log(student2);

// // Mutate or Modify Properties
// student2.fullName = "Mimi Sultana";

// // Mutated Result
// console.log(student2.fullName);

// // Add New Property
// student2.hobby = "Sleeping";
// student2.siblings = 5;

// // Add Result
// console.log(student2);
// console.log(student1);

// Array Loop
const number = [10, 20, 30, 50];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0)
        console.log("Even", numbers[i]);
    if (number[i] % 2 !== 0)
        console.log("Odd", numbers[i]);
};
const myNums = [-1, 30, -20, 50, 45, -25];
for (let i = myNums.length - 1; i >= 0; i--) {
    if (myNums[i] >= 0) {
        console.log(myNums[i]);
    }
};

const animals = ["Tiger", "Lion", "Cat", "Zebra"];
for (let i = 0; i < animals; i++) {
    if (animals[i] === "Cat") {
        break;
    }
    console.log(animals[i]);
};

// While Loop
const arr = [10, 20, 30, 50];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
};