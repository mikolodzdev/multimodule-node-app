import { Subscriber } from './Subscriber';
var PubSubJs = require('pubsub-js');

export class PubSub {

    subscribe(subscriber: Subscriber) {
        console.log('subscribing callback method...');
        PubSubJs.subscribe('all-events', function(msg, data) {
            subscriber.onMessage(msg, data);
        });
    }
    
    push(msg: string) {
        PubSubJs.publish('all-events', msg);
    }
}