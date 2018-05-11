import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pedido } from '../../models/pedido.model';

/*
  Generated class for the PedidosEncuestaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosEncuestaServiceProvider {

  private PedidoListRef = this.db.list<Pedido>('pedidos');

  constructor(private db: AngularFireDatabase) { }

  getAllPedidos() {
      return this.PedidoListRef;
  }

  addPedido(pedido: Pedido) {
      return this.PedidoListRef.push(pedido);
  }

  updatePedido(pedido: Pedido) {
      return this.PedidoListRef.update(pedido.key, pedido);
  }

  removePedido(pedido: Pedido) {
      return this.PedidoListRef.remove(pedido.key);
  }

}