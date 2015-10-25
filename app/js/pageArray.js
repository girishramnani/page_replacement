



function PageArray(){
    this.array = [];
    this.div = $(".pagePane");
    this.past_active = -1;      
}

function createBlock(number,prop){
    
    
    var block = $("<div/>");
    prop.forEach( function( cl ){
        
            block.addClass(cl);

    });
    block.html("<p>"+number+"</p>");
    return block;
 
    
    
}

PageArray.prototype.append = function(number){
    this.array.push(number);
    var b = createBlock(number,["small","page"]);
    b.css("opacity",0);
    b.css("top","-5px");
    this.div.append(b);
    
    b.animate({"top":"0px","opacity":1});
    b.fadeIn(1000);
    
}

PageArray.prototype.extend = function(pages){
    self = this;
    pages.forEach(function(page,index){
        
        setTimeout(function(){
        self.append(page);
            
        },index*100);
    });
    
}

PageArray.prototype.select = function(number){
    
    
   $(this.div.children()[number]).addClass("active");
    this.past_active = number;
}