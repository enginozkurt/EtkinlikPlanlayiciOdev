import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { BootcampComponent } from './bootcamp/bootcamp.component';

import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { EtkinlikekleComponent } from './etkinlikekle/etkinlikekle.component';
import { KisiComponent } from './kisi/kisi.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'app-admin', component: AdminComponent }
  ,{ path: 'home', component: MainComponent }
  ,{ path: 'etkinlikler', component: EtkinlikComponent }
  ,{ path: 'ekibimiz', component: KisiComponent }
  ,{ path: 'etkinlikyonetimi', component: BootcampComponent }
  ,{ path: 'etkinlikekle', component: EtkinlikekleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
