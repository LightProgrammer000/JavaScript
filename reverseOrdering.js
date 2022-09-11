<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style> </style>

		<script type="text/javascript">

			// Variável [Array]
			var Valores = ["Rio de Janeiro", "São Paulo", "Espírito Santo", "Minas Gerais"];

			// Ordenamento alfabético
			Valores.sort();
			
			// Estrutura de repetição
			for (i = 0; i < Valores.length; i++)
			{
				document.write(Valores[i] + "<br>");			
			}

			document.write("<br>");

			// Ordenamento reverso alfabético
			Valores.sort();
			Valores.reverse(Valores);

			// Estrutura de repetição
			for (i = 0; i < Valores.length; i++)
			{
				document.write(Valores[i] + "<br>");			
			}

        </script>
	</head>

<body>

</body>

</html>
