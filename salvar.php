<?php

$usuario =$_POST["usuario"];

echo $usuario;
&ARQUIVO = fopen("clientes.txt","w","a");
fwrite($arquivo, $usuario . "\n");
fclose($arquivo);

?>