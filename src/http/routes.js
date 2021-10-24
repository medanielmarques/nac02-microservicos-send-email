import { Router } from 'express';
import { ListAllEmails } from '../modules/list-all-emails';
import { ListReceivedEmails } from '../modules/list-received-emails';
import { SendEmail } from '../modules/send-email';

const mailRoutes = Router();
const sendEmail = new SendEmail();
const listAllEmails = new ListAllEmails();
const listReceivedEmails = new ListReceivedEmails();

mailRoutes.post('/send-email', sendEmail.execute);
mailRoutes.get('/list-all-emails', listAllEmails.execute);
mailRoutes.get('/list-received-emails/:user', listReceivedEmails.execute);

export { mailRoutes };
