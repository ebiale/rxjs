import { from } from 'rxjs';
import { distinctUntilKeyChanged } from "rxjs/operators";


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
    distinctUntilKeyChanged('name')
)
.subscribe(console.log);