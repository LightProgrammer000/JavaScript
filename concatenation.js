<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style> </style>

		<script type="text/javascript">

			// Variáveis [Array]
			var Sul = ["Paraná", "Santa Catarina", "Rio Grande do Sul"];
			var Norte = ["Pará", "Amazonas", "Amapá", "Roraima", "Rondônia", "Tocantins", "Acre"];
			var Sudeste = ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Espírito Santo"];
			var Nordeste = ["Paraíba", "Pernambuco", "Piauí", "Ceará", "Maranhão", "Rio Grande do Norte", "Sergipe", "Alagoas"];
			var CentroOeste = ["Mato Grosso", "Mato Grosso do Sul", "Distrito Federal", "Goiás"];

			// Concatenação
			var Estados = Sul.concat(Norte, Sudeste, Nordeste, CentroOeste);

			// Ordenamento Alfabética
			Estados.sort();

			// Estrutura de repetição
			for (i = 0; i < Estados.length; i++)
			{
				document.write(Estados[i] + "<br>");			
			}

        </script>
	</head>

<body>

</body>

</html>
