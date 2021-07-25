var data;
var svg;

async function loadScene1() {
  // Button Activation
	d3.select("#scene1").style("background-color",d3.color("yellow"));
	d3.select("#scene2").style("background-color",'');
	d3.select("#scene3").style("background-color",'');
  // Data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleLinear().domain([-1.5,1.5]).range([0,600]);
	var ys = d3.scaleLinear().domain([0,1]).range([300,0]);
	d3.select("#scenes-div").select("svg").remove();
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",400).append("g").attr("transform", "translate(" + 50 + "," + 50 + ")");
	svg.selectAll("circle")
  	.data(data)
  	.enter()
  	.append("circle")
    	.attr('cx',function(d,i) {return xs(d['SOS']);})
    	.attr('cy',function(d,i) {return ys(d['WIN%']);})
    	.attr('r', 5)
	.style('fill', function(d,i) {
		return (d.CONF == "East" ? d3.color("gold") : d3.color("steelblue"));
	})
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
  // Text
	d3.select("#head2").text("Win % vs. Strength of Schedule for NBA teams in 2020-21 Season");
	d3.select("#p1").text("Scene 1 Test 1");
	d3.select("#p2").text("Scene 1 Test 2");
}

async function loadScene2() {
  // Button Activation
	d3.select("#scene1").style("background-color",d3.color("grey"));
	d3.select("#scene2").style("background-color",d3.color("yellow"));
	d3.select("#scene3").style("background-color",d3.color("grey"));
  // Data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleLinear().domain([-11,11]).range([0,600]);
	var ys = d3.scaleLinear().domain([0,1]).range([300,0]);
	d3.select("#scenes-div").select("svg").remove();
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",400).append("g").attr("transform", "translate(" + 50 + "," + 50 + ")");
	svg.selectAll("circle")
  	.data(data)
  	.enter()
  	.append("circle")
    	.attr('cx',function(d,i) {return xs(d['EDIFF']);})
    	.attr('cy',function(d,i) {return ys(d['WIN%']);})
    	.attr('r', 5)
	.style('fill', function(d,i) {
		return (d.CONF == "East" ? d3.color("gold") : d3.color("steelblue"));
	})
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
  // Text
	d3.select("#head2").text("Win % vs Expected Point Differential per 100 posessions for NBA teams in 2020-21 Season");
	d3.select("#p1").text("Scene 2 Test 1");
	d3.select("#p2").text("Scene 2 Test 2");
}

async function loadScene3() {
  // Button Activation
	d3.select("#scene1").style("background-color",d3.color("grey"));
	d3.select("#scene2").style("background-color",d3.color("grey"));
	d3.select("#scene3").style("background-color",d3.color("yellow"));

  // Load data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleBand().domain(teamdomain).range([0,600]);
	var ys = d3.scaleLinear().domain([-0.12,0.12]).range([300,0]);
	d3.select("#scenes-div").select("svg").remove();
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",400).append("g").attr("transform", "translate(" + 50 + "," + 50 + ")");
	svg.selectAll("rect")
  	.data(data)
  	.enter()
  	.append("rect")
    	.attr('x',function(d,i) {return xs(d['Team Abbrev.']);})
    	.attr('y',function(d,i) {return ys(d['ACH']);})
    	.attr('width', xs.bandwidth())
    	.attr('height', function(d,i) {return 300-ys(d['ACH']);})
	.style('fill', function(d,i) {
		return (d.CONF == "East" ? d3.color("gold") : d3.color("steelblue"));
	})
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
  
  // Text
	d3.select("#head2").text("Luck factor for NBA Teams in 2020-21 Season");
	d3.select("#p1").text("Scene 3 Test 1");
	d3.select("#p2").text("Scene 3 Test 2");
}
