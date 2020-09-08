import { of, fromEvent, interval } from 'rxjs';
import { take, first, tap, map, takeWhile, takeUntil, skip } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    skip(2),
    tap(() => console.log('this will be executed only after the 3rd time we click on the screen'))
);

const counter$ = interval(1000);

counter$.pipe(takeUntil(click$))
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
});