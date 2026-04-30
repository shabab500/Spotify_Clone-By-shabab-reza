 let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('audio/1.mp3');
play.addEventListener('click', () => {
let icon = play.querySelector('i');
if(audio.paused || audio.currentTime == 0){
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
}
else{
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
}
}) 
audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime/audio.duration) * 100
    progressBar.value = progress
    progressBar.style.background = `linear-gradient(to right, #19a327 ${progress}% , #333 ${progress}%)`;
});
progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #19a327 ${value}% , #333 ${value}%)`;
      audio.currentTime = (progressBar.value * audio.duration) / 100;
});
let playMusic = Array.from(document.getElementsByClassName('playMusic'))
console.log(playMusic);

playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})