/**
 * HTML5 Audio Player
 * 
 * Given an HTML element, and a settings object,
 * will build an HTML5 Audio Player Widget
 * 
 * Features - 
 * 	Customizable colorScheme 
 * 
 * 	Volume Control
 * 
 * 	Progress Bar
 * 
 *  AJAX Track Switching from
 *  Album List
 */



var AudioPlayer = function(elementID, settings){
	console.log(arguments[1]);
	console.log(this);
	//This will be prepended to all DOM elements to save namespacing
	var nameSpaceID = 'audio_player_';
	var arguments = function(){
		//check arguments, and keep as a private variable
		//for protected methods to access
	
	};
	
	
	/*
	 * 	pppp 	 rrr		iiiiiiiii	v				v			a					t			eeeeeeeee
	 * p	p	r	rrr			i		 v			   v		   a a					t			e
	 * p	p	r	  r			i	  	  v			  v			  a   a					t			e
	 * p	p	r	 rr			i	   	   v		 v			 a	   a		ttttttttttttttttt	e
	 *  pppp	 rrrrr			i			v		v			aaaaaaaaa				t			eeeeeeee	
	 * p		r	 r			i		 	 v	   v		   a		 a				t			e
	 * p		r	  r			i		  	  v	  v			  q			  a				t			e
	 * p		r     r			i		   	   v v			 q			   a			t			e
	 * p		r	  r		iiiiiiiii			v			a				a			t			eeeeeeeeee
	 * 
	 * Methods and  Variables
	 */
	var currentLocation = 0;
	
		
		
		if(typeof (elementID) === 'object' ){
			var baseElement = elementID;
			
		}
		
		if(elementID !== undefined){
			var baseElement = window.document.getElementById(elementID);	
			
		
		}
		
		if(elementID === ''){
			var baseElement = document.body;
		}

	
	var defaultSettings = {
		height : '300px',
		width : '500px'
				
	};

	var tracks = new Array();
			//A collection of track objects
			
	var that = this;		
	
	
	var controls = {
		//A collection of controls objects	
			play : {
				id : 'play',
				click : function (){
					alert('Play');
				}
				
				
			},
			pause : {
				id : 'pause',
				click : function (){
					alert('Pause');

				}
			},
			stop :{
				
				id : 'stop',
				click : function (){
					alert('Stop');

				}
			},
			back : {
				
				id: 'back',
				click : function (){
					alert('Back');

				}
			},
			skip : {
				id : 'skip',
				click : function (){
					alert('Skip');

				}
				
			}
		
			
			
	};
	
	var progressBar  = {
		currentTime : ''
		
	};
	
	
	var playList = {
			id : nameSpaceID+'_playlist',
			numTracks : null,
			totalLength : null,
			getTracks : function(){
				var audioObjects = baseElement.getElementsByTagName('audio');
				//for each audio tag in that.element
				//track = new Track(audioTag), 
				//that.tracks.push(track)
				return audioObjects;
			}
			
	};
	//Private Methods
	var setUpCSS = function(settings){
		//Singleton
		
	};
	
	var setUpHTML = function(baseElement){
		//Singleton
		var playlist = document.createElement('ul');
		playlist.setAttribute('id', playlist.id);
		document.body.appendChild(playlist);

		for (control in controls){
			console.log("Outer object : "+control);
			console.log("Inner Object:" +controls[control]);
			var button = document.createElement('input');
			button.setAttribute('type', 'button');
			button.setAttribute('value', control);


			var myControl = controls[control];
				for(value in myControl){
					console.log("Click : "+myControl.click);
					button.setAttribute('id', myControl.id);
					button.addEventListener('click', myControl.click, true);

				}
			
			console.log("Event Listener: "+controls[control.click]);
			//button.addEventListener('click',control[click]);
			document.body.appendChild(button);
		}
		var progressBar;
		
		setUpCSS(defaultSettings);
		console.log('Setting up HTML');

	};
	setUpHTML(baseElement);
	var allAudio = playList.getTracks();

	//Helper Functions
	var addEvent = function(event,callback){
		//Check for browser Specific event handling here
		
	
	};
	
	var doAjax = function(url,callback){
		//Check for browser specific 
		
	};
	
	
	/*
	 * pppppp	u	u	bbbbb	l		iiiiiiiii	ccccccc
	 * p	p	u	u	b	b	l			i		c	
	 * pppppp	u	u	bbbbb	l			i		c
	 * p		u	u	b	b	l			i		c
	 * p		uuuuu 	bbbbb	llllll	iiiiiiiii	ccccccc
	 */	
	
	this.setStyle = function(settings){
		
		
	};
	
	
};