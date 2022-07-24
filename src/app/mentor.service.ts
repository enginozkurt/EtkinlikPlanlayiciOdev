import { Mentor } from './Shared/Models/Mentor';
import { KisiService } from './kisi.service';
import { Kisi } from './Shared/Models/Kisi';
export class MentorService implements KisiService {
    private mentorList: Mentor[] = [];
    kisiEkle(kisi: Kisi): void {
        
        this.mentorList.push(kisi as Mentor);
    }
    kisiListele(): Mentor[] {
       
        return this.mentorList;
    }
    getkisiById(id: number): any {
       
        for (var mentor of this.mentorList) {
            if (mentor.id == id) {
                return mentor;
            }
        }
        return undefined;
    }
    kisiUpdate(kisi: Mentor): void {
        
        for (var mentor of this.mentorList) {
            if (mentor.id == kisi.id) {
                mentor.name = kisi.name
                mentor.surName = kisi.surName
                mentor.mail = kisi.mail
                mentor.sicilNo = kisi.sicilNo
                mentor.tcKimlik = kisi.tcKimlik
                mentor.phone = kisi.phone
                
                
            }
        }
    }
    kisiDelete(kisi: Mentor): void {
        
        for (var mentor of this.mentorList) {
            if (mentor.id == kisi.id) {
                this.mentorList.splice(this.mentorList.indexOf(mentor), 1);
            }
        }
    }

}