import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.page.html',
  styleUrls: ['./doctor-detail.page.scss'],
})
export class DoctorDetailPage implements OnInit {

  constructor(public navxtrl:NavController) { }

  ngOnInit() {
  }
  setting()
  {
this.navxtrl.navigateForward('setting')
  }

}
