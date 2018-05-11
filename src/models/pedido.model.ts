export interface Pedido {
    key?: string;
    nombreVecino: string;
    direccion: string;
    telefono: string;
    referencia: string;
    latitud: number;
    longitud: number;
    zona: string;
    primeraEncuesta: boolean;
    fechaUltimaVisita: string;
    fechaUltimaActualizacion: string;
}