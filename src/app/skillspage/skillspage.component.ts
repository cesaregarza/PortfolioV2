import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skillspage.component.html',
  styleUrls: ['./skillspage.component.css']
})
export class SkillspageComponent implements OnInit {

  constructor(public mss: MasterServiceService) {
    this.mss = mss;
   }

  ngOnInit() {
  }

}
