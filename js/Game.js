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
      car1 = createSprite(100,200);

      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);

      car1.addImage(car1Img)
      car2.addImage(car2Img)
      car3.addImage(car3Img)
      car4.addImage(car4Img)

      cars=[car1, car2, car3, car4]
    }

    play (){

        image(trackImg, 0, (-height*4), width,height*5);

        form.greetings.hide()
        textSize(30)
        text ("game start", 200, 200)

        player.getInfoPlayer();
        player.getRank();
        console.log(allPlayers);

        if(player.distance>4100){
          gameState=2;
          //game.update(2);
          player.rank++
          player.updateRank();
          myRank=player.rank;
        }

        if(keyIsDown(UP_ARROW)){
            player.distance += 5;
            player.update()
        }

        var index=0;
        var x = 390;

        if(allPlayers !== undefined){
        var newY= 200
       for ( var plr in allPlayers){

        cars[index].x=x
        cars[index].y= height - allPlayers[plr].distance   
    
        if( plr === "player" + player.index){
            fill ("red")
            camera.position.x=  width/2
            camera.position.y=  cars[index].y
        }
        else{
            fill ("blue")
        }
           //text (allPlayers[plr].name + ";" + allPlayers[plr].distance, 120 , newY)
           //newY += 50
           drawSprites();

           index ++
           x += 240
       }
    }
    }

    end(){
        if(myRank === 4){
            alert("You Lose  "+"My Rank : "+myRank);
        }
        else{
            alert("You Won  "+"My Rank : "+myRank)
        }    
    }
}
