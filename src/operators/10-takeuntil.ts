import { of, fromEvent, interval } from 'rxjs';
import { take, first, tap, map, takeWhile, takeUntil } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

const counter$ = interval(1000);

counter$.pipe(takeUntil(click$))
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
});