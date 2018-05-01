'use strict'

import {MailApi} from '../infrastructure-notifier/MailApi'
import {SmsApi} from '../infrastructure-notifier/SmsApi'

export class Notifier {

    constructor(private mailRepository: MailApi, private smsRepository: SmsApi) {        
    }

    public notify(msg: string): void {
        if (msg.length > 10) {
            this.mailRepository.sendEMail("dummy@gmail.com", "Subject", msg);
        } else {
            this.smsRepository.sendSms("123456890", msg);
        }
    }
}