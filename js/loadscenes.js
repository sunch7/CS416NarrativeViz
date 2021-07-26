var data;
var svg;

async function loadIntro() {
	// Button Activation
	d3.select("#intro").style("background-color",d3.color("yellow"));
	d3.select("#scene1").style("background-color",'');
	d3.select("#scene2").style("background-color",'');
	d3.select("#scene3").style("background-color",'');
	d3.select("#scene4").style("background-color",'');
	
	// Data
	d3.select("#scenes-div").selectAll("svg").remove();
	d3.select("#selector-div").style("visibility", "hidden");
	
	// Text
	d3.select("#head2").text("Introduction");
	d3.select("#p1").text("Intro Test 1");
	d3.select("#p2").text("Intro Test 2");
}

async function loadScene1() {
  // Button Activation
	d3.select("#intro").style("background-color",'');
	d3.select("#scene1").style("background-color",d3.color("yellow"));
	d3.select("#scene2").style("background-color",'');
	d3.select("#scene3").style("background-color",'');
	d3.select("#scene4").style("background-color",'');
  // Data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleLinear().domain([-1.5,1.5]).range([0,600]);
	var ys = d3.scaleLinear().domain([0,1]).range([300,0]);
	d3.select("#scenes-div").selectAll("svg").remove();
	d3.select("#selector-div").style("visibility", "hidden");
	
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
	d3.select("#intro").style("background-color",'');
	d3.select("#scene1").style("background-color",'');
	d3.select("#scene2").style("background-color",d3.color("yellow"));
	d3.select("#scene3").style("background-color",'');
	d3.select("#scene4").style("background-color",'');
  // Data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleLinear().domain([-11,11]).range([0,600]);
	var ys = d3.scaleLinear().domain([0,1]).range([300,0]);
	d3.select("#scenes-div").selectAll("svg").remove();
	d3.select("#selector-div").style("visibility", "hidden");
	
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
	d3.select("#intro").style("background-color",'');
	d3.select("#scene1").style("background-color",'');
	d3.select("#scene2").style("background-color",'');
	d3.select("#scene3").style("background-color",d3.color("yellow"));
	d3.select("#scene4").style("background-color",'');

  // Load data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleBand().domain(teamdomain).range([0,600]);
	var ys = d3.scaleLinear().domain([-9,9]).range([300,0]);
	d3.select("#scenes-div").selectAll("svg").remove();
	d3.select("#selector-div").style("visibility", "hidden");
	
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",400).append("g").attr("transform", "translate(" + 50 + "," + 50 + ")");
	svg.selectAll("rect")
  	.data(data)
  	.enter()
  	.append("rect")
    	.attr('x',function(d,i) {return xs(d['Team Abbrev.']);})
    	.attr('y',function(d,i) {return ys(d['ACH'] * d['GP']);})
    	.attr('width', xs.bandwidth())
    	.attr('height', function(d,i) {return 300-ys(d['ACH'] * d['GP']);})
	.style('fill', function(d,i) {
		return (d.CONF == "East" ? d3.color("gold") : d3.color("steelblue"));
	})
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
	
	svg.append("path").attr("class","line").style("stroke-dasharray", ("3, 3"))
	.attr("x1", 50)
      	.attr("x2", 650)
      	.attr("y1", 150)
      	.attr("y2", 150)
  
  // Text
	d3.select("#head2").text("Luck effect for NBA Teams in 2020-21 Season");
	d3.select("#p1").text("Scene 3 Test 1");
	d3.select("#p2").text("Scene 3 Test 2");
}

async function loadScene4() {
  // Button Activation
	d3.select("#intro").style("background-color",'');
	d3.select("#scene1").style("background-color",'');
	d3.select("#scene2").style("background-color",'');
	d3.select("#scene3").style("background-color",'');
	d3.select("#scene4").style("background-color",d3.color("yellow"));

  // Load data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	d3.select("#scenes-div").selectAll("svg").remove();
	d3.select("#selector-div").style("visibility", "visible");
	d3.select("#head2").text("");
	d3.select("#p1").text("");
	d3.select("#p2").text("");
	
	// Dropdown selector
	loadteamdata(d3.select("#selector-div").select("#SelectTeam").property("value"));
}

async function loadteamdata(sel) {
	const data = await d3.csv("2020NBATeamStats.csv");
	d3.select("#scenes-div").selectAll("svg").remove();
	
	svg = d3.select("#scenes-div").append("svg").attr("width",300).attr("height",400).append("g").attr("transform", "translate(" + 50 + "," + 50 + ")");
	svg2 = d3.select("#scenes-div").append("svg").attr("width",200).attr("height",400).append("g").attr("transform", "translate(" + 50 + "," + 50 + ")");
	index = parseInt(sel) - 1;
	if (index < 0)
	{
		return;
	}
	PointStats = [data[index]['PTS/GM'], data[index]['aPTS/GM'], data[index]['OEFF'], data[index]['DEFF']];
	Category1 = ["Pts For", "Pts Against", "Off. Eff.", "Def. Eff."];
	WinStats = [data[index]['WIN%'], data[index]['eWIN%']];
	Category2 = ["Win%", "Exp. Win%"];
	Color2 = ["purple", "pink"]
	var xs = d3.scaleBand().domain(Category1).range([0,200]);
	var ys = d3.scaleLinear().domain([100,120]).range([300,0]);
	var x2s = d3.scaleBand().domain(Category2).range([0,100]);
	var y2s = d3.scaleLinear().domain([0,1]).range([300,0]);
	
	svg.selectAll("rect")
  	.data(PointStats)
  	.enter()
  	.append("rect")
    	.attr('x',function(d,i) {return xs(Category1[i]);})
    	.attr('y',function(d,i) {return ys(d);})
    	.attr('width', xs.bandwidth() / 1.2)
    	.attr('height', function(d,i) {return 300-ys(d);})
	.style('fill', function(d,i) {
		return (i % 2 == 1 ? d3.color("grey") : d3.color("green"));
	})
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
	
	svg2.selectAll("rect")
  	.data(WinStats)
  	.enter()
  	.append("rect")
    	.attr('x',function(d,i) {return x2s(Category2[i]);})
    	.attr('y',function(d,i) {return y2s(d);})
    	.attr('width', xs.bandwidth() / 1.2)
    	.attr('height', function(d,i) {return 300-y2s(d);})
	.style('fill', function(d,i) {return Color2[i];});

	svg2.call(d3.axisLeft(y2s));
	svg2.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(x2s));
	
	// Text
	d3.select("#head2").text("Detailed Stats for " + data[index]['TEAM']);
}
