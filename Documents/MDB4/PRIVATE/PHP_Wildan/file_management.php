<?php
//  $myfile = fopen("kartunn.jpg", "r") or die("File gagal dibuka !");
//  echo fread($myfile, filesize('kartunn.jpg'));
//  fclose($myfile);

//  $myfile = fopen("data.txt", "a") or die("File gagal dibuka !");
//  $text = 'Muhammad Wildan';
//  fwrite($myfile, $text);
//  echo fread($myfile, filesize('data.txt'));
//  fclose($myfile);
 

// $myfile = fopen("data.txt", "a") or die("File gagal dibuka !");
// $txt = "Laptop\n";
// fwrite($myfile, $txt);
// $txt = "Iphone\n";
// fwrite($myfile, $txt);
// echo fread($myfile, filesize('data.txt'));
// fclose($myfile);



// $file = "data3.txt";
// $filebaru = "data2.txt";
// $filebaru2 = "data1.txt";
// if (copy ($file, $filebaru)) {
//    echo "File <b>$file</b> berhasil dicopy menjadi <b>$filebaru</b>.<br/>";
// }
//   if (rename ($filebaru, $filebaru2)) {
//      echo "File <b>$filebaru</b> berhasil direname menjadi <b>$filebaru2</b>.<br/>";
//   }
//   if (unlink($file)) {
//      echo "File <b>$file</b> berhasil dihapus. <br/>";
//   }


    // $dir = "Dataku"; //nama direktori
    // $cek = mkdir($dir);
    // if ($cek) {
    //    echo "Direktori <b>$dir</b> berhasil dibuat";
    // } else {
    //    echo "Direktori <b>$dir</b> gagal dibuat";
    // }


// $dir = dirname(__FILE__)."/Dataku";
// if ($handle = opendir($dir)) {
//    while (false !== ($file = readdir($handle))) {
//        if ($file != "."&&$file !="..") {
//           echo "$file<br/>";
//        }
//    }
// closedir($handle);
// }



// $dir = "Dataku/Composer.exe"; //nama folder
// $del = unlink($dir);
// if ($del) {
//   echo "<br>Direktori <b>$dir</b> berhasil dihapus";
// } else {
//   echo "<br>Direktori <b>$dir</b> gagal dihapus";
// }


$FoldeData = 'Dataku';
$FoldeDataBaru = 'DataBaru';



// $myfile = fopen("Dataku/Tor.pdf", "r");
// $File = 'Tor.pdf';
// echo 'File '.$File.' berhasil ditambahkan ke folder '.$FolderDataBaru.'<br>';

// $OpenFile = fopen("nama-product/Tablet.txt", "a+") or die("File tidak dapat dibuka!");
// $DataFile = "Advan\n";
// fwrite ($OpenFile, $DataFile );
// echo 'Data berhasil ditambahkan <br>';
// echo fread($myfile, filesize("nama-product/Tablet.txt")).'<br>';
// fclose($myfile);



// $file = "Composer.dfgg";
// if (file_exists($file)) {
// echo "File $file ADA<br />";
// } else {
// echo "File $file TIDAK ADA<br />";
// }

// if (is_file($file)) {
// echo "File <b>$file</b> adalah FILE<br />";
// }

// if (is_executable($file)) {
// echo "File <b>$file</b> bisa dijalankan secara langsung (executable)<br />";
// } else {
// echo "File <b>$file</b> TIDAK executable<br />";
// }

// if (is_writable($file)) {
// echo "File <b>$file</b> bisa ditulis / diedit<br />";
// } else {
// echo "File <b>$file</b> TIDAK bisa ditulis / diedit<br />";
// }

// if (is_readable($file)) {
// echo "File <b>$file</b> bisa dibaca<br />";
// } else {
// echo "File <b>$file</b> TIDAK bisa dibaca<br />";
// }
?>


<html>

<head>
    <title>Upload File</title>
</head>

<body>
    <h1>Upload Data di PHP</h1>
    <form action="" method="post" enctype="multipart/form-data">
        Upload file : <input type="file" name="file" /><br />
        <button type="submit" name="Upload">Submit</button>
    </form>

    <?php
        if (isset($_POST['Upload'])) {
        $dir_upload = dirname (__FILE__)."/DataBaru/";
        $nama_file = $_FILES['file']['name'];
        //
        if (is_uploaded_file($_FILES['file']['tmp_name'])) {
        $cek = move_uploaded_file($_FILES['file']['tmp_name'], $dir_upload.$nama_file);
        if ($cek) {
            die( "File berhasil diupload");
        
        } else {
            die("File gagal diupload");
        }
        }
        }
        ?>
</body>

</html>