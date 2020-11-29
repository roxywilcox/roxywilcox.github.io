// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var curr_song = 0;

function init() {
	for (let i=0; i<6; i++) {
		let vol_level = document.getElementById(`vl${i}`);
		volLevels.push(vol_level);
	};
	for (let i=0; i<3; i++) {
		document.getElementById(`vl${i}`).style.backgroundColor="#9f5cc4";

	}
	// Your code goes here
}



function volUp() {
	// figure out how many are filled using filled variable with for loop
	// if statement to make sure its filled to max
	// for loop - only go up to the number + 1 that are filled, change each of those to fill color
	var filled = 0;
	console.log("hello");
	for (let i=0; i < 6; i++) {
		let vol_level = document.getElementById(`vl${i}`)
		var level_color = vol_level.style.backgroundColor;
		if (level_color != "white" && level_color!= "") {
			filled += 1;
		}
	}
	if (filled <= 6) {
		for (i=0; i<filled+1; i++) {
			let vol_level = document.getElementById(`vl${i}`)
			vol_level.style.backgroundColor='#9f5cc4';
		}
	}
}


function volDown() {
	var filled = 0;
	for (i=0; i < volLevels.length; i++) {
		let vol_level = document.getElementById(`vl${i}`);
		var level_color = vol_level.style.backgroundColor;
		if (level_color != "white"  && level_color!= "") {
			filled += 1;
		}
	}
	if (filled > 0) {
		let vol_level = document.getElementById(`vl${filled-1}`);
		vol_level.style.backgroundColor="white";
	}
}

function timeProgress() {
	document.getElementById("song-progress").stepUp(1);
	if (document.getElementById("song-progress").value >= 180) {
		nextSong();
	}
	document.getElementById("start-time").innerHTML = secondsToMs(document.getElementById("song-progress").value);
}

function switchPlay() {
	var input = document.getElementById("play-button");
	if (input.innerHTML.localeCompare("play_arrow")==0){
		input.innerHTML = "pause";
		time = setInterval(timeProgress, 1000);
	}
	 else {
		input.innerHTML = "play_arrow";
		clearInterval(time);
	}

	
}


function nextSong() {
	curr_song++;
	curr_song %= tracklist.length;
	var new_song_title = tracklist[curr_song];
	document.getElementById("player-song-name").innerHTML = new_song_title;
	document.getElementById("song-progress").value = "0";
	document.getElementById("start-time").innerHTML = secondsToMs("0");
}

function prevSong() {
	curr_song--;
	curr_song += tracklist.length;
	curr_song %= tracklist.length;
	var new_song_title = tracklist[curr_song];
	document.getElementById("player-song-name").innerHTML = new_song_title;
	document.getElementById("song-progress").value = "0";
	document.getElementById("start-time").innerHTML = secondsToMs("0");
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();