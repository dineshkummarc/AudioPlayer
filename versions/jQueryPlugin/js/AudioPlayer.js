

$(document).ready(function(){

// plugin definition

//HTML5 Audio Player
//Author: Max McNally
//Dependencies : jQuery - //src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'
//Usage: $(element).AudioPlayer();
//Functionality: Insert an HTML5 audio player into the matched elements
//Options: 
//	
//	playerHeight - Default is 300px
//	playerwidth - Default is 500px;
//  visibleTracks - # of tracks to display before scrolling
//  colorScheme - Object{ 6 options
//		track - A track object, unselected and not playing
//		trackHighlight - MouseOverState/Hover for track object
//		trackSelected - track object selected but not playing
//		trackPlaying - track object, currently playing 
//		progressBG - Progress Bar BG color
//		progressFG - Progress Bar FG color
//}	
(function( $ ){

$.fn.AudioPlayer = function(options) {
	var settings = {
			'playerHeight':'300px',
			'playerWidth':'500px',
			'visibleTracks':'10',
			'colorScheme':{
					'bg':'#000',
					'track':'#8c88bd',
					'trackHighlight':'#EAE8FF',
					'trackSelected':'#9c9c9c',
					'trackPlaying':'#fffff',
					'progressBG':'#fffff',
					'progressFG':'#8c88bd'
						}
		
		};//End Default Settings
	
	
	//Return this function to each matched element
	return this.each(function() {        
			
		// If options exist, lets merge them
		// with our default settings
	   
		if ( options ) { 
			$.extend(true, settings, options );
		}

		//Creating a reference to the object
		//this refers to the set of matched elements

		var obj = $(this);
		//Log Settings
		console.log("Settings :");
		$.each(settings, function(i, val) {
		
			console.log(i + " : "+ val);
			
			});
		

	    // AudioPlayer plugin code here

		//Get all audio tags
		//Current song number
		var nowPlaying = 0;
		var buttonNamespace = obj.attr('id');
		var player = $('<div class="audioPlayer"></div>');
		var tracklist = $('<ul class="audioPlayerTrackList" id="'+buttonNamespace+'_tracklist"></ul>');
		var loadingImage = $('<img src="images/ajax-loader.gif" class="audioPlayerLoadingImage"/>');
		var tracks = obj.children('audio');
		var build = function(settings){
			obj.height(settings.playerHeight);
			obj.width(settings.playerWidth);
			obj.css('background',settings.colorScheme.bg);
			obj.addClass('audioPlayerContainer');
			
			//create markup elements

			var calculateWidth = obj.width()/2-80;
			loadingImage.css('margin-left',calculateWidth+'px');
			loadingImage.css('margin-top','50px');
			obj.prepend(player);
			player.prepend(tracklist);
			//center Loading image
			tracklist.prepend(loadingImage);
			var controlsContainer = $('<div class="audioPlayerControlsContainer"></div>');
			controlsContainer.css('width',obj.width());
			player.append(controlsContainer);
			
			//add controls

			var controls = $('<div class="audioPlayerControls"></div>');
			var play = $('<input class="controls"type="button" id="'+buttonNamespace+'_play" value="Play" name="Play" />');
			var pause =  $('<input type="button" class="controls"id="'+buttonNamespace+'_pause" value="Pause" name="Pause" />');
			var stop =  $('<input type="button" class="controls" id="'+buttonNamespace+'_stop" value="Stop" name="Stop" />');
			var skip =  $('<input type="button" class="controls" id="'+buttonNamespace+'_skip" value=">>" name="Skip" />');
			var backButton =  $('<input type="button" class="controls" id="'+buttonNamespace+'_back" value="<<" name="Back" />');
			var progressBar = $('<span class = "audioPlayerProgressBarBG" id="'+buttonNamespace+'_progress"></span>');
			var progressFG = $('<span class = "audioPlayerProgressBarBG" id="'+buttonNamespace+'_progressFG"></span>');
			controlsContainer.append(play,pause,stop,backButton,skip,progressBar,progressFG);
			

			
			

		};
		build(settings);
		
		var updateTracklist = function(tracks){
			
			console.log(tracks);
			//remove loading image, add tracks/time
			tracklist.empty();
			for(i = 0;i<tracks.length;i++){
				var li = $('<li class="audioPlayerTrack" ></li>');
				var time = $("<span class='audioPlayerTime'></span>");
				var src = $(tracks[i]).attr('src');
				var toReplace = 'audio/'+buttonNamespace;
				src = src.replace(toReplace,'');
				src = src.substring(0,src.length - 4);
				li.text(src);
				var result = Math.round(tracks[i].duration/60*100)/100;
				result = result.toFixed(2);		
				time.text(result);
				tracklist.append(li);
				li.append(time);
				
			}

			
		};
		updateTracklist(tracks);
		
		var setEvents = function(){
			
		};
		
				
		console.log(obj.attr('id'));
	
		});
};	
})(jQuery);

//run jQuery version
$('.container').AudioPlayer({'playerHeight':'300px','colorScheme':{'track':'#fff'}});
});





