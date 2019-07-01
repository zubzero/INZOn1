<?php
require('conexion.php');
header("Content-Type: text/html;charset=utf-8");
header('Access-Control-Allow-Origin: *');


$sql = "UPDATE `viveenunclick`.`usuarios` SET `puntos` = \'79\' WHERE `usuarios`.`id_usuario` = 29;";

?>