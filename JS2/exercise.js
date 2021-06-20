//CHAPTER 2==============================================
var sym = "#"
var char = "#";
while (char.length <= 7) {
    console.log(char)
    char += sym;
};
//или как в книге
for (let line = "#"; line.length < 8; line += "#")
console.log(line);
//--------------------------

var x = 1;
while (x <= 100) {
    console.log(x)
    x++;
    if ((x % 5 == 0) && (x % 3 == 0)) {
        console.log("FizzBuzz");
        x++;
    } else if (x % 3 == 0) {
        console.log("Fizz");
        x++;
    } else if (x % 5 == 0) {
        console.log("Buzz");
        x++;
    } 
};
//или как в книге
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
//--------------------------

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
//=======================================================
//CHAPTER 3==============================================
function min(a, b) {
    if (a === b) {
        return 0
    }
    else if (a > b) {
        return b
    } else {
        return a
    }
};
console.log(min(5, 10));
console.log(min(0, -10));
//-----------------------------
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(51));
console.log(isEven(50));
//-----------------------------
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
        counted += 1;
        }
    }
    return counted;
}
function countBs(string) {
    return countChar(string, "B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//Chapter 4==============================================
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
};
function sum(array) {
let total = 0;
for (let value of array) {
    total += value;
}
return total;
}
console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
//-------------------------------------------
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
//------------------------------------------
