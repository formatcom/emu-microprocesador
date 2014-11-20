var emular;
var cpu;
var memoria;

window.onload=function(){
    emular = new oscilador(1000);
    cpu = new cpu(0xF, 0x7);
    memoria = new memoria(0xF);
    
    memoria.add(0x6);
    memoria.add(0x9);
    memoria.add(0x0);
    memoria.add(0x0);
    memoria.add(0x0);
    memoria.add(0x6);   
    
    emular.stop=function(){
        emular.pause();
        cpu.reset();
    };
    
    cpu.gcm.A=function(){
        cpu.setRegInstr(memoria.get(cpu.getPc()));
        return 'Signal A->RegIntr: '+cpu.getRegInstr();
    };
    
    cpu.gcm.B=function(){
        cpu.setRegDatos(memoria.get(cpu.getPc()));
        var instruccion = cpu.exec();
        return 'Signal B->RegDatos: '+cpu.getRegDatos()+ ' Instr: ' +instruccion;
    };
    
    cpu.gcm.E=function(){
        if (cpu.gcm.ciclos == 0x3 && (cpu.getRegInstr()%cpu.nInstr == 4 || cpu.getRegInstr()%cpu.nInstr == 5)){}
        else
            cpu.signalPc();
        return 'Signal E->Pc: '+cpu.getPc();
    };
    
    emular.signal=function(){
        console.log(cpu.start());
    };
};