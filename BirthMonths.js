function generateBirthMonths(numIndividuals) {
    let birthMonthMap = {};

    for (let i = 1; i <= numIndividuals; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Generate month (1-12)
        if (!birthMonthMap[month]) {
            birthMonthMap[month] = [];
        }
        birthMonthMap[month].push(`Person${i}`);
    }

    return birthMonthMap;
}

function printBirthMonthData(birthMonthMap) {
    console.log("Individuals grouped by birth month:");
    for (let month in birthMonthMap) {
        console.log(`Month ${month}:`, birthMonthMap[month]);
    }
}

// Generate and print birth months for 50 individuals
let birthMonthData = generateBirthMonths(50);
printBirthMonthData(birthMonthData);

