window.onload = function(){
    //Grab the canvas objects
    var gameDisplay = document.getElementById("game");
    var uiDisplay = document.getElementById("ui");
    
    //Set there width and height
    var width = gameDisplay.width = uiDisplay.width = window.innerWidth;
    var height = gameDisplay.height = uiDisplay.height = window.innerHeight;
    
    //Grab the context objects
    var gameContext = gameDisplay.getContext('2d');
    var uiContext = uiDisplay.getContext('2d');
    
    var show = function(){
        gameContext.fillRect(0, 0, width, height);
        window.requestAnimationFrame(draw);
    }
    
    var update = function(){
        setInterval(function(){
            
        }, 25);
    }
    
    update();
    show();
}