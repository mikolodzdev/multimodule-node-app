"use strict";

export class MailApi {
    sendEMail(receiver: string, subject: string, body: string) {
        console.log('Sending EMail ' + receiver + subject + body)
    }
}