<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<?php
$RTR = simplexml_load_file("RTR.xml");
 printf($lang["display-name"]);
?>
<div class="chanel" id="chanel">
  <div class="current_video">
    <div class="chanel_title">
      <div class="chanel_img"></div>
      <span class="chanel_name">Общественное телевидение России</span>
    </div>
  </div>
  <div class="scheduling">
    <div class="program">
      <span class="time" id="now">15:00</span>
      <span class="program_name" id="now">Новости с субтитрами<div class="tooltip"></div></span><br>
      
    </div>
    <div class="program">
      <span class="time">15:00</span>
      <span class="program_name">Новости с субтитрами</span><br>
    </div>
    <div class="program">
      <span class="time">15:00</span>
      <span class="program_name">Новости с субтитрами</span><br>
    </div>
    <div class="program">
      <span class="time">15:00</span>
      <span class="program_name">Новости с субтитрами</span><br>
    </div>
    <div class="program">
      <span class="time">15:00</span>
      <span class="program_name">Новости с субтитрами</span><br>
    </div>
  </div>
  <div class="more">
  Весь день
  </div>
</div>
<script src="script.js"></script>
</body>
</html>
