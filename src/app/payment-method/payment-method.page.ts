import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  addCard()
  {
this.navctrl.pop()
  }

}
