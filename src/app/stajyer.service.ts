import { KisiService } from './kisi.service';
import { Kisi } from './Shared/Models/Kisi';
import { Stajyer } from './Shared/Models/Stajyer';
export class StajyerService  implements KisiService{
    private stajyerlist: Stajyer[] = [];
    kisiEkle(kisi: Stajyer): void {
        
        this.stajyerlist.push(kisi);
    }
    kisiListele(): Stajyer[] {
       
        return this.stajyerlist;
    }
    getkisiById(id: number): any {
        
        for (var stajyer of this.stajyerlist) {
            if (stajyer.id == id) {
                return stajyer;
            }
        }
        return undefined;
    }
    kisiUpdate(kisi: Stajyer) {
        
        for (var stajyer of this.stajyerlist) {
            if (stajyer.id == kisi.id) {
                stajyer.name = kisi.name
                stajyer.surName = kisi.surName
                stajyer.mail = kisi.mail
                stajyer.sicilNo = kisi.sicilNo
                stajyer.tcKimlik = kisi.tcKimlik
                stajyer.phone = kisi.phone


            }
        }
    }
    kisiDelete(kisi: Stajyer): void {
        
        for (var stajyer of this.stajyerlist) {
            if (stajyer.id == kisi.id) {
                this.stajyerlist.splice(this.stajyerlist.indexOf(stajyer), 1);
            }
        }
    }

}