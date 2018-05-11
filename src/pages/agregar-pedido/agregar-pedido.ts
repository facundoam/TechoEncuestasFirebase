import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Pedido } from '../../models/pedido.model';
import { HomePage } from '../home/home'
/**
 * Generated class for the AgregarPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-pedido',
  templateUrl: 'agregar-pedido.html',
})
export class AgregarPedidoPage {

  pedido: Pedido = {
    nombreVecino: '',
    direccion: '',
    telefono: '',
    referencia: '',
    latitud: 0,
    longitud: 0,
    zona: '',
    primeraEncuesta: false,
    fechaUltimaVisita: '',
    fechaUltimaActualizacion: new Date().toString()
  };
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private pedidosService: PedidosEncuestaServiceProvider) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPedidoPage');
  }
 
  addPedido(pedido: Pedido) {
    this.pedidosService.addPedido(pedido).then(ref => {
      this.navCtrl.setRoot(HomePage);
    })
  }

}
