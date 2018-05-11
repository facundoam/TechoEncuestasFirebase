import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarPedidoPage } from './agregar-pedido';

@NgModule({
  declarations: [
    AgregarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarPedidoPage),
  ],
})
export class AgregarPedidoPageModule {}
