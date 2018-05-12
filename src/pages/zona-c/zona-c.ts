import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Pedido } from '../../models/pedido.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ZonaAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zona-c',
  templateUrl: 'zona-c.html',
})
export class ZonaCPage {

  pedidosListA: Observable<Pedido[]>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private pedidosService: PedidosEncuestaServiceProvider) {

    this.pedidosListA = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'C')
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZonaCPage');
  }


}