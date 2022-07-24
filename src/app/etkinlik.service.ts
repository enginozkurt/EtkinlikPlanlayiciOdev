 import { Etkinlik } from "./Shared/Models/Etkinlik";

 export interface EtkinlikService {

    etkinlikEkle(etkinlik:Etkinlik):void;
    etkinlikListele():Etkinlik[];
    getEtkinlikById(id:number):any;
    etkinlikUpdate(etkinlik:Etkinlik):void;
    etkinlikDelete(etkinlik:Etkinlik):void;
    getbyDate(date:Date):Etkinlik[];

}