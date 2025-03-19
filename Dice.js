function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateDieRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let maxNumber = null;

    while (true) {
        let roll = rollDie();
        rollCounts[roll]++;

        if (rollCounts[roll] === maxRolls) {
            maxNumber = roll;
            break;
        }
    }

    let minNumber = Object.keys(rollCounts).reduce((a, b) =>
        rollCounts[a] < rollCounts[b] ? a : b
    );

    console.log("Final Roll Counts:", rollCounts);
    console.log("Number that reached 10 times first:", maxNumber);
    console.log("Number with the minimum rolls:", minNumber);
}

// Run the simulation
simulateDieRolls();

