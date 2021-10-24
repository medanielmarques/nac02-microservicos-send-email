import { listReceivedEmails } from '../db/queries';

export class ListReceivedEmails {
  async execute(request, response) {
    const { user } = request.params;

    const emails = await listReceivedEmails(user);
    return response.status(200).json(emails);
  }
}
