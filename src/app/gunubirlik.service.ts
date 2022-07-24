import { GunuBirlik } from './Shared/Models/GunuBirlik';
import { EtkinlikService } from './etkinlik.service';
import { Etkinlik } from './Shared/Models/Etkinlik';
export class GunuBirlikService implements EtkinlikService{
    private gunubirliklist:GunuBirlik[] = []
    getbyDate(date: Date): GunuBirlik[] {
        
        for (var gunubirlik of this.gunubirliklist) {
            if (gunubirlik.etkinlikBaslangic.getTime() <= date.getTime() && gunubirlik.etkinlikBitis.getTime() >= date.getTime()) {
                this.gunubirliklist.push(gunubirlik);
            }
        }
        return this.gunubirliklist;
    }
    etkinlikEkle(etkinlik: GunuBirlik): void {
        
        this.gunubirliklist.push(etkinlik);
    }
    etkinlikListele(): GunuBirlik[] {
        return this.gunubirliklist;
    }
    getEtkinlikById(id: number): any {
            
        for (var gunubirlik of this.gunubirliklist) {
            if (gunubirlik.id == id) {
                return gunubirlik;
            }
        }
        return undefined;
    }
    etkinlikUpdate(etkinlik: GunuBirlik): void {
            
        for (var gunubirlik of this.gunubirliklist) {
            if (gunubirlik.id == etkinlik.id) {
                gunubirlik.etkinlikAdi = etkinlik.etkinlikAdi;
                gunubirlik.etkinlikAciklama = etkinlik.etkinlikAciklama;
                gunubirlik.etkinlikIcerik = etkinlik.etkinlikIcerik;
                gunubirlik.etkinlikBaslangic = etkinlik.etkinlikBaslangic;
                gunubirlik.etkinlikBitis = etkinlik.etkinlikBitis;
                gunubirlik.etkinlikKapasite =  etkinlik.etkinlikKapasite;
            }
        }
    }
    etkinlikDelete(etkinlik: GunuBirlik): void {

        for (var gunubirlik of this.gunubirliklist) {
            if (gunubirlik.id == etkinlik.id) {
                this.gunubirliklist.splice(this.gunubirliklist.indexOf(gunubirlik), 1);
            }
        }
    }

}