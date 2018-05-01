import { Subscriber } from './../middleware/Subscriber';

export class GreetingSubscriber implements Subscriber {

    constructor() { 
    };

    onMessage(msg: string, data: string) {
        console.log('GreetingSubscriber: handling message ' + data)
    }
    
}