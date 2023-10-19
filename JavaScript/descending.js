function bubbleSortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an array of numbers (comma-separated): ', (input) => {
    const arr = input.split(',').map(item => parseInt(item.trim()));
    bubbleSortDescending(arr);
    console.log(`Sorted array in descending order: ${arr.join(', ')}`);
    rl.close();
});
