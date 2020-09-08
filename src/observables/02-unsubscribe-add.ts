import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<number> = {  // instead of define it into the subscribe
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.info('completed')
}

const interval$ = new Observable<number>( subs => {
    // create a counter: 1, 2, 3, 4, 5...
    
    let count = 0;
    const interval = setInterval(() => {
        subs.next(count++);
        console.log(count);
    }, 2500);

    setTimeout(() => {
        subs.complete();
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log(' --> interval cleared');
    }
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2)
    .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();  will be unsubscribed because of we added it to the subs1
    // subs3.unsubscribe();  pay attention the only completed triggered is the first one

    console.log('  ==> timeout');
}, 5000);