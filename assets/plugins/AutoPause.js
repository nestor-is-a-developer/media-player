class AutoPause {
    constructor() {
      this.threshold = 0.25;
      //quien llama a la función handle es el intersectionObserver
      //y el this corresponde al objeto que llama a cierta función
      //Como dentro del handle necesito acceder al player entonces le asigno el this permanentemente a la instancia del objeto con bind
      this.handleIntersection = this.handleIntersection.bind(this);
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
  
    run(player) {
        //Vamos anecesitar darle play y pause al player, por eso hay que guardarlo como un atributo de la clase para usarlo más adelante
      this.player = player;
  
        //Recibe 2 argumentos:
        //1. handler que recibe el anuncio de que hubo una interseccón en el objeto que se está observando
        //2. un objeto de configuración donde va el threesold
      const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold,
      });
  
      observer.observe(this.player.media);
      
      document.addEventListener("visibilitychange", this.handleVisibilityChange)

    }
  
    //entries son los objetos que se están observando. Por ahora sólo se observa uno
    handleIntersection(entries) {
      const entry = entries[0];
  
      const isVisible = entry.intersectionRatio >= this.threshold;
  
      if (isVisible) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }
  };
  
  export default AutoPause;