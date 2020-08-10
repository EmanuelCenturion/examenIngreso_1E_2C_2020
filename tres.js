/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexoTitular;
	let lugar;
	let temporada;
	let cantPersonas;
	let respuesta = 's';
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let lugarMasElegido;
	let cantPasajeros;
	let flagPasajeros = 0;
	let sexoTitMasPasajeros;
	let contInvierno = 0;
	let persPorViaje = 0;
	let promPorViaje;


	do {
		do {
			sexoTitular = prompt("Ingrese sexo del titular. 'f' (femenino) o 'm' (masculino)").toLowerCase();
		} while (sexoTitular != 'f' && sexoTitular != 'm');
		do {
			lugar = prompt("Ingrese lugar (Bariloche o Cataratas o Salta)").toLowerCase();
		} while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");
		do {
			temporada = prompt("Ingrese temporada (Invierno/Verano/Otoño/Primavera)").toLowerCase();
		} while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");
		do {
			cantPersonas = parseInt(prompt("Ingrese cantidad de personas que viajan"));
		} while (cantPersonas <= 0 || isNaN(cantPersonas));

		switch (lugar) {
			case "bariloche":
				contBariloche++;
				break;
			case "cataratas":
				contCataratas++;
				break;
			case "salta":
				contSalta++;
				break;
		}

		if (cantPersonas > cantPasajeros || flagPasajeros == 0) {
			if (sexoTitular == 'f') {
				sexoTitMasPasajeros = "Femenino";
			} else {
				sexoTitMasPasajeros = "Masculino";
			}
			flagPasajeros = 1;
		}


		if (temporada == "invierno") {
			contInvierno++;
			persPorViaje += cantPersonas;
		}


		respuesta = prompt("Desea ingresar otro producto? s/n");
	} while (respuesta == 's');

	if (contBariloche > contCataratas && contBariloche > contSalta) {
		lugarMasElegido = "Bariloche";
	} else if (contCataratas > contBariloche && contCataratas > contSalta) {
		lugarMasElegido = "Cataratas";
	} else {
		lugarMasElegido = "Salta";
	}

	promPorViaje = persPorViaje / contInvierno;

	document.write("A)El lugar mas elegido es: " + lugarMasElegido + "<br>");
	document.write("B)El sexo del tidular con mas pasajeros es: " + sexoTitMasPasajeros + "<br>");
	if (contInvierno == 0) {
		document.write("C)No hay viajes hechos en invierno " + "<br>");
	} else {
		document.write("C)El promedio de personas que viajan en invierno es: " + promPorViaje + "<br>");
	}
}
