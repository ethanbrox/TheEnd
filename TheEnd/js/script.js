window.onload = function () {
    //Grab the canvas objects
    var gameDisplay = document.getElementById("game");
    var uiDisplay = document.getElementById("ui");

    //Set there width and height
    var width = gameDisplay.width = uiDisplay.width = window.innerWidth;
    var height = gameDisplay.height = uiDisplay.height = window.innerHeight;

    //Grab the context objects
    var gameContext = gameDisplay.getContext('2d');
    var uiContext = uiDisplay.getContext('2d');
    
    var maze = new Maze(20, 20, 5, 5);

    var show = function () {
        gameContext.clearRect(0, 0, width, height);
        uiContext.clearRect(0, 0, width, height);
        
        //Render the screen here
        
        
        window.requestAnimationFrame(draw);
    }

    var update = function () {
        setInterval(function () {

        }, 25);
    }

    update();
    show();
}
