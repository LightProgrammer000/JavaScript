<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style> </style>

		<script type="text/javascript">

			// Variável
			var Valores = [ 10, 98, 56, 159, 84, 
						  	72, 31, 39, 221, 42, 
							11, 34, 21, 435, 60, 
							54, 93, 32, 654, 92 ];

			// Método: Bubble Sort
			for (i = 0; i < Valores.length; i++)
			{
				for (j = 0; j < i; j++)
				{
					if ( Valores[j] > Valores[i] )
					{
						aux = Valores[i];
						Valores[i] = Valores[j];
						Valores[j] = aux;
					}
				}
			}

			// Saída de dados
			for (i = 0; i < Valores.length; i++)
			{
				document.write(Valores[i] + "<br>");			
			}

        </script>
	</head>

<body>

</body>

</html>
