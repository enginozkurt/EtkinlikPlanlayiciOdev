import { KurumIci } from './../Shared/Models/KurumIci';
import { EtkinlikService } from './../etkinlik.service';
import { BootCamp } from './../Shared/Models/Bootcamp';
import { Component, OnInit } from '@angular/core';
import { BootCampService } from '../bootcamp.service';
import { Etkinlik } from '../Shared/Models/Etkinlik';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  etkinlikList:Etkinlik[]=[]
  constructor(private etkinlikService:BootCampService) { 
    
   

  }
  
  etkinlik = new BootCamp();
  etkinlik2 = new BootCamp();
  etkinlik3 = new KurumIci();
 
  ngOnInit(): void {
    this.etkinlik.id = 1;
    this.etkinlik.etkinlikAdi = "AKSigorta’da Kariyer Fırsatı! 45 Saat Ücretsiz Java & Angular BootCamp!";
    this.etkinlik.etkinlikAciklama = "Köyümüzde; AKSigorta ile beraber düzenlediğimiz, AKSigorta ile çalışma şansı elde edebileceğin 45 saat sürecek olan ücretsiz Java & Angular BootCamp gerçekleştiriyoruz!!";
    this.etkinlik.etkinlikIcerik = "Bootcamp İçerik";
    this.etkinlik.etkinlikBaslangic = new Date("2022-06-19");
    this.etkinlik.etkinlikBitis = new Date("2022-07-27");
    this.etkinlik.etkinlikKapasite = 20;
    this.etkinlik.etkinlikSure = 48
    this.etkinlik.etkinlikImage = "../../assets/aksigorta-angular-600x401.png";
    this.etkinlikService.etkinlikEkle(this.etkinlik);

    

    this.etkinlik2.id = 2;
    this.etkinlik2.etkinlikAdi = "Yazılım Köyü&Zemin İstanbul İş Birliği ile Ücretsiz Altogic Eğitimini Kaçırma!";
    this.etkinlik2.etkinlikAciklama = "Backend App Development with Altogic";
    this.etkinlik2.etkinlikIcerik = "Bootcamp İçerik";
    this.etkinlik2.etkinlikBaslangic = new Date("2022-07-02")    ;
    this.etkinlik2.etkinlikBitis = new Date("2022-07-06");
    this.etkinlik2.etkinlikKapasite = 20;
    this.etkinlik2.etkinlikSure=15
    this.etkinlik2.etkinlikImage = "../../assets/altogic.jpg";
    this.etkinlikService.etkinlikEkle(this.etkinlik2);

    this.etkinlik3.id = 3;
    this.etkinlik3.etkinlikAdi = "Kurum İçi Java & Angular BootCamp!";
    this.etkinlik3.etkinlikAciklama = "Kurum içi Java & Angular BootCamp! 15 saat ücretsiz!";
    this.etkinlik3.etkinlikIcerik = "Java Bootcamp İçerik";
    this.etkinlik3.etkinlikBaslangic = new Date("2022-07-02")    ;
    this.etkinlik3.etkinlikBitis = new Date("2022-07-10");
    this.etkinlik3.etkinlikKapasite = 20;
    this.etkinlik3.etkinlikSure=45
    this.etkinlik3.etkinlikImage = "../../assets/altogic.jpg";
    this.etkinlikService.etkinlikEkle(this.etkinlik3);
     console.log(this.etkinlik3.constructor.name)
    this.etkinlikList = this.etkinlikService.etkinlikListele();
  }

  etkinllikListele(){
     return this.etkinlikList
  }
  
   
  
   

}
