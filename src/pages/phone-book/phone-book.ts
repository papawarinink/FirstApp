import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  
  contactArray = [{name: 'Lisa',telephone:'0895432515',imageUrl:'assets/imgs/lisa.jpg'}
                  ,{name: 'Rose',telephone:'0895432515',imageUrl:'assets/imgs/rose.jpg'}
                  ,{name: 'Jannie',telephone:'0895432515',imageUrl:'assets/imgs/Jannie.jpg'}
                  ,{name: 'Jisoo',telephone:'0895432515',imageUrl:'assets/imgs/jisoo.jpg'}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}
