var data;
var svg;

async function loadScene1() {
  // Button Activation
	d3.select("#scene1").classed("active",true);
	d3.select("#scene2").classed("active",false);
	d3.select("#scene3").classed("active",false);
  
  // Text
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	console.log("teamdomain");
	var xs = d3.scaleBand().domain(teamdomain).range([0,300]);
	var ys = d3.scaleLinear().domain([-11,11]).range([300,0]);
	d3.select("#head2").text("Average Point Differential per game in 2020-21 for all NBA teams");
	d3.select("#scenes-div").select("svg").remove();
	svg = d3.select("#scenes-div").append("svg").attr("width",400).attr("height",400);
	console.log(svg);
	svg.append("g").attr("transform", "translate(" + 50 + "," + 50 + ")")
	.selectAll("rect")
  	.data(data)
  	.enter()
  	.append("rect")
    	.attr('x',function(d,i) {return xs(d['Team Abbrev.']);})
    	.attr('y',function(d,i) {return ys(d['PTS DIFF']);})
    	.attr('width', 10)
    	.attr('height', 10)
	.style('fill', d3.color("steelblue"));
	d3.select("#p1").text("Scene 1 Test 1");
	d3.select("#p2").text("Scene 1 Test 2");
}

function loadScene2() {
  // Button Activation
	d3.select("#scene1").classed("active",false);
	d3.select("#scene2").classed("active",true);
	d3.select("#scene3").classed("active",false);
  
  // Text
	d3.select("#head2").text("Scene 2 Heading");
	d3.select("#p1").text("Scene 2 Test 1");
	d3.select("#p2").text("Scene 2 Test 2");
}

function loadScene3() {
  // Button Activation
	d3.select("#scene1").classed("active",false);
	d3.select("#scene2").classed("active",false);
	d3.select("#scene3").classed("active",true);
  
  // Text
	d3.select("#head2").text("Scene 3 Heading");
	d3.select("#p1").text("Scene 3 Test 1");
	d3.select("#p2").text("Scene 3 Test 2");
}
