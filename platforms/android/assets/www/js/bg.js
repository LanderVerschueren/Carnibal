(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#99FFFF",
	manifest: [
		{src:"images/_11002965_10204741495150990_399493398_o.jpg", id:"_11002965_10204741495150990_399493398_o"}
	]
};

// stage content:
(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// platforms
	this.instance = new lib.platform_green();
	this.instance.setTransform(569.7,410,0.3,1.04,90,0,0,78.4,10.2);

	this.instance_1 = new lib.platform_green();
	this.instance_1.setTransform(290.5,483,0.3,1.04,-90,0,0,78.4,10.2);

	this.instance_2 = new lib.platform_green();
	this.instance_2.setTransform(455.4,483,0.3,1.04,-90,0,0,78.4,10.2);

	this.instance_3 = new lib.platform_green();
	this.instance_3.setTransform(820.1,431.2,0.3,1.04,-90,0,0,78.4,10.2);

	this.instance_4 = new lib.platform_green();
	this.instance_4.setTransform(822.2,393.9,1.09,1.04,0,0,0,78.4,10.1);

	this.instance_5 = new lib.platform_green();
	this.instance_5.setTransform(1059.4,446.6,0.58,1.04,-45,0,0,78.4,10.2);

	this.instance_6 = new lib.platform_green();
	this.instance_6.setTransform(1060.6,532.3,0.79,1.04,45,0,0,78.3,10.2);

	this.instance_7 = new lib.platform_green();
	this.instance_7.setTransform(966.7,438.4,0.75,1.04,45,0,0,78.3,10.2);

	this.instance_8 = new lib.platform_green();
	this.instance_8.setTransform(900.3,518.3,0.58,1.04,90,0,0,78.4,10.2);

	this.instance_9 = new lib.platform_green();
	this.instance_9.setTransform(929.6,580.6,0.822,1.04,0,0,0,78.3,10.1);

	this.instance_10 = new lib.platform_green();
	this.instance_10.setTransform(786.6,580.6,0.822,1.04,0,0,0,78.3,10.1);

	this.instance_11 = new lib.platform_green();
	this.instance_11.setTransform(625.2,609.6,0.34,1.04,90,0,0,78.4,10.1);

	this.instance_12 = new lib.platform_green();
	this.instance_12.setTransform(709.8,555.3,0.4,1.04,90,0,0,78.4,10.1);

	this.instance_13 = new lib.platform_green();
	this.instance_13.setTransform(658.1,511.1,1.25,1.04,0,0,0,78.3,10.1);

	this.instance_14 = new lib.platform_green();
	this.instance_14.setTransform(540.2,534.3,0.4,1.04,90,0,0,78.4,10.1);

	this.instance_15 = new lib.platform_green();
	this.instance_15.setTransform(369.7,534.3,0.4,1.04,90,0,0,78.4,10.1);

	this.instance_16 = new lib.platform_green();
	this.instance_16.setTransform(473.4,580.6,0.864,1.04,0,0,0,78.3,10.1);

	this.instance_17 = new lib.platform_green();
	this.instance_17.setTransform(323.3,580.6,0.864,1.04,0,0,0,78.3,10.1);

	this.instance_18 = new lib.platform_green();
	this.instance_18.setTransform(205.9,536.3,0.73,1,45,0,0,78.3,10.1);

	this.instance_19 = new lib.platform_green();
	this.instance_19.setTransform(208.7,322,0.46,1,0,0,0,78.2,10.1);

	this.instance_20 = new lib.platform_green();
	this.instance_20.setTransform(136,217.6,0.63,1,-31,0,0,78.2,10.1);

	this.instance_21 = new lib.platform_bloo();
	this.instance_21.setTransform(114.4,110.5,0.28,1,0,0,180,80.5,10.1);

	this.instance_22 = new lib.platform_bloo();
	this.instance_22.setTransform(224.2,110.5,0.28,1,0,0,180,80.5,10.1);

	this.instance_23 = new lib.platform_bloo();
	this.instance_23.setTransform(80,203.9,1.19,1,-90,0,0,80.7,10.2);

	this.instance_24 = new lib.platform_bloo();
	this.instance_24.setTransform(80,406.4,1.149,1,-90,0,0,80.5,10.2);

	this.instance_25 = new lib.platform_bloo();
	this.instance_25.setTransform(260.1,205.8,1.21,1,-90,0,0,80.6,10.2);

	this.instance_26 = new lib.platform_bloo();
	this.instance_26.setTransform(326.8,322,0.882,1,0,0,180,80.5,10.1);

	this.instance_27 = new lib.platform_bloo();
	this.instance_27.setTransform(481.6,322,0.882,1,0,0,180,80.6,10.1);

	this.instance_28 = new lib.platform_bloo();
	this.instance_28.setTransform(636.9,322,0.882,1,0,0,180,80.5,10.1);

	this.instance_29 = new lib.platform_bloo();
	this.instance_29.setTransform(791.1,322,0.882,1,0,0,180,80.5,10.1);

	this.instance_30 = new lib.platform_bloo();
	this.instance_30.setTransform(944.6,322,0.882,1,0,0,180,80.6,10.1);

	this.instance_31 = new lib.platform_bloo();
	this.instance_31.setTransform(1098.5,322,0.882,1,0,0,180,80.5,10.1);

	this.instance_32 = new lib.platform_bloo();
	this.instance_32.setTransform(1189.7,409.5,1.12,1,-90,0,0,80.6,10.2);

	this.instance_33 = new lib.platform_bloo();
	this.instance_33.setTransform(1162.3,544.7,0.58,1,-45,0,0,80.7,10.2);

	this.instance_34 = new lib.platform_bloo();
	this.instance_34.setTransform(1094.7,611.8,0.58,1,-45,0,0,80.7,10.2);

	this.instance_35 = new lib.platform_bloo();
	this.instance_35.setTransform(984.1,651.4,0.91,1,0,0,0,80.5,10.1);

	this.instance_36 = new lib.platform_bloo();
	this.instance_36.setTransform(818.3,651.4,1,1,0,0,0,80.5,10.1);

	this.instance_37 = new lib.platform_bloo();
	this.instance_37.setTransform(644.4,651.4,1,1,0,0,0,80.5,10.1);

	this.instance_38 = new lib.platform_bloo();
	this.instance_38.setTransform(470.9,651.4,1,1,0,0,0,80.5,10.1);

	this.instance_39 = new lib.platform_bloo();
	this.instance_39.setTransform(298.5,651.4,1,1,0,0,0,80.5,10.1);

	this.instance_40 = new lib.platform_bloo();
	this.instance_40.setTransform(183.1,615,0.58,1,45,0,0,80.6,10.1);

	this.instance_41 = new lib.platform_bloo();
	this.instance_41.setTransform(114.7,546.7,0.58,1,45,0,0,80.6,10.1);

	this.instance_42 = new lib.platform_green();
	this.instance_42.setTransform(159.8,384,1.22,1,90,0,0,78.2,10.1);

	this.instance_43 = new lib.platform_green();
	this.instance_43.setTransform(657.3,421.2,0.88,1.04,-20,0,0,78.5,10.2);

	this.instance_44 = new lib.platform_green();
	this.instance_44.setTransform(498.4,445.7,0.985,1.04,0,0,0,78.3,10.1);

	this.instance_45 = new lib.platform_green();
	this.instance_45.setTransform(470.4,434.7,0.84,1.04,10,0,0,78.5,10.1);

	this.instance_46 = new lib.platform_green();
	this.instance_46.setTransform(329.2,407.8,0.84,1.04,10,0,0,78.5,10.1);

	this.instance_47 = new lib.platform_green();
	this.instance_47.setTransform(327.3,445.7,0.985,1.04,0,0,0,78.4,10.1);

	this.instance_48 = new lib.platform_green();
	this.instance_48.setTransform(254,410.3,0.3,1.04,90,0,0,78.4,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(26));

	// steampipe
	this.instance_49 = new lib.steampipe2();
	this.instance_49.setTransform(712.7,253,1,1,0,0,0,65.5,131.6);

	this.instance_50 = new lib.steampipe();
	this.instance_50.setTransform(466.6,215.2,1,1,0,0,0,64,93.8);

	this.instance_51 = new lib.smoke();
	this.instance_51.setTransform(728.9,51.1,1,1,0,0,0,49.9,39.4);

	this.instance_52 = new lib.smoke2();
	this.instance_52.setTransform(707.7,236.5,1,1,0,0,0,-214.1,234.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49}]}).wait(26));

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
	this.instance_53 = new lib.wheel();
	this.instance_53.setTransform(912.2,653.3,1,1,0,0,0,66.7,66.7);

	this.instance_54 = new lib.wheel();
	this.instance_54.setTransform(335.8,653.3,1,1,0,0,0,66.7,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_54},{t:this.instance_53}]}).wait(26));

	// bg
	this.instance_55 = new lib.roadline();
	this.instance_55.setTransform(-49.9,452.8,1,1,0,0,0,68,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99FFFF").s().p("EB2CAw1MjxJAAAIksAAMAAAhhpMD/nAAAMAAABhpg");
	this.shape_4.setTransform(660.1,274.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Eh4kAPIIAA+PMDxJAAAIAAePg");
	this.shape_5.setTransform(643.8,683.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance_55}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(482,321.7,1636.2,818.9);


// symbols:
(lib._11002965_10204741495150990_399493398_o = function() {
	this.initialize(img._11002965_10204741495150990_399493398_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


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


(lib.platform_green = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(1,1,1).p("AAZAAQgCAAgBgBQgtgagBABQADA1AAABIArgc");
	this.shape.setTransform(-8.8,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006633").ss(1,2,1).p("ANbgSQgLAPg7AKQh+AZkRgNIxJAAQgYgBgfgGQg6gLgmgW");
	this.shape_1.setTransform(80.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009933").ss(1,2,1).p("AtbAlQgJgRAAgUIAAgIIAAgBQAFgkAlgZQAsgeA9AAIWkAAQA9AAAqAeQAsAeAAAoQAAAUgLASQAAABgBABQgLARgVAOQgqAeg9AAI2kAAQg9AAgsgeQgWgQgLgSQgDgCgDgC");
	this.shape_2.setTransform(80.7,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0066FF").ss(1,1,1).p("AAAABIABgB");
	this.shape_3.setTransform(-6.4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AkrgdQH1AAAAAAIAaAFQAgALAcAZIAMASQgMgMgUgNQgogYgogEQh6gBh5gBQj0gCAAgCg");
	this.shape_4.setTransform(134.6,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FF33").s().p("AEMAFQgogYgogEIjzgCQj0gCAAgCIH1AAIAaAFQAgALAcAZIAMASQgMgMgUgNg");
	this.shape_5.setTransform(134.6,5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("ArRAfQg9AAgrgeQgWgNgLgTQAmAZA7AIQAeAGAZABIRIAAQERANB+gXQA7gMALgOQgLAQgVAMQgqAeg+AAg");
	this.shape_6.setTransform(80.6,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC33").s().p("AGeBXIxIAAQgYgBgfgGQg7gLglgYQgKgRAAgUIABgIIAAAAIAAAAIgEABIAAgBIgtAaIgDg2QABAAAvAaIAEACQAEgkAlgZQAsgeA9AAIWkAAQA9AAAqAeQAsAdAAAoQAAAVgKARIgBACQgMAPg6AMQhTARiRAAQhNAAhfgFgANggGIgMgSQgcgbgggLIgagFIn2AAQgBACD1ACID0ACQAoAEAoAaQAUANAMAMg");
	this.shape_7.setTransform(78.2,9.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-1,181.1,22.2);


(lib.platform_bloo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("AAXAAQgCAAgBgBQgqgaAAABQACA1AAABIAogcAAUACIADgC");
	this.shape.setTransform(-8.8,9.1,1.08,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(1,2,1).p("AMbgSQgKAPg3AKQh0Aaj9gOIv3AAQgWgBgdgGQg2gLgjgW");
	this.shape_1.setTransform(80.6,16,1.08,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0066FF").ss(1,2,1).p("AsbAkQgJgRAAgTIAAgIIAAgBQAFgkAigZQAogeA5AAIU5AAQA5AAAnAeQAoAeAAAoQAAAUgJASQgBAAAAABQgLASgTAOQgnAeg5AAI05AAQg5AAgogeQgUgQgKgTQgDgCgDgB");
	this.shape_2.setTransform(80.7,10.1,1.08,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AkUgdQHPAAAAAAIAYAFQAeALAaAZIALASQgLgMgTgNQglgYglgEQhxgBhvgBQjjgCABgCg");
	this.shape_3.setTransform(134.6,5.4,1.08,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AqbAgQg5AAgogeQgUgOgKgTQAjAYA2AJQAdAGAWABIP3AAQD9AOB0gYQA3gMAKgPQgKASgTAMQgoAeg4AAg");
	this.shape_4.setTransform(80.6,17,1.08,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AD4AFQglgYglgEIjggCQjjgCABgCIHOAAIAZAFQAeALAaAZIAKASQgKgMgTgNg");
	this.shape_5.setTransform(134.6,5.4,1.08,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AGABXIv3AAQgXgBgcgGQg2gLgkgYQgJgRAAgUIABgIIAAAAIAAAAIgDABIAAgBIgqAaIgCg2IAsAaIADACQAEgkAjgZQAogeA4AAIU6AAQA4AAAoAeQAoAdgBAoQAAAVgJARIgBACQgKAPg3AMQhMARiHAAQhHAAhXgFgAMggGIgKgSQgbgbgegLIgYgFInRAAQAAACDiACIDiACQAmAEAlAaQASANALAMg");
	this.shape_6.setTransform(78.2,9.2,1.08,1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-1,181.1,22.2);


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