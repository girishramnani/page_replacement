function LogEngine(formatter){
 
    this.formatter = formatter;
    
    
    
}

LogEngine.prototype.log = function(message,type){
    
    console.log(message);
    
}

function timeKeeper(){
 
    this.time = 0;
    
}

timeKeeper.prototype.T = function(delta){
    this.time+=delta;
    return this.time;
}