function AutoPlay(){};

AutoPlay.prototype.run = function(player){
    if(!player.muted){
        player.muted = true; //para los setter no se invocan como una funciòn sino como una asignación
    }

    player.play();
    /* player.toggleMute();
    var promise = player.play();
    if (promise) {
        //Older browsers may not return a promise, according to the MDN website
        promise.catch(function(error) { console.error(error); });
    } */
};

export default AutoPlay;