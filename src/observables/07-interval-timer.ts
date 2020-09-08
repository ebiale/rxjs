import { interval, Observer, timer } from "rxjs"


const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
}

const in5Secs = new Date(); //now
in5Secs.setSeconds(in5Secs.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(0); // execute it as soon as possible
// const timer$ = timer(2000, 1000); // execute it after 2000ms and every 1000ms
const timer$ = timer(in5Secs); // schedule an specific date


console.log('init');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('end');