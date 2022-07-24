import { Kisi } from "./Kisi";

export class Personel extends Kisi{

    private _sicilNo!: number;

    
    public get sicilNo(): number {
        return this._sicilNo;
    }
    public set sicilNo(sicilNo: number) {
        this._sicilNo = sicilNo;
    }


    get toView(): string {
        return `Id : ${this.id}
            TcKimlik : ${this.tcKimlik}
            Adi : ${this.name}
            Soyadi: ${this.surName}
            Mail : ${this.mail} 
            Telefon: ${this.phone}
            
            `;
    }
    
}