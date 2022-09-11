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

			// Array [unidimensional]
			var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembtro"];
			var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

			// Construtor: Objeto 'hoje'
			var hoje = new Date();

			// Exibindo os valores iniciais de data e hota no navegador
			document.write("Exibindo os valores iniciais de Data e Hora no navegador", "<br>");
			document.write("Dia mensal: ", hoje.getDate(), "<br>");
			document.write("Mês [", hoje.getMonth(), "]: ", mes[hoje.getMonth()], "<br>");
			document.write("Dia [", hoje.getDay(), "]: ", semana[hoje.getDay()], "<br>");
			document.write("Hora: ", hoje.getHours(), "<br>");
			document.write("Minuto: ", hoje.getMinutes(), "<br>");
			document.write("Segundos: ", hoje.getSeconds(), "<br>");

			// Função que permite alterar data e hora
			function alterarData()
			{
				// Capturando posições das 'caixas de texto'
				var _dia = document.getElementById("dia");
				var _mes = document.getElementById("mes");
				var _ano = document.getElementById("ano");
			
				// Método SET
				hoje.setDate(_dia.value);
				hoje.setMonth(_mes.value-1);
				hoje.setFullYear(_ano.value);

				// Método GET
				alert("Data: " + hoje.getDate() + " de " + mes[hoje.getMonth()] + " de " + hoje.getFullYear());
			}

        </script> 
	</head>

<!-- Corpo -->
<body>
	
    <!-- Formulário -->
	<form name="Datas">
    
    	<p> Preencha os campos a seguir para alterar a data e clique no botão "Alterar Data" </p>
		
        <!-- Dia -->
        <label for="dia"> Dia: </label>
        <input type="text" id="dia" name="dia" size=4 placeholder="Dia"> </input> <br> <br>
		
       	<!-- Caixa de Seleção -->
      	<label> Mês: </label>
        <select id="mes" name="mes">
          <option value="1"> Janeiro </option>
          <option value="2"> Fevereiro </option>
          <option value="3"> Março </option>
          <option value="4"> Abril </option>
          <option value="5"> Maio </option>
          <option value="6"> Junho </option>
          <option value="7"> Julho </option>
          <option value="8"> Agosto </option>
          <option value="9"> Setembro </option>
          <option value="10"> Outubro </option>
          <option value="11"> Novembro </option>
          <option value="12"> Dezembro </option>
    	</select> <br> <br>

        <!-- Ano -->   
        <label for="ano"> Ano: </label>
        <input type="text" id="ano" name="ano" size=6 maxlength=4 placeholder="Ano"> </input> <br> <br>

		<!-- Botão -->
		<button type="button" id="alterar" name="alterar" onclick="alterarData()"> Alterar Data </button>

    </form>
	
</body>

</html>
