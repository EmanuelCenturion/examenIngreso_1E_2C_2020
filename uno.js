/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contMujeres = 0;
	let contHombres = 0;
	let promEdad;
	let edadTotal;
	let flagPeso = 0;
	let pesoHombre;
	let acumEdadMujeres = 0;
	let acumEdadHombres = 0;


	for (let i = 0; i < 5; i++) {
		do {
			nombre = prompt("Ingrese su nombre");
		} while (nombre == "");
		do {
			peso = parseFloat(prompt("Ingrese su peso"));
		} while (peso <= 0 || isNaN(peso));
		do {
			sexo = prompt("Ingrese su sexo. 'f' o 'm'").toLocaleLowerCase();
		} while (sexo != 'f' && sexo != 'm');
		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while (edad <= 0 || isNaN(edad));

		switch (sexo) {
			case 'f':
				contMujeres++;
				acumEdadMujeres += edad;
				break;
			case 'm':
				acumEdadHombres += edad;
				contHombres++;
				if (peso > pesoHombre || flagPeso == 0) {
					pesoHombre = peso;
					flagPeso = 1;
				}
				break;
		}

	}

	promEdad = (acumEdadHombres + acumEdadMujeres) / (contMujeres + contHombres);

	if (contMujeres == 0) {
		document.write("A)No se ingresaron mujeres");
	} else {
		document.write("A)La cantidad de mujeres es: " + contMujeres + "<br>");
	}

	document.write("B)La edad promedio en total es: " + promEdad.toFixed(2) + "<br>");

	if (contHombres == 0) {
		document.write("A)No se ingresaron hombres");
	} else {
		document.write("C)El hombre mas pesado es: " + pesoHombre + "<br>");
	}
}
