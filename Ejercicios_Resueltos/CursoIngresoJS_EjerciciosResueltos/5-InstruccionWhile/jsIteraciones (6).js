function mostrar()
{
	var acumulador=0;
	var numero;
	var contador = 0;
	// inicializacion; condicion; incremento

	for (var i = 0; i < 5; i++) 
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		acumulador += numero;
	}

	while (contador < 5)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		acumulador += numero;
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN






/*
	for(var i = 0; i < 5; i++)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}

	while(contadorIteraciones < 5)
	{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);
		acumulador += numero;

		contadorIteraciones++;
	}
	 */