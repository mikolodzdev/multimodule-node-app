'use strict'

export class SmsApi {
    sendSms(receiver: string, body: string): void {
        console.log('Sending SMS ' + receiver + body);
    }
}