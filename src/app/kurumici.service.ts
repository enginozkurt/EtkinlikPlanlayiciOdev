import { KurumIci } from './Shared/Models/KurumIci';
import { EtkinlikService } from './etkinlik.service';

export class KurumIciService implements EtkinlikService {
  private kurumIcilist: KurumIci[] = [];
  getbyDate(date: Date): KurumIci[] {
    for (var kurumIci of this.kurumIcilist) {
      if (
        kurumIci.etkinlikBaslangic.getTime() <= date.getTime() &&
        kurumIci.etkinlikBitis.getTime() >= date.getTime()
      ) {
        this.kurumIcilist.push(kurumIci);
      }
    }
    return this.kurumIcilist;
  }
  etkinlikEkle(etkinlik: KurumIci): void {
    this.kurumIcilist.push(etkinlik);
  }
  etkinlikListele(): KurumIci[] {
    return this.kurumIcilist;
  }
  getEtkinlikById(id: number): any {
    for (var kurumIci of this.kurumIcilist) {
      if (kurumIci.id == id) {
        return kurumIci;
      }
    }
    return undefined;
  }
  etkinlikUpdate(etkinlik: KurumIci): void {
    for (var kurumIci of this.kurumIcilist) {
      if (kurumIci.id == etkinlik.id) {
        kurumIci.etkinlikAdi = etkinlik.etkinlikAdi;
        kurumIci.etkinlikAciklama = etkinlik.etkinlikAciklama;
        kurumIci.etkinlikIcerik = etkinlik.etkinlikIcerik;
        kurumIci.etkinlikBaslangic = etkinlik.etkinlikBaslangic;
        kurumIci.etkinlikBitis = etkinlik.etkinlikBitis;
        kurumIci.etkinlikKapasite = etkinlik.etkinlikKapasite;
      }
    }
  }
  etkinlikDelete(etkinlik: KurumIci): void {
    for (var kurumIci of this.kurumIcilist) {
      if (kurumIci.id == etkinlik.id) {
        this.kurumIcilist.splice(this.kurumIcilist.indexOf(kurumIci), 1);
      }
    }
  }
}
