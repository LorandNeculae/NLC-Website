
function show_menu() {
   	var element = document.getElementById("nav_1");
    element.classList.toggle("show");
}
var index= 0;


function show() {

	var count;
	var x = document.getElementsByClassName("slideshow");
	for (count = 0; count < x.length; count++)	{
    	x[count].style.display = "none";
	}
	index++;
	if (index > x.length) {index = 1}
	x[index-1].style.display = "block";
	setTimeout(show, 2500);
}


// reference for using 'map methods': https://www.w3schools.com
function myMap() {
  var myCenter = new google.maps.LatLng(53.308490, -6.228146);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
