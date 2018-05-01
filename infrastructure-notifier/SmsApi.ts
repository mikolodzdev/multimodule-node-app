'use strict'

export class SmsApi {
    sendSms(receiver: string, body: string) {
        console.log('Sending SMS ' + receiver + body);
    }
}