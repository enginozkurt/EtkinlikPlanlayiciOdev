export abstract class Etkinlik {
    private _id!: number
    private _etkinlikAdi!: string
    private _etkinlikAciklama!: String
    private _etkinlikIcerik!: string
    private _etkinlikBaslangic!: Date
    private _etkinlikBitis!: Date
    private _etkinlikKapasite!: number
    private _etkinlikImage!: string
    private _etkinlikSure!: number
    public get etkinlikSure(): number {
        return this._etkinlikSure
    }
    public set etkinlikSure(value: number) {
        this._etkinlikSure = value
    }
    public get etkinlikImage(): string {
        return this._etkinlikImage
    }
    public set etkinlikImage(value: string) {
        this._etkinlikImage = value
    }
    
    public get etkinlikKapasite(): number {
        return this._etkinlikKapasite
    }
    public set etkinlikKapasite(value: number) {
        this._etkinlikKapasite = value
    }
    
    public get etkinlikAdi(): string {
        return this._etkinlikAdi
    }
    public set etkinlikAdi(etkinlik: string) {
        this._etkinlikAdi = etkinlik
    }
    
    public get etkinlikAciklama(): String {
        return this._etkinlikAciklama
    }
    public set etkinlikAciklama(aciklama: String) {
        this._etkinlikAciklama = aciklama
    }
    
    public get etkinlikIcerik(): string {
        return this._etkinlikIcerik
    }
    public set etkinlikIcerik(icerik: string) {
        this._etkinlikIcerik = icerik
    }
    
    public get etkinlikBaslangic(): Date {
        return this._etkinlikBaslangic
    }
    public set etkinlikBaslangic(baslangic: Date) {
        this._etkinlikBaslangic = baslangic
    }
   
    public get etkinlikBitis(): Date {
        return this._etkinlikBitis
    }
    public set etkinlikBitis(bitis: Date) {
        this._etkinlikBitis = bitis
    }

   get id():number{
        if(!this._id){
            throw new Error("Test")
        }
     return this._id
   }

   set id(id:number){
    this._id = id
   }

   abstract get toView():string
}