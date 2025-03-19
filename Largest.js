function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

function getSecondLargestAndSmallestSorted(arr) {
    arr.sort((a, b) => a - b);
    return {
        secondLargest: arr[arr.length - 2],
        secondSmallest: arr[1]
    };
}

let randomNumbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Generated Numbers:", randomNumbers);

let resultUnsorted = findSecondLargestAndSmallest([...randomNumbers]);
console.log("Second Largest (Unsorted):", resultUnsorted.secondLargest);
console.log("Second Smallest (Unsorted):", resultUnsorted.secondSmallest);

let resultSorted = getSecondLargestAndSmallestSorted([...randomNumbers]);
console.log("Sorted Numbers:", randomNumbers);
console.log("Second Largest (Sorted):", resultSorted.secondLargest);
console.log("Second Smallest (Sorted):", resultSorted.secondSmallest);

