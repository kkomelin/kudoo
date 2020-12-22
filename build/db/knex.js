"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var config_1 = __importDefault(require("./config"));
var environment = process.env.ENVIRONMENT || 'development';
var config = config_1.default[environment];
exports.default = knex_1.default(config);
