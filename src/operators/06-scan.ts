import { from } from "rxjs";
import { scan, reduce, map } from "rxjs/operators";

const numbers = [1,2,3,4,5,6];

const totalReducer = (acc, curr) => acc + curr;

from(numbers).pipe(
    reduce(totalReducer, 0)
)
.subscribe(console.log);

from(numbers).pipe(
    scan(totalReducer, 0)
)
.subscribe(console.log);

// Redux

interface User {
    id?: string;
    autenticated?: boolean;
    token?: string;
    age?: number;
}
const user: User[] = [
    {id: 'Elena', autenticated: false, token: null},
    {id: 'Elena', autenticated: true, token: 'ABC'},
    {id: 'Elena', autenticated: true, token: 'ABC123'}
];

const state$ =  from(user).pipe(
    scan<User>( (acc, curr) => {
        return {...acc, ...curr}
    }, {age: 40})
);

const id$ = state$.pipe(
    map(state => state)
)

id$.subscribe(console.log);