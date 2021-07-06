class Game{

    getState(){
        database.ref('gameState').on("value", (data)=> {
            gameState= data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){

        player = new Player()

        form= new Form()
        form.display()

        var countRef= await database.ref('playerCount').once("value")

if(countRef.exists()){
        player.getCount();
}
        
    }

    play (){

        form.greetings.hide()
        textSize(30)
        text ("game start", 200, 200)

        player.getInfoPlayer()
        console.log(allPlayers);

        if(keyIsDown(UP_ARROW)){
            player.distance += 50;
            player.update()
        }

        if(allPlayers !== undefined){
        var newY= 200
       for ( var plr in allPlayers){

        if( plr === "player" + player.index){
            fill ("red")
        }
        else{
            fill ("blue")
        }
           text (allPlayers[plr].name + ";" + allPlayers[plr].distance, 120 , newY)
           newY += 50
       }
    }
    }
}
