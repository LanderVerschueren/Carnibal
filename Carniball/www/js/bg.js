(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#99FFFF",
	manifest: []
};

// stage content:
(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// steampipe
	this.instance = new lib.steampipe2();
	this.instance.setTransform(712.7,253,1,1,0,0,0,65.5,131.6);

	this.instance_1 = new lib.steampipe();
	this.instance_1.setTransform(466.6,215.2,1,1,0,0,0,64,93.8);

	this.instance_2 = new lib.smoke();
	this.instance_2.setTransform(728.9,51.1,1,1,0,0,0,49.9,39.4);

	this.instance_3 = new lib.smoke2();
	this.instance_3.setTransform(707.7,236.5,1,1,0,0,0,-214.1,234.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(26));

	// exterior
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("AvxBrIAAjVIfjAAIAADU");
	this.shape.setTransform(168,109.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("EhCJAbmIAAgaI2T2TIgIAAMAAAggBIABAAIAAgdIDcAAIAAACIYtAAIAAAEIDcAAMCRjAAAMAAAAg/IgIAAI01U2IAAAJQgTAMgSAVQgSAUgJARQgMgFgPgBQgYgCgRAJg");
	this.shape_1.setTransform(633.9,484.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AMWOvIAAgEI4rAAIAAgCIjcAAIAA9VIAcAAIAAgCIe8AAIAAAAIAKAAIABAAIAAddgAAsHYIMhAAIAApaIshAAgAs3HYIMiAAIAApaIsiAAgAAsi5IMhAAIAApcIshAAgAs3i5IMiAAIAApcIsiAAg");
	this.shape_2.setTransform(168.1,214.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AvxBsIAAjWIfjAAIAADUIgKAAIAAgBI+8AAIAAADg");
	this.shape_3.setTransform(168,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(26));

	// wheels
	this.instance_4 = new lib.wheel();
	this.instance_4.setTransform(912.2,653.3,1,1,0,0,0,66.7,66.7);

	this.instance_5 = new lib.wheel();
	this.instance_5.setTransform(335.8,653.3,1,1,0,0,0,66.7,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(26));

	// bg
	this.instance_6 = new lib.roadline();
	this.instance_6.setTransform(-49.9,452.8,1,1,0,0,0,68,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Eh4kAPJIAA+RMDxJAAAIAAeRg");
	this.shape_4.setTransform(643.8,683.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_6}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512.1,457.7,1551.4,682.8);


// symbols:
(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqmD5IAAnxIVNAAIAAHxg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.9,-24.9,136,50);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqmD5IAAnxIVNAAIAAHxg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.9,-24.9,136,50);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AioEvQh4AMhfgfQi+g+B9jbQAEgiALgwQAYhfAog9QB/jDDyDhIApg5QAzg/AxgiQCehrBRDnIAnAeQArAmAUAmQBBB7i7BPIABA0QgDA9gOAmQgwB7iciQQgoBXg7A5QgvAvgtAAQg/AAg2hbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-39.4,99.9,78.9);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AioEvQh4AMhfgfQi+g+B9jbQAEgiALgwQAYhfAog9QB/jDDyDhIApg5QAzg/AxgiQCehrBRDnIAnAeQArAmAUAmQBBB7i7BPIABA0QgDA9gOAmQgwB7iciQQgoBXg7A5QgvAvgtAAQg/AAg2hbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-39.4,99.9,78.9);


(lib.steampipe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ6otIgECGQABCOAaArQANAVBdATQA2AKCJAYQEIA3gEBtQgFBtkUBAQiOAdg5AMQhhAWgQAUQgcAlALBJQAUCGAAA6Iz+AAQgVj1gEhLQgBgWhbgKQiugUgVgDQkTgzAgjHQAJg6BHggQAxgWBtgUQCIgYAmgLQBbgZAkgrQAKAKALkJIT+AA");
	this.shape.setTransform(65.6,131.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqOIuQgVj1gEhLQgBgWhbgKQiugUgVgDQkTgzAgjHQAJg6BHggQAxgWBtgUQCIgYAmgLQBbgZAkgrQAKAKALkJIT+AAIAFAAIgECGQABCOAaArQANAVBdATIC/AiQEIA3gEBtQgFBtkUBAIjHApQhhAWgQAUQgcAlALBJQAUCGAAA6g");
	this.shape_1.setTransform(65.6,131.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AKIpZQABEcABAAQAPAYBVAUQAyAMB6AbQDqA4gFBtQgCBAhPAoQg4Adh2AbQijAmgQAEQhVAagLAkQgSA/ALB1QARCuAAA1Iz+AAQgBkzgEhLQgBgWhVgMQihgVgUgFQkCg2AejIQAHgrBAgcQAqgSBpgXQB1gaAugQQBXgdAlgsQAKAKgCkiIT9AA");
	this.shape_2.setTransform(64.8,127.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqHJaQgBkzgEhMQgBgVhVgMQihgVgUgEQkCg3AejIQAHgrBAgcQAqgSBpgXQB1gaAugQQBXgdAlgsQAKAKgCkiIT9AAIAFAAIACEcQAPAYBVAUQAyAMB6AbQDqA4gFBtQgCBAhPAoQg4Adh2AbIizAqQhVAagLAkQgSA/ALB1QARCtAAA2g");
	this.shape_3.setTransform(64.8,127.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AKOsDQgLC8AOgPQAQAZAmAPQAGACBAAUQBYAbADBAQAFBvhxA8Qg6AagWAMQglAUgCAYQAAACADBeQADB8AADXQgBEOAAEEIz+AAQgDjegDjpQgGnNgDgvQgBgYglgWQg0gagdgQQhyg9AFheQAEhLBkghQA2gQAZgJQApgRAQgYQAKAKgHivIT9AA");
	this.shape_4.setTransform(63,110.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ap0MEIgGnFQgGnNgDgwQgBgYglgWIhRgqQhyg9AFheQAEhKBkgiQA2gPAZgKQApgQAQgZQAKAKgHiuIT9AAIAFAAQgLC8AOgOQAQAYAmAPIBGAXQBYAaADBAQAFBwhxA7Qg6AagWAMQglAVgCAXIADBgQADB9AADXIgBIQg");
	this.shape_5.setTransform(63,110.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AKHtGQgPD5AKgKQAQAYAqAuQAXAZAGAlQAGAigsA7QgvA+gCAkQgDAvgBIbQgBENAAEEIz+AAQABkFABkNQABoagDgvQgCgkgvg+Qgsg7AGgiQAGglAXgZQAqguAQgYQAKAKgFj5IT+AA");
	this.shape_6.setTransform(64.2,103.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AqBNHIACoSQABoagDguQgCglgvg+Qgsg7AGghQAGgmAXgYQAqgvAQgYQAKAKgFj5IT+AAIAFAAQgPD5AKgKQAQAYAqAvQAXAYAGAmQAGAhgsA7QgvA+gCAlQgDAvgBIaIgBIRg");
	this.shape_7.setTransform(64.2,103.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Ap+uoIT9AAIAAdRIz9AAg");
	this.shape_8.setTransform(64,93.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ap+OpIAA9RIT9AAIAAdRg");
	this.shape_9.setTransform(64,93.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,74.8,244.9,113.8);


(lib.steampipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pipe
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap+uoIT9AAIAAdRIz9AAg");
	this.shape.setTransform(64,93.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap+OpIAA9RIT9AAIAAdRg");
	this.shape_1.setTransform(64,93.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AKHtGQgPD5AKgKQAQAYAqAuQAXAZAGAlQAGAigsA7QgvA+gCAkQgDAvgBIbQgBENAAEEIz+AAQABkFABkNQABoagDgvQgCgkgvg+Qgsg7AGgiQAGglAXgZQAqguAQgYQAKAKgFj5IT+AA");
	this.shape_2.setTransform(64.2,103.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqBNHIACoSQABoagDguQgCglgvg+Qgsg7AGghQAGgmAXgYQAqgvAQgYQAKAKgFj5IT+AAIAFAAQgPD5AKgKQAQAYAqAvQAXAYAGAmQAGAhgsA7QgvA+gCAlQgDAvgBIaIgBIRg");
	this.shape_3.setTransform(64.2,103.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AKOsDQgLC8AOgPQAQAZAmAPQAGACBAAUQBYAbADBAQAFBvhxA8Qg6AagWAMQglAUgCAYQAAACADBeQADB8AADXQgBEOAAEEIz+AAQgDjegDjpQgGnNgDgvQgBgYglgWQg0gagdgQQhyg9AFheQAEhLBkghQA2gQAZgJQApgRAQgYQAKAKgHivIT9AA");
	this.shape_4.setTransform(63,110.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ap0MEIgGnFQgGnNgDgwQgBgYglgWIhRgqQhyg9AFheQAEhKBkgiQA2gPAZgKQApgQAQgZQAKAKgHiuIT9AAIAFAAQgLC8AOgOQAQAYAmAPIBGAXQBYAaADBAQAFBwhxA7Qg6AagWAMQglAVgCAXIADBgQADB9AADXIgBIQg");
	this.shape_5.setTransform(63,110.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AKIpZQABEcABAAQAPAYBVAUQAyAMB6AbQDqA4gFBtQgCBAhPAoQg4Adh2AbQijAmgQAEQhVAagLAkQgSA/ALB1QARCuAAA1Iz+AAQgBkzgEhLQgBgWhVgMQihgVgUgFQkCg2AejIQAHgrBAgcQAqgSBpgXQB1gaAugQQBXgdAlgsQAKAKgCkiIT9AA");
	this.shape_6.setTransform(64.8,127.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AqHJaQgBkzgEhMQgBgVhVgMQihgVgUgEQkCg3AejIQAHgrBAgcQAqgSBpgXQB1gaAugQQBXgdAlgsQAKAKgCkiIT9AAIAFAAIACEcQAPAYBVAUQAyAMB6AbQDqA4gFBtQgCBAhPAoQg4Adh2AbIizAqQhVAagLAkQgSA/ALB1QARCtAAA2g");
	this.shape_7.setTransform(64.8,127.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AJ6otIgECGQABCOAaArQANAVBdATQA2AKCJAYQEIA3gEBtQgFBtkUBAQiOAdg5AMQhhAWgQAUQgcAlALBJQAUCGAAA6Iz+AAQgVj1gEhLQgBgWhbgKQiugUgVgDQkTgzAgjHQAJg6BHggQAxgWBtgUQCIgYAmgLQBbgZAkgrQAKAKALkJIT+AA");
	this.shape_8.setTransform(65.6,131.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AqOIuQgVj1gEhLQgBgWhbgKQiugUgVgDQkTgzAgjHQAJg6BHggQAxgWBtgUQCIgYAmgLQBbgZAkgrQAKAKALkJIT+AAIAFAAIgECGQABCOAaArQANAVBdATIC/AiQEIA3gEBtQgFBtkUBAIjHApQhhAWgQAUQgcAlALBJQAUCGAAA6g");
	this.shape_9.setTransform(65.6,131.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,130,189.5);


(lib.rims = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAPAUIgdgn");
	this.shape.setTransform(31.4,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(8,1,1).p("AALgFIBPgyID1iaAlODTIEJimIBQgyIgyhHIixjyAD6E/IiyjzIg9hR");
	this.shape_1.setTransform(33.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhCBDQgKgLgHgMIBSgxIg0hIIA0BIIhSAxQgKgUAAgYQAAgmAbgcIANgLIAFgCQAWgOAaAAQAnAAAcAbIAJALIhNAyIA7BQIg7hQIBNgyQASAYAAAfQAAAngbAcIgJAIQgZATghAAQgmAAgcgbgAgSgmIgegpgABMg3IAAAAg");
	this.shape_2.setTransform(34.9,32);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-4,75,71.9);


(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rims
	this.instance = new lib.rims();
	this.instance.setTransform(65.8,68.1,1,1,0,0,0,33.5,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:32,rotation:12.4,x:65.7},0).wait(1).to({rotation:24.8},0).wait(1).to({rotation:37.2},0).wait(1).to({rotation:49.7},0).wait(1).to({rotation:62.1},0).wait(1).to({rotation:74.5},0).wait(1).to({rotation:86.9},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:111.7},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:136.6},0).wait(1).to({rotation:149},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:173.8,x:65.8,y:68},0).wait(1).to({rotation:186.2,x:65.7,y:68.1},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:211,x:65.8},0).wait(1).to({rotation:223.4,y:68},0).wait(1).to({rotation:235.9,y:68.1},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:260.7},0).wait(1).to({rotation:273.1},0).wait(1).to({rotation:285.5},0).wait(1).to({rotation:297.9},0).wait(1).to({rotation:310.3},0).wait(1).to({rotation:322.8,x:65.7},0).wait(1).to({rotation:335.2,x:65.8,y:68.2},0).wait(1).to({rotation:347.6,y:68.1},0).wait(1).to({rotation:360,y:68.2},0).wait(1));

	// tire
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiqKDQkKhHiKjvQiKjvBGkIQBHkKDviKQDviKEIBGQEKBHCKDvQCLDvhHEIQhHEKjvCKQieBciqAAQhVAAhagYgAiykQQh7BIglCKQglCIBHB7QBIB8CKAkQCIAlB7hHQB8hIAliKQAkiIhHh7QhIh8iJglQgvgMgrAAQhZAAhRAvg");
	this.shape.setTransform(66.8,66.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.5,133.5);


(lib.smoke2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-214,234.4);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(-210.9,-48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-210.9,y:-48.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.9,-56.5,102.5,330.4);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-214,234.4);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(-210.9,-48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-210.9,y:-48.6},9).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.9,-56.5,102.5,330.4);


(lib.roadline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(1473.4,244.9);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(35,244.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:35},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,220,1524.8,49.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;