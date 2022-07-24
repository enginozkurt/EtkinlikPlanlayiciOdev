import { Personel } from './Personel';


export class Mentor extends Personel{


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