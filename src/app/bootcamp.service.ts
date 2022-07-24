import { BootCamp } from './Shared/Models/Bootcamp';
import { EtkinlikService } from './etkinlik.service';
import { Etkinlik } from './Shared/Models/Etkinlik';

export class BootCampService implements EtkinlikService {
  getbyDate(date: Date): Etkinlik[] {
    
    var etkinlikList: Etkinlik[] = [];
    for (var bootCamp of this.bootcamplist) {
      if (bootCamp.etkinlikBaslangic.getTime() <= date.getTime() && bootCamp.etkinlikBitis.getTime() >= date.getTime()) {
        etkinlikList.push(bootCamp);
      }
    }
    return etkinlikList;
  }
  private bootcamplist: BootCamp[] = [];

  etkinlikEkle(etkinlik: BootCamp): void {
    this.bootcamplist.push(etkinlik);
  }
  etkinlikListele(): BootCamp[] {
    return this.bootcamplist;
  }
  getEtkinlikById(id: number):any {
    
    for (var etkinlik of this.bootcamplist) {
      if (etkinlik.id == id) {
        return etkinlik;
      }
    }
    return undefined;
  }
  etkinlikUpdate(etkinlik: BootCamp): void {
        
    for (var bootCamp of this.bootcamplist) {
      if (bootCamp.id == etkinlik.id) {
        bootCamp.etkinlikAdi = etkinlik.etkinlikAdi;
        bootCamp.etkinlikAciklama = etkinlik.etkinlikAciklama;
        bootCamp.etkinlikIcerik = etkinlik.etkinlikIcerik;
        bootCamp.etkinlikBaslangic = etkinlik.etkinlikBaslangic;
        bootCamp.etkinlikBitis = etkinlik.etkinlikBitis;
        bootCamp.etkinlikKapasite =  etkinlik.etkinlikKapasite;
      }
    }
  }
  etkinlikDelete(etkinlik: BootCamp): void {
   
    for (var bootCamp of this.bootcamplist) {
      if (bootCamp.id == etkinlik.id) {
        this.bootcamplist.splice(this.bootcamplist.indexOf(bootCamp), 1);
      }
    }
  }
}
