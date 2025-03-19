function findRepeatedDigits() {
    let repeated = [];
    for (let i = 10; i <= 99; i++) {
        let str = i.toString();
        if (str[0] === str[1]) {
            repeated.push(i);
        }
    }
    return repeated;
}

let repeatedNumbers = findRepeatedDigits();
console.log("Numbers with repeated digits:", repeatedNumbers);

