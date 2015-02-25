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
	var ball;


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
		    this.context.clearRect(0, 0, this.element.width, this.element.height);
		 
		    var obj = this.world.GetBodyList();
		 
		    this.context.save();
		    this.context.scale(this.scale, this.scale);
		    while (obj) {
		        var body = obj.GetUserData();
		        if (body) {
		            body.draw(this.context);
		        }
		 
		        obj = obj.GetNext();
		    }
		    physics.stage.update();
		}
	}

	Physics.prototype.debug = function() {
	    this.debugDraw = new b2DebugDraw();
	    this.debugDraw.SetSprite(this.context);
	    this.debugDraw.SetDrawScale(this.scale);
	    this.debugDraw.SetFillAlpha(0.3);
	    this.debugDraw.SetLineThickness(1.0);
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
	    allowSleep: true,
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
	    physics.step(dt);
	    lastFrame = tm;
	};
	 
	function init() {

		var canvas = document.getElementById("b2dCanvas");
		var degToRad = Math.PI / 180;

	    physics = window.physics = new Physics(canvas);
	 	physics.debug();

	 	var s = physics.scale;

	 	physics.stage = new createjs.Stage(canvas);

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
		new Body(physics, { type: "static", x: 1125/s, y: 580/s, height: 20/s, width: 200/s, angle: 135 * degToRad, name:"platform_schuin_rechts" })
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


	    //Tennisbal
	    new Body(physics, { x: 28, y: 25, shape: "circle", radius: 20 / s, name:"ball"});

	    //CreateJS
	    ball = new createjs.Bitmap("images/tennis.png");
	    ball.x = 260;
	    ball.y = 160;
	    ball.regX = 30;
	    ball.regY = 30;
	    physics.stage.addChild(ball);
	 
	    requestAnimationFrame(gameLoop);
	}
	 
	//window.addEventListener("load",init);

})();