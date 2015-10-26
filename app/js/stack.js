function Stack(){
    this.el = $(".pageStack");
    this.set =new Set();
    this.array=[];
    
    
}

Stack.prototype.initialize = function(size){
    loge.log("Intializing PageTable of size "+size);
    this.size = size;
    $(".pageStackBorder").css("height",57*size+"px");
    $(".pageStackBorder").css("border","2px solid black");
         
}

Stack.prototype.append = function(number){
    
    if(this.size <=this.array.length){
        return false;
    }
    this.set.add(number);
    
    var block = createBlock(number,["large","page"]);
    block.css("opacity","0");
    block.css("left","-20px");
    self = this;
    
        
    self.el.append(block);
    block.animate({"opacity":1,"left":"0px"});
    
    this.array.push(number);
        
    return true;
    
}

Stack.prototype.indexOf = function(number){
 
    return this.array.indexOf(number);
}

Stack.prototype.has = function(number){
 
    return this.set.has(number);
}

Stack.prototype.replace = function(index,number){
    this.set.delete(this.array[index]);
    this.array = this.array.slice(0,index).concat(this.array.slice(index+1))
    var selected = this.el.find(".page");
    selected[index].remove();    
    
    this.append(number);
}






