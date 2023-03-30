import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  },
  wallet: String
});

export default mongoose.model('users', schema);
