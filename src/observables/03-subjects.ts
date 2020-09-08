import { Observable, Observer, Subscriber, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {  // instead of define it into the subscribe
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.info('completed')
}

const interval$ = new Observable<number>( subs => {
    const interval = setInterval( () => subs.next( Math.random() ), 1000 );

    return () => {
        clearInterval(interval);
        console.log('intelval destroyed');
    };
});

// const subs1 = interval$.subscribe( rnd => console.log('sub1', rnd) );
// const subs2 = interval$.subscribe( rnd => console.log('sub2', rnd) );

/**
 * 1- multicast
 * 2- observer
 * 3- have next, err, complete
 */
const subject$ = new Subject();

const subscription = interval$.subscribe(subject$)

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);

    subject$.complete();
    subscription.unsubscribe();
}, 3500);