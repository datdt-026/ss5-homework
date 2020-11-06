let input = prompt("Input everything ").split();
let check = [];

for (let i = 0; i < input.length; i++) {
    if (check[input[i]]) {
        check[input[i]]++;
    } else {
        check[input[i]] = 1;
    }
}

console.log(check);