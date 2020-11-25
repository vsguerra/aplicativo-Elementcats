import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatusPage } from './status.page';

import { StatusPageRoutingModule } from './status-routing.module';
import {SquareComponent} from '../components/square/square.component' 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPageRoutingModule
  ],
  declarations: [StatusPage, SquareComponent]
})
export class StatusPageModule {}
