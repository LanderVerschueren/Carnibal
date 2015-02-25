(function () {

	var b2Vec2 = Box2D.Common.Math.b2Vec2;
	var b2BodyDef = Box2D.Dynamics.b2BodyDef;
	var b2Body = Box2D.Dynamics.b2Body;
	var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
	var b2Fixture = Box2D.Dynamics.b2Fixture;
	var b2World = Box2D.Dynamics.b2World;
	var b2MassData = Box2D.Collision.Shapes.b2MassData;
	var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
	var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
	var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    var versenlling = 2.0;
    var watchID;
    var ball, platform;
    var isPlaying = false;
    var gravityCheker=0;
    
    var destroy_list = [];
    var add_list = [];
    var used_list = [];
    var max_radius = 15;
    var min_radius = 3;

	var Physics = window.Physics = function(element,scale) {
	    var gravity = new b2Vec2(0,9.8);
	    this.world = new b2World(gravity, true);
	    this.element = element;
	    this.context = element.getContext("2d");
	    this.scale = scale || 20;
	    this.dtRemaining = 0;
	    this.stepAmount = 1/60;
	};

	Physics.prototype.step = function (dt) {
        this.dtRemaining += dt;
	    while (this.dtRemaining > this.stepAmount) {
	        this.dtRemaining -= this.stepAmount;
	        this.world.Step(this.stepAmount,
	        8, // velocity iterations
	        3); // position iterations
	    }

		if (this.debugDraw) {
		    this.world.DrawDebugData();
		} else {
		 
		    var obj = this.world.GetBodyList();
		    while (obj) {
		        var body = obj.GetUserData();
		        if (body) {
		            body.draw(this.context);
		        }
		 
		        obj = obj.GetNext();
		    }
		    this.stage.update();
		}
        
        for(var i=destroy_list.length-1; i>=0; i--)
        {
            for (var b=0, blen=balls.length; b<blen; b++)
            {
                if(balls[b] != null) {
                    if (balls[b].body === destroy_list[i])
                    {
                        console.log("index: "+b);
                        destroy_list[i].contact = null;
                        delete balls[b];
                        break;
                    }
                }
            }
            
            window.physics.world.DestroyBody(destroy_list[i]);
        }
        
        destroy_list = [];
        for(var i in add_list) 
        {
            if(add_list[i].shape === "circle"){
                var newBody = new Body(physics, add_list[i]);
                balls.push(newBody);
            }
        }
    
        add_list = [];
        for(var i in balls)
        {
            if(balls[i].details.radius == max_radius)
            {
                merged = true;
                ball = balls[i];
                ball.contact = null;
                balls = [];
                break;
            }
        }
    };
    
    Physics.prototype.collision = function () {
    this.listener = new Box2D.Dynamics.b2ContactListener();
    this.listener.BeginContact = function (contact) {
        var bodyA = contact.GetFixtureA().GetBody().GetUserData(),
            bodyB = contact.GetFixtureB().GetBody().GetUserData();

        if (bodyA.contact) {
            bodyA.contact(contact);
        }
        if (bodyB.contact) {
            bodyB.contact(contact);
        }

    };
    this.world.SetContactListener(this.listener);
};        
        

	Physics.prototype.debug = function() {
	    this.debugDraw = new b2DebugDraw();
	    this.debugDraw.SetSprite(this.context);
	    this.debugDraw.SetDrawScale(this.scale);
	    this.debugDraw.SetFillAlpha(0.3);
	    this.debugDraw.SetLineThickness(1);
	    this.debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	    this.world.SetDebugDraw(this.debugDraw);
	};

	var Body = window.Body = function (physics, details) {
	    this.details = details = details || {};
	 
	    // Create the definition
	    this.definition = new b2BodyDef();
	 
	    // Set up the definition
	    for (var k in this.definitionDefaults) {
	        this.definition[k] = details[k] || this.definitionDefaults[k];
	    }
	    this.definition.position = new b2Vec2(details.x || 0, details.y || 0);
	    this.definition.linearVelocity = new b2Vec2(details.vx || 0, details.vy || 0);
	    this.definition.userData = this;
	    this.definition.type = details.type == "static" ? b2Body.b2_staticBody : b2Body.b2_dynamicBody;
	 
	    // Create the Body
	    this.body = physics.world.CreateBody(this.definition);
	 
	    // Create the fixture
	    this.fixtureDef = new b2FixtureDef();
	    for (var l in this.fixtureDefaults) {
	        this.fixtureDef[l] = details[l] || this.fixtureDefaults[l];
	    }
	 
	 
	    details.shape = details.shape || this.defaults.shape;
	 
	    switch (details.shape) {
	        case "circle":
	            details.radius = details.radius || this.defaults.radius;
	            this.fixtureDef.shape = new b2CircleShape(details.radius);
	            break;
	        case "polygon":
	            this.fixtureDef.shape = new b2PolygonShape();
	            this.fixtureDef.shape.SetAsArray(details.points, details.points.length);
	            break;
	        case "block":
	        default:
	            details.width = details.width || this.defaults.width;
	            details.height = details.height || this.defaults.height;
	 
	            this.fixtureDef.shape = new b2PolygonShape();
	            this.fixtureDef.shape.SetAsBox(details.width / 2,
	            details.height / 2);
	            break;
	    }
	 
	    this.body.CreateFixture(this.fixtureDef);
	};
	 
	Body.prototype.defaults = {
	    shape: "block",
	    width: 5,
	    height: 5,
	    radius: 2.5
	};
	 
	Body.prototype.fixtureDefaults = {
	    density: 2,
	    friction: 1,
	    restitution: 0.2
	};
	 
	Body.prototype.definitionDefaults = {
	    active: true,
	    allowSleep: false,
	    angle: 0,
	    angularVelocity: 0,
	    awake: true,
	    bullet: false,
	    fixedRotation: false
	};

	Body.prototype.draw = function (context) {
	    var pos = this.body.GetPosition(),
	        angle = this.body.GetAngle();
        
        var radToDeg = 180 / Math.PI;
        switch(this.details.name)
        {
            case "ball":
                ball.x = pos.x * physics.scale;
				ball.y = pos.y * physics.scale;
				ball.rotation = angle * radToDeg;
                break;
        }
	};

	var physics,
	lastFrame = new Date().getTime();
	 
	window.gameLoop = function() {
	    var tm = new Date().getTime();
	    requestAnimationFrame(gameLoop);
	    var dt = (tm - lastFrame) / 1000;
	    if(dt > 1/15) { dt = 1/15; }
        //console.log(isPlaying);
        if(isPlaying) {
            physics.step(dt);
            isStartup = false;
        }
	    lastFrame = tm;
	};
    
    /*
    Physics.prototype.collision = function () {
        this.listener = new Box2D.Dynamics.b2ContactListener();
        this.listener.BeginContact = function (contact) {
            var bodyA = contact.GetFixtureA().GetBody().GetUserData(),
                bodyB = contact.GetFixtureB().GetBody().GetUserData();
            if (bodyA.contact) {
                bodyA.contact(contact);
            }
            if (bodyB.contact) {
                bodyB.contact(contact);
            }
        };
        this.world.SetContactListener(this.listener);
    };    
    */
    
    function hideDiv() {
        isPlaying = true;
        document.getElementById('startScherm').style.display = "none";
    }
    
    function selectBall() {
        document.getElementById('startScherm').style.display = "none";
        document.getElementById('ballSelect').style.display = "block";
    }
    
    function tennisSelect() {
        ball.gotoAndStop(1);
        document.getElementById('startScherm').style.display = "block";
        document.getElementById('ballSelect').style.display = "none";
    }
    
    function steenSelect() {
        ball.gotoAndStop(0);
        document.getElementById('startScherm').style.display = "block";
        document.getElementById('ballSelect').style.display = "none";
    }
    
    function strandbalSelect() {
        ball.gotoAndStop(2);
        document.getElementById('startScherm').style.display = "block";
        document.getElementById('ballSelect').style.display = "none";
    }
	 
	function init() {
	    physics = window.physics = new Physics(document.getElementById("b2dCanvas"));
	 	//physics.debug();
        
        var canvas = document.getElementById("b2dCanvas");
		var degToRad = Math.PI / 180;
        var s = physics.scale;
        
        physics.stage = new createjs.Stage(canvas);
        
        physics.collision();

	    //BOX2D
	    // Create some walls
	    new Body(physics, { type: "static", x: 0, y: 0, height: 75,  width: 0.5, name:"muur_links"});
	    new Body(physics, { type: "static", x: 1280 / s, y: 0, height: 75,  width: 0.5, name:"muur_rechts"});
	    new Body(physics, { type: "static", x: 0, y: 0, height: 0.5, width: 140, name:"muur_boven" });
	    new Body(physics, { type: "static", x: 0, y: 720 / s, height: 0.5, width: 140, name:"muur_onder" });
		
		//Omhulsel-platform
		new Body(physics, { type: "static", x: 150/s, y: 580/s, height: 20/s, width: 200/s, angle: 45 * degToRad, name:"platform_schuin_links" })
		new Body(physics, { type: "static", x: 80/s, y: 315/s, height: 20/s, width: 400/s, angle: 90 * degToRad, name:"platform_recht_links" })
		new Body(physics, { type: "static", x: 105/s, y: 110/s, height: 20/s, width: 70/s, name:"platform_boven_links" })
		new Body(physics, { type: "static", x: 235/s, y: 110/s, height: 20/s, width: 70/s, name:"platform_boven_rechts" })
		new Body(physics, { type: "static", x: 260/s, y: 215/s, height: 20/s, width: 200/s, angle: 90 * degToRad, name:"platform_recht_tweede_links" })
		new Body(physics, { type: "static", x: 725/s, y: 320/s, height: 20/s, width: 950/s, name:"platform_lange_boven" })
		new Body(physics, { type: "static", x: 1190/s, y: 420/s, height: 20/s, width: 200/s, angle: 90 * degToRad, name:"platform_rechts_rechts" })
		var muur = new Body(physics, { type: "static", x: 1155/s, y: 550/s, height: 20/s, width: 100/s, angle: 135 * degToRad, name:"platform_schuin_rechts_boven" })
        new Body(physics, { type: "static", x: 1085/s, y: 620/s, height: 20/s, width: 100/s, angle: 135 * degToRad, name:"platform_schuin_rechts_onder" })
		new Body(physics, { type: "static", x: 640/s, y: 650/s, height: 20/s, width: 850/s, name:"platform_lange_onder" })

		//Binnenkant-platform
		new Body(physics, { type: "static", x: 130/s, y: 220/s, height: 20/s, width: 125/s, angle: 150 * degToRad, name:"1"})
		new Body(physics, { type: "static", x: 160/s, y: 295/s, height: 20/s, width: 30/s, angle: 90 * degToRad, name:"2" })
		new Body(physics, { type: "static", x: 200/s, y: 320/s, height: 20/s, width: 100/s, name:"3" })
		new Body(physics, { type: "static", x: 160/s, y: 410/s, height: 20/s, width: 160/s, angle: 90 * degToRad, name:"4" })
		new Body(physics, { type: "static", x: 205/s, y: 535/s, height: 20/s, width: 140/s, angle: 45 * degToRad, name:"5" })
		new Body(physics, { type: "static", x: 400/s, y: 580/s, height: 20/s, width: 300/s, name:"6" })
		new Body(physics, { type: "static", x: 540/s, y: 545/s, height: 20/s, width: 50/s, angle: 90 * degToRad, name:"7" })
		new Body(physics, { type: "static", x: 625/s, y: 510/s, height: 20/s, width: 190/s, name:"8" })
		new Body(physics, { type: "static", x: 710/s, y: 545/s, height: 20/s, width: 50/s, angle: 90 * degToRad, name:"9" })
		new Body(physics, { type: "static", x: 850/s, y: 580/s, height: 20/s, width: 300/s, name:"10" })
		new Body(physics, { type: "static", x: 625/s, y: 610/s, height: 20/s, width: 60/s, angle: 90 * degToRad, name:"11" })
		new Body(physics, { type: "static", x: 1015/s, y: 485/s, height: 20/s, width: 270/s, angle: 45 * degToRad ,name:"12" })
		new Body(physics, { type: "static", x: 828/s, y: 393/s, height: 20/s, width: 200/s, name:"13" })
		new Body(physics, { type: "static", x: 900/s, y: 520/s, height: 20/s, width: 100/s, angle: 90 * degToRad ,name:"14" })
		new Body(physics, { type: "static", x: 820/s, y: 430/s, height: 20/s, width: 50/s, angle: 90 * degToRad ,name:"15" })
		new Body(physics, { type: "static", x: 745/s, y: 510/s, height: 20/s, width: 50/s, name:"16" })
		new Body(physics, { type: "static", x: 661/s, y: 419/s, height: 20/s, width: 150/s, angle: 160 * degToRad ,name:"17" })
		new Body(physics, { type: "static", x: 420/s, y: 445/s, height: 20/s, width: 350/s, name:"18" })
		new Body(physics, { type: "static", x: 455/s, y: 480/s, height: 20/s, width: 50/s, angle: 90 * degToRad ,name:"19" })
		new Body(physics, { type: "static", x: 370/s, y: 535/s, height: 20/s, width: 70/s, angle: 90 * degToRad ,name:"20" })
		new Body(physics, { type: "static", x: 290/s, y: 480/s, height: 20/s, width: 50/s, angle: 90 * degToRad ,name:"21" })
		new Body(physics, { type: "static", x: 255/s, y: 410/s, height: 20/s, width: 50/s, angle: 90 * degToRad ,name:"22" })
		new Body(physics, { type: "static", x: 400/s, y: 420/s, height: 20/s, width: 300/s, angle: 10 * degToRad ,name:"23" })
		new Body(physics, { type: "static", x: 570/s, y: 410/s, height: 20/s, width: 50/s, angle: 90 * degToRad, name:"24" })
		new Body(physics, { type: "static", x: 1060/s, y: 445/s, height: 20/s, width: 100/s, angle: 135	 * degToRad, name:"25" })

        
        // Muren flash-mode, win, lose..
        var muurNormal = new Body(physics, { type: "static", x: 200/s, y: 520/s, height: 50/s, width: 20/s, angle: 135 * degToRad, name:"muurNormal" })

        var muurRevers = new Body(physics, { type: "static", x: 500/s, y: 640/s, height: 50/s, width: 20/s, angle: 90 * degToRad, name:"muurRevers" })

        var muurFlashi = new Body(physics, { type: "static", x: 800/s, y: 440/s, height: 50/s, width: 20/s, angle: 90 * degToRad, name:"muurFlashi" })

        var muurWin = new Body(physics, { type: "static", x: 450/s, y: 340/s, height: 50/s, width: 20/s, angle: 90 * degToRad, name:"muurWin" })

        var muurLose = new Body(physics, { type: "static", x: 450/s, y: 400/s, height: 50/s, width: 20/s, angle: 90 * degToRad, name:"muurLose" })

	    //Tennisbal
	    var ball_backstage = new Body(physics, { x: 180/s, y: 50/s, shape: "circle", radius: 15 / s, name:"ball"}); //x: 180 y: 50

	    //CreateJS 
        var data = {
            images: ["img/spriteBalls.png"],
            frames: {width:60, height:60}
        };
        var spriteSheet = new createjs.SpriteSheet(data);
	    ball = new createjs.Sprite(spriteSheet);
	    ball.x = 190;
	    ball.y = 90;
	    ball.regX = 30;
	    ball.regY = 30;
        ball.scaleX = ball.scaleY = 0.5;	    
	 
        platform = new lib.bg();
        
        physics.stage.addChild(platform);
        physics.stage.addChild(ball);
        
	    requestAnimationFrame(gameLoop);
        
        ball_backstage.contact = function(contact){
            var contactBodyA = contact.m_fixtureA.GetBody();
            if(contactBodyA.m_userData.details.name === "platform_schuin_rechts_boven")
                alert("Win!");
            
            switch(contactBodyA.m_userData.details.name) {
                case "muurNormal":
                    gravityCheker=0;
                    alert("normale mode");
                    
                    break;
                case "muurRevers":
                    gravityCheker=1;
                     alert("revers mode");
                    
                    break;
                case "muurFlashi":
                    gravityCheker=2;
                    alert("flashi mode");
                   
                    break;
                case "muurWin":
                    gravityCheker=3;
                    
                    break;
                case "muurLose":
                    gravityCheker=4;
                   
                    break;
                default:
                    //console.log("default bij het kizen van muur")
                    break;
            }
        }
        
        var buttonStart = document.getElementById('startButton');
        buttonStart.addEventListener('click', hideDiv, false);
        
        var buttonSelect = document.getElementById('selectButton');
        buttonSelect.addEventListener('click', selectBall, false);
        
        var tennisSelectBtn = document.getElementById('tennis');
        tennisSelectBtn.addEventListener('click', tennisSelect, false);
        
        var steenSelectBtn = document.getElementById('steen');
        steenSelectBtn.addEventListener('click', steenSelect, false);
        
        var strandbalSelectBtn = document.getElementById('strandbal');
        strandbalSelectBtn.addEventListener('click', strandbalSelect, false);
        
        var bodyCanvas = document.getElementById('b2dCanvas');
        bodyCanvas.addEventListener('click', bodyClicked, false);
    };
    
    var balls = [];
    var merged = true;
    var amount;
    
    function bodyClicked() {
        physics.collision();
        
        if(merged === true)
        {
            var fixtureA, fixtureB;
            console.log(ball.radius);
            amount = ball.radius/min_radius;
            //amount = ball.details.radius/min_radius;
            physics.world.DestroyBody(ball.body);
            //this.physics.world.DestroyBody(ball.body);
            for(var i = 0; i <= amount-1; i++)
            {
                balls[i] = new Body(physics, {x: ball.body.m_xf.position.x, y : ball.body.m_xf.position.y, shape:"circle", radius: 1, type: "ball", number : i});
            }
            merged = false;
        } else 
        {
            var pointX = 0;
            var pointY = 0;
            var vector;
            for(var i in balls)
            {
                var newPointX = balls[i].body.m_xf.position.x;
                var newPointY = balls[i].body.m_xf.position.y;
                if(newPointX > pointX)
                {
                    var vector = new b2Vec2(newPointX*2, newPointY*2);
                }
            }
            for(var j in balls)
            {
                if(merged == false)
                {
                    balls[j].body.SetLinearVelocity(vector);
                }
        
                balls[j].contact = function(contact){
                    if(contact.m_fixtureA.GetBody().m_userData.details.type === "ball" && contact.m_fixtureB.GetBody().m_userData.details.type === "ball")
                    {
                        if(!listContainsEl(destroy_list, contact.m_fixtureA.GetBody()) && !listContainsEl(destroy_list, contact.m_fixtureB.GetBody()) )
                        {
                            addBalls(contact.m_fixtureA.GetBody(),contact.m_fixtureB.GetBody());
                        }
                    }
                }
            }
        }
    };
	
    function listContainsEl(list, element) {
        for(var i in list)
        {
            if(list[i] === element)
            {
                return true;
            }
        }
        return false;
    };
    
    function addBalls(body1, body2){
        destroy_list.push(body1);
        destroy_list.push(body2);
        var params = {x: body2.m_xf.position.x, y: body2.m_xf.position.y, radius: body1.m_userData.details.radius+body2.m_userData.details.radius, shape: "circle", type : "ball"};
        add_list.push(params);
    };

    
    function onSuccess(acceleration) {        
        switch(gravityCheker) {
            case 0:
                xPos = (acceleration.x * versenlling);
                yPos = (acceleration.y * versenlling);        
                physics.world.SetGravity( new b2Vec2(yPos, xPos) );
                break;
            case 1:
                xPos = -1*(acceleration.x * versenlling);
                yPos = -1*(acceleration.y * versenlling);        
                physics.world.SetGravity( new b2Vec2(yPos, xPos) );
                break;
            case 2:
                xPos = (acceleration.x * versenlling);
                yPos = (acceleration.y * versenlling);        
                physics.world.SetGravity( new b2Vec2(xPos, yPos) );
                break;
            case 3:
                alert("you win");
                gravityCheker=0;
                break;
            case 4:
                alert("you lose");
                gravityCheker=0;
                break;
            default:
                alert("werk niet naar behoede");
                xPos = 1 * (acceleration.x * versenlling);
                yPos = (acceleration.y * versenlling);        
                physics.world.SetGravity( new b2Vec2(yPos, xPos) );
                break;
        }
    };

    function onError() {
        alert('onError!');
    };

    function onDeviceReady(){
        init();
        var options = { frequency: 60 };  // Update every 3 seconds
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
    
    document.addEventListener('deviceready', onDeviceReady, false);
    window.addEventListener('load', onDeviceReady, false);
    
})();

(function() {
    
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = 
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                                       timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());