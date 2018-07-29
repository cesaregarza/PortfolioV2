import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(public mss: MasterServiceService) {
    this.mss = mss;
   }

  ngOnInit() {
    this.mss.whenCalled();
  }

}
