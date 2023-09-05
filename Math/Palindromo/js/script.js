function Palindromo(arr) {
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(Palindromo([1, 2, 3, 5, 4]));
console.log(Palindromo([1, 2, 3, 2, 1]));