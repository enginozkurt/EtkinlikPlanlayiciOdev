"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BootCamp = void 0;
var Etkinlik_1 = require("./Etkinlik");
var BootCamp = /** @class */ (function (_super) {
    __extends(BootCamp, _super);
    function BootCamp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BootCamp.prototype, "toView", {
        get: function () {
            return "Ekinlik Adi: ".concat(this.etkinlikAdi, " \nEtkinlik Aciklama : ").concat(this.etkinlikAciklama, " \nEtkinlik Icerik : ").concat(this.etkinlikIcerik, " \nBaslangic Tarihi : ").concat(this.etkinlikBaslangic, " \nBitis Tarihi : ").concat(this.etkinlikBitis, " \nEtkinlik Kapasite : ").concat(this.etkinlikKapasite);
        },
        enumerable: false,
        configurable: true
    });
    return BootCamp;
}(Etkinlik_1.Etkinlik));
exports.BootCamp = BootCamp;
