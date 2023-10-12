// the code (using cos and sin to draw something)  was adapted from a tutorial https://www.bilibili.com/video/BV1US4y1b7m4/?spm_id_from=333.337.search-card.all.click&vd_source=681516f3316a8d6de525c5a99f6abc25
let len = 0;
let r = 200;

function setup() {
	createCanvas(innerWidth, innerHeight);
	background(0);
	// translate(width/2, height/2);
	angleMode(DEGREES);
	rectColor = color(255, 0, 0, 20);

}

function x1(len) {
	return  r*(sin(len) * cos(len));
}

function y1(len) {
	return  r*(sin(len) * cos(len));
}

function mousePressed() {
	rectColor = color(random(255), random(255), random(255), 20);
    music()
}


function music() {
	const cMajorScale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    // const chopinNocturne = [
	// 	'D4', 'A3', 'B3', 'F#4', 'G4', 'D4', 'A3', 'B3',
	// 	'D4', 'G4', 'A4', 'D5', 'F#4', 'A4', 'G4', 'F#4',
	// 	'D4', 'A3', 'B3', 'F#4', 'G4', 'D4', 'A3', 'B3',
	// 	'D4', 'G4', 'A4', 'D5', 'F#4', 'A4', 'G4', 'F#4'
	//   ];
	  
	const synth = new Tone.Synth().toDestination();
	var rand = Math.floor(Math.random()*8)
    synth.triggerAttackRelease(cMajorScale[rand], "8n");
}


function draw() {
	fill(rectColor);
	rect(x1(len), y1(len), len , len);
	len = len + 0.5;
}


