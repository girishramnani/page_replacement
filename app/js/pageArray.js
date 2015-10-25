



function PageArray(){
    this.array = [];
    this.div = $(".pagePane");
    this.past_active = -1;      
}

function createBlock(number){
    
    
    var block = $("<div/>");
    block.addClass("page");
    block.addClass("small");
    block.html("<p>"+number+"</p>");
    return block;
 
    
    
}

PageArray.prototype.append = function(number){
    this.array.push(number);
    var b = createBlock(number);
    this.div.append(b);
    
    
}

PageArray.prototype.extend = function(pages){
    self = this;
    pages.forEach(function(page){ 
        self.append(page);
    });
    
}

PageArray.prototype.select = function(number){
    
    
   $(this.div.children()[number]).addClass("active");
    this.past_active = number;
}