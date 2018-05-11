import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Pedido } from '../../models/pedido.model';
import { PedidosEncuestaServiceProvider } from '../../providers/pedidos-encuesta-service/pedidos-encuesta-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pedidosListA: Observable<Pedido[]>
  pedidosListB: Observable<Pedido[]>
  pedidosListC: Observable<Pedido[]>
  pedidosListD: Observable<Pedido[]>
  pedidosListE: Observable<Pedido[]>
  pedidosListF: Observable<Pedido[]>
  pedidosListG: Observable<Pedido[]>
  pedidosListH: Observable<Pedido[]>
  pedidosListI: Observable<Pedido[]>
  pedidosListAdelante: Observable<Pedido[]>
 
  constructor(private loadingCtrl: LoadingController,
    public navCtrl: NavController,
     private pedidosService: PedidosEncuestaServiceProvider) {
  

      let loading = this.loadingCtrl.create({
        content: 'Buscando los datos de los pedidos...'
      });
    
      loading.present();

    this.pedidosListA = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'A')
      });

      this.pedidosListB = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'B')
      });

      this.pedidosListC = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'C')
      });

      this.pedidosListD = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'D')
      });

      this.pedidosListE = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'E')
      });

      this.pedidosListF = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'F')
      });

      this.pedidosListG = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'G')
      });

      this.pedidosListH = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'H')
      });

      this.pedidosListI = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'I')
      });

      this.pedidosListAdelante = this.pedidosService.getAllPedidos()
      .snapshotChanges()
      .map( 
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })).filter(item => item.zona === 'Adelante')
      });

      loading.dismiss();
  }

  pushZona(zona: string){
    this.navCtrl.push('Zona' + zona + 'Page');
  }

}
