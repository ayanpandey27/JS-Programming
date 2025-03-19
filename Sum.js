function findTriplets(arr) {
    arr.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicate elements

        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++; // Skip duplicates
                while (left < right && arr[right] === arr[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Example Input
let sampleArray = [-1, 0, 1, 2, -1, -4];
console.log("Triplets that sum to zero:", findTriplets(sampleArray));

