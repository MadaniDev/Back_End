<?php
$harga = "20.000";
$menu = '';
$menu = implode( '+ ' , $_GET['menu'] );

echo "Anda telah memilih : <br>".$menu."=".$harga;


	$myText = 'ichwan & Wildan';
	$hasil = explode(" ", $myText);
   echo $hasil[1];
   echo '<br>';
   print_r($hasil);
    
?>