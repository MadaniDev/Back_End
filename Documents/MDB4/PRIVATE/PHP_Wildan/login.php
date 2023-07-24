<form method="POST" action="proses.php">
    <h2>Form Registrasi</h2>
    <div>
        <label for="">Username</label><br>
        <input type="text" name="username" required>
    </div>
    <div>
        <label for="">Password</label><br>
        <input type=" password" name="password" required>
    </div>
    <div>
        <label for="">Address</label><br>
        <input type="text" name="address" required>
    </div>
    <div>
        <label for="">Address</label><br>
        <input type="date" name="address" value="<?php echo date('Y-m-d');?>">
    </div>
    <br>
    <button type=" submit" name="submit">LOGIN</button>
</form>