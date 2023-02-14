import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true; //para los setter no se invocan como una funciòn sino como una asignación
        }

        player.play();
        /* player.toggleMute();
        var promise = player.play();
        if (promise) {
            //Older browsers may not return a promise, according to the MDN website
            promise.catch(function(error) { console.error(error); });
        } */
    }
};


export default AutoPlay;