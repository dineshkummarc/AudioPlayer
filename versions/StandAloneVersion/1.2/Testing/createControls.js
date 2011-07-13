var AudioPlayer = function(){
	console.log("This within AudioPlayer :");
	console.log(this);
var baseElement = document.getElementById('body');
this.defaultSettings = {
	hover : '#000'
		
		
};
var that = this;
var controls = {
		//A collection of controls objects and one method to display 
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
					click : function (){
						console.log("This within AudioPlayer.controls.click.function, called from setTimeout :");
						console.log(this.defaultSettings);
						console.log("Click");

					},
					
					mouseover : function (){
						
						console.log("mouseover");
					

					},
					
					mouseOut : function(e){
						console.log('mouseOut');

					},
					
					mouseDown : function(e) {
						console.log('Mouse Down');

						
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

					},
					
					mouseover : function (e) {
						
						console.log("mouseover");

						
					},
					
					mouseOut : function(e){
						console.log('mouseOut');

						
					},
					
					mouseDown : function(e) {
						console.log('Mouse Down');

						
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
					},
				
					mouseover : function (e) {
						console.log("mouseover");

					},
				
					mouseOut : function(e){
						console.log('mouseOut');

					},
				
					mouseDown : function(e) {
						console.log('Mouse Down');

					
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

					},
				
					mouseover : function (e) {
					
						console.log("mouseover");
					},
				
					mouseOut : function(e){
						console.log('mouseOut');

					},
				
					mouseDown : function(e) {
						console.log('Mouse Down');

					
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

				},
				
				mouseover : function () {
					
					console.log("mouseover");
					console.log('Event target = ');
					//this.style.background = this.defaultSettings.hover;
					
				},
				
				mouseOut : function(e){
					console.log('mouseOut');

					
				},
				
				mouseDown : function(e) {
					console.log('Mouse Down');

					
					
				}
				
				
				
			}
			
		
		}
};
			
var buttonStyle = {
		background : '#000',
		color : '#fff',
		border : 0,
		width  : '70px',
		padding : '10px'
		
		
}
				
				
			
			
		
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
							var style;

							for (selector in buttonStyle){
								var style = style+ selector+":"+buttonStyle[selector]+";" ;
								myInput.setAttribute('style',style);
								
							}
						}
					
						window.document.body.appendChild(myInput);
					if(controls[control].Events){
						for(controlEvent in controls[control].Events){
							var handler = controls[control].Events[controlEvent];
							var theEvent = controls[control].controlEvent;
							myInput.addEventListener(theEvent,handler
							,true);
						}
					}
				}
				

				
			}
			
		};
			
	

createControls(AudioPlayer.defaultSettings, that);
};