'use strict'

import {env} from './config/env';
import * as Express from 'express';
import {Greeter} from './domain-greeter/Greeter';
import {Notifier} from './domain-notifier/Notifier';
import {GreetingSubscriber} from './infrastructure-greeter/GreetingSubscriber';
import {NotificationSubscriber} from './infrastructure-notifier/NotificationSubscriber';
import {MailApiImpl} from './infrastructure-notifier/MailApiImpl';
import {SmsApi} from './infrastructure-notifier/SmsApi';
import {RestApi} from './infrastructure-greeter/RestApi';
import {PubSub} from './middleware/PubSub';

let app = Express();

new RestApi( new Greeter()).initRoutes(app);

let pubsub = new PubSub();
pubsub.subscribe(new NotificationSubscriber(new Notifier(new MailApiImpl(), new SmsApi())));
pubsub.subscribe(new GreetingSubscriber());

app.listen(env.server.PORT);
console.log('Application up and running. Listening to port ' + env.server.PORT);

// dirty tests:
// ----------------
console.log(new Greeter().greet('myname', 'EN'));

setTimeout(function() {pubsub.push('hello world!')}, 1000);

console.log('End of file.');