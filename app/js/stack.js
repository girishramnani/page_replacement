function Stack(){
    this.el = $(".pageStack");
    this.set =new Set();
    this.array=[];
    
}

Stack.prototype.initialize = function(size){
    
    $(".pageStackBorder").css("height",57*size+"px");
    $(".pageStackBorder").css("border","2px solid black");
         
}

Stack.prototype.append = function(number){
    this.set.add(number);
    
    var block = createBlock(number,["large","page"]);
    block.css("opacity","0");
    block.css("left","-20px");
    this.el.append(block);
    block.animate({"opacity":1,"left":"0px"});
    this.array.push(number);
    
    
}

Stack.prototype.has = function(number){
 
    return this.set.has(number);
}

Stack.prototype.replace = function(index,number){
    
}




