var data;
var svg;

function loadScene1() {
  // Button Activation
	d3.select("#scene1").classed("active",true);
	d3.select("#scene2").classed("active",false);
	d3.select("#scene3").classed("active",false);
  
  // Text
	d3.select("#scenes-div").insert("div").classed("heading",true);
	d3.select(".heading").insert("h2").text("Test Scene 1");
	d3.select("#scenes-div").insert("div").classed("para",true);
	d3.select(".para").insert("p").text("Scene 1 Test 1");
	d3.select(".para").insert("p").text("Scene 1 Test 2");
}

function loadScene2() {
  // Button Activation
	d3.select("#scene1").classed("active",false);
	d3.select("#scene2").classed("active",true);
	d3.select("#scene3").classed("active",false);
  
  // Text
	d3.select("#scenes-div").insert("div").classed("heading",true);
	d3.select(".heading").insert("h2").text("Test Scene 2");
	d3.select("#scenes-div").insert("div").classed("para",true);
	d3.select(".para").insert("p").text("Scene 2 Test 1");
	d3.select(".para").insert("p").text("Scene 2 Test 2");
}

function loadScene3() {
  // Button Activation
	d3.select("#scene1").classed("active",false);
	d3.select("#scene2").classed("active",false);
	d3.select("#scene3").classed("active",true);
  
  // Text
	d3.select("#scenes-div").insert("div").classed("heading",true);
	d3.select(".heading").insert("h2").text("Test Scene 3");
	d3.select("#scenes-div").insert("div").classed("para",true);
	d3.select(".para").insert("p").text("Scene 3 Test 1");
	d3.select(".para").insert("p").text("Scene 3 Test 2");
}
