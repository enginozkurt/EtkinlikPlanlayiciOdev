import { Router } from '@angular/router';
import { HackathonService } from './../hackathon.service';
import { KurumIci } from './../Shared/Models/KurumIci';
import { GunuBirlik } from './../Shared/Models/GunuBirlik';
import { Hackathon } from './../Shared/Models/Hackathon';
import { BootCamp } from './../Shared/Models/Bootcamp';
import { EtkinlikService } from './../etkinlik.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BootCampService } from '../bootcamp.service';
import { Etkinlik } from '../Shared/Models/Etkinlik';
import { KurumIciService } from '../kurumici.service';
import { GunuBirlikService } from '../gunubirlik.service';

@Component({
  selector: 'app-etkinlikekle',
  templateUrl: './etkinlikekle.component.html',
  styleUrls: ['./etkinlikekle.component.css']
})
export class EtkinlikekleComponent implements OnInit {

  constructor(private router: Router,private etkinlikService:BootCampService,private hackathonService:HackathonService , private kurumIciService:KurumIciService, private gunuBirlikService:GunuBirlikService ) { 


  }
  
  etkinlik  = new Hackathon();
  

  ngOnInit(): void {
  }
  onClickSubmit(event:NgForm){
    
    
    let service ;
    switch(event.controls['etkinlikTuru'].value){ 
      case "hackathon": 
        this.etkinlik = new Hackathon();
        service = this.hackathonService;
        break;
      case "bootcamp":
        this.etkinlik = new BootCamp();
        service = this.etkinlikService;
        break;
      case "kurumici":
        this.etkinlik = new KurumIci();
        service = this.kurumIciService;
        break;
      case "gunubirlik":
        this.etkinlik = new GunuBirlik();
        service = this.gunuBirlikService;
        break;
      default:
        this.etkinlik = new BootCamp();
        break;
    }

    console.log (event.controls['etkinlikTuru'].value);


    this.etkinlik.id = this.idUret();
    this.etkinlik.etkinlikAdi = event.controls['etkinlikAdi'].value;
    this.etkinlik.etkinlikAciklama = event.controls['etkinlikAciklama'].value
    this.etkinlik.etkinlikIcerik = event.controls['etkinlikIcerik'].value;
    this.etkinlik.etkinlikBaslangic = event.controls['baslangic'].value;
    this.etkinlik.etkinlikBitis = event.controls['bitis'].value;
    this.etkinlik.etkinlikKapasite = event.controls['kapasite'].value;;
    this.etkinlik.etkinlikSure = event.controls['sure'].value
    this.etkinlik.etkinlikImage = "../../assets/aksigorta-angular-600x401.png";
    this.etkinlikService.etkinlikEkle(this.etkinlik);
    
    this.router.navigate(['/etkinlikyonetimi']);


  }



  idUret(){

     let count = this.etkinlikService.etkinlikListele().length
     if(count == 0){
       return 1;
     } else{
       return count + 1;
     }
  }
}