import { KisiService } from './kisi.service';
import { Kisi } from './Shared/Models/Kisi';
import { Ogrenci } from './Shared/Models/Ogrenci';
export class OgrenciService implements KisiService{
    private ogrenciListe:Ogrenci[] = []

    kisiEkle(ogrenci: Ogrenci): void {
        this.ogrenciListe.push(ogrenci)
    }
    kisiListele(): Ogrenci[] {
        return this.ogrenciListe
    }
    getkisiById(id: number): any {
        
        for (var ogrenci of this.ogrenciListe) {
            if(ogrenci.id == id){
                return ogrenci
            }
            
        }
        return undefined
    }
    kisiUpdate(kisi: Ogrenci): void {
        for (var ogrenci of this.ogrenciListe) {
            if(ogrenci.id == kisi.id){
                ogrenci.name = kisi.name
                ogrenci.surName = kisi.surName
                ogrenci.ogrenciNo = kisi.ogrenciNo
                ogrenci.phone = kisi.phone
                ogrenci.tcKimlik = kisi.tcKimlik
                ogrenci.mail = kisi.mail   }
            }
                     
    }
    kisiDelete(kisi: Kisi): void {
        for (var ogrenci of this.ogrenciListe) {
            if(ogrenci.id == kisi.id){
                this.ogrenciListe.splice(this.ogrenciListe.indexOf(ogrenci),1)
            }
        }
    }

}