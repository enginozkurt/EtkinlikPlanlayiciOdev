export abstract class Kisi {
  private _id!: number;
  private _tcKimlik!: string;
  private _name!: string;
  private _surname!: string;
  private _mail!: string;
  private _phone!: string;

  get phone() {
    return this._phone;
  }
  set phone(phone: string) {
    this._phone = phone;
  }
  get mail() {
    return this._mail;
  }
  set mail(mail: string) {
    this._mail = mail;
  }
  get surName() {
    return this._surname;
  }

  set surName(surName: string) {
    this._surname = surName;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
  get tcKimlik() {
    return this._tcKimlik;
  }

  set tcKimlik(tcKimlik: string) {
    this._tcKimlik = tcKimlik;
  }
  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  abstract get toView(): string 
}
