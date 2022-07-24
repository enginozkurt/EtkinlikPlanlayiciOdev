import { Etkinlik } from './Etkinlik';
export class GunuBirlik extends Etkinlik{
    get toView(): string {
        
        return `Ekinlik Adi: ${this.etkinlikAdi} 
        Etkinlik Aciklama : ${this.etkinlikAciklama} 
        Etkinlik Icerik : ${this.etkinlikIcerik} 
        Baslangic Tarihi : ${this.etkinlikBaslangic} 
        Bitis Tarihi : ${this.etkinlikBitis} 
        Etkinlik Kapasite : ${this.etkinlikKapasite}`
    }


}