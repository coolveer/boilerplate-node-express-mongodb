import * as config from './config';
import * as Mongoose from 'mongoose';
let database: Mongoose.Connection;

(async () => {
  await config.initiate();
})();

// let user = process.env.USERNAME;
// let pass = process.env.PASSWORD;
// let host = process.env.HOST;
// let PORT = process.env.MONGO_PORT;
// let DB_NAME = process.env.DB_NAME;

export const connect = () => {
  // add your own uri below
  const uri = `mongodb://127.0.0.1:27017/typec_mongo`;
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
