import { MailApiImpl } from './../infrastructure-notifier/MailApiImpl';
import { SmsApi } from './../infrastructure-notifier/SmsApi';
import { MailApi } from './MailApi';
import { Notifier } from './Notifier';

import { expect } from 'chai';
import 'mocha';
import { mock, instance, when, verify, anything } from 'ts-mockito';


describe('Notifier.notify', () => {

    it('should send E-Mail if message longer than 10 characters', () => {
        let mailApiMock: MailApi = mock(MailApiImpl);
        let smsApiMock: SmsApi = mock(SmsApi);

        new Notifier(instance(mailApiMock), instance(smsApiMock))
            .notify("Long messaage over 10 characters...");

        verify(smsApiMock.sendSms(anything(), anything())).never();
        verify(mailApiMock.sendEMail(anything(), anything(), anything())).called();
    });

    it('should send SMS if message shorter than 10 characters', () => {
        let mailApiMock: MailApi = mock(MailApiImpl);
        let smsApiMock: SmsApi = mock(SmsApi);

        new Notifier(instance(mailApiMock), instance(smsApiMock))
            .notify("Short msg");

        verify(mailApiMock.sendEMail(anything(), anything(), anything())).never();
        verify(smsApiMock.sendSms(anything(), anything())).called();
    });
});