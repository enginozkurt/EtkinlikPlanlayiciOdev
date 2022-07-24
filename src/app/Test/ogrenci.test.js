"use strict";
exports.__esModule = true;
var ogrenci_service_1 = require("./../ogrenci.service");
var Ogrenci_1 = require("./../Shared/Models/Ogrenci");
var kisi = new Ogrenci_1.Ogrenci();
kisi.id = 1;
kisi.tcKimlik = "12345678900";
kisi.name = "Engin";
kisi.surName = "Ozkurt";
kisi.mail = "engin@mail.com";
kisi.phone = "2121234567";
kisi.ogrenciNo = "001";
var ogrenciservice = new ogrenci_service_1.OgrenciService();
ogrenciservice.kisiEkle(kisi);
kisi = new Ogrenci_1.Ogrenci();
kisi.id = 2;
kisi.tcKimlik = "12345788";
kisi.name = "test";
kisi.surName = "user";
kisi.mail = "test@mail.com";
kisi.phone = "33333333";
kisi.ogrenciNo = "002";
ogrenciservice.kisiEkle(kisi);
var kisiliste = [];
kisiliste = ogrenciservice.kisiListele();
var kisi3 = ogrenciservice.getkisiById(2);
console.log("******************");
console.log("get ogrenci by id");
console.log(kisi3 === null || kisi3 === void 0 ? void 0 : kisi3.toView);
console.log("******************");
for (var _i = 0, kisiliste_1 = kisiliste; _i < kisiliste_1.length; _i++) {
    var ogrenci = kisiliste_1[_i];
    console.log(ogrenci.toView);
}
console.log("****************** güncellendi");
kisi3.name = "yeni";
ogrenciservice.kisiUpdate(kisi3);
for (var _a = 0, kisiliste_2 = kisiliste; _a < kisiliste_2.length; _a++) {
    var ogrenci = kisiliste_2[_a];
    console.log(ogrenci.toView);
}
console.log("****************** silindi");
ogrenciservice.kisiDelete(kisi3);
for (var _b = 0, kisiliste_3 = kisiliste; _b < kisiliste_3.length; _b++) {
    var ogrenci = kisiliste_3[_b];
    console.log(ogrenci.toView);
}
