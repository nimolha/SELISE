const price = [
    { "monthly": 200, "oneTime": 300, "total": 5000 },
    { "monthly": 400, "oneTime": 300, "total": 700 },
    { "monthly": 700, "oneTime": 1000, "total": 300 },
    { "monthly": 630, "oneTime": 1100, "total": 600 },
    { "monthly": 100, "oneTime": 400, "total": 300 },
    { "monthly": 2000, "oneTime": 900, "total": 3000 },
    { "monthly": 200, "oneTime": 900, "total": 300 }
];

// a. Find a monthly price of 200 and a total of 300.
const foundItem = price.find(item => item.monthly === 200 && item.total === 300);
console.log("Found item:", foundItem);

// b. Filter total price greater than 700.
const totalPriceGreaterThan700 = price.filter(item => item.total > 700);
console.log("Total price greater than 700:", totalPriceGreaterThan700);

// c. Find a monthly price of 630 and a total of 600 and print a oneTime price.
const itemWithMonthly630Total600 = price.find(item => item.monthly === 630 && item.total === 600);
if (itemWithMonthly630Total600) {
    console.log("OneTime price:", itemWithMonthly630Total600.oneTime);
} else {
    console.log("Item not found.");
}

// d. Add all monthly prices and print the total.
const totalMonthlyPrice = price.map(item => item.monthly).reduce((acc, curr) => acc + curr, 0);
console.log("Total monthly price:", totalMonthlyPrice);
