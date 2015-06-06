/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : respectZ
  Mod Release Date : 5 June 2015
  
  By Team Red Eagle.
*/
var mobs = [];
var oldMobs = [];
var unHostMobs = [64,65,66,77,80,81,82,83,84,85,90];
function entityAddedHook(e) {
  for(var t in unHostMobs) {
  if(Entity.getEntityTypeId(e)!=unHostMobs[t]) {
    if(e!=getPlayerEnt()) {
      for(var k in oldMobs) {
        if(e!=oldMobs[t]) {
  mobs.push(e);
        }
      }
    }
  }
  }
}
function modTick () {
  if(mobs.length!=0) {
    for(var i=0;i<mobs.length;i++) {
      var ent = mobs[i];
      Entity.setHealth(ent,Entity.getHealth(ent)*1.5);
      mobs.splice(i,0);
      oldMobs.push(ent);
    }
  }
}
function attackHook(a,v) {
  if(v==getPlayerEnt()) {
  if(Entity.getHealth(v)-2>0) {
  Entity.setHealth(v,Math.round(Entity.getHealth(v)-2));
  } else {
    Entity.setHealth(v,1);
  }
  }
}
