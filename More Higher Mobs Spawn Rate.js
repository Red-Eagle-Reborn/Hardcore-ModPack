/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To YOur Version.
  
  Mod Creator : DevilLord RedEagle / DevilLord
  Mod Release Date : 05/06/2015
  
  By Team Red Eagle.
*/
var rnd = Math.floor(Math.random()*30);
function entityAddedHook(e) {
  if(rnd == 1 || rnd == 6 || rnd == 17 || rnd == 0 || rnd == 11) {
    if(Entity.getEntityTypeId(e) == 32) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32);
    }
    if(Entity.getEntityTypeId(e) == 33) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),33);
    }
    if(Entity.getEntityTypeId(e) == 34) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),34);
    }
    if(Entity.getEntityTypeId(e) == 35) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),35);
    }
    if(Entity.getEntityTypeId(e) == 36) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),36);
    }
    if(Entity.getEntityTypeId(e) == 37) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),37);
    }
    if(Entity.getEntityTypeId(e) == 38) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),38);
    }
    if(Entity.getEntityTypeId(e) == 39) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),39);
    }
    if(Entity.getEntityTypeId(e) == 40) {
      Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),40);
    }
  }
}
