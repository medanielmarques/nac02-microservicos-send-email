import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGO_URI;

let client;
let db;

const mongoConnection = async () => {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db('nac02').collection('email');
};

export { client, db, mongoConnection };
