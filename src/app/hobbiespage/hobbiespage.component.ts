import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-hobbiespage',
  templateUrl: './hobbiespage.component.html',
  styleUrls: ['./hobbiespage.component.css']
})
export class HobbiespageComponent implements OnInit {

  constructor(public mss: MasterServiceService) {
    this.mss = mss;
   }

  ngOnInit() {
  }

}
