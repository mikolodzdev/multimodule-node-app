import { Subscriber } from './../middleware/Subscriber';
import { Notifier } from '../domain-notifier/Notifier';

export class NotificationSubscriber implements Subscriber {

    constructor(private notifier: Notifier) {
    };

    onMessage(msg: string, data: string) {
        console.log('NotificationSubscriber: handling message ' + data)
        this.notifier.notify(data);
    }
}