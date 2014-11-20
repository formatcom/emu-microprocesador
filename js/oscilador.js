function oscilador(ms){
    this.tiempo = ms;
    this.intervalo = '';
}

oscilador.prototype.start=function(){
    self = this;
    this.intervalo = setInterval("self.signal()", this.tiempo);
    console.log('Emulador iniciado');
};

oscilador.prototype.pause=function(){
    clearInterval(this.intervalo);
    console.log('Finalizo la emulacion');
};

oscilador.prototype.stop=function(){};

oscilador.prototype.signal=function(){};
