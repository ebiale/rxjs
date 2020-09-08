

// we can create a setTimeout or setInterval with asyncScheduler

import { asyncScheduler } from "rxjs";

const greetings = () => console.log('Hello world');
const greetings2 = name => console.log(`Hello ${name}`);
const greetings3 = ({name, surname}) => console.log(`Hello ${name} ${surname}`);


// SET TIMEOUT
asyncScheduler.schedule(greetings, 2000);
asyncScheduler.schedule(greetings2, 2000, 'Elena');
asyncScheduler.schedule(greetings3, 2000, {name: 'Elena', surname: 'Bialyk'});


// SET INTERVAL
const subs = asyncScheduler.schedule(function(state) {  // cannot receive a lamda function ()=> {}
    console.log('state', state);

    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {     // another way to cancelate the subscription
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() =>subs.unsubscribe(), 6000);