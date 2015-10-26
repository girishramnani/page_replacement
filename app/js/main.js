
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
    var frames = $("#input-25");
    var a_frames = frames.val().split(",");
    mainArray.extend(a_frames);
    var n_frames = Number($("#input-27").val());
    stack.initialize(n_frames);

    
});
$("#start").click(function(event){
   
    
    
    
        
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
            setTimeout(
                function(){
//                
                setTimeout(
                    function(){
                    info = mainArray.next();
                        setTimeout(function(){

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
                                            var page_index = algo_impl.getRPage();
                                            loge.log("using the algorithm to replace page");
                                            stack.replace(page_index,info.val);
                                            console.log(mainArray.length(),tk.time);

                                        }
                                     

                                    }
                             loop+=1;
                            loop_function();

                                },_s.DELAY);
                        },_s.DELAY);
//                },tk.T(1.5*_s.DELAY));


//             setTimeout(function(){
//             if(stack.has(info.val)){
//                 mainArray.nofault();             
//             }
//            else{ // fault section
//                mainArray.fault();
//                faults+=1;
//                if(stack.append(info.val)){
//                        loge.log("added the page "+info.val,"info");
//                }
//                else{
//                        var page_index =0;
//                        loge.log("using the algorithm to replace page");
//                        stack.replace(page_index,info.val);
//                        console.log(mainArray.length(),tk.time);
//                    
//                    }
//                    
//                }
//             },tk.T(_s.DELAY));
//            setTimeout(function(){
                
              
            },500);
                
            }
            
            else{
                
             alert("the number of page Faults are "+faults);   
            }
        }
        loop_function();



        
            
//        }
//    },tk.T(100*n_frames));
    
});

