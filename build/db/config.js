"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
var knexConfig = {
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
            host: '127.0.0.1',
            database: 'kudoo',
            user: 'root',
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
            user: 'username',
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
            user: 'username',
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
};
exports.default = knexConfig;
