import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {

  constructor(public navctel:NavController) { }

  ngOnInit() {
  }

  home()
  {
this.navctel.navigateRoot('start/tabs/tab2')
  }

}
