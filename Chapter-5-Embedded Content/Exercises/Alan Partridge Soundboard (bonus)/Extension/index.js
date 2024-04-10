function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

//creating function
function ahha() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/ah-ha.mp3"; //audio source
    var audio = new Audio(audioSrc);
    audio.play(); //playing audio
}

function botn() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/back-of-the-net.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function booo() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/bangoutoforder.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function dan() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/dan.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function eote() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/emailoftheevening.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function mm() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/magic mallet.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function hp() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/hellopartridge.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function iase() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/iateascotchegg.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function imc() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Audio Sampler/Audio/imconfused.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

//creating function
function dma() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/door-meet-apple-96294.mp3"; //audio source
    var audio = new Audio(audioSrc);
    audio.play(); //playing audio
}

function eitfs() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/error-in-the-file-system-149908.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function hpop() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/happy-pop-2-185287.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function mc() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/mouse-click-153941.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function move() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/movement-swipe-whoosh-3-186577.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function rs10() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/robot-saying-10-188108.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function sparkle() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/sparkle.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function sn() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/system-notification-199277.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}

function twinkle() {
    var audioSrc = "/Chapter-5-Embedded Content/Exercises/Alan Partridge Soundboard (bonus)/Extension/audio/twinkle.mp3";
    var audio = new Audio(audioSrc);
    audio.play();
}