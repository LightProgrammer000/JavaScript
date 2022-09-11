<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<!-- Cabeçalho -->
	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

		<!-- Seção Css -->
        <style> </style>

		<!-- Seção JavaScript -->
		<script type="text/javascript">

			// Variáveis [Array Bidimensional]
			var l = prompt("Digite o número de linhas: ", 1);
			var c = prompt("Digite o número de colunas: ", 1);
		
			// Variáveis [inicializadas]
			var matriz = [];
			var acumulador = "";

			alert("Matriz: \nLinhas: " + l + " \nColunas: " + c);

			// Criação de Matriz [Estrutura Interna]
			/*
			              00  01  02
 			** Matriz : [ 
						  [], [], [],  00
						  [], [], [],  01 
						  [], [], []   02
						]
			*/
			for (i = 0; i < l; i++)
			{
				matriz[i] = [];
				
				for (j = 0 ; j < c; j++)
				{
					matriz[i][j] = "";
				}
			}

			// Populando matriz
			for (i = 0; i < l; i++)
			{
				for (j = 0; j < c; j++)
				{
					matriz[i][j] = prompt("Digite o elemento: ");					
				}
			}

			// Acumulador: Valores na lista
			for (i = 0; i < l; i ++)
			{
				for (j = 0; j < c; j++)
				{
					acumulador += matriz[i][j] + "\t";
				}

				acumulador += "\n";
			}

			alert("*** Valores *** \n" + acumulador );

        </script>
	</head>

<!-- Corpo -->
<body>

</body>

</html>
