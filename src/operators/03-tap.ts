import { range } from "rxjs";
import { tap, map } from "rxjs/operators";


const nums$ = range(1,5);

nums$.pipe(
    tap(x => console.log('before', x)),
    map(x => x * 10),
    tap({
        next: x => console.log('after', x),
        complete: () => {console.log('Ended')}
    }),
)
.subscribe(val => console.log('subs', val));