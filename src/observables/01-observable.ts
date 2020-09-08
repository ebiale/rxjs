import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {  // instead of define it into the subscribe
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.info('completed')
}

// const obs$ = Observable.create(); /// another way to create obs.
const obs$ = new Observable<string>( subs => {
    subs.next('hi');
    subs.next('world');

    // const a = undefined;   // error
    // a.name = 'Elena';

    subs.complete();
    subs.next('again'); // will never been called
});


obs$.subscribe(observer);


// obs$.subscribe(
//     val => console.log('next: ', val),
//     err => console.warn('error: ', err),
//     () => console.info('completed') // completed
// );