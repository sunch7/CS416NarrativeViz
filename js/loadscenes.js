var data;
var svg;

var Scene1 = function loadScene1() {
  // Button Activation
	// d3.select("#scene1").classed("active",true);
	// d3.select("#scene2").classed("active",false);
	// d3.select("#scene3").classed("active",false);
  
  // Text
	d3.select("#head1").text("Scene 1);
	d3.select("#head2").text("Scene 1 Heading");
	d3.select("#p1").text("Scene 1 Test 1");
	d3.select("#p2").text("Scene 1 Test 2");
}

var Scene2 = function loadScene2() {
  // Button Activation
	// d3.select("#scene1").classed("active",false);
	// d3.select("#scene2").classed("active",true);
	// d3.select("#scene3").classed("active",false);
  
  // Text
	d3.select("#head2").text("Scene 2 Heading");
	d3.select("#p1").text("Scene 2 Test 1");
	d3.select("#p2").text("Scene 2 Test 2");
}

var Scene3 = function loadScene3() {
  // Button Activation
	// d3.select("#scene1").classed("active",false);
	// d3.select("#scene2").classed("active",false);
	// d3.select("#scene3").classed("active",true);
  
  // Text
	d3.select("#head2").text("Scene 3 Heading");
	d3.select("#p1").text("Scene 3 Test 1");
	d3.select("#p2").text("Scene 3 Test 2");
}
