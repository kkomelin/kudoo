"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../core/model"));
var Kudos = /** @class */ (function (_super) {
    __extends(Kudos, _super);
    function Kudos() {
        var _this = _super.call(this, 'kudos') || this;
        _this.id = 0;
        _this.sender_user_id = '';
        _this.sender_user_name = '';
        _this.receiver_user_id = '';
        _this.receiver_user_name = '';
        _this.message = '';
        _this.channel_name = '';
        return _this;
    }
    return Kudos;
}(model_1.default));
exports.default = Kudos;
