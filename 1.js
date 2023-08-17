// Declare an empty array
let monthsArray = [];

// Using a for loop and push() to add months
for (let i = 0; i < 6; i++) {
    switch (i) {
        case 0:
            monthsArray.push("January");
            break;
        case 1:
            monthsArray.push("February");
            break;
        case 2:
            monthsArray.push("March");
            break;
        case 3:
            monthsArray.push("April");
            break;
        case 4:
            monthsArray.push("May");
            break;
        case 5:
            monthsArray.push("June");
            break;
    }
}

console.log(monthsArray);
