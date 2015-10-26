function LRU(page_array,page_stack){

    this.page_array = page_array;
    this.page_stack = page_stack;
    var pages =[];
    for(var i =0;i<page_array.array.length;i++){
    pages.push(page_array.array[i]);
    }
    var access = [];
    
    var stack = page_stack.array;
    
    var set = new Set();
    this.indexs=[];
    
//    for(var x=0;x<pages.length;x++){
//        
//    }
    
    console.log(page_stack.size);
    
    
    for(var i=0;i<pages.length;i++){
        
        
        var index = access.indexOf(pages[i]);
            if( index > -1){
                access =access.slice(0,index).concat(access.slice(index+1))
                access.push(pages[i]);
            }
           else{
               
               if(access.length < page_stack.size){
                    access.push(pages[i]);
               }
               else{
                   this.indexs.push(access.shift());
                   access.push(pages[i]);
                   
               }
        }

        
        
        console.log(pages[i]);
        
        
        
    }
//    for(var i=page_stack;i<pages.length;i++){
//        if(access < this.page_stack.size){
//         this.indexs   
//        }
        
        
    
    
    console.log(access);
    
    
    
    loge.log("Using LRU Change page replacement","info");

}

LRU.prototype.getRPage = function(){
    return this.page_stack.indexOf(this.indexs.shift());

}
