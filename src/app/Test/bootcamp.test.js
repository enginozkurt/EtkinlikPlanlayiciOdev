"use strict";
exports.__esModule = true;
var bootcamp_service_1 = require("./../bootcamp.service");
var Bootcamp_1 = require("./../Shared/Models/Bootcamp");
var bootcamp = new Bootcamp_1.BootCamp();
bootcamp.id = 1;
bootcamp.etkinlikAdi = "Bootcamp";
bootcamp.etkinlikAciklama = "Bootcamp Aciklama";
bootcamp.etkinlikIcerik = "Bootcamp Icerik";
bootcamp.etkinlikBaslangic = new Date();
bootcamp.etkinlikBitis = new Date();
bootcamp.etkinlikKapasite = 20;
var bootcampService = new bootcamp_service_1.BootCampService();
bootcampService.etkinlikEkle(bootcamp);
bootcamp = new Bootcamp_1.BootCamp();
bootcamp.id = 2;
bootcamp.etkinlikAdi = "Java Bootcamp";
bootcamp.etkinlikAciklama = "Java Bootcamp Aciklama";
bootcamp.etkinlikIcerik = "Java Bootcamp Icerik";
bootcamp.etkinlikBaslangic = new Date("2022-08-01");
bootcamp.etkinlikBitis = new Date("2022-09-01");
bootcamp.etkinlikKapasite = 20;
bootcampService.etkinlikEkle(bootcamp);
bootcamp = new Bootcamp_1.BootCamp();
bootcamp.id = 3;
bootcamp.etkinlikAdi = "Angular Bootcamp";
bootcamp.etkinlikAciklama = "Angular Bootcamp Aciklama";
bootcamp.etkinlikIcerik = "Angular Bootcamp Icerik";
bootcamp.etkinlikBaslangic = new Date("2022-08-01");
bootcamp.etkinlikBitis = new Date("2022-09-01");
bootcamp.etkinlikKapasite = 20;
bootcampService.etkinlikEkle(bootcamp);
var etkinlikList = [];
etkinlikList = bootcampService.getbyDate(new Date("2022-08-01"));
console.log("getbydate");
console.log("-----------------------------------------------------");
for (var _i = 0, etkinlikList_1 = etkinlikList; _i < etkinlikList_1.length; _i++) {
    var etkinlik = etkinlikList_1[_i];
    console.log(etkinlik.toView);
    console.log("-----------------------------------------------------");
}
etkinlikList = bootcampService.etkinlikListele();
console.log("------------------");
console.log("tümünü listele");
for (var _a = 0, etkinlikList_2 = etkinlikList; _a < etkinlikList_2.length; _a++) {
    var etkinlik = etkinlikList_2[_a];
    console.log(etkinlik.toView);
    console.log("---------------------------------");
}
console.log("getbyid");
console.log("---------------------------------");
var etkinlik2 = bootcampService.getEtkinlikById(1);
console.log(etkinlik2 === null || etkinlik2 === void 0 ? void 0 : etkinlik2.toView);
etkinlik2.etkinlikAdi = ".net Core Bootcamp";
bootcampService.etkinlikUpdate(etkinlik2);
console.log("---------------------------------");
console.log("update listele");
console.log("---------------------------------");
for (var _b = 0, etkinlikList_3 = etkinlikList; _b < etkinlikList_3.length; _b++) {
    var etkinlik = etkinlikList_3[_b];
    console.log(etkinlik.toView);
    console.log("---------------------------------");
}
bootcampService.etkinlikDelete(etkinlik2);
console.log("---------------------------------");
console.log("DELETE listele");
console.log("---------------------------------");
for (var _c = 0, etkinlikList_4 = etkinlikList; _c < etkinlikList_4.length; _c++) {
    var etkinlik = etkinlikList_4[_c];
    console.log(etkinlik.toView);
    console.log("---------------------------------");
}
