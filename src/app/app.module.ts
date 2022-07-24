import { Router } from '@angular/router';
import { StajyerService } from './stajyer.service';
import { PersonelService } from './personel.service';
import { MentorService } from './mentor.service';
import { OgrenciService } from './ogrenci.service';
import { KurumIciService } from './kurumici.service';
import { HackathonService } from './hackathon.service';
import { GunuBirlikService } from './gunubirlik.service';
import { BootCampService } from './bootcamp.service';
import { EtkinlikService } from './etkinlik.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { KisiComponent } from './kisi/kisi.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { EtkinlikekleComponent } from './etkinlikekle/etkinlikekle.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavigationTopComponent,
    MainComponent,AdminComponent, EtkinlikComponent, KisiComponent, BootcampComponent, EtkinlikekleComponent,
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule,FormsModule 
  ],
  providers: [GunuBirlikService,HackathonService,KurumIciService,OgrenciService,MentorService,PersonelService,StajyerService,BootCampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
