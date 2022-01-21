class Controles{
    constructor(){
        this.button=createButton('->')
     
    }

    hide(){
        this.button.hide();
      }

display(){
    
 this.button.position(width/2 , height/2);
 this.button.style('background', 'Teal');
 this.button.style('font-size', '40px');
 this.button.style('color', 'white');
 

this.button.touchStarted(()=>{
    spider.x=spider.x+8
})


}
}

