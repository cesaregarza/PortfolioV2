import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  constructor(public mss: MasterServiceService) {
    this.mss = mss;
   }

  ngOnInit() {
    this.mss.whenCalled();
  }

}
