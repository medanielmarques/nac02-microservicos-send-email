import { listAllEmails } from '../db/queries';

export class ListAllEmails {
  async execute(request, response) {
    const emails = await listAllEmails();
    return response.status(200).json(emails);
  }
}
