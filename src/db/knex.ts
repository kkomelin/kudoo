import Knex from 'knex';
import knexConfigs from './config';

const environment: string = process.env.ENVIRONMENT || 'development';
const config: Knex.Config = knexConfigs[environment];

const instance: Knex = Knex(config);

export default instance;
