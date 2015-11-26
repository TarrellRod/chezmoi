(function(){
var app = angular.module('chezmoi', []);

app.controller('ChezController', function(){
	this.places = restaurants;
});

app.controller('PanelController', function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab=setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
	
});

var restaurants = [
{
	name: 'Barons',
	type: 'Bar & Grill',
	description: 'Gourmet food and beers',
	images:[
		{
			full: 'this.jpg',
			thumb: 'that.jpg'
		}
	],
	viewPlace: true,
	placeClosed: false
},
{
	name: 'WW Peppers',
	type: 'southwestern sitdown',
	description: 'southwestern and mexican food',
	images:[
		{
			full: 'this.jpg',
			thumb: 'that.jpg'
		}
	],
	viewPlace: true,
	placeClosed: false
}
];

})();