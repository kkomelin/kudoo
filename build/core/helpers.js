"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ephemeralMessage = void 0;
var ephemeralMessage = function (text) {
    return {
        text: text,
        response_type: 'ephemeral',
        replace_original: true
    };
};
exports.ephemeralMessage = ephemeralMessage;
