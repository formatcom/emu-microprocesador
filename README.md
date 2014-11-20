<!-- Emulador de microprocesador(CPU) 4Bits -->
Author: Vinicio Valbuena
c.i: 19987187
bibliografia -> Microprocesadores, programación e interconexión 
/por Jose María Urunuela M. SEGUNDA EDICION.

Descripcion del procesador de cuatro bits.

- OSCILADOR: 
	es un circuito electrónico que produce una señal electrónica 
	repetitiva, a menudo una onda senoidal o una onda cuadrada.

- GENERADOR DE CICLO MAQUINA (GCM):
	Este circuito es el que marca el paso del procesador; su funcion 
	es sincronizar al sistema por medio de señales de control que van 
	a todos los registros. El GCM es alimentado por una señal de reloj
	proveniente de un oscilador de onda cuadrada.

- CONTADOR DEL PROGRAMA (PC):
	Es un contador binario, se incrementa por la accion del GCM 
	por la señal E. Sirve para saber la siguiente instruccion a
	ejecutar.

- UNIDAD ARITMETICO/LOGICA(ALU):
	Esta formada por compuertas (AND, OR, XOR e inversores) que
	realizan funciones logicas y por circuitos que ejecutan ejecutan
	operaciones aritmeticas como la suma. En esta unidad se procesan
	los datos de acuerdo a las instrucciones del programa.

- REGISTRO DE INSTRUCCIONES:
	Es un conjunto de flip-flops tipo latch (cerrojo) que forman un
	registro en el cual se almacena cada instruccion una vez que se
	ha obtenido de la memoria.

- DECODIFICADOR DE INSTRUCCIONES:
	Es el elemento que se encarga de convertir cada instruccion en 
	una señal que seleccione la operacion apropiada de la ALU. un 
	decodificador binario a decimal puede servir para este proposito.

- REGISTRO DE DATOS:
	Es un conjunto de latches que forman el registro donde se guardan
	los datos provenientes de la memoria.

- ACUMULADOR:
	Es un conjunto de latches que recoge el resultado de la ultima 
	operacion efectuada por la ALU. Sirve tambien para guardar uno de los datos de entrada de la ALU cuando esta ejecuta una operacion.

- ACUMULADOR TEMPORAL:
	Es un conjunto e latches que almacena temporalmente cualquier
	resultado proveniente de la ALU, mientras se transfiere al 
	acumulador.



Problemas

	1.- Construir un oscilador.
			- Generar onda cuadrada.
	2.- Construir un GCM.
			- El GCM esta formado por un contador BCD (7490) al que se
			alimenta con una onda cuadrada generada con un oscilador.

			Las tres salidas menos significativas del contador se 
			conectan a las entradas de un decodificador de binario a
			decimal con salidas activas en 0 logico (7442). Las 
			salidas 0, 2, 4 y 6 del decodificador, una vez que han 
			sido invertidas, corresponden respectivamente a las lineas
			de control A, B, C, y D del GCM.

	3.- Implementar el contador del programa (PC).
			- Para esto se emplea un contador binario (7493). Las 
			salidas del PC van a dar a las entradas de direccion de 
			la memoria. La señal E que controla el incremento del 
			PC se obtiene de las salidas 1 y 3 del decodificador 
			del GCM.

	4.- Memoria del programa.
			- Para la memoria del programa se sugiere una memoria
			de lectura solamente tipo EPROM (2708 o 2716).

			En el caso que utilice una EPROM y se tenga un numero
			menor de salidas en el PC que de entradas de direccion
			en la EPROM, las salidas del PC deberan conectarse a las
			entradas menos significativas de la EPROM y las entradas
			restantes a tierra para que el programa almacenado en la
			memoria quede ubicado a partir de la direccion 0.

	5.- Armar el registro de instrucciones y el registro de datos.
			- utilizando cerrojos (latches) (7475 o 74100). La 
			linea A del GMC se conecta a la entrada de reloj del 
			registro de instrucciones y la linea B a la entrada de
			reloj del registro de datos.

	6.- Implantar el decodificar de instrucciones.
			- Con un decodificador binario a decimal (7442) añadiendo
			los circuitos necesarios para que sus salidas sean 
			activas en 1 logico. Dado que el codigo solo consta de
			ocho instrucciones, solo se conectan a las entradas del 
			decodificador las tres salidas menos significativas del registro de instrucciones.

			         INSTRUCCIONES
			    -----------------------
				DIRECCION : INSTRUCCION
				-----------------------
				      0x0 : OR
				      0x1 : AND
				      0x2 : XOR
				      0x3 : SUMA
				      0x4 : INVERTIR
				      0x5 : NO OPERACION
				      0x6 : CARGAR
				      0x7 : SALTAR


	7.- Crear el acumulador y el acumulador temporal.
			- Contruir los registros que funcionaran como acumulador
			temporal y como acumulador, de la misma forma que los registros de instrucciones y de datos. La linea C del
			GCM se conecta a la entrada del reloj del acumulador
			temporal y la linea D a la entrada de reloj del 
			acumulador. Por los momentos la ALU esta ausente y por 
			ello las salidas del registro de datos se muestran 
			conectadas a las entradas del acumulador temporal.


Ejecucion

	Desde la consola del navegador.
	>>> emular.start() //inicia la emulacion.
	>>> emular.pause() //pausa la emulacion.
	>>> emular.stop() //Termina la emulacion.


Nota:
	El proyecto aun esta en construccion y solo con fines educativo.
