
//Standalone version
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
			li.addEventListener('click',function(e){
				if(e.target.getAttribute('id') != playing){
					e.target = that.setToPlaying(e.target);	
					
				}
				
				
				});
			}
		}
		
		
	};
		this.buildTracklist();

	
	//attach events to controls
	this.playButton.addEventListener('click',function(){
		that.nowPlaying.play();
		that.isPlaying = true;
	},true);
	
	this.pauseButton.addEventListener('click',function(){
			that.nowPlaying.pause();
			that.isPaused = true;

	},true);
	
	this.stopButton.addEventListener('click',function(){
		that.nowPlaying.pause();
		that.nowPlaying.currentTime = 0;
		that.isPlaying = false;

	},true);
	
	this.skipButton.addEventListener('click',function(){
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
				var li = that.trackList.
				playing.style.background = '#8c88bd';
				playing.style.color = "#000000";
				playing.setAttribute('id','');	
				that.trackList.firstChild.setAttribute('id','playing');
			}
	
	},true);
	
	
	this.backButton.addEventListener('click',function(){
		if(that.listPostion-- != undefined){
		that.listPosition--;
		if(that.listPosition > 0){
			that.nowPlaying.pause();
			that.nowPlaying.currentTime = 0;
			that.nowPlaying = that.allAudio[that.listPosition];
		}
		else {
			that.nowPlaying.pause();
			that.nowPlaying.currentTime = 0;
			that.nowPlaying = that.allAudio[0];
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
	
		}
		});
	
}
//run standalone
//var audioPlayer1 = new AudioPlayer("audioPlayer1");