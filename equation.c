<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style>
		
		input[type=number] 
		{
			width: 30%;
			margin: 8px 0;
			padding: 12px 20px;

			box-sizing: border-box;
			border: 3px solid #ccc;

			outline: none;
			transition: 0.5s;
			-webkit-transition: 0.5s;
		}
		
		input[type=number]:focus 
		{
			border: 3px solid #555;
		}

		button#btn 
		{
			color: white;
			border: none;
			background-color: #4CAF50; /* Green */
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			margin: 4px 2px;
			cursor: pointer;
			display: inline-block;
			font-size: 16px;
			transition-duration: 0.4s;
			-webkit-transition-duration: 0.4s; /* Safari */
		}
				
		button#btn:hover 
		{
			box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
		}
		
        </style>

		<script type="text/javascript">
	
			// Função: Capturar
			function capturar()
			{
				var a = document.getElementById("a").value;
				var b = document.getElementById("b").value;
				var c = document.getElementById("c").value;
				
				calcular(a, b, c);
			}
			
			// Função: Calcular
			function calcular(a, b, c)
			{
				if (a == 0)
				{
					alert("Inválido");					
				}
				
				else
				{
					// Delta
					var delta = Math.pow(b,2) - (4 * a * c);
	
					var raiz_1 = (-b + delta) / 2 * a;
					var raiz_2 = (-b - delta) / 2 * a;
					
					alert(" # Raiz 1 : " + raiz_1 + "\n" + " # Raiz 2 : " + raiz_2);
				}
			}

        </script>
	</head>

<body>

	<label for="a"> A : </label>
	<input type="number" id="a" maxlength="5"> </input> <br> <br>

    <label for="b"> B : </label>
	<input type="number" id="b" maxlength="5"> </input> <br> <br>

    <label for="c"> C : </label>
	<input type="number" id="c" maxlength="5"> </input> <br> <br>

    <button id="btn" onclick="capturar()"> Calcular </button>

</body>

</html>
