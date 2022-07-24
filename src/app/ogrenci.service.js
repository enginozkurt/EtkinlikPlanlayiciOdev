"use strict";
exports.__esModule = true;
exports.OgrenciService = void 0;
var OgrenciService = /** @class */ (function () {
    function OgrenciService() {
        this.ogrenciListe = [];
    }
    OgrenciService.prototype.kisiEkle = function (ogrenci) {
        this.ogrenciListe.push(ogrenci);
    };
    OgrenciService.prototype.kisiListele = function () {
        return this.ogrenciListe;
    };
    OgrenciService.prototype.getkisiById = function (id) {
        for (var _i = 0, _a = this.ogrenciListe; _i < _a.length; _i++) {
            var ogrenci = _a[_i];
            if (ogrenci.id == id) {
                return ogrenci;
            }
        }
        return undefined;
    };
    OgrenciService.prototype.kisiUpdate = function (kisi) {
        for (var _i = 0, _a = this.ogrenciListe; _i < _a.length; _i++) {
            var ogrenci = _a[_i];
            if (ogrenci.id == kisi.id) {
                ogrenci.name = kisi.name;
                ogrenci.surName = kisi.surName;
                ogrenci.ogrenciNo = kisi.ogrenciNo;
                ogrenci.phone = kisi.phone;
                ogrenci.tcKimlik = kisi.tcKimlik;
                ogrenci.mail = kisi.mail;
            }
        }
    };
    OgrenciService.prototype.kisiDelete = function (kisi) {
        for (var _i = 0, _a = this.ogrenciListe; _i < _a.length; _i++) {
            var ogrenci = _a[_i];
            if (ogrenci.id == kisi.id) {
                this.ogrenciListe.splice(this.ogrenciListe.indexOf(ogrenci), 1);
            }
        }
    };
    return OgrenciService;
}());
exports.OgrenciService = OgrenciService;
