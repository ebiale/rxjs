import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([1,2,3,4,5,6]); // sends 1 array
// const obs$ = of(...[1,2,3,4,5,6],6,7,8); // sends the content of the array and adds numbers
const obs$ = of([1,2],{a:1, b:2}, function(){}, true, Promise.resolve(true)); // is important to declare the type of 'of' cause it can receive any type of elements, and variable types.

//this obs is sync

console.log('start');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Finished')
);
console.log('end');