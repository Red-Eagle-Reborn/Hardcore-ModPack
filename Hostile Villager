/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To Your Version.
  
  Mod Creator : respectZ
  Mod Release Date : 5 June 2015
  
  By Team Red Eagle.
*/
var zm = [];
function entityAddedHook(e) {
if(Entity.getEntityTypeId(e)==15) {
var copying = Level.spawnMob(Entity.getX(e)+0.5,Entity.getY(e),Entity.getZ(e)+0.5,32,Entity.getMobSkin(e));
Entity.setRenderType(e,11);
Entity.setHealth(e,Entity.getHealth(e));
zm.push([copying,Entity.getHealth(e)]);
}
}

function modTick () {
if(zm.length!=0) {
for(var i =0;i<zm.length;i++) {
Entity.setFireTicks(zm[i][0],0);
}
}
}
