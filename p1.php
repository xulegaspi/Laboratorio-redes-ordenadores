<?php
	$browser = $_REQUEST["navegador"];
	$time = $_REQUEST["hora"];
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $email = $_REQUEST["email"];
    $name = $_REQUEST["name"];
    $surname = $_REQUEST["surname"];
    $day = $_REQUEST["day"];
    $month = $_REQUEST["month"];
    $year = $_REQUEST["year"];
    $sex = $_REQUEST["sex"];
    
    $action = $_REQUEST["cbaction"];
    $comedy = $_REQUEST["cbcomedy"];
    $doc = $_REQUEST["cbdoc"];
    $quiz = $_REQUEST["cbquiz"];
    $sports = $_REQUEST["cbsports"];
    $news = $_REQUEST["cbnews"];
    $kids = $_REQUEST["cbkids"];
    
    $server = $_SERVER["HTTP_HOST"];
    $referer = $_SERVER["HTTP_REFERER"];
    $software = $_SERVER["SERVER_SOFTWARE"];
    $remote = $_SERVER["REMOTE_ADDR"];
    $method = $_SERVER["REQUEST_METHOD"];
    $request_uri = $_SERVER["REQUEST_URI"];
    $user_agent = $_SERVER["HTTP_USER_AGENT"];
    
?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <link rel="stylesheet" type="text/css" href="p1.css" media="screen" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>LRO</title>
    </head>
    <body>
        <div class="tableline">
            <div class="alignleft">Username:</div>
            <div class="alignright"><?php echo $username ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Name:</div>
            <div class="alignright"><?php echo $name ?></div>
            </div>
        <div class="tableline">
            <div class="alignleft">Surname:</div>
            <div class="alignright"><?php echo $surname ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Password:</div>
            <div class="alignright"><?php echo $password ?></div>  
        </div>
        <div class="tableline">
            <div class="alignleft">Email:</div>
            <div class="alignright"><?php echo $email ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Birthday:</div>
            <div class="alignright"><?php echo $day ?> <?php echo $month ?> <?php echo $year ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Sex:</div>
            <div class="alignright"><?php echo $sex ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Categories subscribed:</div>
            <div class="alignright">
            <?php
            if(action==on) echo "action";
            if(comedy==on) echo "comedy";
            if(doc==on) echo "documentaries";
            if(quiz==on) echo "quiz";
            if(kids==on) echo "kids";
            if(news==on) echo "news";
            if(sports==on) echo "sports"; ?>
            </div>
        </div>
        <div class="tableline">
            <div class="alignleft">Browser:</div>
            <div class="alignright"><?php echo $browser ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Time:</div>
            <div class="alignright"><?php echo $time ?></div>
        </div>
        <br />
        <div class="tableline">
            <div class="alignleft">Server values</div>
        </div>
        <div class="tableline">
            <div class="alignleft">Server:</div>
            <div class="alignright"><?php echo $server ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Referer:</div>
            <div class="alignright"><?php echo $referer ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Software:</div>
            <div class="alignright"><?php echo $software ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Remote:</div>
            <div class="alignright"><?php echo $remote ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Method:</div>
            <div class="alignright"><?php echo $method ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">Request URI:</div>
            <div class="alignright"><?php echo $request_uri ?></div>
        </div>
        <div class="tableline">
            <div class="alignleft">User agent:</div>
            <div class="alignright"><?php echo $user_agent ?></div>
        </div>
    </body>
</html>