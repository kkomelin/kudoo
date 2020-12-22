import dotenv from 'dotenv';
import Knex from 'knex';
dotenv.config();

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
      host : '127.0.0.1',
      database: 'kudoo',
      user:     'root',
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'kudoo',
      user:     'username',
      password: 'password'
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
      database: 'kudoo',
      user:     'username',
      password: 'password'
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
      directory: './tests/seeds'
    }
  }
}

export default knexConfigs;
