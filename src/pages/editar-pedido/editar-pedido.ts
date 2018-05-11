import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pedido } from '../../models/pedido.model';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the EditarPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-pedido',
  templateUrl: 'editar-pedido.html',
})
export class EditarPedidoPage {

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
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    public navCtrl: NavController,
    public navParams: NavParams,
    private pedidosService: PedidosEncuestaServiceProvider) {
  }

  ionViewDidLoad() {
    this.pedido = this.navParams.get('pedido');
  }

  actualizarPedido(pedido: Pedido) {
    this.pedidosService.updatePedido(pedido).then(() => {
      this.navCtrl.pop();
    })
  }

  removerPedido(pedido: Pedido) {
    this.pedidosService.removePedido(pedido).then(() => {
      this.navCtrl.pop();
    })
  }

  pushZona(zona: string){
    this.navCtrl.push('Zona' + zona + 'Page');
  }

  getCurrentPosition() {
    let loading = this.loadingCtrl.create({
      content: 'Tomando la ubicación con alta precisión.'
    });
  
    loading.present();

    let posOptions = { timeout: 10000, enableHighAccuracy: true };
    this.geolocation.getCurrentPosition(posOptions).then((resp) => {
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
        this.pedido.latitud = latitude;
        this.pedido.longitud = longitude;
        this.presentToast();
        loading.dismiss();
        this.actualizarPedido(this.pedido);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Posicion actualizada.',
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}