import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootCampService } from '../bootcamp.service';
import { BootCamp } from '../Shared/Models/Bootcamp';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {
  etkinlikList:BootCamp[] = []
  constructor(etkinlikService:BootCampService,private router: Router) { 
    this.etkinlikList = etkinlikService.etkinlikListele();
  }

  ngOnInit(): void {
  }
  onClick($event:Event){
    this.router.navigate(['/etkinlikekle']);
    
  }
}
