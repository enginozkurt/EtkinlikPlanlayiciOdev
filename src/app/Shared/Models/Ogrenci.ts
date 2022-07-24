import { Kisi } from './Kisi';

export class Ogrenci extends Kisi {

   private _ogrenciNo!: string;

   public get ogrenciNo(): string {
      return this._ogrenciNo;
   }
   public set ogrenciNo(ogrenciNo: string) {
      this._ogrenciNo = ogrenciNo;
   }
  

  get toView(): string {
    return `Id : ${this.id}
TcKimlik : ${this.tcKimlik}
Adi : ${this.name}
Soyadi: ${this.surName}
Mail : ${this.mail} 
Telefon: ${this.phone}
OgrenciNo ${this._ogrenciNo}
`;
  }

 

}
