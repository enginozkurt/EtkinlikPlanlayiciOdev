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
exports.Ogrenci = void 0;
var Kisi_1 = require("./Kisi");
var Ogrenci = /** @class */ (function (_super) {
    __extends(Ogrenci, _super);
    function Ogrenci() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Ogrenci.prototype, "ogrenciNo", {
        get: function () {
            return this._ogrenciNo;
        },
        set: function (ogrenciNo) {
            this._ogrenciNo = ogrenciNo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ogrenci.prototype, "toView", {
        get: function () {
            return "Id : ".concat(this.id, "\nTcKimlik : ").concat(this.tcKimlik, "\nAdi : ").concat(this.name, "\nSoyadi: ").concat(this.surName, "\nMail : ").concat(this.mail, " \nTelefon: ").concat(this.phone, "\nOgrenciNo ").concat(this._ogrenciNo, "\n");
        },
        enumerable: false,
        configurable: true
    });
    return Ogrenci;
}(Kisi_1.Kisi));
exports.Ogrenci = Ogrenci;
