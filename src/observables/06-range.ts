import { of, range, asyncScheduler } from "rxjs";

// const src$ = of(1,2,3,4,5,6);
const src$ = range(1,6, asyncScheduler);

console.log('init');
src$.subscribe(console.log);
console.log('end');