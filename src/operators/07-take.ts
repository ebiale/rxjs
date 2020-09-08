import { of } from "rxjs";
import { take } from "rxjs/operators";

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    take(3)  // triggers the complete
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
})