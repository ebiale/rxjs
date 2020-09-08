import { of, fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first(event => event.clientX >=150)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
});