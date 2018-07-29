import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public mss: MasterServiceService) {
    this.mss = mss;
   }

   ngOnInit(){
    this.mss.whenCalled();
    console.log("init!");
  }

}
