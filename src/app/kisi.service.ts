import { Kisi } from "./Shared/Models/Kisi";

export interface KisiService {
    kisiEkle(kisi:Kisi):void;
    kisiListele():Kisi[];
    getkisiById(id:number):Kisi | undefined;
    kisiUpdate(kisi:Kisi):void;
    kisiDelete(kisi:Kisi):void;

}