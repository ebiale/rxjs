import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1,5)
//     .pipe(map<number, number>(val => val * 10))
//     .subscribe(console.log);


// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
//     map(event => event.code)
// );

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('code')
);

const keyupPluck2$ = keyup$.pipe(
    pluck('target','tagName')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Pressed key')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupPluck2$.subscribe(code => console.log('pluck2', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));
