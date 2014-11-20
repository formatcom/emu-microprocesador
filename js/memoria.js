function memoria(capacidad){
    this.memoria = new Array(capacidad);
    this.direccion = 0x0;
}

memoria.prototype.add=function(data){
    if (this.direccion <= this.memoria.length){
        this.memoria[this.direccion] = data;
        this.direccion++;
        return true;
    }else
        return false;
};

memoria.prototype.getDireccion=function(){
    return this.direccion;
};

memoria.prototype.get=function(direccion){
    return this.memoria[direccion];
};