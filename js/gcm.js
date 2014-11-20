//Generador de ciclo maquina
//Emula contador BCD 7490 0-9
// Decodificador Bin a Dec 7442
function gcm(hexCont){
    this.ciclos = 0x0;
    this.limite = hexCont;
}

gcm.prototype.start=function(){
    var salida = this.decodificador();
    this.contador();
    return salida;
};

gcm.prototype.contador=function(){
    this.ciclos = this.ciclos < this.limite ? ++this.ciclos : 0x0;
};

gcm.prototype.A=function(){
    return 'A';
};
gcm.prototype.B=function(){
    return 'B';
};
gcm.prototype.C=function(){
    return 'C';
};
gcm.prototype.D=function(){
    return 'D';
};
gcm.prototype.E=function(){
    return 'E';
};

gcm.prototype.decodificador=function(){
    switch(this.ciclos){
        case 0x0:
            return this.A();
        case 0x1:
            return this.E();
        case 0x2:
            return this.B();
        case 0x3:
            return this.E();
        case 0x4:
            return this.C();
        case 0x6:
            return this.D();
        default:
            return 'Ciclo';
    }
};   

gcm.prototype.reset=function(){
    this.ciclos = 0x0;
};