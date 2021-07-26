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
	d3.select("#p1").text("In sports, the most straight-forward way to evaluate a team is to look at their record. But sometimes, a team's record is not the only " +
			      "indication of how good a team is. This is also true for NBA; hypothetically, a team could be winning half of their matches by 20 points " +
			      "and losing the other half by 1 point, and end up being average in records although they are expected to win a lot more than they did. " +
			      "This is what we attribute to as the luck factor; in this presentation, we will take a look at how the luck factor affected all the NBA " +
			      "teams in the 2020-21 Regular Season.");
	d3.select("#p2").text("");
}

async function loadScene1() {
  // Button Activation
	d3.select("#intro").style("background-color",'');
	d3.select("#scene1").style("background-color",d3.color("yellow"));
	d3.select("#scene2").style("background-color",'');
	d3.select("#scene3").style("background-color",'');
	d3.select("#scene4").style("background-color",'');
	
	// Tooltip
	var Tooltip = d3.select("#scenes-div").select("#tooltip-div")
    	.style("opacity", 0)
    	.attr("class", "tooltip")
    	.style("background-color", "lavender")
    	.style("border", "0px")
    	.style("border-radius", "10px")
    	.style("padding", "5px")
	.style("position", "absolute")
	.style("width", "100px")
	.style("height", "50px")
	.style("font-size", "14px");
	
  // Data
	const data = await d3.csv("2020NBATeamStats.csv");
	teamdomain = ["Atl","Bos","Bro","Cha","Chi","Cle","Dal","Den","Det","Gol","Hou","Ind","Lac",
		"Lal","Mem","Mia","Mil","Min","Nor","Nyk","Okc","Orl","Phi","Pho","Por","Sac","San","Tor","Uta","Was"];
	var xs = d3.scaleLinear().domain([-1.5,1.5]).range([0,600]);
	var ys = d3.scaleLinear().domain([0,1]).range([300,0]);
	d3.select("#scenes-div").selectAll("svg").remove();
	d3.select("#selector-div").style("visibility", "hidden");
	
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",360).append("g").attr("transform", "translate(" + 50 + "," + 30 + ")");
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
	.on("mouseover", function(event, d) {Tooltip.transition().duration(200).style("opacity", 0.9);
	Tooltip.html("Team: " + d['Team Abbrev.'] + "<br>" + "SOS: " + d['SOS'] + "<br>" + "Win Rate: " + d['WIN%'])
      	.style("left", (event.pageX + 10) + "px")
      	.style("top", (event.pageY + 10) + "px");})
    	.on("mouseleave", function(d) {Tooltip.transition().duration(500).style("opacity", 0);});
	
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
	
	// Annotation
	svg.append("line")
	.attr("x1", 0)
      	.attr("x2", 600)
      	.attr("y1", 150)
      	.attr("y2", 150)
	.attr("stroke", "black")
	.attr("stroke-width", 2)
	.attr("stroke-dasharray", ("3, 3"));
	
	svg.append("line")
	.attr("x1", 300)
      	.attr("x2", 300)
      	.attr("y1", 300)
      	.attr("y2", 0)
	.attr("stroke", "black")
	.attr("stroke-width", 2)
	.attr("stroke-dasharray", ("3, 3"));
	
	// Axis Labels
	svg.append("text")
    	.attr("class", "x label")
    	.attr("text-anchor", "end")
    	.attr("x", 650)
    	.attr("y", 290)
	.attr("fill", "black")
    	.text("Strength of Schedule (SOS)");
	
	svg.append("text")
    	.attr("class", "y label")
    	.attr("text-anchor", "start")
	.attr("x", 10)
    	.attr("y", 0)
	.attr("fill", "black")
    	.text("Win Rate");
	
	loadimage(svg);
	
  // Text
	d3.select("#head2").text("Win rate vs. Strength of Schedule for NBA teams in 2020-21 Season");
	d3.select("#p1").text("The first thing we look at is the strength of schedule (SOS), an indicator for how strong their average opponent is - the higher the SOS, " +
			     "the tougher the team's opponents are. Since teams don't play the same opponents, we may expect SOS to be part of the luck factor. However, " +
			     "here we see that SOS is actually related to Win %; teams with a higher win rate tend to have a lower SOS and vice versa. This is expected, " +
			     "as those high win rate teams themselves wins more against their opponents and will lower their own SOS.");
	d3.select("#p2").text("So, strength of schedule isn't a great measure for luck as the team's own performance influences it. Are there other measures we can use " +
			     "to evaluate luck?");
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
	
	// Tooltip
	var Tooltip = d3.select("#scenes-div").select("#tooltip-div")
    	.style("opacity", 0)
    	.attr("class", "tooltip")
    	.style("background-color", "lavender")
    	.style("border", "0px")
    	.style("border-radius", "10px")
    	.style("padding", "5px")
	.style("position", "absolute")
	.style("width", "100px")
	.style("height", "50px")
	.style("font-size", "14px");
	
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",360).append("g").attr("transform", "translate(" + 50 + "," + 30 + ")");
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
	.on("mouseover", function(event, d) {Tooltip.transition().duration(200).style("opacity", 0.9);
	Tooltip.html("Team: " + d['Team Abbrev.'] + "<br>" + "EDIFF: " + d['EDIFF'] + "<br>" + "Win Rate: " + d['WIN%'])
      	.style("left", (event.pageX + 10) + "px")
      	.style("top", (event.pageY + 10) + "px");})
    	.on("mouseleave", function(d) {Tooltip.transition().duration(500).style("opacity", 0);});
	
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
	
	// Annotation
	svg.append("line")
	.attr("x1", 0)
      	.attr("x2", 600)
      	.attr("y1", 150)
      	.attr("y2", 150)
	.attr("stroke", "black")
	.attr("stroke-width", 2)
	.attr("stroke-dasharray", ("3, 3"));
	
	svg.append("line")
	.attr("x1", 300)
      	.attr("x2", 300)
      	.attr("y1", 300)
      	.attr("y2", 0)
	.attr("stroke", "black")
	.attr("stroke-width", 2)
	.attr("stroke-dasharray", ("3, 3"));
	
	// Axis Labels
	svg.append("text")
    	.attr("class", "x label")
    	.attr("text-anchor", "end")
    	.attr("x", 650)
    	.attr("y", 290)
	.attr("fill", "black")
    	.text("Expected Point Differential per 100 posessions");
	
	svg.append("text")
    	.attr("class", "y label")
    	.attr("text-anchor", "start")
	.attr("x", 10)
    	.attr("y", 0)
	.attr("fill", "black")
    	.text("Win Rate");
	
	loadimage(svg);
	
	
	
  // Text
	d3.select("#head2").text("Win rate vs Expected Point Differential per 100 posessions for NBA teams in 2020-21 Season");
	d3.select("#p1").text("Let's take a look at the measure for Expected Point Differential per 100 posessions (EDIFF) - this is, on average, how many points a team " +
			     "will have more than the opponents over 100 posessions. As we expected, the teams with higher EDIFF tend to have higher win rates. However, we also " +
			     "expect all teams with close to 0 EDIFF to have a close to 50% win rate, but the variance in win rate is substantial among those teams.");
	d3.select("#p2").text("Can we establish a new measure to capture that variance?");
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
	
	// Tooltip
	var Tooltip = d3.select("#scenes-div").select("#tooltip-div")
    	.style("opacity", 0)
    	.attr("class", "tooltip")
    	.style("background-color", "lavender")
    	.style("border", "0px")
    	.style("border-radius", "10px")
    	.style("padding", "5px")
	.style("position", "absolute")
	.style("width", "80px")
	.style("height", "40px")
	.style("font-size", "14px");
	
	svg = d3.select("#scenes-div").append("svg").attr("width",700).attr("height",360).append("g").attr("transform", "translate(" + 50 + "," + 30 + ")");
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
	.on("mouseover", function(event, d) {Tooltip.transition().duration(200).style("opacity", 0.9);
	Tooltip.html("Team: " + d['Team Abbrev.'] + "<br>" + "LAW: " + (d['ACH'] * d['GP']).toFixed(2))
      	.style("left", (event.pageX + 10) + "px")
      	.style("top", (event.pageY + 10) + "px");})
    	.on("mouseleave", function(d) {Tooltip.transition().duration(500).style("opacity", 0);});
	
	svg.call(d3.axisLeft(ys));
	svg.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(xs));
	
	// Annotation
	svg.append("line")
	.attr("x1", 0)
      	.attr("x2", 600)
      	.attr("y1", 150)
      	.attr("y2", 150)
	.attr("stroke", "black")
	.attr("stroke-width", 2)
	.attr("stroke-dasharray", ("3, 3"));
	
	// Axis Labels
	svg.append("text")
    	.attr("class", "y label")
    	.attr("text-anchor", "start")
	.attr("x", 10)
    	.attr("y", 0)
	.attr("fill", "black")
    	.text("Luck-Attributed Wins (LAW)");
	
	loadimage(svg);
  
  // Text
	d3.select("#head2").text("Luck effect for NBA Teams in 2020-21 Season");
	d3.select("#p1").text("We can use the EDIFF from the previous scene to calculate an expected win rate for each team, by dividing it by a consistency rating, calculated " +
			      "as the standard deviation for the game-by-game efficiency difference, and applying the normalcdf function. Then we can take the difference between " +
			      "the team's actual win rate from the expected win rate and time the result by their total games played; this is how many wins that the team should " +
			     "have had more than their actual record based on their point differential, and is a better measurement for the luck factor.");
	d3.select("#p2").text("We can see in the graph that the luckiest teams had around 4 to 5 wins more than expected, while the unluckiest team - the Toronto Raptors - " +
			      "had almost 8 less wins than expected. You can explore more on each team's specific stats in the next scene.");
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
	
	svg = d3.select("#scenes-div").append("svg").attr("width",400).attr("height",360).append("g").attr("transform", "translate(" + 50 + "," + 30 + ")");
	svg2 = d3.select("#scenes-div").append("svg").attr("width",250).attr("height",360).append("g").attr("transform", "translate(" + 50 + "," + 30 + ")");
	index = parseInt(sel) - 1;
	if (index < 0)
	{
		return;
	}
	PointStats = [data[index]['PTS/GM'], data[index]['aPTS/GM'], data[index]['OEFF'], data[index]['DEFF']];
	Category1 = ["Pts For", "Pts Against", "Off. Eff.", "Def. Eff."];
	WinStats = [data[index]['WIN%'], data[index]['eWIN%']];
	Category2 = ["Win Rate", "Exp. Win Rate"];
	Color2 = ["purple", "pink"]
	var xs = d3.scaleBand().domain(Category1).range([0,300]);
	var ys = d3.scaleLinear().domain([100,120]).range([300,0]);
	var x2s = d3.scaleBand().domain(Category2).range([0,150]);
	var y2s = d3.scaleLinear().domain([0,1]).range([300,0]);
	
	// Tooltip
	var Tooltip = d3.select("#scenes-div").select("#tooltip-div")
    	.style("opacity", 0)
    	.attr("class", "tooltip")
    	.style("background-color", "lavender")
    	.style("border", "0px")
    	.style("border-radius", "10px")
    	.style("padding", "5px")
	.style("position", "absolute")
	.style("width", "80px")
	.style("height", "20px")
	.style("font-size", "14px");
	
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
	.on("mouseover", function(event, d, ) {Tooltip.transition().duration(200).style("opacity", 0.9);
	Tooltip.html("Value: " + d)
      	.style("left", (event.pageX + 10) + "px")
      	.style("top", (event.pageY + 10) + "px");})
    	.on("mouseleave", function(d) {Tooltip.transition().duration(500).style("opacity", 0);});
	
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
	.style('fill', function(d,i) {return Color2[i];})
	.on("mouseover", function(event, d) {Tooltip.transition().duration(200).style("opacity", 0.9);
	Tooltip.html("Value: " + d)
      	.style("left", (event.pageX + 10) + "px")
      	.style("top", (event.pageY + 10) + "px");})
    	.on("mouseleave", function(d) {Tooltip.transition().duration(500).style("opacity", 0);});

	svg2.call(d3.axisLeft(y2s));
	svg2.append("g").attr("transform", "translate(" + 0 + "," + 300 + ")").call(d3.axisBottom(x2s));
	
	// Text
	d3.select("#head2").text("Detailed Stats for " + data[index]['TEAM']);
	d3.select("#p1").text("");
	d3.select("#p2").text("");
}

function loadimage(svg) {
	
	svg.append("image")
	.attr('x', 395)
	.attr('y', 0)
	.attr('width', 205)
	.attr('height', 54)
	.attr("href", "EastWest.PNG")
}
