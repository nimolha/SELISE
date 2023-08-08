const arr1 = [2, 4, 8, 10, 14];

// Create a new array to store the result
const newArr = [];

// Loop through the elements of arr1
for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]); // Add the existing element

    // Check if the next element is missing and it's not the last element
    if (i < arr1.length - 1 && arr1[i + 1] - arr1[i] > 2) {
        for (let j = arr1[i] + 2; j < arr1[i + 1]; j += 2) {
            newArr.push(j); // Add the missing odd numbers
        }
    }
}

console.log(newArr);