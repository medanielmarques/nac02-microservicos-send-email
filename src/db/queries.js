import { db } from './mongo';

export const insertEmail = async (email) => {
  await db.insertOne(email);
};

export const listAllEmails = async () => {
  const emails = await db.find().toArray();
  return emails;
};

export const listReceivedEmails = async (email) => {
  const emails = await db.find({ to: email }).toArray();
  return emails;
};
