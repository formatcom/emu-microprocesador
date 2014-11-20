// Emulador de cpu 4Bits
function cpu(capacidad, hexCont){
    this.pc = 0x0;
    this.regInstr = 0x0;
    this.regDatos = 0x0;
    this.capacidad = capacidad;
    this.gcm = new gcm(hexCont);
    this.nInstr = 8;
    
}

// iniciar el Generador Ciclo Maquina del microprocesador
cpu.prototype.start=function(){
    return this.gcm.start();
};


// se incrementa el contador del programa
cpu.prototype.signalPc=function(){
    this.pc = this.pc < this.capacidad ? ++this.pc : 0x0;
};

// retorna el contador del programa
cpu.prototype.getPc=function(){
    return this.pc;
};


// pasa los datos de una direccion de memoria al registro de instrucciones 
cpu.prototype.setRegInstr=function(data){
    this.regInstr = data;
};

// retorna los datos del registro de instrucciones 
cpu.prototype.getRegInstr=function(){
    return this.regInstr;
};


// pasa los datos de una direccion de memoria al Registro de datos
cpu.prototype.setRegDatos=function(data){
    this.regDatos = data;
};

// retorna los datos del Registro de datos
cpu.prototype.getRegDatos=function(){
    return this.regDatos;
};


// ejecuta la instruccion
cpu.prototype.exec=function(){
    switch(this.regInstr % this.nInstr){
        case 0x0:
            return 'OR';
        case 0x1:
            return 'AND';
        case 0x2:
            return 'XOR';
        case 0x3:
            return 'SUMA';
        case 0x4:
            return 'INVERTIR';
        case 0x5:
            return 'NO OPERACION';
        case 0x6:
            return 'CARGAR';
        case 0x7:
            return 'SALTAR';
    }
    return false;
};


// reinicia el contador del programa y el generador de ciclo maquina
cpu.prototype.reset=function(){
    this.restartPc();
    this.gcm.reset();
};

// reinicia el contador del programa 
cpu.prototype.restartPc=function(){
    this.pc = 0x0;
};