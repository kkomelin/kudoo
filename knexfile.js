require('dotenv').config();

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   },
  // migrations: {
  //   directory: __dirname + '/db/migrations',
  // },
  // seeds: {
  //   directory: __dirname + '/db/seeds'
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
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
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
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
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
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
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
};
