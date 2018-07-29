import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-portfoliopage',
  templateUrl: './portfoliopage.component.html',
  styleUrls: ['./portfoliopage.component.css']
})
export class PortfoliopageComponent implements OnInit {

  constructor(public mss: MasterServiceService) {
    this.mss = mss;
   }

  ngOnInit() {
    this.mss.whenCalled();
  }

}
