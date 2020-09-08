import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const numbers = [1,2,3,4,5,6];

const totalReducer = (acc, curr) => {
    return acc + curr;
}


const total = numbers.reduce(totalReducer, 0);
console.log('total', total);


interval(1000).pipe(
    take(7),
    tap (console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('completed')
});