import { resolve } from 'app-root-path';
import dotenv from 'dotenv';
import Knex from 'knex';

var configPath = resolve('/.env');

dotenv.config({ 
  path: configPath
});

export interface IKnexConfigs {
  [key: string]: Knex.Config;
};

const knexConfigs: IKnexConfigs = {
   // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   },
  // migrations: {
  //   directory: __dirname + '/migrations',
  // },
  // seeds: {
  //   directory: __dirname + '/seeds'
  // },
  //   useNullAsDefault: true
  // },

  development: {
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname +  '/seeds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: __dirname + '/tests/seeds'
    }
  }
}

export default knexConfigs;
