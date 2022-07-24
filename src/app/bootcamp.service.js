"use strict";
exports.__esModule = true;
exports.BootCampService = void 0;
var BootCampService = /** @class */ (function () {
    function BootCampService() {
        this.bootcamplist = [];
    }
    BootCampService.prototype.getbyDate = function (date) {
        var etkinlikList = [];
        for (var _i = 0, _a = this.bootcamplist; _i < _a.length; _i++) {
            var bootCamp = _a[_i];
            if (bootCamp.etkinlikBaslangic.getTime() <= date.getTime() && bootCamp.etkinlikBitis.getTime() >= date.getTime()) {
                etkinlikList.push(bootCamp);
            }
        }
        return etkinlikList;
    };
    BootCampService.prototype.etkinlikEkle = function (etkinlik) {
        this.bootcamplist.push(etkinlik);
    };
    BootCampService.prototype.etkinlikListele = function () {
        return this.bootcamplist;
    };
    BootCampService.prototype.getEtkinlikById = function (id) {
        for (var _i = 0, _a = this.bootcamplist; _i < _a.length; _i++) {
            var etkinlik = _a[_i];
            if (etkinlik.id == id) {
                return etkinlik;
            }
        }
        return undefined;
    };
    BootCampService.prototype.etkinlikUpdate = function (etkinlik) {
        for (var _i = 0, _a = this.bootcamplist; _i < _a.length; _i++) {
            var bootCamp = _a[_i];
            if (bootCamp.id == etkinlik.id) {
                bootCamp.etkinlikAdi = etkinlik.etkinlikAdi;
                bootCamp.etkinlikAciklama = etkinlik.etkinlikAciklama;
                bootCamp.etkinlikIcerik = etkinlik.etkinlikIcerik;
                bootCamp.etkinlikBaslangic = etkinlik.etkinlikBaslangic;
                bootCamp.etkinlikBitis = etkinlik.etkinlikBitis;
                bootCamp.etkinlikKapasite = etkinlik.etkinlikKapasite;
            }
        }
    };
    BootCampService.prototype.etkinlikDelete = function (etkinlik) {
        for (var _i = 0, _a = this.bootcamplist; _i < _a.length; _i++) {
            var bootCamp = _a[_i];
            if (bootCamp.id == etkinlik.id) {
                this.bootcamplist.splice(this.bootcamplist.indexOf(bootCamp), 1);
            }
        }
    };
    return BootCampService;
}());
exports.BootCampService = BootCampService;
