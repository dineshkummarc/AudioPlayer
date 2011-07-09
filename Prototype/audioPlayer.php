<!DOCTYPE html>
<html>
<head>
<title>HTML5 AUDIO</title>
<style>
#controls input[type=button]{
	background:#666;
	border:0;
	color:#fff;
	padding:5px;
	font-size:12px;
	margin:5px 0 10px 0;
}

#controls input[type=button]:hover {
	background:#999;
}

#audioPlayer {
	background:#aaa;
	height:300px;
	width:499px;
	overflow:auto;
	font-family:"Verdana","Helvetica",sans;
	font-size:14px;
	border-color:black;
	border-style:solid;
	border-width:25px 15px 5px 15px;
	
}
#trackList {
	text-indent:0;
	margin:0;
	padding:0;
	background:#ccc;
	border:1px solid black;
}


#trackList li {
	color:#000;	
	background:#8c88bd;
	list-style-type:none;
	padding:10px 15px 15px 10px;
	border-style:solid;
	border-color:black;
	border-width:0 0 1px 1px;
	overflow:hidden;
	cursor:pointer;
}

#trackList li:hover {

background:#EAE8FF;

}

#playing {
	color:#FF0000;
	background:#9c9c9c;
}
.trackTime {
	border-left:1px solid #333;
	float:right;
	padding:0 10px 0 10px;
	
	
}	
#loading {
	display:block;
	padding-top:10%;
	margin:auto;	
	
}
#controlsContainer {
height:90px;
width:516px;
background:#000;	
border-radius:0 0 5px 5px;
padding-left:13px;
}

#progress {
background:#fff;	
height:25px;
width:490px;
border-color:black;
border-style:solid;
}
#controls {
	padding:5px 0 0 5px;
	
	
	}

</style>
<script type="text/javascript">
function init(){

var AudioPlayer = function(source,audioID){
	
	this.setUp = function (){
		var trackList = document.createElement('ul');
		trackList.setAttribute('id','trackList');
		var thePlayer = document.getElementById('audioPlayer');
		thePlayer.removeChild(document.getElementById('loading'));
		thePlayer.appendChild(trackList);
	
	}
	
	function unescapeTrackName(src){
					src = src.replace('audio/','');
					src = src.substring(0,src.length - 4);
				

				return unescape(src);
	}
	
	this.setUp();	
	
	//create a ref to the base object
	var that = this;

	//set up audio element and controls
	this.playButton = document.getElementById('play');
	this.pauseButton = document.getElementById('pause');
	this.stopButton = document.getElementById('stop');
	this.skipButton = document.getElementById('skipForward');
	this.backButton = document.getElementById('skipBack');
	this.listPosition = 0;
	this.allAudio  = document.getElementsByTagName('audio');
	
	//State variables
	this.isPlaying = false;
	this.isPaused = false;
	this.nowPlaying = this.allAudio[this.listPosition];
	
	this.trackList = document.getElementById('trackList');
	
	//Set an item in the tracklist to now playing style
	this.setToPlaying = function (li){
		li.style.background = '#9c9c9c' ;
		li.style.color = '#ffffff';
		li.setAttribute('id','playing');
		return li;
		
		};
	
	//Reset an item to non playing
	this.setToDefault = function(playing){
		playing.style.background = '#8c88bd ';
		playing.style.color = "#000000";
		playing.setAttribute('id','');
		return playing;
	
	};
	
	this.buildTracklist = function(){
	var playing = document.getElementById('playing');

		if(this.trackList.children.length === 0){
			for(i = 0;i< this.allAudio.length;i++){
				var li = document.createElement('li');
				var src = this.allAudio[i].getAttribute('src');
				var text  = document.createTextNode(unescapeTrackName(src)); 
			
				if(i === this.listPosition){
					//current track
					li = this.setToPlaying(li);
				}

			var trackTime = document.createElement('span');
			trackTime.setAttribute('class','trackTime');
			
			var result = Math.round(this.allAudio[i].duration/60*100)/100;
			result = result.toFixed(2);		
			var time = document.createTextNode(result);
			
			trackTime.appendChild(time);
			li.appendChild(text);
			li.appendChild(trackTime);
			this.trackList.appendChild(li);
		
			}
		}
		
		
	};
		this.buildTracklist();

	
	//attach events to controls
	this.playButton.addEventListener('click',function(e){
		that.nowPlaying.play();
		that.isPlaying = true;
	},true);
	
	this.pauseButton.addEventListener('click',function(e){
			that.nowPlaying.pause();
			that.isPaused = true;

	},false);
	
	this.stopButton.addEventListener('click',function(e){
		that.nowPlaying.pause();
		that.nowPlaying.currentTime = 0;
		that.isPlaying = false;

	},false);
	
	this.skipButton.addEventListener('click',function(e){
		that.listPosition++;
		if(that.listPosition < that.allAudio.length){
			that.nowPlaying.pause();
			that.nowPlaying.currentTime = 0;
			that.nowPlaying = that.allAudio[that.listPosition];
		}
		else {
			that.nowPlaying.pause();
			that.nowPlaying.currentTime = 0;
			that.nowPlaying = that.allAudio[0];
			that.listPosition = 0;	
		}
		//If a track is playing currently, and is skipped, play the next track
		if(that.isPlaying){
			that.nowPlaying.play();
			
		}
		var playing = document.getElementById('playing');
			if(playing.nextSibling != undefined){
				var li = playing.nextSibling;
				li = that.setToPlaying(li);
				playing = that.setToDefault(playing);

			}
			else{
				playing = that.trackList.firstChild;
				playing.style.background = '#8c88bd';
				playing.style.color = "#000000";
				playing.setAttribute('id','');	
				that.trackList.firstChild.setAttribute('id','playing');
			}
	
	},false);
	
	
	this.backButton.addEventListener('click',function(e){
		if(that.listPostion-1 >= 0){
			that.listPosition--;
			that.nowPlaying.pause();
			that.nowPlaying.currentTime = 0;
			that.nowPlaying = that.allAudio[that.listPosition];
		}
		else {
			that.nowPlaying.pause();
			that.nowPlaying.currentTime = 0;
			that.nowPlaying = that.allAudio[that.allAudio.length - 1];
			that.listPosition = that.allAudio[that.allAudio.length - 1];	
			}
		var playing = document.getElementById('playing');
		if(playing.previousSibling != undefined){
			var li = playing.previousSibling;
			li = that.setToPlaying(li);
	
			playing = that.setToDefault(playing);
			}
			else{
				that.trackList.lastChild = that.setToPlaying(that.trackList.lastChild);
				playing = that.setToDefault(playing);

			}
	
		
		},false);
	
}

var audioPlayer1 = new AudioPlayer("audioPlayer1");

}

</script>
</head>
<body onload='init()'>
<div id ="audioPlayer">
<img id='loading' src="ajax-loader.gif" />

<?php 
	$cwd = getcwd();
	if ($handle = opendir('audio')) {

		/* loop over the directory. */
		$counter = 1;
	while (false !== ($file = readdir($handle))) {
	    if ($file != "." && $file != ".." && $file != ".DS_Store") {
		echo "<audio id='track".$counter."' src='audio/".$file."' preload='auto'>\n";
		echo "	<source id='tracksrc".$counter. "source' src='".$file."'>\n";
		echo "</audio>\n";
		$counter++;
		}
	}
}

?>

<!--<audio id="track1" preload="auto" src='audio/track1.mp3' >
<source src='audio/track1.mp3' id='track1source' /></audio>
<audio id="track2" preload="auto" src='audio/track2.mp3'>
<source src='audio/track2.mp3' id='track2source' /></audio>-->
</div>
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
</body>

</html>