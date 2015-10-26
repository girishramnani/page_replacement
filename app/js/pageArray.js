
function PageArray(){
    this.array = [];
    this.div = $(".pagePane");
    this.past_active = -1;    
    this.index = 0;
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
    loge.log("Adding "+number+" to the pageArray","info");
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
    loge.log("selecting "+this.array[number]+" at index "+number,"info");
    if(this.past_active>=0){
        $(this.div.children()[this.past_active]).removeClass("active");   
    }
   $(this.div.children()[number]).addClass("active");
    this.past_active = number;
}

PageArray.prototype.length = function(){
    return this.array.length;
}

PageArray.prototype.next = function(){
    var number = this.array[this.index];
    this.select(this.index);
    var indx = this.index;
    this.index+=1;
    return {val:number,index:indx}
    
}

PageArray.prototype._addC  = function(cls){
    $(this.div.children()[this.past_active]).removeClass("active");   
    $(this.div.children()[this.past_active]).addClass(cls);
    
}
PageArray.prototype.fault = function(){
    loge.log("the page request "+this.past_active+" generated a fault","warning");
    this._addC("fault");
}

PageArray.prototype.nofault = function(){
    loge.log("the page request "+this.past_active+" was found","success");
    this._addC("nofault");
}


