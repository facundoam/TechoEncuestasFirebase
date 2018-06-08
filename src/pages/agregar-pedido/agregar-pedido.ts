import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';
import { Pedido } from '../../models/pedido.model';
import { HomePage } from '../home/home';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;
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
  
  map: any;
  mLat: any;
  mLng: any;

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
    fechaUltimaActualizacion: new Date().toString(),
  };
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private pedidosService: PedidosEncuestaServiceProvider) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPedidoPage');
    AgregarPedidoPage.prototype.mLat = 0;
      AgregarPedidoPage.prototype.mLng = 0;
    this.getPosition();
  }
 
  addPedido(pedido: Pedido) {

    pedido.latitud = AgregarPedidoPage.prototype.mLat;
    pedido.longitud = AgregarPedidoPage.prototype.mLng;
    
   this.pedidosService.addPedido(pedido).then(ref => {
      this.navCtrl.setRoot(HomePage);
    })
  }

  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
    });

    this.map.addListener('click', function(event){
      this.setCenter(event.latLng);
      marker.setPosition(event.latLng);
      AgregarPedidoPage.prototype.mLat = event.latLng.lat();
      AgregarPedidoPage.prototype.mLng = event.latLng.lng();
    });
  }

}
