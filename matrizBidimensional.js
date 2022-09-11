<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 
<html xmlns="http://www.w3.org/1999/xhtml">
 
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title> Testando JavaScript </title>
 
        <style> </style>
 
        <script type="text/javascript">
 
            // Variáveis [Array Bidimensional]
            var matriz = [ ["Banana", "Maçã"],
                           ["Pêra", "Abacate"],
                           ["Uva", "Tâmara"]
                         ];
 
            // Acumulador
            var acumulador = "";
            
            for (i = 0; i < 3; i ++)
            {
                for (j = 0; j < 2; j++)
                {
                    acumulador += matriz[i][j] + "\t";
                }
                
                acumulador += "\n";
            }
            
            alert("*** Valores *** \n" + acumulador );
 
        </script>
    </head>
 
<body>
 
</body>
 
</html>
