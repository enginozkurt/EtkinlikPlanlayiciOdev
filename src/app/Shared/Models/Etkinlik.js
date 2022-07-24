"use strict";
exports.__esModule = true;
exports.Etkinlik = void 0;
var Etkinlik = /** @class */ (function () {
    function Etkinlik() {
    }
    Object.defineProperty(Etkinlik.prototype, "etkinlikKapasite", {
        get: function () {
            return this._etkinlikKapasite;
        },
        set: function (value) {
            this._etkinlikKapasite = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etkinlik.prototype, "etkinlikAdi", {
        get: function () {
            return this._etkinlikAdi;
        },
        set: function (etkinlik) {
            this._etkinlikAdi = etkinlik;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etkinlik.prototype, "etkinlikAciklama", {
        get: function () {
            return this._etkinlikAciklama;
        },
        set: function (aciklama) {
            this._etkinlikAciklama = aciklama;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etkinlik.prototype, "etkinlikIcerik", {
        get: function () {
            return this._etkinlikIcerik;
        },
        set: function (icerik) {
            this._etkinlikIcerik = icerik;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etkinlik.prototype, "etkinlikBaslangic", {
        get: function () {
            return this._etkinlikBaslangic;
        },
        set: function (baslangic) {
            this._etkinlikBaslangic = baslangic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etkinlik.prototype, "etkinlikBitis", {
        get: function () {
            return this._etkinlikBitis;
        },
        set: function (bitis) {
            this._etkinlikBitis = bitis;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etkinlik.prototype, "id", {
        get: function () {
            if (!this._id) {
                throw new Error("Test");
            }
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Etkinlik;
}());
exports.Etkinlik = Etkinlik;
