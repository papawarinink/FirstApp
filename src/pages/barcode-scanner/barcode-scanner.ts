import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  scanText ="";
  scanFormat ="";


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private Scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan(){
    this.Scanner.scan().then(
      (data)=>{
        this.scanText = data.text;
        this.scanFormat = data.format;

      }
      , (error) =>{ console.log(error); }
    );

  }

}
