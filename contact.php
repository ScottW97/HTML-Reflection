
<?php echo file_get_contents("html/header.html"); ?> 
<div class="nmform">          
<form action="welcome.php" method="post">

<div>
    <div>
        <p class="formtext">Your Name</p> <input class="nminput" type="text" name="name"><br>
    </div>
    <div>
        <p class="formtext">Your E-mail</p> <input class="nminput" type="text" name="email"><br>
    </div>
</div>
<div>
    <div>
        <p class="formtext">Your Telephone Number</p> <input class="nminput" type="text" name="telenumber"><br>
    </div>
    <div>
        <p class="formtext">Subject</p> <input class="nminput" type="text" name="subject"><br>
    </div>
</div>
<div>
    <p class="formtext">Message</p> <input class="nminput" type="text" name="message"><br>
</div>
<input class="nmsubmit" type="submit" value="SEND ENQUIRY">
</form>
</div>
<?php echo file_get_contents("html/footer.html"); ?>
