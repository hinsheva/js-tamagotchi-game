const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    // console.log("this", this)
    this.clock++;
    if(this.clock === this.wakeTime){
      this.wake();
    }
    console.log("clock" , this.clock)
    return this.clock;
  },
  startGame(){
    console.log("hatching")
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake(){
    console.log('awoken');
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    console.log("this", this)
    if(["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)){
      //disable respond on user interractions
      return;
    }
    if(this.current === "INIT" || this.current === "DEAD"){
      this.startGame();
      return;
    }
    switch(icon){
      case "weather": 
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather(){
    console.log("changeWeather")
  },
  cleanUpPoop(){
    console.log("cleanUpPoop")
  },
  feed(){
    console.log("feed")
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
