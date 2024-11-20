// Declare a function fullName and it print out your full name.
function myName() {
    console.log('My name is Fatou Binetou Gaye');

}
myName()
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    const fullName = firstName + lastName
    return fullName
}
console.log(fullName("Fatou Binetou", " Gaye"));
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(10, 30));
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    const area = length * width
    return area
}
console.log(areaOfRectangle(5, 2));
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    const perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(5, 4));
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    const volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(5, 2, 3));
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r, r) {
    const area = 3.14 * r * r
    return area

}
console.log(areaOfCircle(2, 2));
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(weight, height) {
    const bodyMassIndex = weight / (height * height);

    if (bodyMassIndex < 18.5) {
        console.log("Underweight");
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
        console.log("Normal weight");
    } else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9) {
        console.log("Overweight");
    } else if (bodyMassIndex >= 30) {
        console.log("Obese");
    }

    return bodyMassIndex;
}

console.log(bmi(52, 1.65));
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    let season;
    if (month === "decembre" || month === "janvier" || month === "février") {
        season = "hiver"
    } else if (month === "septembre" || month === "novembre" || month === "octobre") {
        season = "automne"
    }
    else if (month === "juin" || month === "juillet" || month === "aout") {
        season = "été"
    }
    else if (month === "mars" || month === "avril" || month === "mai") {
        season = "printemps"
    }
    return season
}
console.log(checkSeason("mai"));
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);


    }
}
printArray([1, 2, 3]);
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const date = new Date()
    const day = date.getDate()
    console.log(day);
    const month = date.getMonth()
    console.log(month);
    const year = date.getFullYear()
    console.log(year);
    const time = date.getHours()
    console.log(time);
    const minutes = date.getMinutes()
    const dateTime = `${day}/${month}/${year} ${time}:0${minutes}`
    console.log(dateTime);






}
showDateTime();
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}
capitalizeArray(["sea", "beach", "moon", "sun", "bird", "tree", "flowers"])

// Write a function which takes any number of arguments and return the sum of the arguments
function sum(a, b, c) {
    return a + b + c
}
sum(console.log(2, 3, 4))
// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]

    }
    console.log(sum);

    return sum
}
sumOfArrayItems([1, 2, 4, 6])
// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.length < 5) {
            console.log('not found');

        } else {
            array[5] = "Orange"
        }
    }
    return array
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
// Write a functions which checks if all items are unique in the array.
function check(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false; // Trouvé un doublon
            }
        }
    }
    return true; // Aucun doublon trouvé
}

console.log(check([1, 2, 2])); // false
console.log(check([1, 2, 3])); // true

