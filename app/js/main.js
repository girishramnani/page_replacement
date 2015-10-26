
var mainArray = new PageArray();
var stack = new Stack();
var loge = new LogEngine("nothing"); //!global
var tk = new timeKeeper();

$("#start").click(function(event){
    var frames = $("#input-25");
    var a_frames = frames.val().split(",");
    mainArray.extend(a_frames);
    
    var n_frames = Number($("#input-27").val());
    setTimeout(function(){
    stack.initialize(n_frames);
        
        var algorithm = $("#algorithm").val();
        
        var algo_impl =null;
        
        switch(algorithm){
                
            case "FIFO":
                algo_impl = new Fifo(mainArray,stack);
                break;
            
            case "SEC":
                algo_impl = new Second(mainArray,stack);
                break;
            
            case "LRU":
                algo_impl = new LRU(mainArray,stack);
                
                break;
                
            case "OPT":
                algo_impl = new Optimal(mainArray,stack);
                break;
                        
                
        }
//        for(var i=0;i<mainArray.length();i++){
        
        setTimeout(function(){
        
            
            var info = mainArray.next();
            
            
        },tk.T(1000));
        
         setTimeout(function(){
             
             
         if(stack.has(info.val)){
             mainArray.nofault();
            
             
         }
             
        else{
            mainArray.fault()   
            }
            
             
        },tk.T(1000));
        
        
        info = mainArray.next();
    
        
        
        
        
            
//        }
        
        
        
        
        
    },tk.T(100*n_frames));
    
});

