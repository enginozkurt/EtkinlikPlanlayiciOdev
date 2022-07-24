import { Personel } from './Personel';
import { Kisi } from "./Kisi";

export class Stajyer extends Personel{

    


    override get toView(): string {
        return `Id : ${this.id}
            TcKimlik : ${this.tcKimlik}
            Adi : ${this.name}
            Soyadi: ${this.surName}
            Mail : ${this.mail} 
            Telefon: ${this.phone}
            SicilNo: ${this.sicilNo}
            `;
            
    }

}