import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-regras',
  templateUrl: './regras.page.html',
  styleUrls: ['./regras.page.scss'],
})
export class RegrasPage implements OnInit {

  constructor(private AlertController:AlertController){}
  ngOnInit(): void {
    
  }
 
public funcao1() {
 const alert = this.AlertController.create({
 header:'Falta 1 batalha vencida para chegar ao valor 10 de conquistas diarias.',
 buttons: ['Ok']
  }).then(function (alert) {
 
    alert.present();
  })
}
 
 
public funcao2() {
  const alert = this.AlertController.create({
  header:'Faltam 3 batalhas vencidas para chegar ao valor 10 de conquistas diarias.',
  buttons: ['Ok']
   }).then(function (alert) {
 
     alert.present();
   })
 }
 
 
 public funcao3() {
  const alert = this.AlertController.create({
  header:'Faltam 4 batalhas vencidas para chegar ao valor 10 de conquistas diarias.',
  buttons: ['Ok']
   }).then(function (alert) {

    alert.present();
  })
}


public funcao4() {
 const alert = this.AlertController.create({
 header:'Faltam 6 batalhas vencidas para chegar ao valor 10 de conquistas diarias.',
 buttons: ['Ok']
  }).then(function (alert) {

    alert.present();
  })
}
}
