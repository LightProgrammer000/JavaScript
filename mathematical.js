<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style> </style>

		<script type="text/javascript">

			// Variáveis
			num1 = prompt("Digite N1: ", 0);
			num2 = prompt("Digite N2: ", 0);

			// Conversão
			n1 = parseFloat(num1);
			n2 = parseFloat(num2);

			// Operações
			soma = n1 + n2;
			subtracao = n1 - n2;
			multiplicacao = n1 * n2;
			divisao = n1 / n2;
			modulo = n1 % n2;

			// Saída de dados
			document.write("<br> # Soma: " + soma );
			document.write("<br> # Subtração: " + subtracao );
			document.write("<br> # Multiplicação: " + multiplicacao );
			document.write("<br> # Divisão: " + divisao );
			document.write("<br> # Resto: " + modulo );
			document.write("<br> # Pré-Incremento: " + ++n1 );
			document.write("<br> # Pós-Decremento: " + --n2 );
			
        </script>        
	</head>

<body>

</body>

</html>
