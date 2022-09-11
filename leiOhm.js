<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style> </style>

		<script type="text/javascript">
		
			// Funções
			function Corrente(U, R)
			{
				if (R == 0)
				{
					return 0;					
				}
				
				else
				{
					return (U/R);
				}
			}

			var tensao = prompt("Digite o valor da tensão: ", 0);
			var resistencia = prompt("Digite a resistência: ", 0);
			
			alert("Corrente: " + Corrente(tensao, resistencia) + " A");

        </script> 
	</head>

<body>

</body>

</html>
