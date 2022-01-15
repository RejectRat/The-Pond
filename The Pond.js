(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"The Pond_atlas_1", frames: [[1002,722,300,150],[1282,0,300,150],[0,722,1000,300],[1282,152,300,150],[1282,304,300,150],[0,0,1280,720]]},
		{name:"The Pond_atlas_2", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"The Pond_atlas_3", frames: [[0,0,1280,720],[0,722,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Cumbtn = function() {
	this.initialize(ss["The Pond_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cum = function() {
	this.initialize(ss["The Pond_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.JerkOffbtn = function() {
	this.initialize(ss["The Pond_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.JerkOff = function() {
	this.initialize(ss["The Pond_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Main = function() {
	this.initialize(ss["The Pond_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PlayGamebtn = function() {
	this.initialize(ss["The Pond_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PlayGame = function() {
	this.initialize(ss["The Pond_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Relaxbtn = function() {
	this.initialize(ss["The Pond_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Toybtn = function() {
	this.initialize(ss["The Pond_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Toy = function() {
	this.initialize(ss["The Pond_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ToyBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Toybtn();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0333,scaleY:1.0334},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,310,155);


(lib.RelaxBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Relaxbtn();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0334,scaleY:1.0332},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,310.1,155);


(lib.PlayGamebtn_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PlayGamebtn();
	this.instance.setTransform(-500,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.063,scaleY:1.063,x:-520,y:-315},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520,-315,1063,318.9);


(lib.JerkOffBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.JerkOffbtn();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0334,scaleY:1.0332},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,310,155);


(lib.CumBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cumbtn();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0333,scaleY:1.0335},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,310,155);


// stage content:
(lib.ThePond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4];
	// timeline functions:
	this.frame_0 = function() {
		playSound("BGMwav");
		this.stop();
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.PlayGameBtn.addEventListener("click", fl_MouseClickHandler1.bind(this));
		
		function fl_MouseClickHandler1()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndStop(1)
			// End your custom code
			
			
		}
	}
	this.frame_1 = function() {
		playSound("Splash1wav");
		this.stop();
		
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.RelaxBtn.addEventListener("click", fl_MouseClickHandler1.bind(this));
		
		function fl_MouseClickHandler1()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndStop(1)
			// End your custom code
			
			
		}
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.JerkOffBtn.addEventListener("click", fl_MouseClickHandler2.bind(this));
		
		function fl_MouseClickHandler2()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndStop(2)
			// End your custom code
		}
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.ToyBtn.addEventListener("click", fl_MouseClickHandler3.bind(this));
		
		function fl_MouseClickHandler3()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndStop(3)
			// End your custom code
		}
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.CumBtn.addEventListener("click", fl_MouseClickHandler4.bind(this));
		
		function fl_MouseClickHandler4()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndStop(4)
			// End your custom code
		}
	}
	this.frame_2 = function() {
		playSound("Splash2wav");
	}
	this.frame_3 = function() {
		playSound("Splash3wav");
	}
	this.frame_4 = function() {
		playSound("Splash4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Buttons
	this.PlayGameBtn = new lib.PlayGamebtn_1();
	this.PlayGameBtn.name = "PlayGameBtn";
	this.PlayGameBtn.setTransform(633,360,1,1,0,0,0,0,-150);
	this.PlayGameBtn.alpha = 0.8008;
	new cjs.ButtonHelper(this.PlayGameBtn, 0, 1, 1);

	this.CumBtn = new lib.CumBtn();
	this.CumBtn.name = "CumBtn";
	this.CumBtn.setTransform(1094,618,1,1,0,0,0,0,-75);
	this.CumBtn.alpha = 0.8008;
	new cjs.ButtonHelper(this.CumBtn, 0, 1, 1);

	this.ToyBtn = new lib.ToyBtn();
	this.ToyBtn.name = "ToyBtn";
	this.ToyBtn.setTransform(1094,446,1,1,0,0,0,0,-75);
	this.ToyBtn.alpha = 0.8008;
	new cjs.ButtonHelper(this.ToyBtn, 0, 1, 1);

	this.JerkOffBtn = new lib.JerkOffBtn();
	this.JerkOffBtn.name = "JerkOffBtn";
	this.JerkOffBtn.setTransform(1094,280,1,1,0,0,0,0,-75);
	this.JerkOffBtn.alpha = 0.8008;
	new cjs.ButtonHelper(this.JerkOffBtn, 0, 1, 1);

	this.RelaxBtn = new lib.RelaxBtn();
	this.RelaxBtn.name = "RelaxBtn";
	this.RelaxBtn.setTransform(1094,110,1,1,0,0,0,0,-75);
	this.RelaxBtn.alpha = 0.8008;
	new cjs.ButtonHelper(this.RelaxBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PlayGameBtn}]}).to({state:[{t:this.RelaxBtn},{t:this.JerkOffBtn},{t:this.ToyBtn},{t:this.CumBtn}]},1).wait(4));

	// Cum
	this.instance = new lib.Cum();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Toy
	this.instance_1 = new lib.Toy();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Jerk_Off
	this.instance_2 = new lib.JerkOff();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Main
	this.instance_3 = new lib.Main();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Play_Screen
	this.instance_4 = new lib.PlayGame();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,640,360);
// library properties:
lib.properties = {
	id: '83F98E33288EE64DA616EB51A5D0FEF0',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/The Pond_atlas_1.png?1642207657193", id:"The Pond_atlas_1"},
		{src:"images/The Pond_atlas_2.png?1642207657193", id:"The Pond_atlas_2"},
		{src:"images/The Pond_atlas_3.png?1642207657193", id:"The Pond_atlas_3"},
		{src:"sounds/BGMwav.mp3?1642207657235", id:"BGMwav"},
		{src:"sounds/Splash1wav.mp3?1642207657235", id:"Splash1wav"},
		{src:"sounds/Splash2wav.mp3?1642207657235", id:"Splash2wav"},
		{src:"sounds/Splash3wav.mp3?1642207657235", id:"Splash3wav"},
		{src:"sounds/Splash4wav.mp3?1642207657235", id:"Splash4wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['83F98E33288EE64DA616EB51A5D0FEF0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;