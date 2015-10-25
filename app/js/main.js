
var mainArray = new PageArray();

$("#start").click(function(event){
    var frames = $("#input-25");
    var a_frames = frames.val().split(",");
    mainArray.extend(a_frames);
    
});

