import { of, fromEvent } from "rxjs";
import { take, first, tap, map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    // takeWhile(({y}) => y > 150)
    takeWhile(({y}) => y > 150, true)  // indludes the first wroker condition 
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
});