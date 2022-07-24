import { BootCampService } from './../bootcamp.service';
import { BootCamp } from './../Shared/Models/Bootcamp';


var bootcamp  = new BootCamp();
bootcamp.id = 1
bootcamp.etkinlikAdi = "Bootcamp";
bootcamp.etkinlikAciklama = "Bootcamp Aciklama";
bootcamp.etkinlikIcerik = "Bootcamp Icerik";
bootcamp.etkinlikBaslangic = new Date();
bootcamp.etkinlikBitis = new Date();
bootcamp.etkinlikKapasite = 20;

var bootcampService = new BootCampService();
bootcampService.etkinlikEkle(bootcamp);

bootcamp  = new BootCamp();
bootcamp.id = 2
bootcamp.etkinlikAdi = "Java Bootcamp";
bootcamp.etkinlikAciklama = "Java Bootcamp Aciklama";
bootcamp.etkinlikIcerik = "Java Bootcamp Icerik";
bootcamp.etkinlikBaslangic = new Date("2022-08-01") ;
bootcamp.etkinlikBitis = new Date("2022-09-01");
bootcamp.etkinlikKapasite = 20;
bootcampService.etkinlikEkle(bootcamp);

bootcamp  = new BootCamp();
bootcamp.id = 3
bootcamp.etkinlikAdi = "Angular Bootcamp";
bootcamp.etkinlikAciklama = "Angular Bootcamp Aciklama";
bootcamp.etkinlikIcerik = "Angular Bootcamp Icerik";
bootcamp.etkinlikBaslangic = new Date("2022-08-01") ;
bootcamp.etkinlikBitis = new Date("2022-09-01");
bootcamp.etkinlikKapasite = 20;
bootcampService.etkinlikEkle(bootcamp);


var etkinlikList:BootCamp[] = [] 
etkinlikList = bootcampService.getbyDate(new Date("2022-08-01"));
console.log("getbydate");
console.log("-----------------------------------------------------")
for(var etkinlik of etkinlikList){
    console.log(etkinlik.toView)
    console.log("-----------------------------------------------------")
}



etkinlikList = bootcampService.etkinlikListele();
console.log("------------------");
console.log("tümünü listele");
for(var etkinlik of etkinlikList){
    console.log(etkinlik.toView);
    console.log("---------------------------------");
}

console.log("getbyid")
console.log("---------------------------------");
 var etkinlik2  = bootcampService.getEtkinlikById(1);

 console.log(etkinlik2?.toView);

etkinlik2.etkinlikAdi = ".net Core Bootcamp";

 bootcampService.etkinlikUpdate(etkinlik2);
 console.log("---------------------------------");
 console.log("update listele");
 console.log("---------------------------------");
for(var etkinlik of etkinlikList){
    console.log(etkinlik.toView);
    console.log("---------------------------------");
}


bootcampService.etkinlikDelete(etkinlik2);
console.log("---------------------------------");
console.log("DELETE listele");
console.log("---------------------------------");
for(var etkinlik of etkinlikList){
   console.log(etkinlik.toView);
   console.log("---------------------------------");
}