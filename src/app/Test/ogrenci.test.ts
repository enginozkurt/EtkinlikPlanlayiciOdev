import { OgrenciService } from '../ogrenci.service';
import { Kisi } from '../Shared/Models/Kisi';
import { Ogrenci } from '../Shared/Models/Ogrenci';




let kisi = new Ogrenci()
kisi.id = 1
kisi.tcKimlik = "12345678900"
kisi.name = "Engin"
kisi.surName ="Ozkurt"
kisi.mail  = "engin@mail.com"
kisi.phone = "2121234567"
kisi.ogrenciNo ="001"

var ogrenciservice = new OgrenciService()

ogrenciservice.kisiEkle(kisi)

 kisi = new Ogrenci()
kisi.id = 2
kisi.tcKimlik = "12345788"
kisi.name = "test"
kisi.surName ="user"
kisi.mail  = "test@mail.com"
kisi.phone = "33333333"
kisi.ogrenciNo ="002"

ogrenciservice.kisiEkle(kisi)

var kisiliste:Ogrenci[] = []
kisiliste = ogrenciservice.kisiListele()


var kisi3 = ogrenciservice.getkisiById(2)
console.log("******************")
console.log("get ogrenci by id")
console.log(kisi3?.toView)
console.log("******************")
for (var ogrenci of kisiliste) {
    console.log(ogrenci.toView)
}
console.log("****************** güncellendi")
kisi3.name = "yeni"
ogrenciservice.kisiUpdate(kisi3)

for (var ogrenci of kisiliste) {
    console.log(ogrenci.toView)
}
console.log("****************** silindi")
ogrenciservice.kisiDelete(kisi3)

for (var ogrenci of kisiliste) {
    console.log(ogrenci.toView)
}