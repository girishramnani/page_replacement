function Fifo(page_array,page_stack){

    this.page_array = page_array;
    this.page_stack = page_stack;
        loge.log("Using first-in-first-out page replacement","info");

    
}

Fifo.prototype.getRPage = function(){
    
    return 0;
    
}