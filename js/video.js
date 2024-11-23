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
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up video")
	// video.playbackRate *= 1.11
	video.playbackRate *= 100/90
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip video")
	if (video.currentTime >= video.duration) {
		video.currentTime = 0.0;
	// if (video.currentTime > (video.duration-10)) {
	// 	video.currentTime = 0.0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time is ", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	} else if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	console.log("Video is muted = ", video.muted)
});

document.querySelector("#slider").addEventListener("change", function () {
	// (video.volume / 100) = document.querySelector("#slider").value;
	let slider = document.querySelector("#slider");
	video.volume = (slider.value)/100;
	console.log ("Video volume value ", video.volume);
	document.querySelector("#volume").innerHTML = slider.value +"%"
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.replace("video", "oldSchool");
	console.log("Style changed to old school");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.replace("oldSchool", "video");
	console.log("Style changed to original");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

