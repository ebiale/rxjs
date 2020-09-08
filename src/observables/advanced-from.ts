import { from, of, async } from "rxjs";


const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
};


// const src$ = from([1,2,3,4,5]);
// const src$ = of(...[1,2,3,4,5]);
// const src$ = from('Elena');

const src$ = from(fetch('https://api.github.com/users/ebiale'));

// src$.subscribe(observer);

// src$.subscribe( async(resp) => {
//     console.log( await resp.json());
// })


const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();

// for (const id of myIterable) { // reading the iterable
//     console.log(id);
// }

from(myIterable).subscribe(observer);
