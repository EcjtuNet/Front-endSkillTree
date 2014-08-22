window.onload = initAll;
function initAll () {
	var canvas = document.getElementById("skill");
	var cxt = canvas.getContext("2d");
	var img = new Image();
	img.src = "./images/skill.jpg";
	cxt.drawImage(img,0,0);
}