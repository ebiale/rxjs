import { of, fromEvent, interval, from } from 'rxjs';
import { take, first, tap, map, takeWhile, takeUntil, skip, distinct } from "rxjs/operators";

const numbers$ = of(1,1,1,1,2,3,4,5,6,4,3,6,7,8,2,1)


numbers$.pipe(
    distinct()
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
});

interface Character {
    name: string
}

const characters: Character[] = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
    {name: 'a'},
    {name: 'd'},
    {name: 'a'},
    {name: 'a'},
    {name: 'ag'},
    {name: 'b'},
    {name: 'ha'},
    {name: 'a'},
    {name: 'a'},
    {name: 'a'},
    {name: 'a'}
]

from(characters).pipe(
    distinct(val => val.name)
)
.subscribe(console.log);