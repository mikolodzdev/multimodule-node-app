'use strict'

// TODO move Api interfaces into domain in order not to import infra parts.
import {MailApi} from './MailApi'
import {SmsApi} from '../infrastructure-notifier/SmsApi'

export class Notifier {

    constructor(private mailRepository: MailApi, private smsRepository: SmsApi) {        
    }

    public notify(msg: string): void {
        if (msg.length > 10) {
            console.log('Message longer then 10 characters -> sending E-Mail');
            this.mailRepository.sendEMail("dummy@gmail.com", "Subject", msg);
        } else {
            console.log('Message shorter then 10 characters -> sending SMS');
            this.smsRepository.sendSms("123456890", msg);
        }
    }
}