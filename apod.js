var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "DEMO_KEY";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("apod_title").textContent = response.title;
    document.getElementById("apod_date").textContent = response.date;
    document.getElementById("apod_pic").src = response.hdurl;
    document.getElementById("apod_explanation").textContent = response.explanation;
  }
})