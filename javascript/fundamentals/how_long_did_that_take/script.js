// Let's start with a prototype function to calculate if a number is prime...
// and then see how long it takes to find the 10,000th prime number.
Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2;
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// The 10,000th prime number is 104729
// This took 39761.19766700268 milliseconds to run


// recursive
const { performance } = require('perf_hooks');
const start2 = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
console.log(`This took ${performance.now() - start2} milliseconds to run`);
// This took 2.4309160113334656 milliseconds to run
// iterative
const { performance } = require('perf_hooks');
const start3 = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(20));
console.log(`This took ${performance.now() - start3} milliseconds to run`);
// This took 1.7777079939842224 milliseconds to run
// Iterative was faster


const { performance } = require('perf_hooks');
const start4 = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
function reversed2(str) {
    let reversed = "";
    const l = str.length;
    for(let i = l-1; i >= 0; i--) {
        reversed = `${reversed}${str[i]}`;
    }
    return reversed;
}
console.log(reversed2(story))
console.log(reversed2)
console.log(`This took ${performance.now() - start4} milliseconds to run`);