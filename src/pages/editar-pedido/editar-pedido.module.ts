import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPedidoPage } from './editar-pedido';

@NgModule({
  declarations: [
    EditarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPedidoPage),
  ],
})
export class EditarPedidoPageModule {}
