var mineSweep = new MineSweep();


$(document).ready(function ()
{
    $('.carousel').carousel({
        interval: 7500
    });


    mineSweep.Player().SetName("Fredrik"); 
    mineSweep.Player().IncreaseClicks();

    //mineSweep.SetPlayer(new Player("Fredrik"));

    //mineSweep.InitGame();
    $("h1").click(function () {
        console.log(mineSweep.Player().Clicks());
    });

});


// Class representing a game of minesweep.
function MineSweep(){

   //Player attached to the game.
   var player = new Player();

    // Method responsible for initalizing a new game round.
    this.InitGame = function () {};

    this.RunGame = function () { };

    this.EndGame = function () { };


    this.Player = function () {
        return player;
    }

    this.SetPlayer = function (newPlayer) {
        player = newPlayer;
    }


}

// Class representing a player. 
function Player() {

    var name;
    var time;
    var clicks = 0;

    this.Name = function (){ return name; };

    this.SetName = function (val) { name = val; };

    this.Clicks = function () { return clicks; };

    this.IncreaseClicks = function () { clicks++; };

}
