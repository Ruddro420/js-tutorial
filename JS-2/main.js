// Condition - Result Grade System
const a = 13;
let result;

if (a >= 80 && a <= 100) {
    result = 'A+';
} else if (a >= 70 && a <= 79) {
    result = 'A';
} else if (a >= 60 && a <= 69) {
    result = 'A-';
} else if (a >= 50 && a <= 59) {
    result = 'B';
} else if (a >= 33 && a < 49) {
    result = 'C';
} else if (a >= 0 && a < 33) {
    result = 'Fail';
} else {
    result = 'Invalid score';  
}

console.log(`Your result is: ${result}`);
