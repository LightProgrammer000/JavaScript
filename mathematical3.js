<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<!-- Cabeçalho -->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title> JavaScript </title>

        <!-- Seção Css -->
        <style> 

		@charset "utf-8";
		/* CSS Document */

		h1
		{
			color:#00F;
		}

		p
		{
			margin-top: 15px;
		}

		label
		{
			text-shadow: #000;
			font-size: 20px;	
		}

		input#num
		{
			margin-left: 10px;
			margin-top: 20px;	
		}

		input#btn_1, input#btn_2
		{
			margin-top: 40px;
			padding: 10px;
		}

		</style>

        <!-- Seção JavaScript -->
        <script>

			// Captura de posições [id]
			function captura()
			{
				// Variáveis [globais]
				p1 = document.getElementById("p1");
				p2 = document.getElementById("p2");
				num_aux = document.getElementById("num");
				
				// Valor numérico
				num = num_aux.value.replace(",", ".");
			}

			// Limpar campos
			function redefinir()
			{
				// Chamada de função
				captura();

				// Limpeza de parágrafos
				p1.innerHTML = "";
				p2.innerHTML = "";
			}

			// Calcular
			function Calcular()
			{
				// Chamada de função
				captura();
				
				// Variável String inicializada para acumulo de dados
				var acumulador = "";
				
				// Estrutura de repetição: 'num' é o limite
				for (i = 1; i <= num; i++)
				{
					acumulador += i + " x " + num + " = " + i * num + "<br>";
				}
				
				// Inserção de valor nas tags <p>
				p1.innerHTML = "Tabuada de " + num;
				p2.innerHTML = acumulador;
			}

		</script>
	</head>

<!-- Corpo -->
<body>

	<h1> Tabuada </h1>

    <form>
        <label for="num"> Digite: </label>
        <input id="num" type="number" placeholder="Digite um valor"> <br>

        <input id="btn_1" type="button" value="Calcular" onclick="Calcular()"> </input>
   		<input id="btn_2" type="reset" value="Limpar" onclick="redefinir()"> </input> 
	</form>

    <p id="p1"> </p>
    <p id="p2"> </p>

</body>

</html>
