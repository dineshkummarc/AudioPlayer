<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src='../StandAloneAudioPlayer0.2.js'>
</script>
<script type='text/javascript'>
setup = function(){
var newSettings = {
		
		trackColor : '#ffffff',
		trackHiglight : "#aaaaaa",
		trackSelected: "#999999",
		trackPlaying : {
			color:'#000000'
		}	
	}


var myAudioPlayer = new AudioPlayer('',newSettings);
console.log(myAudioPlayer);


myAudioPlayer.setStyle(newSettings);
}

</script>
</head>
<body onload='setup()'>
<?php 
$dir = 'audio/Clipse/Till The Casket Drops/';


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
?>
</body>
</html>