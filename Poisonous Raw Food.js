/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : DevilLord RedEagle / DevilLord & respectZ
  Mod Release Date : 05/06/2015
  
  By Team Red Eagle.
*/

 
var nowAmount;
var nowId;
var nowData;
var lastAmount;
var lastId;
var lastData;
var lastBlock;
var needAlert = false;
var lastSlotId;
var nowSlotId;
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400];
var invBlocks = [54,58,60,61,62];
var tick = 0;
 
function modTick(){
    lastBlock = Player.getPointedBlockId();
    nowId = Player.getCarriedItem();
    nowData = Player.getCarriedItemData();
    nowAmount = Player.getCarriedItemCount();
    if(foodItems.indexOf(nowId)>=0){ 
        if(needAlert&&!alert){
            clientMessage("Please tap on a block without an inventory");
            alert = true;
        }
        tick++; 
        if(tick==10){
            tick=0; 
            if(nowId==lastId){ 
                if(nowData==lastData){ 
                    if((lastAmount-1)==nowAmount){ 
                        if(invBlocks.indexOf(lastBlock)==-1){ 
                            eatHook(lastId);
                        }
                    }
                }
            }
            lastId = Player.getCarriedItem();
            lastData = Player.getCarriedItemData();
            lastAmount = Player.getCarriedItemCount();
        }
    }
    if(nowId==0){ 
        if(foodItems.indexOf(lastId)>=0){ 
            if(lastAmount==1){ 
                if(invBlocks.indexOf(lastBlock)==-1){ 
                    eatHook(lastId); 
                    lastId=0; 
                }
            }
        }
    }
    if(foodItems.indexOf(nowId)==-1){ 
        if(nowId!==0){
            lastId=0;
        }
    }
}
 
function eatHook(foodId){
    // clientMessage("Debug Message: YOU ATE FOOD!");
    var rnd = Math.floor(Math.random()*(50));
    if(foodId==319 || foodId == 363 || foodId == 365){ 
      if(rnd == 1 || rnd == 7 || rnd == 22 || rnd == 18 || rnd == 8 || rnd == 10 || rnd == 15 || rnd == 11 || rnd == 12 || rnd == 5) {
        Entity.addEffect(getPlayerEnt(), MobEffect.poison, 10, 1, false, true);
      }
    }
}
