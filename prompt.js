<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title> Testando JavaScript </title>

        <style> </style>

		<script type="text/javascript">

			var mensagem;
			var retorno = confirm("Clique em um dos botões !");

			if( retorno == true )
			{
				mensagem = "Operação Confirmada";				
			}

			else
			{
				mensagem = "Operação Cancelada";
			}

			document.write(mensagem);

        </script>        
	</head>

<body>

</body>

</html>
