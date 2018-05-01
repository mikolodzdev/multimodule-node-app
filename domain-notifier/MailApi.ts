"use strict";

export interface MailApi {
    sendEMail(receiver: string, subject: string, body: string): void;
}