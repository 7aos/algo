'use strict';

const size = 8;
const abs = Math.abs;

const legal = function(prefix, row, col) {
    return prefix.every((pos, idx) => {
        return !((col === pos) || abs(row-idx) === abs(col-pos));
    });
};

const compute = function(iteration) {
    if(iteration === 0) {
        return Array(size).fill(0).map((_, i) => [i]);
    };

    const potentials = compute(iteration-1);
    const result = [];
    potentials.forEach((potential) => {
        for(let i=0; i<size; i++) {
            if (legal(potential, iteration, i)) {
                const solution = potential.concat([i]);
                result.push(solution);
            }
        }
    });
    return result;
};

const print = function(solution) {
    solution.forEach((value) => {
        let str = '';
        for(let i=0; i<size; i++) {
            if (i == value) {
                str += 'x';
            } else {
                str += '-';
            }
        }
        console.log(str);
    });
    console.log('\n');
};

const solutions = compute(size-1);
solutions.forEach((solution) => {
    print(solution);
});
