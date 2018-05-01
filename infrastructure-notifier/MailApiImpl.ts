import { MailApi } from './../domain-notifier/MailApi';
"use strict";

export class MailApiImpl implements MailApi {
    sendEMail(receiver: string, subject: string, body: string): void {
        console.log('Sending EMail ' + receiver + subject + body)
    }
}