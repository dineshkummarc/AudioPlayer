var AudioPlayer = function(){
	console.log("This within AudioPlayer :");
	console.log(this);
var baseElement = document.getElementById('body');
var defaultSettings = {
	hover : '#000'
		
		
};
var that = this;
var controls = {
		//A collection of controls objectsand one method to display 
		//them all and bind them to their events
		
			play : {
				HTML : { tag : 'input',
					 
						attributes : {
							 id : 'play',
							 value : 'play',
							 name : 'play',
							type : 'button'
						}
					
				
					},
				Events : {
					click : function (e,defaultSettings){
						console.log("This within AudioPlayer.controls.click.function, called from setTimeout :");
						console.log(this);
						console.log("Click");
						console.log(e);

					},
					
					mouseover : function (e){
						
						console.log("mouseover");
						console.log(e.target);

					},
					
					mouseOut : function(e){
						console.log('mouseOut');
						console.log(e.target);

					},
					
					mouseDown : function(e) {
						console.log('Mouse Down');
						console.log(e.target);

						
					}
					
					
					
				}
				
		},
			
		
			pause : {
				HTML : { tag : 'input',
						 
						attributes : {
							 id : 'pause',
							 value : 'pause',
							 name : 'pause',
							 type : 'button'
							
							}
					
					
						},
				Events : {
					click : function (e){
						console.log("Click");
						console.log(e.target);

					},
					
					mouseover : function (e) {
						
						console.log("mouseover");
						console.log(e.target);

						
					},
					
					mouseOut : function(e){
						console.log('mouseOut');
						console.log(e.target);

						
					},
					
					mouseDown : function(e) {
						console.log('Mouse Down');
						console.log(e.target);

						
					}
					
					
					
				}
				
			},
		
			stop : {
				HTML : { 
					
						tag : 'input',
					 
						attributes : {
							id : 'stop',
							value : 'stop',
							name : 'stop',
							type : 'button'
						
					}
				
				
					},
				Events : {
					click : function (e){
						console.log("Click");
						console.log(e.target);
					},
				
					mouseover : function (e) {
						console.log("mouseover");
						console.log(e.target);

					},
				
					mouseOut : function(e){
						console.log('mouseOut');
						console.log(e.target);

					},
				
					mouseDown : function(e) {
						console.log('Mouse Down');
						console.log(e.target);

					
					}
				
				
				
				}
			},
			
			back : {
				
				HTML : { 
						tag : 'input',
					
						
						attributes : {
							id : 'back',
							value : 'back',
							name : 'back',
							type : 'button'
						
						}
				
				
					},
					
				Events : {
					
					click : function (e){
						console.log("Click");
						console.log(e.target);

					},
				
					mouseover : function (e) {
					
						console.log("mouseover");
						console.log(e.target);
					},
				
					mouseOut : function(e){
						console.log('mouseOut');
						console.log(e.target);

					},
				
					mouseDown : function(e) {
						console.log('Mouse Down');
						console.log(e.target);

					
					}
				}
			},
			
			skip :{
				HTML : { tag : 'input',
					 
					attributes : {
						 id : 'skip',
						 value : 'skip',
						 name : 'skip',
						 type : 'button'
						
						}
				
				
					},
			Events : {
				click : function (e){
					console.log("Click");
					console.log(e.target);
					console.log(this);

				},
				
				mouseover : function (e, defaultSettings) {
					
					console.log("mouseover");
					console.log('Event target = ');
					console.log(e.target);
					console.log(this);
					this.style.background = defaultSettings.hover;
					
				},
				
				mouseOut : function(e){
					console.log('mouseOut');
					console.log(e.target);

					
				},
				
				mouseDown : function(e) {
					console.log('Mouse Down');
					console.log(e.target);

					
					
				}
				
				
				
			}
			
		}
};
				
				
				
			
			
		
	function createControls(defaultSettings, that){
			console.log("That from AudioPlayer.controls.createControls:");
			console.log(that);
			console.log(defaultSettings);
			for(control in controls){

				//setup html and addEventListeners
				if(controls[control].HTML){
					var html = controls[control].HTML;
					var tag = html.tag;
					var myInput = document.createElement(tag);
					var attributes = html.attributes;

						for(attr in attributes){
							myInput.setAttribute(attr, attributes[attr]);
						}
					
						window.document.body.appendChild(myInput);
					if(controls[control].Events){
						for(controlEvent in controls[control].Events){
							var handler = controls[control].Events[controlEvent];
							var theEvent = controls[control].controlEvent;
							console.log("Handler :");
							console.log(handler);
							myInput.addEventListener(theEvent,function(e){
								return handler(theEvent,AudioPlayer.defaultSettings)}
							
						,true);
						}
					}
				}
				

				
			}
			
		};
			
	

createControls(defaultSettings, that);
};