
import { EtkinlikService } from './etkinlik.service';
import { Hackathon } from './Shared/Models/Hackathon';

export class HackathonService implements EtkinlikService{
    private hackathonlist:Hackathon[] = []
    getbyDate(date: Date): Hackathon[] {
        
        for (var hackathon of this.hackathonlist) {
            if (hackathon.etkinlikBaslangic.getTime() <= date.getTime() && hackathon.etkinlikBitis.getTime() >= date.getTime()) {
                this.hackathonlist.push(hackathon);
            }
        }
        return this.hackathonlist;
    }
    etkinlikEkle(etkinlik: Hackathon): void {
        
        this.hackathonlist.push(etkinlik);
    }
    etkinlikListele(): Hackathon[] {
       
        return this.hackathonlist;
    }
    getEtkinlikById(id: number): any {
        
        for (var hackathon of this.hackathonlist) {
            if (hackathon.id == id) {
                return hackathon;
            }
        }
        return undefined;
    }
    etkinlikUpdate(etkinlik: Hackathon): void {
        
        for (var hackathon of this.hackathonlist) {
            if (hackathon.id == etkinlik.id) {
                hackathon.etkinlikAdi = etkinlik.etkinlikAdi;
                hackathon.etkinlikAciklama = etkinlik.etkinlikAciklama;
                hackathon.etkinlikIcerik = etkinlik.etkinlikIcerik;
                hackathon.etkinlikBaslangic = etkinlik.etkinlikBaslangic;
                hackathon.etkinlikBitis = etkinlik.etkinlikBitis;
                hackathon.etkinlikKapasite =  etkinlik.etkinlikKapasite;
            }
        }
    }
    etkinlikDelete(etkinlik: Hackathon): void {
        
        for (var hackathon of this.hackathonlist) {
            if (hackathon.id == etkinlik.id) {
                this.hackathonlist.splice(this.hackathonlist.indexOf(hackathon), 1);
            }
        }
    }

}