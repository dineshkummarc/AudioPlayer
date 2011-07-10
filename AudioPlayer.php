<!DOCTYPE html>
<html>
<head>
<title>HTML5 AUDIO</title>
<link rel='stylesheet' href='css/AudioPlayer.css' />
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'></script>
<script type='text/javascript' src='AudioPlayer.js'></script>
</head>
<body >

<?php 
$dir = 'audio/Diplo/Fabriclive/';

echo "<div id=\"".$dir."\"class=\"container\">\n";



	if ($handle = opendir($dir)) {
   		/* loop over the directory. */
   		$counter = 1;
    	while (false !== ($file = readdir($handle))) {
    	    if ($file != "." && $file != "..") {

    	    	
	    	    	//$file = htmlspecialchars($file, ENT_QUOTES);
					echo "<audio src=\"".$dir.$file."\" preload ></audio>\n";
	        		
    	}
    }
	}
	echo "</div>";
?>
<!--

<div id ="audioPlayer">
<img id='loading' src="images/ajax-loader.gif" />
<div id='controlsContainer'>
<div id="controls">
<input type='button' value="Play" id="play" / >
<input type='button' value="Pause" id="pause" / >
<input type='button' value= "Stop" id='stop' />
<input type='button' value="<<" id ='skipBack' />
<input type='button' value=">>" id ='skipForward' />
</div>
<div id='progress'></div>

</div>
</div>
-->
</body>

</html>