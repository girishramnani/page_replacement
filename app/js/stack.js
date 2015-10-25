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
    this.el.append(createBlock(number,["large","page"]))
    this.array.push(number);
    
    
}

Stack.prototype.replace = function(index,number){
    
}


