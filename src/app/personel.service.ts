import { Personel } from './Shared/Models/Personel';
import { KisiService } from './kisi.service';
import { Kisi } from './Shared/Models/Kisi';
export class PersonelService implements KisiService{
    private personelList: Personel[] = [];
    kisiEkle(kisi: Personel): void {
        
        this.personelList.push(kisi);
    }
    kisiListele(): Personel[] {
            
        return this.personelList;
    }
    getkisiById(id: number): any {
        
        for (var personel of this.personelList) {
            if (personel.id == id) {
                return personel;
            }
        }
        return undefined;
    }
    kisiUpdate(kisi: Personel): void {
        
        for (var personel of this.personelList) {
            if (personel.id == kisi.id) {
                personel.name = kisi.name
                personel.surName = kisi.surName
                personel.mail = kisi.mail
                personel.sicilNo = kisi.sicilNo
                personel.tcKimlik = kisi.tcKimlik
                personel.phone = kisi.phone
                
                
            }
        }
    }
    kisiDelete(kisi: Personel): void {
        
        for (var personel of this.personelList) {
            if (personel.id == kisi.id) {
                this.personelList.splice(this.personelList.indexOf(personel), 1);
            }
        }
    }

}