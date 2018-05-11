import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZonaAPage } from './zona-a';
import { OrderByPipe } from '../../pipes/order-by/order-by'

@NgModule({
  declarations: [
    ZonaAPage,
    OrderByPipe
  ],
  imports: [
    IonicPageModule.forChild(ZonaAPage)
  ],
})
export class ZonaAPageModule {}
