import { BootCampService } from './../bootcamp.service';
import { BootCamp } from './../Shared/Models/Bootcamp';
import { EtkinlikService } from './../etkinlik.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etkinlik',
  templateUrl: './etkinlik.component.html',
  styleUrls: ['./etkinlik.component.css']
})
export class EtkinlikComponent implements OnInit {
  etkinlikList:BootCamp[] = []
  constructor(etkinlikService:BootCampService)   { 

    this.etkinlikList = etkinlikService.etkinlikListele();
  }

  ngOnInit(): void {
  }

}
