import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';


const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");

//instance
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()]
});
      
//use
playButton.onclick = () => player.togglePlay();

muteButton.onclick = () => player.toggleMute();

//No todos los navegadores tienen el serviceWorker, por eso preguntamos
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.message);
    });
  }

