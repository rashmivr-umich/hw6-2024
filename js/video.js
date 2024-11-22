let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is " +video.autoplay); 
	// Picks current values of video autoplay and loop and pastes that in log
	console.log("Loop is " +video.loop);

});

document.querySelector("#play").addEventListener("click", function () {
	video.play()
	console.log("Video is playing")
	document.querySelector("#volume").innerHTML = video.volume *100 +"%"
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause()
	console.log("Video is paused")
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video")
	video.playbackRate *= .90
	console.log("Speed is ", video.playbackRate)
})


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

