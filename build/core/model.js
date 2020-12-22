"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("../db/knex"));
var Model = /** @class */ (function () {
    function Model(tableName) {
        this.tableName = tableName;
    }
    Model.prototype.insert = function (record) {
        return knex_1.default(this.tableName)
            .insert(record);
    };
    Model.prototype.all = function () {
        return knex_1.default.select().from(this.tableName);
    };
    Model.prototype.stats = function () {
        return knex_1.default.select('receiver_user_name as user')
            .count('* as kudos')
            .from(this.tableName)
            .groupBy('receiver_user_id')
            .orderBy('kudos', 'desc');
    };
    return Model;
}());
exports.default = Model;
