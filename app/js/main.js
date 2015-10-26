
var mainArray = new PageArray();
var stack = new Stack();
var loge = new LogEngine("nothing"); //!global
var tk = new timeKeeper();
var faults = 0;

// program settings

var _s ={    
    DELAY:1000
};


$("#init").click(function(evt){
    
    
});
$("#start").click(function(event){
    var frames = $("#input-25");
    var a_frames = frames.val().split(",");
    mainArray.extend(a_frames);
    
    var n_frames = Number($("#input-27").val());
    
    
    setTimeout(function(){
    
        
        stack.initialize(n_frames);
        var algorithm = $("#algorithm").val();
        var algo_impl = null;
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
        var info=null;
        
        var x =new Number(mainArray.length());
        var loop = 0
        function loop_function() {
            
            if (loop < x){
//            setTimeout(
//                
//                function(){
                info = mainArray.next();
//                },tk.T(1.5*_s.DELAY));


//             setTimeout(function(){
             if(stack.has(info.val)){
                 mainArray.nofault();             
             }
            else{ // fault section
                mainArray.fault();
                faults+=1;
                if(stack.append(info.val)){
                        loge.log("added the page "+info.val,"info");
                }
                else{
                        var page_index =0;
                        loge.log("using the algorithm to replace page");
                        stack.replace(page_index,info.val);
                        console.log(mainArray.length(),tk.time);
                    
                    }
                    
                }
//             },tk.T(_s.DELAY));
//            setTimeout(function(){
                
                loop+=1;
                loop_function();
//            },tk.T(100));
                
            }
        }
        loop_function();



        
            
//        }
    },tk.T(100*n_frames));
    
});

