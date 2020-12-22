"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bolt_1 = require("@slack/bolt");
var dotenv_1 = __importDefault(require("dotenv"));
var core_1 = __importDefault(require("./core/core"));
var helpers_1 = require("./core/helpers");
var kudos_1 = __importDefault(require("./models/kudos"));
dotenv_1.default.config();
// Create a Bolt Receiver.
var receiver = new bolt_1.ExpressReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET || ''
});
var app = new bolt_1.App({
    token: process.env.SLACK_BOT_TOKEN,
    // signingSecret: process.env.SLACK_SIGNING_SECRET,
    receiver: receiver
});
app.command('/kudoo', function (_a) {
    var command = _a.command, ack = _a.ack, respond = _a.respond;
    return __awaiter(void 0, void 0, void 0, function () {
        var core, result, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    core = new core_1.default();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 7]);
                    return [4 /*yield*/, ack()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, core.processCommand(command)];
                case 3:
                    result = _b.sent();
                    return [4 /*yield*/, respond(helpers_1.ephemeralMessage(result))];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    e_1 = _b.sent();
                    // @todo: better handle errors. Log them to the database or some external service.
                    console.log(e_1);
                    return [4 /*yield*/, respond(helpers_1.ephemeralMessage("An error has occurred. Please contact " + process.env.APP_NAME + " app developer."))];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
});
// Other web requests are methods.
receiver.router.get('/stats', function (req, res) {
    var kudos = new kudos_1.default();
    kudos.stats()
        .then(function (records) {
        res.type('application/json');
        res.send(records);
        res.end();
    })
        .catch(function (error) {
        console.error(error);
        res.status(404)
            .send('Not Found')
            .end();
    });
});
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var port;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                port = process.env.PORT || 3000;
                return [4 /*yield*/, app.start(port)];
            case 1:
                _a.sent();
                console.log("\u26A1\uFE0F Server is listening on port " + port + ".");
                return [2 /*return*/];
        }
    });
}); })();
