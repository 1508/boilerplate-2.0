requirejs([
		'jquery'
		],
	function($) {

		var onReady, onLoad, onResize, afterResize, timer, cookieHandler;

		/* Hookups
		----------------------------*/
		onReady = function() {	
            console.log('test');
            
		};

		cookieHandler = function(){
		};

		onLoad = function() {

		};

		onResize = function(){

		};

		afterResize = function(){
		};


		/* Attach events
        ----------------------------*/
        $(onReady);//Document ready
        $(window).load(onLoad); //Window load
        $(window).resize(function(e){
        	onResize();
        	clearTimeout(timer);
        	timer = setTimeout(afterResize, 50);
        });
        
        $(cookieHandler); //EU cookie restrictions
	}
);