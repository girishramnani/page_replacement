function LogEngine(formatter){
 
    this.formatter = formatter;
    
    
    
}

LogEngine.prototype.log = function(message,type){
    
    console.log(message);
    
}