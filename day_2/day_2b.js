function intCode(arr, step) {
    code = arr[step]
    if (code == 99) { return arr }
    operants = [arr[arr[step + 1]], arr[arr[step + 2]]]
    destination = arr[step + 3]
    arr[destination] = code == 1 ? operants[0] + operants[1] : operants[0] * operants[1]
    return intCode(arr, step + 4)
}

const arr = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 9, 19, 1, 19, 5, 23, 2, 23, 13, 27, 1, 10, 27, 31, 2, 31, 6, 35, 1, 5, 35, 39, 1, 39, 10, 43, 2, 9, 43, 47, 1, 47, 5, 51, 2, 51, 9, 55, 1, 13, 55, 59, 1, 13, 59, 63, 1, 6, 63, 67, 2, 13, 67, 71, 1, 10, 71, 75, 2, 13, 75, 79, 1, 5, 79, 83, 2, 83, 9, 87, 2, 87, 13, 91, 1, 91, 5, 95, 2, 9, 95, 99, 1, 99, 5, 103, 1, 2, 103, 107, 1, 10, 107, 0, 99, 2, 14, 0, 0]

const perms = []
for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        perms.push([i, j])
    }
}

const output = 19690720

for (let i = 0; i < perms.length; i++) {
    let prog = arr
    prog[1] = perms[i][0]
    prog[2] = perms[i][1]
    if (intCode(arr)[0] === output) {
        break;
    }
}

// console.log(JSON.stringify(intCode(arr, 0)[0]))