import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || '';
const MONGO_CLUSTER: string = process.env.MONGO_CLUSTER || '';

const MONGO_URI: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_CLUSTER}/`;

const SERVER_PORT: number = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1337;

export const config = {
  mongo: {
    url: MONGO_URI,
  },
  server: {
    port: SERVER_PORT,
  },
};
