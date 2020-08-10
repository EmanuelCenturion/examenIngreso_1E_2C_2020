/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/


function mostrar() {

  let marca;
  let precio;
  let pesoKilogramo;
  let tipo;
  let respuesta = 's';
  let acumPrecioSolido = 0;
  let acumPesoLiquido = 0;
  let pesoTotal;
  let precioLiquido;
  let flagLiquido = 0;
  let PrecioSolido;
  let flagSolido = 0;
  let marcaLiquido;
  let marcaSolido;

  do {
    do {
      marca = prompt("Ingrese marca de producto");
    } while (marca == "");
    do {
      precio = parseFloat(prompt("Ingrese precio de producto"));
    } while (precio <= 0 || isNaN(precio));
    do {
      pesoKilogramo = parseFloat(prompt("Ingrese peso por Kilogramo de producto"));
    } while (pesoKilogramo <= 0 || isNaN(pesoKilogramo));
    do {
      tipo = prompt("Ingrese tipo de producto. (solido o liquido)");
    } while (tipo != "solido" && tipo != "liquido");
    respuesta = prompt("Desea ingresar otro producto? s/n");

    switch (tipo) {
      case "solido":
        acumPrecioSolido += pesoKilogramo;
        if (precio < PrecioSolido || flagSolido == 0) {
          PrecioSolido = precio;
          marcaSolido = marca;
          flagSolido = 1;
        }
        break;
      case "liquido":
        acumPesoLiquido += pesoKilogramo
        if (precio > precioLiquido || flagLiquido == 0) {
          precioLiquido = precio;
          marcaLiquido = marca;
          flagLiquido = 1;
        }
        break;
    }
    pesoTotal = acumPrecioSolido + acumPesoLiquido;

  } while (respuesta == 's');

  document.write("A)El peso total de la compra es: " + pesoTotal + "<br>");
  if (marcaLiquido == null) {
    document.write("B)No se ingreso ningun producto liquido " + "<br>");
  } else {
    document.write("B)La marca del liquido mas caro es: " + marcaLiquido + "<br>");
  }
  if (marcaSolido == null) {
    document.write("B)No se ingreso ningun producto solido " + "<br>");
  } else {
    document.write("C)La marca del solido mas barato es: " + marcaSolido + "<br>");
  }

}
