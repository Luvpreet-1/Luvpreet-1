class Player {
    constructor(x,y,width,height) {
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.sprite = null;

    }
    display (){
        this.sprite = createSprite(this.x,this.y,this.width,this.height);
        this.sprite.shapeColor = "green";
        if(keyDown(UP_ARROW)){
            this.sprite.y -= 2;
          }
          if(keyDown(DOWN_ARROW)){
            this.sprite.y += 2;
          }
          if(keyDown(RIGHT_ARROW)){
            this.sprite.x += 2;
          }
          if(keyDown(LEFT_ARROW)){
            this.sprite.x -= 2;
          }
        

    }
}