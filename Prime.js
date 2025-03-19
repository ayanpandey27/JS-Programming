function primeFactors(n) {
    let factors = [];
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n); 
    return factors;
}

let num = 100; 
let primeFactorArray = primeFactors(num);
console.log(`Prime Factors of ${num}:`, primeFactorArray);

